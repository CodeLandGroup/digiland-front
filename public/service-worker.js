let cacheData = "cacheDataV1";

let cacheFiles = [
    '/static/js/bundle.js',
    '/index.html',
    '/favicon.ico',
    '/manifest.json',
    '/',
]

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll(cacheFiles);
        })
    )
})

this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                if (response)
                    return response
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
})