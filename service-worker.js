if(!self.define){let e,s={};const u=(u,l)=>(u=new URL(u+".js",l).href,s[u]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=u,e.onload=s,document.head.appendChild(e)}else e=u,importScripts(u),s()})).then((()=>{let e=s[u];if(!e)throw new Error(`Module ${u} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>u(e,r),v={module:{uri:r},exports:n,require:o};s[r]=Promise.all(l.map((e=>v[e]||o(e)))).then((e=>(i(...e),n)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"kuma_vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/KUMA_vue/css/app.b83cb968.css",revision:null},{url:"/KUMA_vue/img/shock-333-40deg_L.5ae5932b.svg",revision:null},{url:"/KUMA_vue/img/shock-fff-40deg_L.13893856.svg",revision:null},{url:"/KUMA_vue/img/shock-fff-40deg_R.0d6b4aa9.svg",revision:null},{url:"/KUMA_vue/img/shock-teal-40deg_R.7beed5d0.svg",revision:null},{url:"/KUMA_vue/index.html",revision:"949e37ecec8001db8fa0718fdb4c6fd3"},{url:"/KUMA_vue/js/136.820b3775.js",revision:null},{url:"/KUMA_vue/js/194.1103238a.js",revision:null},{url:"/KUMA_vue/js/273.852454d6.js",revision:null},{url:"/KUMA_vue/js/278.09219ca6.js",revision:null},{url:"/KUMA_vue/js/428.21fd2c09.js",revision:null},{url:"/KUMA_vue/js/59.d5bd40bc.js",revision:null},{url:"/KUMA_vue/js/600.5ae5a502.js",revision:null},{url:"/KUMA_vue/js/622.36910ce8.js",revision:null},{url:"/KUMA_vue/js/665.f2c824aa.js",revision:null},{url:"/KUMA_vue/js/87.c3d178db.js",revision:null},{url:"/KUMA_vue/js/913.7a691ce5.js",revision:null},{url:"/KUMA_vue/js/944.d4984485.js",revision:null},{url:"/KUMA_vue/js/about.b1835acc.js",revision:null},{url:"/KUMA_vue/js/app.2739b066.js",revision:null},{url:"/KUMA_vue/js/chunk-vendors.de741ca9.js",revision:null},{url:"/KUMA_vue/manifest.json",revision:"62ea46340db1b9396d1b3e4cae304d3e"},{url:"/KUMA_vue/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
