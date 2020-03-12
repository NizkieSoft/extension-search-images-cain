import Mark from 'mark.js';
import {onVisible} from 'visibilityjs';

import brodcastRegister from '../brodcast-register';
import {DMessage, equal, IMessage} from '../dmessage';

const {addMessage, getStorage} = require('../rpc.ts');

interface IPage {
  stringify(e: HTMLElement): DMessage;

  getAllItems(): HTMLElement[];

  getHlNodes(): NodeListOf<Element>
}

function reset() {
  for (let e of Array.from(document.getElementsByClassName('dubl-search-item'))) {
    e.classList.remove('dubl-search-item');
  }
}

function resetEqual() {
  for (let e of Array.from(document.getElementsByClassName('dubl-search-item-equal'))) {
    e.classList.remove('dubl-search-item-equal');
  }
}

export async function init({stringify, getAllItems, getHlNodes}: IPage) {

  function str(e: HTMLElement): IMessage {
    const {dupltitle: title, duplhostname: hostname} = e.dataset;
    if (title && hostname) {
      return {title, hostname};
    }
    const m = stringify(e);
    e.dataset.dupltitle = m.title;
    e.dataset.duplhostname = m.hostname;
    return m;
  }

  function process(message: IMessage, items?: HTMLElement[]) {
    for (let e of (items || getAllItems())) {
      if (!e.classList.contains('dubl-search-item') && equal(str(e), message)) {
        e.classList.add('dubl-search-item');

        e.classList.remove('dubl-search-item-equal');
      }
    }
  }

  function changeMainColor(color: string) {
    document.documentElement.style.setProperty('--dubl-bg-color', color);
  }

  function changeColor(color: string) {
    document.documentElement.style.setProperty('--dubl-color', color);
  }

  const markOptions = {
    element: 'span',
    className: 'dubl-marked'
  };

  async function highlightDictionary(dictionaryRe: string) {
    //dictionaryRe = dictionaryRe.split('|');
    //console.log(dictionaryRe);

    const m = new Mark(getHlNodes());
    if (document.querySelector('.dubl-marked')) {
      await new Promise(done => m.unmark({done, ...markOptions}));
    }
    if (dictionaryRe) {
      await new Promise(done => m.markRegExp(new RegExp(dictionaryRe, 'gmi'), {done, ...markOptions}));
    }
  }

  await new Promise(resolve => {
    onVisible(async function () {
      const [storage] = await Promise.all([
        getStorage(),
        new Promise(resolve => $(resolve))
      ]);

      changeMainColor(storage.mainColor);
      changeColor(storage.color);

      require('../style/content_.css');

      if (storage.dictionaryRe) {
        highlightDictionary(storage.dictionaryRe);
      }

      const items = getAllItems();

      console.log(storage.messages);
      for (let message of storage.messages) {
        process(message, items);
      }

      brodcastRegister({
        reset,
        resetEqual,
        changeColor,
        changeMainColor,
        highlightDictionary,
        process
      });

      resolve();
    });
  });

  return function (e: Element) {
    try {
      if (!e.classList.contains('dubl-search-item')) {
        const message = str(e as HTMLElement);
        process(message);
        addMessage(message);
      }
    } catch (err) {
      alert(stringify(err));
    }
  }
}
