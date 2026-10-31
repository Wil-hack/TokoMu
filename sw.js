// Service Worker untuk PWA Serabimu
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Network first strategy (selalu ambil data terbaru dari internet)
  // Sangat bagus untuk toko online agar stok & harga selalu update
  event.respondWith(
    fetch(event.request).catch(() => {
      // Jika offline, bisa ditambahkan halaman fallback di sini nanti
      return new Response("Anda sedang offline.");
    })
  );
});
