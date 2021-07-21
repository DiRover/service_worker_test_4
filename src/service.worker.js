import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', (evt) => {
  console.log('Install')
  evt.waitUntil(self.skipWaiting());
});
  
self.addEventListener('activate', (evt) => {
  console.log('Activate')
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (evt) => {
  console.log('Request')
});
