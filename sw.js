importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js');
if (!workbox) { console.log("workbox not"); }
workbox.LOG_LEVEL = "debug";
self.addEventListener("fetch", event => {
  //console.log("Fetch intercepted for| ", event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          //console.log("Fetch cache           |" );
          return cachedResponse;
        }
        //console.log("Fetch request         |" );
        return fetch(event.request);
      })
    );
});
workbox.routing.registerRoute(
  // Cache CSS files
  /.*\.css/,
  // Use cache but update in the background ASAP
  workbox.strategies.staleWhileRevalidate({
    // Use a custom cache name
    cacheName: 'css-cache',
  })
);
workbox.routing.registerRoute(
  // Cache image files
  /\.(?:png|gif|jpg|jpeg|webp|svg|mp3|mp4|json|html|js)$/,
  // Use the cache if it's available
  workbox.strategies.cacheFirst({
    // Use a custom cache name
    cacheName: 'image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Cache only 20 images
        maxEntries: 256,
        // Cache for a maximum of two daze
        maxAgeSeconds: 172800,
      })
    ],
  })
);
console.log("Arcanus 55 sw v2.0 | " + workbox.LOG_LEVEL );