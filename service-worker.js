var CACHE_VERSION = 'myapp-v1';
var CACHE_FILES = [
    './',
    'index-hw4.html',
    'pwa/images/boat192.png',
    'pwa/images/boat256.png',
    'pwa/images/boat384.png',
    'pwa/images/boat512.png',
    'lightblue.jpg',
    'lightgold.jpg',
    'app.js',
    'styles-hw4.css',
    'manifest.json'
];

self.addEventListener('install', event => {
    console.log('SW installed');
    event.waitUntil(
        caches
        .open(CACHE_VERSION)
        .then(cache => {
            console.log('SW caching files');
            cache.addAll(CACHE_FILES)
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    console.log('SW activated');
    event.waitUntil(
        caches.keys().then(keyNames => {
            return Promise.all(
                keyNames.map(key => {
                    if(key !== CACHE_VERSION) {
                        console.log('SW clearing old caches');
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    console.log('SW fetching');
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});