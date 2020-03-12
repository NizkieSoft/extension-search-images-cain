const searchDomains = require('./domains/search-domains');

module.exports = new Proxy({}, {
  get: (_, cmd) => {
    return function (...args: any[]) {
      const tab = this as chrome.tabs.Tab;
      chrome.tabs.query({url: searchDomains, windowType: 'normal'}, (tabs) => {
        const message = {cmd, args};
        for (let i = 0; i < tabs.length; ++i) {
          const id = tabs[i].id;
          if (!tab || tab.id != id) {
            chrome.tabs.sendMessage(id, message);
          }
        }
      });
    }
  }
});
