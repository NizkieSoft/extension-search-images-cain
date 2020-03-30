import Bluebird from 'bluebird';

import {init} from './content';
import {DMessage, equal, IMessage} from '../dmessage';

const {getStorage} = require('../rpc.ts');

$(async () => {
  const storage = await getStorage();

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.request === 'activated') {
      setTimeout(() => {
        chrome.runtime.sendMessage({request: 'getTitles'}, (response) => {
          changeEqualColor(storage.equalColor, response.list);
        });

      }, 1000);

      setTimeout(() => {
        const items = getAllItems();

        const list = [];
        for (const item of items) {
          list.push(str(item));
        }

        chrome.runtime.sendMessage({request: 'setTitles', list});
      }, 2000);

    }

    return true;
  });

});

function changeEqualColor(color: string, messages: Array<IMessage>) {
  const items = getAllItems();

  for (let e of items) {
    for(const message of messages) {
      if (!e.classList.contains('dubl-search-item-equal') && equal(str(e), message)) {
        e.classList.add('dubl-search-item-equal');
      }
      if(e.classList.contains('dubl-search-item')) {
        e.classList.remove('dubl-search-item-equal');
      }
    }
  }

  document.documentElement.style.setProperty('--dubl-bg-color-equal', color);
}

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

function getAllItems() {
  return Array.from(document.getElementsByClassName('other-sites__item')) as HTMLElement[];
}

function stringify(e) {
  return new DMessage(e.querySelector('.other-sites__snippet-site-link').textContent, e.querySelector('.other-sites__snippet-title-link').textContent);
}

function getHlNodes() {
  return document.querySelectorAll('.other-sites__snippet-title-link,.other-sites__snippet-desc');
}

async function main() {
  const onClick = await init({
    getAllItems,
    stringify,
    getHlNodes,
  });

  // await Bluebird.delay(1000);

  $('.other-sites__container').on('mouseup', '.other-sites__snippet-title-link,.other-sites__snippet-site-link', function (e) {
    if (e.which <= 2) {
      onClick((<Element>this).closest('.other-sites__item'));
    }
  });

  $('.other-sites__preview-link').css('width', '410px !important')
      .css('flex', '0 0 130px');

  $('.other-sites__thumb').attr('width', '120')
      .css('width', '120px !important')
      .css('max-width', '120px !important');

  $('.other-sites__preview-link').each(function(i, element) {
    var $element = $(element);
    var $img = $element.find('img');
    $img.attr('src', $img.attr('src').replace('n=16', 'n=120'));
  });
}

main().catch(e => {
  console.error(e);
});
