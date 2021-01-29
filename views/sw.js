self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open('sw-cache').then(function(cache){
			//Static files that make up app. sheel are cached
			return cache.add('index.html');
			//Add other .js and .css file for caching
		})
	);
});

//Request
self.addEventListener('fetch', function(event){
	event.respondWith(
		//Cache
		caches.match(event.request).then(function(response){
			return response || fetch(event.request);
		})
		)
})