import stringify from './stringify';

const extId = chrome.runtime.id;
export default function (router: { [_: string]: Function }) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (sender.url !== location.href && sender.id === extId && router[request.cmd]) {
      try {
        const r = router[request.cmd].apply(sender.tab, request.args);
        if (r instanceof Promise) {
          r.then(sendResponse).catch(error => { sendResponse({error: stringify(error)}); });
          return true;
        } else {
          sendResponse(r);
        }
      } catch (error) {
        sendResponse({error: stringify(error)});
      }
    }
  });
}
