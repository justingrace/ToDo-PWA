importScripts("/precache-manifest.28aaa8460d44e41ccbeadc20252d7b12.js", "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

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

