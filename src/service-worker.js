/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

self.__precacheManifest = [].concat(
    self.__precacheManifest || []
);

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(
    self.__precacheManifest, {}
);

// Implement Navigation Route
workbox.routing.registerNavigationRoute('/index.html');

//How manage the default urls
workbox.routing.registerRoute(/^https?.*/,
    workbox.strategies.networkFirst(), 'GET'
    );