!function(e){var t={};function u(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=t,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u(u.s=34)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.equal=function(e,t){return t.hostname===e.hostname&&(e.title.includes(t.title)||t.title.includes(e.title))},t.DMessage=t.NONE_WORD_RE=void 0;const n=/[^A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g;t.NONE_WORD_RE=n;t.DMessage=class{constructor(e,t){this.title=void 0,this.hostname=void 0,this.hostname=e.trim().toLowerCase(),this.title=t.replace(n," ").trim().toLowerCase()}toJSON(){return{hostname:this.hostname,title:this.title}}}},function(e,t,u){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){if(!t||t===!!t||t===+t)return String(t);if(t.constructor===String)return t;if(t.hasOwnProperty("toString")||"symbol"==typeof t)return t.toString();if(t.hasOwnProperty("toJSON"))return JSON.stringify(t,null,"  ");delete t.stack;const u=t.message?e(t.message):n(t),i=t.name||t.constructor.name;return i&&-1===r.indexOf(i)?`${i}: ${u}`:u};const n=u(5),r=["Error","Object"]},function(e,t,u){"use strict";e.exports=new Proxy({},{get:(e,t)=>(...e)=>new Promise((u,n)=>{chrome.runtime.sendMessage({cmd:t,args:e},e=>{e&&e.error?n(e.error):u(e)})})})},function(e,t,u){"use strict";var n=u(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){chrome.runtime.onMessage.addListener((t,u,n)=>{if(u.url!==location.href&&u.id===i&&e[t.cmd])try{const i=e[t.cmd].apply(u.tab,t.args);if(i instanceof Promise)return i.then(n).catch(e=>{n({error:(0,r.default)(e)})}),!0;n(i)}catch(e){n({error:(0,r.default)(e)})}})};var r=n(u(2));const i=chrome.runtime.id},function(e,t){e.exports=function(e,t,r,i){return function e(t,r,i,o,a){var s=o+i;switch(typeof(t=r?r(t):t)){case"string":return JSON.stringify(t);case"boolean":case"number":case"undefined":return""+t;case"function":return t.toString()}if(null===t)return"null";if(t instanceof RegExp)return function(e){if(n)return e.toString();var t=e.source.replace(/\//g,(function(e,t,u){return 0===t||"\\"!==u[t-1]?"\\/":"/"})),u=(e.global?"g":"")+(e.ignoreCase?"i":"")+(e.multiline?"m":"");return"/"+t+"/"+u}(t);if(t instanceof Date)return"new Date("+t.getTime()+")";var c=a.indexOf(t)+1;if(c>0)return"{$circularReference:"+c+"}";function l(e){return i.slice(1)+e.join(","+(i&&"\n")+s)+(i?" ":"")}if(a.push(t),Array.isArray(t))return"["+l(t.map((function(t){return e(t,r,i,s,a.slice())})))+"]";var f=Object.keys(t);return f.length?"{"+l(f.map((function(n){return(/^[a-z_$][0-9a-z_$]*$/gi.test(o=n)&&!u.test(o)?n:JSON.stringify(n))+":"+e(t[n],r,i,s,a.slice());var o})))+"}":"{}"}(e,t,void 0===r?"  ":r||"",i||"",[])};var u=/^(abstract|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|undefined|var|void|volatile|while|with)$/;var n="\\/"===new RegExp("/").source},,function(e,t){e.exports=function(e,t,u){return t in e?Object.defineProperty(e,t,{value:u,enumerable:!0,configurable:!0,writable:!0}):e[t]=u,e}},function(e,t,u){var n,r,i;n=this,r=-1,i={onVisible:function(e){var t=i.isSupported();if(!t||!i.hidden())return e(),t;var u=i.change((function(t,n){i.hidden()||(i.unbind(u),e())}));return u},change:function(e){if(!i.isSupported())return!1;var t=r+=1;return i._callbacks[t]=e,i._listen(),t},unbind:function(e){delete i._callbacks[e]},afterPrerendering:function(e){var t=i.isSupported();if(!t||"prerender"!=i.state())return e(),t;var u=i.change((function(t,n){"prerender"!=n&&(i.unbind(u),e())}));return u},hidden:function(){return!(!i._doc.hidden&&!i._doc.webkitHidden)},state:function(){return i._doc.visibilityState||i._doc.webkitVisibilityState||"visible"},isSupported:function(){return void 0!==i._doc.hidden||void 0!==i._doc.webkitHidden},_doc:document||{},_callbacks:{},_change:function(e){var t=i.state();for(var u in i._callbacks)i._callbacks[u].call(i._doc,e,t)},_listen:function(){if(!i._init){var e="visibilitychange";i._doc.webkitVisibilityState&&(e="webkit"+e);var t=function(){i._change.apply(i,arguments)};i._doc.addEventListener?i._doc.addEventListener(e,t):i._doc.attachEvent(e,t),i._init=!0}}},e.exports?e.exports=i:n.Visibility=i},function(e,t,u){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var u=function(e,t){var u=e[1]||"",n=e[3];if(!n)return u;if(t&&"function"==typeof btoa){var r=(o=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),i=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[u].concat(i).concat([r]).join("\n")}var o;return[u].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+u+"}":u})).join("")},t.i=function(e,u){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(n[i]=!0)}for(r=0;r<e.length;r++){var o=e[r];null!=o[0]&&n[o[0]]||(u&&!o[2]?o[2]=u:u&&(o[2]="("+o[2]+") and ("+u+")"),t.push(o))}},t}},function(e,t,u){var n,r,i={},o=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),a=function(e,t){return t?t.querySelector(e):document.querySelector(e)},s=function(e){var t={};return function(e,u){if("function"==typeof e)return e();if(void 0===t[e]){var n=a.call(this,e,u);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),c=null,l=0,f=[],d=u(11);function h(e,t){for(var u=0;u<e.length;u++){var n=e[u],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o],t))}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(y(n.parts[o],t));i[n.id]={id:n.id,refs:1,parts:a}}}}function p(e,t){for(var u=[],n={},r=0;r<e.length;r++){var i=e[r],o=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};n[o]?n[o].parts.push(a):u.push(n[o]={id:o,parts:[a]})}return u}function A(e,t){var u=s(e.insertInto);if(!u)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=f[f.length-1];if("top"===e.insertAt)n?n.nextSibling?u.insertBefore(t,n.nextSibling):u.appendChild(t):u.insertBefore(t,u.firstChild),f.push(t);else if("bottom"===e.insertAt)u.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,u);u.insertBefore(t,r)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return u.nc}();n&&(e.attrs.nonce=n)}return g(t,e.attrs),A(e,t),t}function g(e,t){Object.keys(t).forEach((function(u){e.setAttribute(u,t[u])}))}function y(e,t){var u,n,r,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var o=l++;u=c||(c=m(t)),n=b.bind(null,u,o,!1),r=b.bind(null,u,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(u=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),A(e,t),t}(t),n=C.bind(null,u,t),r=function(){v(u),u.href&&URL.revokeObjectURL(u.href)}):(u=m(t),n=B.bind(null,u),r=function(){v(u)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var u=p(e,t);return h(u,t),function(e){for(var n=[],r=0;r<u.length;r++){var o=u[r];(a=i[o.id]).refs--,n.push(a)}e&&h(p(e,t),t);for(r=0;r<n.length;r++){var a;if(0===(a=n[r]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}};var F,E=(F=[],function(e,t){return F[e]=t,F.filter(Boolean).join("\n")});function b(e,t,u,n){var r=u?"":n.css;if(e.styleSheet)e.styleSheet.cssText=E(t,r);else{var i=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function B(e,t){var u=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=u;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(u))}}function C(e,t,u){var n=u.css,r=u.sourceMap,i=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||i)&&(n=d(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var u=t.protocol+"//"+t.host,n=u+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var r,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?u+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},,,,,,,,,,function(e,t,u){"use strict";var n=u(0);Object.defineProperty(t,"__esModule",{value:!0}),t.init=async function({stringify:e,getAllItems:t,getHlNodes:n}){function r(t){const{dupltitle:u,duplhostname:n}=t.dataset;if(u&&n)return{title:u,hostname:n};const r=e(t);return t.dataset.dupltitle=r.title,t.dataset.duplhostname=r.hostname,r}function c(e,u){for(let n of u||t())!n.classList.contains("dubl-search-item")&&(0,s.equal)(r(n),e)&&(n.classList.add("dubl-search-item"),n.classList.remove("dubl-search-item-equal"))}function A(e){document.documentElement.style.setProperty("--dubl-bg-color",e)}function v(e){document.documentElement.style.setProperty("--dubl-color",e)}const m={element:"span",className:"dubl-marked"};async function g(e){const t=new i.default(n());document.querySelector(".dubl-marked")&&await new Promise(e=>t.unmark(l({done:e},m))),e&&await new Promise(u=>t.markRegExp(new RegExp(e,"gmi"),l({done:u},m)))}return await new Promise(e=>{(0,o.onVisible)((async function(){const[n]=await Promise.all([d(),new Promise(e=>$(e))]);A(n.mainColor),v(n.color),u(25),n.dictionaryRe&&g(n.dictionaryRe);const r=t();console.log(n.messages);for(let e of n.messages)c(e,r);(0,a.default)({reset:h,resetEqual:p,changeColor:v,changeMainColor:A,highlightDictionary:g,process:c}),e()}))}),function(t){try{if(!t.classList.contains("dubl-search-item")){const e=r(t);c(e),f(e)}}catch(t){alert(e(t))}}};var r=n(u(7)),i=n(u(22)),o=u(23),a=n(u(4)),s=u(1);function c(e,t){var u=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),u.push.apply(u,n)}return u}function l(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?c(Object(u),!0).forEach((function(t){(0,r.default)(e,t,u[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):c(Object(u)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(u,t))}))}return e}const{addMessage:f,getStorage:d}=u(3);function h(){for(let e of Array.from(document.getElementsByClassName("dubl-search-item")))e.classList.remove("dubl-search-item")}function p(){for(let e of Array.from(document.getElementsByClassName("dubl-search-item-equal")))e.classList.remove("dubl-search-item-equal")}},function(e,t,u){
/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014–2018, Julian Kühnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/
e.exports=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},u=function(){function e(e,t){for(var u=0;u<t.length;u++){var n=t[u];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,u,n){return u&&e(t.prototype,u),n&&e(t,n),t}}(),n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var u=arguments[t];for(var n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n])}return e},r=function(){function e(u){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5e3;t(this,e),this.ctx=u,this.iframes=n,this.exclude=r,this.iframesTimeout=i}return u(e,[{key:"getContexts",value:function(){var e=[];return(void 0!==this.ctx&&this.ctx?NodeList.prototype.isPrototypeOf(this.ctx)?Array.prototype.slice.call(this.ctx):Array.isArray(this.ctx)?this.ctx:"string"==typeof this.ctx?Array.prototype.slice.call(document.querySelectorAll(this.ctx)):[this.ctx]:[]).forEach((function(t){var u=e.filter((function(e){return e.contains(t)})).length>0;-1!==e.indexOf(t)||u||e.push(t)})),e}},{key:"getIframeContents",value:function(e,t){var u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=void 0;try{var r=e.contentWindow;if(n=r.document,!r||!n)throw new Error("iframe inaccessible")}catch(e){u()}n&&t(n)}},{key:"isIframeBlank",value:function(e){var t="about:blank",u=e.getAttribute("src").trim();return e.contentWindow.location.href===t&&u!==t&&u}},{key:"observeIframeLoad",value:function(e,t,u){var n=this,r=!1,i=null,o=function o(){if(!r){r=!0,clearTimeout(i);try{n.isIframeBlank(e)||(e.removeEventListener("load",o),n.getIframeContents(e,t,u))}catch(e){u()}}};e.addEventListener("load",o),i=setTimeout(o,this.iframesTimeout)}},{key:"onIframeReady",value:function(e,t,u){try{"complete"===e.contentWindow.document.readyState?this.isIframeBlank(e)?this.observeIframeLoad(e,t,u):this.getIframeContents(e,t,u):this.observeIframeLoad(e,t,u)}catch(e){u()}}},{key:"waitForIframes",value:function(e,t){var u=this,n=0;this.forEachIframe(e,(function(){return!0}),(function(e){n++,u.waitForIframes(e.querySelector("html"),(function(){--n||t()}))}),(function(e){e||t()}))}},{key:"forEachIframe",value:function(t,u,n){var r=this,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},o=t.querySelectorAll("iframe"),a=o.length,s=0;o=Array.prototype.slice.call(o);var c=function(){--a<=0&&i(s)};a||c(),o.forEach((function(t){e.matches(t,r.exclude)?c():r.onIframeReady(t,(function(e){u(t)&&(s++,n(e)),c()}),c)}))}},{key:"createIterator",value:function(e,t,u){return document.createNodeIterator(e,t,u,!1)}},{key:"createInstanceOnIframe",value:function(t){return new e(t.querySelector("html"),this.iframes)}},{key:"compareNodeIframe",value:function(e,t,u){if(e.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_PRECEDING){if(null===t)return!0;if(t.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_FOLLOWING)return!0}return!1}},{key:"getIteratorNode",value:function(e){var t=e.previousNode();return{prevNode:t,node:null===t?e.nextNode():e.nextNode()&&e.nextNode()}}},{key:"checkIframeFilter",value:function(e,t,u,n){var r=!1,i=!1;return n.forEach((function(e,t){e.val===u&&(r=t,i=e.handled)})),this.compareNodeIframe(e,t,u)?(!1!==r||i?!1===r||i||(n[r].handled=!0):n.push({val:u,handled:!0}),!0):(!1===r&&n.push({val:u,handled:!1}),!1)}},{key:"handleOpenIframes",value:function(e,t,u,n){var r=this;e.forEach((function(e){e.handled||r.getIframeContents(e.val,(function(e){r.createInstanceOnIframe(e).forEachNode(t,u,n)}))}))}},{key:"iterateThroughNodes",value:function(e,t,u,n,r){for(var i,o=this,a=this.createIterator(t,e,n),s=[],c=[],l=void 0,f=void 0;i=void 0,i=o.getIteratorNode(a),f=i.prevNode,l=i.node;)this.iframes&&this.forEachIframe(t,(function(e){return o.checkIframeFilter(l,f,e,s)}),(function(t){o.createInstanceOnIframe(t).forEachNode(e,(function(e){return c.push(e)}),n)})),c.push(l);c.forEach((function(e){u(e)})),this.iframes&&this.handleOpenIframes(s,e,u,n),r()}},{key:"forEachNode",value:function(e,t,u){var n=this,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},i=this.getContexts(),o=i.length;o||r(),i.forEach((function(i){var a=function(){n.iterateThroughNodes(e,i,t,u,(function(){--o<=0&&r()}))};n.iframes?n.waitForIframes(i,a):a()}))}}],[{key:"matches",value:function(e,t){var u="string"==typeof t?[t]:t,n=e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector;if(n){var r=!1;return u.every((function(t){return!n.call(e,t)||(r=!0,!1)})),r}return!1}}]),e}(),i=function(){function i(e){t(this,i),this.ctx=e,this.ie=!1;var u=window.navigator.userAgent;(u.indexOf("MSIE")>-1||u.indexOf("Trident")>-1)&&(this.ie=!0)}return u(i,[{key:"log",value:function(t){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"debug",n=this.opt.log;this.opt.debug&&"object"===(void 0===n?"undefined":e(n))&&"function"==typeof n[u]&&n[u]("mark.js: "+t)}},{key:"escapeStr",value:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}},{key:"createRegExp",value:function(e){return"disabled"!==this.opt.wildcards&&(e=this.setupWildcardsRegExp(e)),e=this.escapeStr(e),Object.keys(this.opt.synonyms).length&&(e=this.createSynonymsRegExp(e)),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),this.opt.diacritics&&(e=this.createDiacriticsRegExp(e)),e=this.createMergedBlanksRegExp(e),(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.createJoinersRegExp(e)),"disabled"!==this.opt.wildcards&&(e=this.createWildcardsRegExp(e)),e=this.createAccuracyRegExp(e)}},{key:"createSynonymsRegExp",value:function(e){var t=this.opt.synonyms,u=this.opt.caseSensitive?"":"i",n=this.opt.ignoreJoiners||this.opt.ignorePunctuation.length?"\0":"";for(var r in t)if(t.hasOwnProperty(r)){var i=t[r],o="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(r):this.escapeStr(r),a="disabled"!==this.opt.wildcards?this.setupWildcardsRegExp(i):this.escapeStr(i);""!==o&&""!==a&&(e=e.replace(new RegExp("("+this.escapeStr(o)+"|"+this.escapeStr(a)+")","gm"+u),n+"("+this.processSynomyms(o)+"|"+this.processSynomyms(a)+")"+n))}return e}},{key:"processSynomyms",value:function(e){return(this.opt.ignoreJoiners||this.opt.ignorePunctuation.length)&&(e=this.setupIgnoreJoinersRegExp(e)),e}},{key:"setupWildcardsRegExp",value:function(e){return(e=e.replace(/(?:\\)*\?/g,(function(e){return"\\"===e.charAt(0)?"?":""}))).replace(/(?:\\)*\*/g,(function(e){return"\\"===e.charAt(0)?"*":""}))}},{key:"createWildcardsRegExp",value:function(e){var t="withSpaces"===this.opt.wildcards;return e.replace(/\u0001/g,t?"[\\S\\s]?":"\\S?").replace(/\u0002/g,t?"[\\S\\s]*?":"\\S*")}},{key:"setupIgnoreJoinersRegExp",value:function(e){return e.replace(/[^(|)\\]/g,(function(e,t,u){var n=u.charAt(t+1);return/[(|)\\]/.test(n)||""===n?e:e+"\0"}))}},{key:"createJoinersRegExp",value:function(e){var t=[],u=this.opt.ignorePunctuation;return Array.isArray(u)&&u.length&&t.push(this.escapeStr(u.join(""))),this.opt.ignoreJoiners&&t.push("\\u00ad\\u200b\\u200c\\u200d"),t.length?e.split(/\u0000+/).join("["+t.join("")+"]*"):e}},{key:"createDiacriticsRegExp",value:function(e){var t=this.opt.caseSensitive?"":"i",u=this.opt.caseSensitive?["aàáảãạăằắẳẵặâầấẩẫậäåāą","AÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćč","CÇĆČ","dđď","DĐĎ","eèéẻẽẹêềếểễệëěēę","EÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïī","IÌÍỈĨỊÎÏĪ","lł","LŁ","nñňń","NÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøō","OÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rř","RŘ","sšśșş","SŠŚȘŞ","tťțţ","TŤȚŢ","uùúủũụưừứửữựûüůū","UÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿ","YÝỲỶỸỴŸ","zžżź","ZŽŻŹ"]:["aàáảãạăằắẳẵặâầấẩẫậäåāąAÀÁẢÃẠĂẰẮẲẴẶÂẦẤẨẪẬÄÅĀĄ","cçćčCÇĆČ","dđďDĐĎ","eèéẻẽẹêềếểễệëěēęEÈÉẺẼẸÊỀẾỂỄỆËĚĒĘ","iìíỉĩịîïīIÌÍỈĨỊÎÏĪ","lłLŁ","nñňńNÑŇŃ","oòóỏõọôồốổỗộơởỡớờợöøōOÒÓỎÕỌÔỒỐỔỖỘƠỞỠỚỜỢÖØŌ","rřRŘ","sšśșşSŠŚȘŞ","tťțţTŤȚŢ","uùúủũụưừứửữựûüůūUÙÚỦŨỤƯỪỨỬỮỰÛÜŮŪ","yýỳỷỹỵÿYÝỲỶỸỴŸ","zžżźZŽŻŹ"],n=[];return e.split("").forEach((function(r){u.every((function(u){if(-1!==u.indexOf(r)){if(n.indexOf(u)>-1)return!1;e=e.replace(new RegExp("["+u+"]","gm"+t),"["+u+"]"),n.push(u)}return!0}))})),e}},{key:"createMergedBlanksRegExp",value:function(e){return e.replace(/[\s]+/gim,"[\\s]+")}},{key:"createAccuracyRegExp",value:function(e){var t=this,u=this.opt.accuracy,n="string"==typeof u?u:u.value,r="string"==typeof u?[]:u.limiters,i="";switch(r.forEach((function(e){i+="|"+t.escapeStr(e)})),n){case"partially":default:return"()("+e+")";case"complementary":return"()([^"+(i="\\s"+(i||this.escapeStr("!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~¡¿")))+"]*"+e+"[^"+i+"]*)";case"exactly":return"(^|\\s"+i+")("+e+")(?=$|\\s"+i+")"}}},{key:"getSeparatedKeywords",value:function(e){var t=this,u=[];return e.forEach((function(e){t.opt.separateWordSearch?e.split(" ").forEach((function(e){e.trim()&&-1===u.indexOf(e)&&u.push(e)})):e.trim()&&-1===u.indexOf(e)&&u.push(e)})),{keywords:u.sort((function(e,t){return t.length-e.length})),length:u.length}}},{key:"isNumeric",value:function(e){return Number(parseFloat(e))==e}},{key:"checkRanges",value:function(e){var t=this;if(!Array.isArray(e)||"[object Object]"!==Object.prototype.toString.call(e[0]))return this.log("markRanges() will only accept an array of objects"),this.opt.noMatch(e),[];var u=[],n=0;return e.sort((function(e,t){return e.start-t.start})).forEach((function(e){var r=t.callNoMatchOnInvalidRanges(e,n),i=r.start,o=r.end;r.valid&&(e.start=i,e.length=o-i,u.push(e),n=o)})),u}},{key:"callNoMatchOnInvalidRanges",value:function(e,t){var u=void 0,n=void 0,r=!1;return e&&void 0!==e.start?(n=(u=parseInt(e.start,10))+parseInt(e.length,10),this.isNumeric(e.start)&&this.isNumeric(e.length)&&n-t>0&&n-u>0?r=!0:(this.log("Ignoring invalid or overlapping range: "+JSON.stringify(e)),this.opt.noMatch(e))):(this.log("Ignoring invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:u,end:n,valid:r}}},{key:"checkWhitespaceRanges",value:function(e,t,u){var n=void 0,r=!0,i=u.length,o=t-i,a=parseInt(e.start,10)-o;return(n=(a=a>i?i:a)+parseInt(e.length,10))>i&&(n=i,this.log("End range automatically set to the max value of "+i)),a<0||n-a<0||a>i||n>i?(r=!1,this.log("Invalid range: "+JSON.stringify(e)),this.opt.noMatch(e)):""===u.substring(a,n).replace(/\s+/g,"")&&(r=!1,this.log("Skipping whitespace only range: "+JSON.stringify(e)),this.opt.noMatch(e)),{start:a,end:n,valid:r}}},{key:"getTextNodes",value:function(e){var t=this,u="",n=[];this.iterator.forEachNode(NodeFilter.SHOW_TEXT,(function(e){n.push({start:u.length,end:(u+=e.textContent).length,node:e})}),(function(e){return t.matchesExclude(e.parentNode)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),(function(){e({value:u,nodes:n})}))}},{key:"matchesExclude",value:function(e){return r.matches(e,this.opt.exclude.concat(["script","style","title","head","html"]))}},{key:"wrapRangeInTextNode",value:function(e,t,u){var n=this.opt.element?this.opt.element:"mark",r=e.splitText(t),i=r.splitText(u-t),o=document.createElement(n);return o.setAttribute("data-markjs","true"),this.opt.className&&o.setAttribute("class",this.opt.className),o.textContent=r.textContent,r.parentNode.replaceChild(o,r),i}},{key:"wrapRangeInMappedTextNode",value:function(e,t,u,n,r){var i=this;e.nodes.every((function(o,a){var s=e.nodes[a+1];if(void 0===s||s.start>t){if(!n(o.node))return!1;var c=t-o.start,l=(u>o.end?o.end:u)-o.start,f=e.value.substr(0,o.start),d=e.value.substr(l+o.start);if(o.node=i.wrapRangeInTextNode(o.node,c,l),e.value=f+d,e.nodes.forEach((function(t,u){u>=a&&(e.nodes[u].start>0&&u!==a&&(e.nodes[u].start-=l),e.nodes[u].end-=l)})),u-=l,r(o.node.previousSibling,o.start),!(u>o.end))return!1;t=o.end}return!0}))}},{key:"wrapMatches",value:function(e,t,u,n,r){var i=this,o=0===t?0:t+1;this.getTextNodes((function(t){t.nodes.forEach((function(t){t=t.node;for(var r=void 0;null!==(r=e.exec(t.textContent))&&""!==r[o];)if(u(r[o],t)){var a=r.index;if(0!==o)for(var s=1;s<o;s++)a+=r[s].length;t=i.wrapRangeInTextNode(t,a,a+r[o].length),n(t.previousSibling),e.lastIndex=0}})),r()}))}},{key:"wrapMatchesAcrossElements",value:function(e,t,u,n,r){var i=this,o=0===t?0:t+1;this.getTextNodes((function(t){for(var a=void 0;null!==(a=e.exec(t.value))&&""!==a[o];){var s=a.index;if(0!==o)for(var c=1;c<o;c++)s+=a[c].length;var l=s+a[o].length;i.wrapRangeInMappedTextNode(t,s,l,(function(e){return u(a[o],e)}),(function(t,u){e.lastIndex=u,n(t)}))}r()}))}},{key:"wrapRangeFromIndex",value:function(e,t,u,n){var r=this;this.getTextNodes((function(i){var o=i.value.length;e.forEach((function(e,n){var a=r.checkWhitespaceRanges(e,o,i.value),s=a.start,c=a.end;a.valid&&r.wrapRangeInMappedTextNode(i,s,c,(function(u){return t(u,e,i.value.substring(s,c),n)}),(function(t){u(t,e)}))})),n()}))}},{key:"unwrapMatches",value:function(e){for(var t=e.parentNode,u=document.createDocumentFragment();e.firstChild;)u.appendChild(e.removeChild(e.firstChild));t.replaceChild(u,e),this.ie?this.normalizeTextNode(t):t.normalize()}},{key:"normalizeTextNode",value:function(e){if(e){if(3===e.nodeType)for(;e.nextSibling&&3===e.nextSibling.nodeType;)e.nodeValue+=e.nextSibling.nodeValue,e.parentNode.removeChild(e.nextSibling);else this.normalizeTextNode(e.firstChild);this.normalizeTextNode(e.nextSibling)}}},{key:"markRegExp",value:function(e,t){var u=this;this.opt=t,this.log('Searching with expression "'+e+'"');var n=0,r="wrapMatches";this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),this[r](e,this.opt.ignoreGroups,(function(e,t){return u.opt.filter(t,e,n)}),(function(e){n++,u.opt.each(e)}),(function(){0===n&&u.opt.noMatch(e),u.opt.done(n)}))}},{key:"mark",value:function(e,t){var u=this;this.opt=t;var n=0,r="wrapMatches",i=this.getSeparatedKeywords("string"==typeof e?[e]:e),o=i.keywords,a=i.length,s=this.opt.caseSensitive?"":"i";this.opt.acrossElements&&(r="wrapMatchesAcrossElements"),0===a?this.opt.done(n):function e(t){var i=new RegExp(u.createRegExp(t),"gm"+s),c=0;u.log('Searching with expression "'+i+'"'),u[r](i,1,(function(e,r){return u.opt.filter(r,t,n,c)}),(function(e){c++,n++,u.opt.each(e)}),(function(){0===c&&u.opt.noMatch(t),o[a-1]===t?u.opt.done(n):e(o[o.indexOf(t)+1])}))}(o[0])}},{key:"markRanges",value:function(e,t){var u=this;this.opt=t;var n=0,r=this.checkRanges(e);r&&r.length?(this.log("Starting to mark with the following ranges: "+JSON.stringify(r)),this.wrapRangeFromIndex(r,(function(e,t,n,r){return u.opt.filter(e,t,n,r)}),(function(e,t){n++,u.opt.each(e,t)}),(function(){u.opt.done(n)}))):this.opt.done(n)}},{key:"unmark",value:function(e){var t=this;this.opt=e;var u=this.opt.element?this.opt.element:"*";u+="[data-markjs]",this.opt.className&&(u+="."+this.opt.className),this.log('Removal selector "'+u+'"'),this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT,(function(e){t.unwrapMatches(e)}),(function(e){var n=r.matches(e,u),i=t.matchesExclude(e);return!n||i?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}),this.opt.done)}},{key:"opt",set:function(e){this._opt=n({},{element:"",className:"",exclude:[],iframes:!1,iframesTimeout:5e3,separateWordSearch:!0,diacritics:!0,synonyms:{},accuracy:"partially",acrossElements:!1,caseSensitive:!1,ignoreJoiners:!1,ignoreGroups:0,ignorePunctuation:[],wildcards:"disabled",each:function(){},noMatch:function(){},filter:function(){return!0},done:function(){},debug:!1,log:window.console},e)},get:function(){return this._opt}},{key:"iterator",get:function(){return new r(this.ctx,this.opt.iframes,this.opt.exclude,this.opt.iframesTimeout)}}]),i}();return function(e){var t=this,u=new i(e);return this.mark=function(e,n){return u.mark(e,n),t},this.markRegExp=function(e,n){return u.markRegExp(e,n),t},this.markRanges=function(e,n){return u.markRanges(e,n),t},this.unmark=function(e){return u.unmark(e),t},this}}()},function(e,t,u){e.exports=u(24)},function(e,t,u){!function(t){var n=-1,r=function(e){return e.every=function(t,u,r){e._time(),r||(r=u,u=null);var i=n+=1;return e._timers[i]={visible:t,hidden:u,callback:r},e._run(i,!1),e.isSupported()&&e._listen(),i},e.stop=function(t){return!!e._timers[t]&&(e._stop(t),delete e._timers[t],!0)},e._timers={},e._time=function(){e._timed||(e._timed=!0,e._wasHidden=e.hidden(),e.change((function(){e._stopRun(),e._wasHidden=e.hidden()})))},e._run=function(u,n){var r,i=e._timers[u];if(e.hidden()){if(null===i.hidden)return;r=i.hidden}else r=i.visible;var o=function(){i.last=new Date,i.callback.call(t)};if(n){var a=new Date-i.last;r>a?i.delay=setTimeout((function(){i.id=setInterval(o,r),o()}),r-a):(i.id=setInterval(o,r),o())}else i.id=setInterval(o,r)},e._stop=function(t){var u=e._timers[t];clearInterval(u.id),clearTimeout(u.delay),delete u.id,delete u.delay},e._stopRun=function(t){var u=e.hidden(),n=e._wasHidden;if(u&&!n||!u&&n)for(var r in e._timers)e._stop(r),e._run(r,!u)},e};e.exports?e.exports=r(u(8)):r(t.Visibility||u(8))}(window)},function(e,t,u){var n=u(26);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};u(10)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,u){(e.exports=u(9)(!1)).push([e.i,".dubl-search-item {\r\n  background-color: var(--dubl-bg-color) !important;\r\n}\r\n\r\n.dubl-search-item-equal {\r\n    background-color: var(--dubl-bg-color-equal) !important;\r\n}\r\n\r\n.dubl-marked {\r\n  background-color: var(--dubl-color) !important;\r\n}\r\n",""])},,,,,,,,function(e,t,u){"use strict";var n=u(0),r=u(21),i=u(1),o=n(u(2));if(/tbs\=sbi|tbm\=isch|tbs=imgo/.test(location.search)){(async function(){const e=await(0,r.init)({getAllItems:()=>Array.from(document.getElementsByClassName("rc")),stringify(e){const t=e.querySelector("cite").textContent;return new i.DMessage(t.replace(/^\s*https?:\/\//i,"").split("/",1)[0],e.querySelector("h3").textContent)},getHlNodes:()=>document.querySelectorAll("h3,.g .st")});$("#rso").on("mouseup",".r",(function(t){t.which<=2&&e(this.closest(".rc"))}))})().catch(e=>{console.error(e),alert((0,o.default)(e))})}}]);