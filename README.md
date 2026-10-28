# CekDulu Website

Website pengenalan aplikasi CekDulu Sebelum Bayar.

- Domain tujuan: https://cekdulu.app
- Dukungan: cekdulu.help@gmail.com
- Aplikasi: https://play.google.com/store/apps/details?id=com.cekdulu.sebelumbayar

## Menjalankan secara lokal

Buka `index.html` di browser. Website menggunakan HTML, CSS, dan JavaScript
statis, tanpa instalasi dependency atau proses build.

## Struktur

- `index.html`: halaman utama.
- `privacy.html`: Kebijakan Privasi.
- `styles.css` dan CSS komponen: tampilan responsif.
- `script.js`: menu, FAQ, dan pratinjau gambar.
- `carousel.js`: carousel screenshot di hero.
- `assets/`: gambar dan ikon lokal.
- `docs/` dan `content-structure.md`: catatan kerja, bukan konten untuk deployment.

## Publikasi

Repository ini disiapkan untuk hosting statis. Deployment dan DNS domain
diaktifkan terpisah setelah repository terhubung ke GitHub.
Untuk paket publik, sertakan halaman HTML, CSS, JavaScript, manifest, dan aset
yang dipakai; kecualikan `.git/`, dokumen kerja, dan file lingkungan lokal.

Setelah deployment otomatis dikonfigurasi, perubahan website dipublikasikan
melalui commit dan push ke branch `main`.

Foto ilustrasi pada bagian Untuk Siapa dibuat menggunakan Imagegen.
Ikon antarmuka menggunakan Lucide; logo layanan adalah milik pemilik mereknya.
