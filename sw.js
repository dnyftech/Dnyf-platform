<<<<<<< HEAD
// Service Worker for DNYF TECH
const CACHE_NAME = 'dnyf-tech';
=======
// Service Worker for DNYF TETCH
const CACHE_NAME = 'dnyf-tetch-v3';
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
const ASSETS = [
    '/',
    '/index.html',
    '/manifest.json',
    '/css/style.css',
    '/js/app.js',
    '/js/github.js',
    '/js/contributions.js',
    '/js/ai-chat.js',
    '/js/pwa.js',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

// Install event
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ASSETS);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate event
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event
self.addEventListener('fetch', event => {
<<<<<<< HEAD
=======
    // Skip non-GET requests
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
    if (event.request.method !== 'GET') return;
    
    event.respondWith(
        caches.match(event.request)
            .then(response => {
<<<<<<< HEAD
=======
                // Return cached response if found
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
                if (response) {
                    return response;
                }
                
<<<<<<< HEAD
                return fetch(event.request)
                    .then(response => {
=======
                // Otherwise fetch from network
                return fetch(event.request)
                    .then(response => {
                        // Don't cache if not a success response
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
<<<<<<< HEAD
                        const responseToCache = response.clone();
                        
=======
                        // Clone the response
                        const responseToCache = response.clone();
                        
                        // Cache the new response
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    })
                    .catch(() => {
<<<<<<< HEAD
=======
                        // If network fails and no cache, show offline page
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
                        if (event.request.mode === 'navigate') {
                            return caches.match('/');
                        }
                        return new Response('Offline', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
<<<<<<< HEAD
});
=======
});
>>>>>>> 53a7e44195d2b8194b9b5e13c655f67da0bc4038
