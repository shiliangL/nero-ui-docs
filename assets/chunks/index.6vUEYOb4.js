import{k as e,ao as n,$ as t,g as o,ap as u,aq as r}from"./naive-ui.DyEX4l5m.js";function i(e){return!!u()&&(r(e),!0)}function a(e){return"function"==typeof e?e():o(e)}const s="undefined"!=typeof window&&"undefined"!=typeof document;"undefined"!=typeof WorkerGlobalScope&&(globalThis,WorkerGlobalScope);const l=()=>{};function c(e,n){var t;if("number"==typeof e)return e+n;const o=(null==(t=e.match(/^-?\d+\.?\d*/))?void 0:t[0])||"",u=e.slice(o.length),r=Number.parseFloat(o)+n;return Number.isNaN(r)?e:r+u}function f(e,n=200,t={}){return function(e,n){return function(...t){return new Promise(((o,u)=>{Promise.resolve(e((()=>n.apply(this,t)),{fn:n,thisArg:this,args:t})).then(o).catch(u)}))}}(function(e,n={}){let t,o,u=l;const r=e=>{clearTimeout(e),u(),u=l};return i=>{const s=a(e),l=a(n.maxWait);return t&&r(t),s<=0||void 0!==l&&l<=0?(o&&(r(o),o=null),Promise.resolve(i())):new Promise(((e,a)=>{u=n.rejectOnCancel?a:e,l&&!o&&(o=setTimeout((()=>{t&&r(t),o=null,e(i())}),l)),t=setTimeout((()=>{o&&r(o),o=null,e(i())}),s)}))}}(n,t),e)}function m(o,u=1e3,r={}){const{immediate:l=!0,immediateCallback:c=!1}=r;let f=null;const m=e(!1);function p(){f&&(clearInterval(f),f=null)}function d(){m.value=!1,p()}function v(){const e=a(u);e<=0||(m.value=!0,c&&o(),p(),m.value&&(f=setInterval(o,e)))}if(l&&s&&v(),n(u)||"function"==typeof u){i(t(u,(()=>{m.value&&s&&v()})))}return i(d),{isActive:m,pause:d,resume:v}}export{f as a,i as b,s as c,c as i,a as t,m as u};
