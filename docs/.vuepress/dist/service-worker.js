if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const d=e=>i(e,r),u={module:{uri:r},exports:t,require:d};s[r]=Promise.all(l.map((e=>u[e]||d(e)))).then((e=>(n(...e),t)))}}define(["./workbox-ec81a2a1"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"404.html",revision:"471b33d8531533b8762e26a6d1bc8dd2"},{url:"assets/404.35c70896.js",revision:null},{url:"assets/404.html.bee13de6.js",revision:null},{url:"assets/404.html.f166316b.js",revision:null},{url:"assets/app.3abf9bd5.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/getting-started.html.3ba8827b.js",revision:null},{url:"assets/getting-started.html.59416dcc.js",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.1cc91d33.js",revision:null},{url:"assets/index.html.4ecf469a.js",revision:null},{url:"assets/index.html.504c7800.js",revision:null},{url:"assets/index.html.a70cfaeb.js",revision:null},{url:"assets/index.html.accd79d5.js",revision:null},{url:"assets/index.html.dd2180b4.js",revision:null},{url:"assets/Layout.443185b1.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/search.0782d0d1.svg",revision:null},{url:"assets/style.28f5ce32.css",revision:null},{url:"guide/getting-started.html",revision:"cd407e2f2de30737ea864e0ab43c7e9c"},{url:"guide/index.html",revision:"ecbb1ccbcd3eb1eba9ff3b307e858930"},{url:"images/bag.png",revision:"ba13440f222647d0845889a7307e712d"},{url:"images/icons/android-chrome-192x192.png",revision:"8a47bdd8a79d2d05fcb5bc5d069e9b44"},{url:"images/icons/android-chrome-384x384.png",revision:"91dc144948a49367d628395150cefff0"},{url:"images/logo.png",revision:"c3dd462f955651260206ba599698ddd1"},{url:"images/vuejs.png",revision:"cf23526f451784ff137f161b8fe18d5a"},{url:"index.html",revision:"083cb8ffdab6a81b960f2f85c6f93542"},{url:"status/index.html",revision:"b3177776fa76c445f7b30e38358faedd"}],{})}));
