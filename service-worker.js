if(!self.define){let r,i={};const l=(l,e)=>(l=new URL(l+".js",e).href,i[l]||new Promise((i=>{if("document"in self){const r=document.createElement("script");r.src=l,r.onload=i,document.head.appendChild(r)}else r=l,importScripts(l),i()})).then((()=>{let r=i[l];if(!r)throw new Error(`Module ${l} didn’t register its module`);return r})));self.define=(e,n)=>{const u=r||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let s={};const o=r=>l(r,u),c={module:{uri:u},exports:s,require:o};i[u]=Promise.all(e.map((r=>c[r]||o(r)))).then((r=>(n(...r),s)))}}define(["./workbox-6567b62a"],(function(r){"use strict";r.setCacheNameDetails({prefix:"lover"}),self.addEventListener("message",(r=>{r.data&&"SKIP_WAITING"===r.data.type&&self.skipWaiting()})),r.precacheAndRoute([{url:"css/app.76984ca8.css",revision:null},{url:"img/rxy00001.516c8380.jpg",revision:null},{url:"img/rxy00002.516c8380.jpg",revision:null},{url:"img/rxy00003.516c8380.jpg",revision:null},{url:"img/rxy00004.516c8380.jpg",revision:null},{url:"img/rxy00005.516c8380.jpg",revision:null},{url:"img/rxy00006.516c8380.jpg",revision:null},{url:"img/rxy00007.516c8380.jpg",revision:null},{url:"img/rxy00008.516c8380.jpg",revision:null},{url:"img/rxy00009.516c8380.jpg",revision:null},{url:"img/rxy00010.516c8380.jpg",revision:null},{url:"img/rxy00011.516c8380.jpg",revision:null},{url:"img/rxy00012.516c8380.jpg",revision:null},{url:"img/rxy00013.516c8380.jpg",revision:null},{url:"img/rxy00014.516c8380.jpg",revision:null},{url:"img/rxy00015.516c8380.jpg",revision:null},{url:"img/rxy00016.516c8380.jpg",revision:null},{url:"img/rxy00017.516c8380.jpg",revision:null},{url:"img/rxy00018.516c8380.jpg",revision:null},{url:"img/rxy00019.516c8380.jpg",revision:null},{url:"img/rxy00020.516c8380.jpg",revision:null},{url:"index.html",revision:"6227f07db5bfa1f42fd33f16e1798e4c"},{url:"js/app.b613b901.js",revision:null},{url:"manifest.json",revision:"ef0e86a316ab6b34691c5fa3703ea1b0"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
