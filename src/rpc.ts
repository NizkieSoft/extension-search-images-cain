module.exports = new Proxy({}, {
  get: (_, cmd) => {
    return (...args: any[]) => {
      return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({cmd, args}, o => {
          if (o && o.error) {
            reject(o.error);
          } else {
            resolve(o);
          }
        });
      });
    };
  }
});
