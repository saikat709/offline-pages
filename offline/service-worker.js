const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = './index.html';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([OFFLINE_URL]);
    })
  );
});

self.addEventListener('fetch', event => {
  console.log("Fetch event for ", event.request.url);
  if (!navigator.onLine) {
    console.log("Cache fetch event: ", event.response);
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || caches.match(OFFLINE_URL);
      })
    );
  }
});
