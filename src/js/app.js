import fetchData from './fetchData';

const url = 'http://localhost:7070/';
const opts = 'news';

console.log(navigator.serviceWorker);
if (navigator.serviceWorker) {
    window.addEventListener('load', async () => {
      try {
        await navigator.serviceWorker.register(
          '/service.worker.js', { scope: './' }
        );
        console.log(navigator.serviceWorker.controller);
      } catch (e) {
        console.log(e);
      }
      fetchData(url, opts);
    });
}


