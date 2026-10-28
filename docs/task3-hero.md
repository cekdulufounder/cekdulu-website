# Task 3: hero CekDulu

Selesai 28 Oktober 2026.

## Perubahan

- Hero menonjolkan logo CekDulu dan Sebelum Bayar.
- Copy menggunakan kalimat yang disetujui pengguna.
- Tombol Lihat Cara Kerja tetap menuju `#cara-kerja`; tidak membuat demo baru.
- CTA Google Play mempertahankan URL package sebelumnya.
- Tiga ringkasan: cek sebelum bayar, tanpa login, keputusan pengguna.
- Ilustrasi HTML reflektif menggantikan ilustrasi keypad pada hero.
- Angka contoh konsisten: Rp100.000 - Rp25.000 = Rp75.000; sisa bar 75%.
- Tema navy, hijau, cyan, font dan gaya tombol mengikuti website sebelumnya.
- CSS hero berada di `hero.css`, hanya dimuat oleh `index.html` agar tidak
  memengaruhi Privacy Policy. File ini wajib dimasukkan dalam paket task 7.

## Verifikasi

Browser bawaan tidak dapat terhubung karena error lingkungan. Pemeriksaan
dijalankan melalui Playwright dengan Microsoft Edge lokal, headless, membuka
HTML langsung tanpa dev server.

- Viewport: 1440x900, 1366x768, 768x1024, 600x900, 390x844, 320x740.
- Semua lolos pemeriksaan luapan horizontal halaman dan elemen hero.
- Logo termuat, teks headline sesuai, dan tidak ada error JavaScript halaman.
- Tombol Lihat Cara Kerja mengubah hash dan menggulir ke bagian cara kerja
  dengan ruang untuk header tetap.
- Menu mobile membuka dan menutup melalui Escape.
- Privacy Policy pada layar 390 px tidak memuat CSS hero dan tidak meluap.
- Screenshot desktop/mobile diperiksa secara visual.
- Hero desktop setinggi 744 px pada viewport 1366x768 dan 1440x900.
- Pada mobile, CTA tampil sebelum ilustrasi; ilustrasi dibaca saat scroll.

Bukti lokal: `outputs/website-tests/task3/` di root workspace.
Skrip pemeriksaan: `work/check-hero.cjs` di root workspace.

## Materi lanjutan

Ilustrasi berlabel Contoh Pengecekan, bukan screenshot aplikasi final.
Screenshot reflektif yang sesuai versi rilis masih perlu dipilih untuk
menggantikan ilustrasi. Lampiran yang ditinjau belum memberikan gambar final
yang dapat dipakai untuk hero. URL Instagram/TikTok dan domain masih menunggu.

Bagian di bawah hero tetap pada implementasi sebelumnya sampai task 4 dan 5.
Tidak ada publikasi, perubahan aplikasi Flutter, atau paket ZIP baru.
