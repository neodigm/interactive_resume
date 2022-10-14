importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js'
);

console.log( "workbox 6.5.1 | 20221014 (5s timeout)", workbox )
const {registerRoute} = workbox.routing;
const {NetworkFirst} = workbox.strategies;
//  const {CacheableResponsePlugin} = workbox.cacheable.response;

workbox.LOG_LEVEL = "debug";
try {
  self.skipWaiting()
  clients.claim();
} catch (error) {
  console.log("---- claim error | ", error )
}

const cacheName = 'Neodigm55Cache';
//  const matchCallback = ({request}) => request.mode === 'navigate';
const matchCallback = ({request}) => {
  //if(request.url.indexOf(".vue") != -1) console.log("---- sw req | ", request.url)
  return true;
};

const networkTimeoutSeconds = 5;

registerRoute(
  matchCallback,
  new NetworkFirst({
    networkTimeoutSeconds,
    "cacheName": "Neodigm55Cache",
    "matchOptions": {"ingoreSearch": true}
  })
);

console.log("Arcanus 55 ~ Neodigm 55 ~ SW v2.3 | " + workbox.LOG_LEVEL );