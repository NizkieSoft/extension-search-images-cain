import brodcastRegister from '../brodcast-register';

const {openLinks} = require('../rpc');

const selectors = {
  'open-google-links': 'a[href^="https://www.google.ru/searchbyimage?image_url="]',
  'open-yandex-links': 'a[href^="https://yandex.ru/images/search?img_url="]',
  'open-all-links': 'a[href^="https://www.google.ru/searchbyimage?image_url="],a[href^="https://yandex.ru/images/search?img_url="]'
};

brodcastRegister({
  openCianLinks(v: string) {
    openLinks(Array.from(new Set(Array.from(document.querySelectorAll(selectors[v])).map((v: HTMLLinkElement) => v.href))).sort());
  }
});
