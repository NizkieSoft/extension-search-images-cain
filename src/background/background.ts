import {browser} from 'webextension-polyfill-ts';
import _ from 'lodash';

import brodcastRegister from '../brodcast-register';
import {equal, IMessage} from '../dmessage';
import storage from '../storage';

const {process, reset, resetEqual} = require('../client-rpc.ts');
const searchDomains = require('../domains/search-domains.ts');
const cianDomains = require('../domains/cdomains.js');
const ydomains = require('../domains/ydomains.js');

let messages = storage.messages;
let messagesEqual = storage.messagesEqual;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.request === 'setTitles') {
    for (const item of message.list) {
      if (!_.find(messagesEqual, item)) {
        messagesEqual.push(item);
      }
    }

    storage.messagesEqual = messagesEqual;
  }

  if (message.request === 'getTitles') {
    sendResponse({list: messagesEqual});
  }
});

chrome.tabs.onActivated.addListener(async activeInfo => {
  const tabs = await browser.tabs.query({url: ydomains});

  if (!tabs.length) {
    return;
  }

  const findedTab = _.find(tabs, {id: activeInfo.tabId});

  if (!findedTab) {
    return;
  }

  chrome.tabs.sendMessage(findedTab.id, {request: 'activated'});
});

const tabsById = {};

chrome.tabs.onUpdated.addListener(async tabId => {
  const links = storage.links;

  const tab = await browser.tabs.get(tabId);

  const linksList = storage.linksList.toLowerCase().split(/\r?\n+/);

  if (tab.url.includes('https://yandex.ru/clck/') || tab.url.includes('chrome')) {
    return;
  }

  for (const link of linksList) {
    if (link.length < 2) {
      continue;
    }

    if (tab.url.includes(link)) {
      return;
    }
  }

  let url = tab.url;

  if (url.slice(-1) === '/') {
    url = url.substring(0, url.length - 1);
  }

  console.log(url);

  if (links.includes(url) && !tabsById[tabId]) {
    chrome.tabs.remove(tab.id);
  } else {
    links.push(url);
    storage.links = links;
    tabsById[tabId] = true;
  }
});

async function isActiveTabContent() {
  return (await browser.tabs.query({
    active: true,
    currentWindow: true,
    windowType: 'normal',
    url: searchDomains
  })).length > 0;
}

async function closeSearchTabs() {
  return browser.tabs.remove((await browser.tabs.query({windowType: 'normal', url: searchDomains})).map(t => t.id));
}

function toogleWords(v?: boolean) {
  if (v === undefined) {
    storage.words = !storage.words;
  } else {
    storage.words = v;
  }
  browser.browserAction.setBadgeText({text: storage.words ? '!' : ''});
}

toogleWords(storage.words);

function resetMessages() {
  storage.messages = [];
  reset();
}

function resetMessagesEqual() {
  messagesEqual = [];
  storage.messagesEqual = [];
  resetEqual();
}

function resetLinks() {
  storage.links = [];
}

function resetAll() {
  resetMessages();
  resetMessagesEqual();
  resetLinks();
}

async function cianCommand(c: string) {
  const tabs = await browser.tabs.query({active: true, url: cianDomains});

  for (const tab of tabs) {
    browser.tabs.sendMessage(tab.id, {cmd: 'openCianLinks', args: [c]});
  }
}

browser.commands.onCommand.addListener(async (command) => {
  switch (command) {
    case 'reset':
      if (await isActiveTabContent()) {
        resetMessages();
      }
      break;
    case 'resetAll':
      resetAll();
      break;
    case 'resetLinks':
      resetLinks();
      break;
    case 'close-search-tabs':
      closeSearchTabs();
      break;
    case 'toogle-words':
      toogleWords();
      break;
    case 'open-all-links':
    case 'open-yandex-links':
    case 'open-google-links':
      cianCommand(command);
      break;
  }
});

brodcastRegister({
  cianCommand,
  openLinks(links) {
    for (let i = links.length - 1; i >= 0; --i) {
      browser.tabs.create({url: links[i], active: false});
    }
  },
  resetMessages,
  resetMessagesEqual,
  resetAll,
  resetLinks,
  closeSearchTabs,
  toogleWords,
  addMessage(message: IMessage) {
    const tab = this as chrome.tabs.Tab;

    for (let m of messages) {
      if (equal(m, message)) {
        return;
      }
    }

    messages.push(message);
    (process as Function).call(tab, message);
    storage.messages = messages;
  },
  getStorage() {
    return {
      messages: storage.messages,
      messagesEqual: storage.messagesEqual,
      words: storage.words,
      dictionaryRe: storage.dictionaryRe,
      mainColor: storage.mainColor,
      color: storage.color,
      equalColor: storage.equalColor
    };
  }
});
