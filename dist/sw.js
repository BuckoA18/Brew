const addResourcesToCache = async (resources) => {
	const cache = await caches.open("v1");
	await cache.addAll(resources);
};

// self.addEventListener("install", (e) => {
// 	e.waitUntill(addResourcesToCache([]));
// });
