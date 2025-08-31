'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      process.env.NODE_ENV === 'production'
    ) {
      // Register service worker
      navigator.serviceWorker
        .register('/sw.js', {
          scope: '/',
          updateViaCache: 'none', // Always check for updates
        })
        .then((registration) => {
          console.log('ServiceWorker registration successful:', registration.scope);

          // Handle updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content is available, prompt user to refresh
                  if (confirm('New content available! Refresh to update?')) {
                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                    window.location.reload();
                  }
                }
              });
            }
          });

          // Check for updates every 24 hours
          setInterval(() => {
            registration.update();
          }, 24 * 60 * 60 * 1000);
        })
        .catch((error) => {
          console.log('ServiceWorker registration failed:', error);
        });

      // Handle service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        if (event.data && event.data.type === 'CACHE_UPDATED') {
          console.log('Cache updated:', event.data.url);
        }
      });

      // Handle controller change (new service worker activated)
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        // Reload page when new service worker takes control
        if (!window.location.pathname.includes('/admin')) {
          window.location.reload();
        }
      });
    }
  }, []);

  return null;
}

// Utility functions for cache management
export const serviceWorkerUtils = {
  // Clear all caches
  clearCache: async () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      return new Promise((resolve, reject) => {
        const messageChannel = new MessageChannel();
        messageChannel.port1.onmessage = (event) => {
          if (event.data.success) {
            resolve(event.data);
          } else {
            reject(new Error('Cache clear failed'));
          }
        };
        
        navigator.serviceWorker.controller?.postMessage(
          { type: 'CLEAR_CACHE' },
          [messageChannel.port2]
        );
      });
    }
    return Promise.reject(new Error('Service Worker not available'));
  },

  // Check if app is running from cache
  isRunningFromCache: () => {
    return 'serviceWorker' in navigator && 
           navigator.serviceWorker.controller !== null;
  },

  // Get cache status
  getCacheStatus: async () => {
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      const cacheInfo = [];
      
      for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();
        cacheInfo.push({
          name: cacheName,
          entries: keys.length,
          urls: keys.map(key => key.url)
        });
      }
      
      return cacheInfo;
    }
    return [];
  },

  // Preload critical resources
  preloadResources: async (urls: string[]) => {
    if ('caches' in window) {
      const cache = await caches.open('preload-cache');
      let successCount = 0;
      
      for (let i = 0; i < urls.length; i++) {
        try {
          const response = await fetch(urls[i]);
          if (response.ok) {
            await cache.put(urls[i], response);
            successCount++;
          }
        } catch (error) {
          console.warn(`Failed to preload ${urls[i]}:`, error);
        }
      }
      
      return successCount;
    }
    return 0;
  }
};