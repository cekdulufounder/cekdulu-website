# Carousel screenshot pada hero

Empat layar ditampilkan dalam satu bingkai ponsel: halaman utama, reflektif
Aman, Melewati Batas, dan Riwayat Harian. Screenshot tetap utuh dan rasio sama.
Drawer dan widget asli tidak ditampilkan pada carousel atau bagian bawah.

## Interaksi

- Otomatis berganti setiap 6 detik, transisi geser 520 ms.
- Catatan tulisan tangan dan label layar diperbarui bersamaan dengan gambar.
- Panah, indikator posisi, keyboard kiri/kanan, dan swipe sentuh/drag manual.
- Interaksi manual menjeda autoplay sampai tombol Putar otomatis ditekan.
- Hover mouse dan fokus pada viewport/kontrol menjeda sementara.
- Timer berhenti di luar viewport dan ketika tab tersembunyi.
- Reduced motion memulai carousel dalam keadaan jeda, tanpa animasi transisi.
- Ukuran frame dan ruang caption tetap, sehingga tidak mengubah layout.
- Kontrol memiliki nama aksesibel, tooltip, indikator aktif, dan fokus terlihat.
- Pengumuman screen reader hanya aktif saat pergantian manual.
- Gambar pertama diprioritaskan; gambar berikutnya didekode sebelum ditampilkan.
- Tanpa JavaScript, layar pertama dan penjelasannya tetap terlihat.

## File publik

- index.html, carousel.css, carousel.js.
- assets/app-home.jpg, reflection-safe.jpg, reflection-over-limit.jpg,
  daily-history.jpg.
- Ikon Lucide lokal: chevron-left.svg, chevron-right.svg, pause.svg,
  play.svg; note-arrow.svg untuk catatan.
- Tidak ada framework, layanan eksternal, atau library runtime baru.

## Verifikasi

Browser lokal Edge/Playwright karena koneksi Browser bawaan gagal pada lingkungan.
Delapan lebar: 1440, 1366, 1321, 1024, 768, 600, 390, 320 px.

- Empat gambar dan teks cocok di semua ukuran, tanpa luapan horizontal.
- Ukuran frame sama untuk keempat layar.
- Panah, dot, keyboard, wrap-around, dan swipe sentuh lolos.
- Autoplay 6 detik, jeda hover, jeda setelah manual, resume, dan jeda di luar
  viewport diuji dengan waktu browser nyata.
- Reduced motion memulai tanpa autoplay.
- Tidak ada error JavaScript pada pengujian navigasi/responsif.
- Screenshot tiap layar pada desktop dan mobile diperiksa.

Skrip: work/check-carousel.cjs; bukti: outputs/website-tests/carousel/.
Pengujian dilakukan melalui browser responsif dan emulasi sentuh, bukan HP fisik.
Publikasi dan paket final tetap menunggu task 7.
