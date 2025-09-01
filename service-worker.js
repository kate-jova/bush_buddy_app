self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('feedcalc-cache').then(cache => {
      return cache.addAll([
        './index.html',
        './manifest.json'
        './chart.umd.min.js'  
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
