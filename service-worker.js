const SHELL='bow-yugioh-shell-v2',IMAGES='bow-yugioh-images-v2',FILES=['./','./index.html','./assets/css/styles.css','./assets/js/db.js','./assets/js/app.js','./manifest.webmanifest'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(SHELL).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>![SHELL,IMAGES].includes(k)).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;const u=new URL(e.request.url);
if(u.hostname==='images.ygoprodeck.com'){e.respondWith(caches.open(IMAGES).then(async c=>{const hit=await c.match(e.request);if(hit)return hit;const res=await fetch(e.request);if(res.ok)c.put(e.request,res.clone());return res}));return}
if(u.origin===location.origin)e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request)))});
