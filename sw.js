if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),a={module:{uri:n},exports:u,require:t};e[n]=Promise.all(r.map((s=>a[s]||t(s)))).then((s=>(i(...s),u)))}}define(["./workbox-3e4da89b"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/base.55662bc9.js",revision:null},{url:"assets/base.5f62c893.css",revision:null},{url:"assets/base.6d74a41d.js",revision:null},{url:"assets/base.9bc0a8f4.js",revision:null},{url:"assets/base.b86ccecf.js",revision:null},{url:"assets/base.f5bfbef4.css",revision:null},{url:"assets/base.fe1a2aad.js",revision:null},{url:"assets/base.ff35cc90.js",revision:null},{url:"assets/Breadcrumb.a481d04a.js",revision:null},{url:"assets/Breadcrumb.c9c549f1.js",revision:null},{url:"assets/Checkbox.01567428.js",revision:null},{url:"assets/Checkbox.e675b55b.js",revision:null},{url:"assets/ColumnSetting.af563d2e.js",revision:null},{url:"assets/ColumnSetting.b9aa47df.js",revision:null},{url:"assets/Crud.3f03b9e1.js",revision:null},{url:"assets/Crud.9b7a5a47.js",revision:null},{url:"assets/Crud.fa9ceca3.js",revision:null},{url:"assets/Descriptions.38c636db.js",revision:null},{url:"assets/Descriptions.a1642c48.js",revision:null},{url:"assets/Form.37487e2c.js",revision:null},{url:"assets/Form.7fdf6c80.js",revision:null},{url:"assets/Form.91d7b212.js",revision:null},{url:"assets/form.b5e1789c.js",revision:null},{url:"assets/group.a60d1873.js",revision:null},{url:"assets/group.e56c26f7.js",revision:null},{url:"assets/i18n.155e2561.js",revision:null},{url:"assets/i18n.4d9de5a1.js",revision:null},{url:"assets/index.1f7617b4.js",revision:null},{url:"assets/index.2d39fd38.css",revision:null},{url:"assets/index.33ec8670.js",revision:null},{url:"assets/index.fc50b690.js",revision:null},{url:"assets/InputTag.6fa73a9f.js",revision:null},{url:"assets/InputTag.d33ec07a.js",revision:null},{url:"assets/introduction.82624e90.js",revision:null},{url:"assets/introduction.e4d83b03.js",revision:null},{url:"assets/Layout.1aaddd32.js",revision:null},{url:"assets/Layout.789a3c3b.js",revision:null},{url:"assets/Layout.d0361181.js",revision:null},{url:"assets/lazy.b301345c.js",revision:null},{url:"assets/lazy.fbdea27a.css",revision:null},{url:"assets/Link.8fa12cd0.js",revision:null},{url:"assets/Link.c4eedafd.js",revision:null},{url:"assets/Menu.1f6cfa96.js",revision:null},{url:"assets/Menu.23c4036c.js",revision:null},{url:"assets/modules-element-plus.c099898d.js",revision:null},{url:"assets/modules-vue.44fa8951.js",revision:null},{url:"assets/Radio.877377db.js",revision:null},{url:"assets/Radio.f3d8d18c.js",revision:null},{url:"assets/ref.bf9015f0.js",revision:null},{url:"assets/router.69859daa.js",revision:null},{url:"assets/router.d8330537.js",revision:null},{url:"assets/Select.cb14e8df.js",revision:null},{url:"assets/Select.d37497cf.js",revision:null},{url:"assets/slots.0737f0cb.js",revision:null},{url:"assets/slots.86675320.js",revision:null},{url:"assets/slots.eca1d7f0.css",revision:null},{url:"assets/slots.fb8469dd.css",revision:null},{url:"assets/Table.768d0f03.js",revision:null},{url:"assets/Table.808132ae.js",revision:null},{url:"assets/table.d4854e81.js",revision:null},{url:"assets/Table.d74f4808.js",revision:null},{url:"assets/Tabs.ef620e0d.js",revision:null},{url:"assets/Tabs.fe4c90a3.js",revision:null},{url:"assets/theme.78616271.js",revision:null},{url:"assets/theme.c5c23fe1.js",revision:null},{url:"assets/TreeSelect.7392ea35.js",revision:null},{url:"assets/TreeSelect.b5fd6379.js",revision:null},{url:"assets/typescript.30880d73.js",revision:null},{url:"assets/typescript.323f8f40.js",revision:null},{url:"assets/typescript.5e03929f.js",revision:null},{url:"assets/typescript.636d8a50.css",revision:null},{url:"assets/typescript.650d6b6d.js",revision:null},{url:"index.html",revision:"c14037f4fb49050a2370d3f4d91c34fc"},{url:"manifest.webmanifest",revision:"cd9bbf55492534cda6b14e8b692bb768"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
