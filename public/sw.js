// Service Worker for Spice Island Indonesia
// Provides caching strategy for better performance and offline functionality

const CACHE_NAME = 'spice-island-v1';
const STATIC_CACHE_NAME = 'spice-island-static-v1';
const DYNAMIC_CACHE_NAME = 'spice-island-dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/offline',
  '/manifest.json',
  '/images/logo.webp',
  '/images/favicon.ico',
  // Critical fonts
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap',
];

// Runtime caching patterns
const CACHE_STRATEGIES = {
  // Cache images with stale-while-revalidate
  images: {
    urlPattern: /\.(jpg|jpeg|png|gif|webp|svg|ico)$/i,
    strategy: 'cacheFirst',
    cacheName: 'images-cache',
    maxEntries: 100,
    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
  },
  
  // Cache API responses with network first
  api: {
    urlPattern: /^https:\/\/.*\/api\/.*/,
    strategy: 'networkFirst',
    cacheName: 'api-cache',
    maxEntries: 50,
    maxAgeSeconds: 5 * 60, // 5 minutes
  },
  
  // Cache static assets
  static: {
    urlPattern: /\.(js|css|woff2?|eot|ttf|otf)$/i,
    strategy: 'staleWhileRevalidate',
    cacheName: 'static-assets',
    maxEntries: 50,
    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
  },
  
  // Cache pages with network first
  pages: {
    urlPattern: /^https:\/\/www\.spiceislandindonesia\.com\/.*/,
    strategy: 'networkFirst',
    cacheName: 'pages-cache',
    maxEntries: 30,
    maxAgeSeconds: 24 * 60 * 60, // 24 hours
  }
};

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('[ServiceWorker] Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[ServiceWorker] Installation failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              // Remove old caches that don't match current version
              return cacheName.startsWith('spice-island-') && 
                     !cacheName.includes('-v1');
            })
            .map((cacheName) => {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[ServiceWorker] Activation complete');
        return self.clients.claim();
      })
      .catch((error) => {
        console.error('[ServiceWorker] Activation failed:', error);
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and non-http(s) requests
  if (!event.request.url.startsWith('http')) {
    return;
  }
  
  const url = new URL(event.request.url);
  
  // Handle different types of requests
  event.respondWith(
    handleRequest(event.request, url)
  );
});

// Main request handler
async function handleRequest(request, url) {
  try {
    // Check which caching strategy to use
    const strategy = getCacheStrategy(request, url);
    
    switch (strategy.name) {
      case 'cacheFirst':
        return await cacheFirst(request, strategy);
      case 'networkFirst':
        return await networkFirst(request, strategy);
      case 'staleWhileRevalidate':
        return await staleWhileRevalidate(request, strategy);
      default:
        return await networkOnly(request);
    }
  } catch (error) {
    console.error('[ServiceWorker] Request handling failed:', error);
    return await handleOffline(request);
  }
}

// Determine cache strategy based on request
function getCacheStrategy(request, url) {
  const { pathname } = url;
  
  // Check each strategy pattern
  for (const [key, strategy] of Object.entries(CACHE_STRATEGIES)) {
    if (strategy.urlPattern.test(request.url) || strategy.urlPattern.test(pathname)) {
      return { name: strategy.strategy, ...strategy };
    }
  }
  
  // Default to network only for unknown requests
  return { name: 'networkOnly' };
}

// Cache first strategy - good for images and static assets
async function cacheFirst(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  const cached = await cache.match(request);
  
  if (cached) {
    // Return cached version immediately
    console.log('[ServiceWorker] Cache hit:', request.url);
    return cached;
  }
  
  // Fetch and cache if not in cache
  try {
    const response = await fetch(request);
    if (response.ok) {
      await cache.put(request, response.clone());
      await cleanupCache(strategy.cacheName, strategy.maxEntries);
    }
    return response;
  } catch (error) {
    console.error('[ServiceWorker] Cache first fetch failed:', error);
    throw error;
  }
}

// Network first strategy - good for API calls and dynamic content
async function networkFirst(request, strategy) {
  try {
    const response = await fetch(request);
    
    if (response.ok) {
      const cache = await caches.open(strategy.cacheName);
      await cache.put(request, response.clone());
      await cleanupCache(strategy.cacheName, strategy.maxEntries);
    }
    
    return response;
  } catch (error) {
    // Fallback to cache if network fails
    console.log('[ServiceWorker] Network failed, trying cache:', request.url);
    const cache = await caches.open(strategy.cacheName);
    const cached = await cache.match(request);
    
    if (cached) {
      return cached;
    }
    
    throw error;
  }
}

// Stale while revalidate - good for assets that change occasionally
async function staleWhileRevalidate(request, strategy) {
  const cache = await caches.open(strategy.cacheName);
  const cached = await cache.match(request);
  
  // Always try to fetch fresh version in background
  const fetchPromise = fetch(request)
    .then(response => {
      if (response.ok) {
        cache.put(request, response.clone());
        cleanupCache(strategy.cacheName, strategy.maxEntries);
      }
      return response;
    })
    .catch(error => {
      console.error('[ServiceWorker] Background fetch failed:', error);
    });
  
  // Return cached version immediately if available
  if (cached) {
    console.log('[ServiceWorker] Serving cached, updating in background:', request.url);
    return cached;
  }
  
  // If no cache, wait for network
  return await fetchPromise;
}

// Network only - no caching
async function networkOnly(request) {
  return await fetch(request);
}

// Handle offline scenarios
async function handleOffline(request) {
  const url = new URL(request.url);
  
  // For navigation requests, return offline page
  if (request.mode === 'navigate') {
    const cache = await caches.open(STATIC_CACHE_NAME);
    return await cache.match('/offline') || new Response(
      '<h1>Offline</h1><p>Please check your internet connection.</p>',
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
  
  // For images, return a placeholder
  if (request.destination === 'image') {
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="100" y="100" text-anchor="middle" fill="#999">Image unavailable</text></svg>',
      { headers: { 'Content-Type': 'image/svg+xml' } }
    );
  }
  
  // For other requests, return error
  return new Response(
    JSON.stringify({ error: 'Offline - content not available' }),
    { 
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    }
  );
}

// Cache cleanup utility
async function cleanupCache(cacheName, maxEntries) {
  if (!maxEntries) return;
  
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  if (keys.length > maxEntries) {
    // Remove oldest entries (FIFO)
    const keysToDelete = keys.slice(0, keys.length - maxEntries);
    await Promise.all(
      keysToDelete.map(key => cache.delete(key))
    );
    console.log(`[ServiceWorker] Cleaned up ${keysToDelete.length} entries from ${cacheName}`);
  }
}

// Message handling for cache updates
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
      }).then(() => {
        console.log('[ServiceWorker] All caches cleared');
        event.ports[0].postMessage({ success: true });
      })
    );
  }
});

// Background sync for form submissions (future enhancement)
self.addEventListener('sync', (event) => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForms());
  }
});

// Sync contact forms when back online
async function syncContactForms() {
  try {
    // This would sync any pending form submissions
    // Implementation depends on your offline storage strategy
    console.log('[ServiceWorker] Syncing contact forms...');
  } catch (error) {
    console.error('[ServiceWorker] Contact form sync failed:', error);
  }
}