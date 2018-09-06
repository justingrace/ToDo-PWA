importScripts("/precache-manifest.acffa3d30a4d850dfbb25b4dc6765f78.js", "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

// importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200],
        }),
      ],
    }),
  );

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
workbox.googleAnalytics.initialize();

