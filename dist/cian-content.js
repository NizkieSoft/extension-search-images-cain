!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=36)}({0:function(e,r){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},2:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function e(r){if(!r||r===!!r||r===+r)return String(r);if(r.constructor===String)return r;if(r.hasOwnProperty("toString")||"symbol"==typeof r)return r.toString();if(r.hasOwnProperty("toJSON"))return JSON.stringify(r,null,"  ");delete r.stack;const t=r.message?e(r.message):n(r),i=r.name||r.constructor.name;return i&&-1===o.indexOf(i)?`${i}: ${t}`:t};const n=t(5),o=["Error","Object"]},3:function(e,r,t){"use strict";e.exports=new Proxy({},{get:(e,r)=>(...e)=>new Promise((t,n)=>{chrome.runtime.sendMessage({cmd:r,args:e},e=>{e&&e.error?n(e.error):t(e)})})})},36:function(e,r,t){"use strict";var n=t(0)(t(4));const{openLinks:o}=t(3),i={"open-google-links":'a[href^="https://www.google.ru/searchbyimage?image_url="]',"open-yandex-links":'a[href^="https://yandex.ru/images/search?img_url="]',"open-all-links":'a[href^="https://www.google.ru/searchbyimage?image_url="],a[href^="https://yandex.ru/images/search?img_url="]'};(0,n.default)({openCianLinks(e){o(Array.from(new Set(Array.from(document.querySelectorAll(i[e])).map(e=>e.href))).sort())}})},4:function(e,r,t){"use strict";var n=t(0);Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){chrome.runtime.onMessage.addListener((r,t,n)=>{if(t.url!==location.href&&t.id===i&&e[r.cmd])try{const i=e[r.cmd].apply(t.tab,r.args);if(i instanceof Promise)return i.then(n).catch(e=>{n({error:(0,o.default)(e)})}),!0;n(i)}catch(e){n({error:(0,o.default)(e)})}})};var o=n(t(2));const i=chrome.runtime.id},5:function(e,r){e.exports=function(e,r,o,i){return function e(r,o,i,u,a){var c=u+i;switch(typeof(r=o?o(r):r)){case"string":return JSON.stringify(r);case"boolean":case"number":case"undefined":return""+r;case"function":return r.toString()}if(null===r)return"null";if(r instanceof RegExp)return function(e){if(n)return e.toString();var r=e.source.replace(/\//g,(function(e,r,t){return 0===r||"\\"!==t[r-1]?"\\/":"/"})),t=(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"");return"/"+r+"/"+t}(r);if(r instanceof Date)return"new Date("+r.getTime()+")";var s=a.indexOf(r)+1;if(s>0)return"{$circularReference:"+s+"}";function f(e){return i.slice(1)+e.join(","+(i&&"\n")+c)+(i?" ":"")}if(a.push(r),Array.isArray(r))return"["+f(r.map((function(r){return e(r,o,i,c,a.slice())})))+"]";var l=Object.keys(r);return l.length?"{"+f(l.map((function(n){return(/^[a-z_$][0-9a-z_$]*$/gi.test(u=n)&&!t.test(u)?n:JSON.stringify(n))+":"+e(r[n],o,i,c,a.slice());var u})))+"}":"{}"}(e,r,void 0===o?"  ":o||"",i||"",[])};var t=/^(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with)$/;var n="\\/"===new RegExp("/").source}});