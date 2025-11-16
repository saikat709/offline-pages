const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = 'page.html';

self.addEventListener('install', event => {
  console.log('Full path used by service worker:', new URL(OFFLINE_URL, self.location).href);
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll([OFFLINE_URL]))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => caches.match(OFFLINE_URL))
    );
  }
});
