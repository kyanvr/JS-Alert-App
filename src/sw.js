/* eslint-disable no-restricted-globals */
/**
 * Service Worker
 */

// The cache assets
const OFFLINE_URL = 'offline.html';

// The current cache version
const CACHE_NAME = 'v1';

/**
 * When Service Worker is installed
 */

self.addEventListener('install', (e) => {
    // This caches the files in the installer, on before
    e.waitUntil(
        caches
            .open('v1')
            .then((cache) => {
                cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
            })
            .catch((error) => console.log(error)),
    );
});

/**
 * When Service Worker is active
 * After the install event
 */

self.addEventListener('activate', (e) => {
    // Clean the caches
    e.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
                cacheNames.map((cacheName) => {
                    // Delete the caches that are not the current one.
                    if (cacheName.indexOf(CACHE_NAME) === 0) {
                        return null;
                    }

                    return caches.delete(cacheName);
                }),
            )),
        );
});

/**
 * When the Fetch event is triggered
 */

self.addEventListener('fetch', (e) => {
    e.respondWith(
        // If the fetch fails (because of offlinelessness), return the cached version
        fetch(e.request).catch(() => () => {
                caches.match(OFFLINE_URL);
}),
    );
});
