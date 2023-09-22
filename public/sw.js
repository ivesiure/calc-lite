var cacheName = 'e-calc-lite-cache';
var filesToCache = [
	'./',
	'../../index.html',
	'../../favicon.ico',
	'../css/main.css',
	'../js/main.js',
	'../images/sprite2.png',
];

/* Start the service worker and cache app content */
self.addEventListener('install', function(e) {
	self.skipWaiting();
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			return cache.addAll(filesToCache);
		})
	);
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
	e.respondWith(
		caches.match(e.request).then(function(response) {
			return response || fetch(e.request);
		})
	);
});
