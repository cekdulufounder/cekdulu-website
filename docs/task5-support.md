# Task 5: bagian pendukung dan footer

## Hasil

- Tiga pengaturan awal dilengkapi contoh Dana Kendali Rp3.000.000,
  Target Aman Rp600.000, dan 30 hari: Rp80.000/hari pada awal siklus.
- Bagian Untuk Siapa berisi tiga situasi pengguna tanpa batasan profesi/usia.
- Ringkasan empat fitur harian, ilustrasi widget, pengingat, dan lencana.
- Ringkasan privasi mengikuti kebijakan lokal: data keuangan utama di perangkat,
  penggunaan minimum tanpa nominal dapat dikirim saat online.
- Dua belas FAQ dikelompokkan menjadi mulai menggunakan, menjalankan siklus,
  dan data/bantuan. Memakai accordion HTML yang sudah ada, tanpa dependency baru.
- CTA penutup: Pembelian berikutnya, coba cek dulu.
- Footer beranda dan Privacy Policy disamakan dengan navigasi, bantuan,
  kebijakan, Google Play, serta akun sosial yang diberikan pengguna.
- Instagram: https://www.instagram.com/cekdulu_5detik/
- TikTok: https://www.tiktok.com/@cekdulu5detik
- Parameter berbagi TikTok dihilangkan; kedua tautan membuka tab baru dengan
  noopener noreferrer dan label aksesibel.
- Galeri placeholder tersembunyi digantikan ilustrasi widget pada anchor tampilan.
- CSS support.css hanya menargetkan bagian baru dan footer; wajib masuk paket final.

## Verifikasi

Playwright / Edge lokal pada 1440, 1024, 768, 481, 390, dan 320 px:

- Tidak ada luapan horizontal halaman atau bagian baru.
- Tidak ada ID duplikat atau anchor lokal hilang.
- Urutan bagian sesuai rencana, dua belas FAQ tersedia.
- FAQ diuji membuka lewat klik, hanya satu terbuka, serta menutup via Enter.
- Jawaban panjang tentang offline dan pemulihan data tetap muat pada mobile.
- Tautan Untuk Siapa, navigasi ke privasi dan kembali ke beranda berfungsi.
- URL, target tab baru, rel, dan visibilitas tautan sosial diperiksa pada beranda;
  URL dan visibilitas juga diperiksa pada Privacy Policy.
- Tidak ada error JavaScript selama pengujian.
- Isi main Privacy Policy dibandingkan sebelum/sesudah: identik.
- Screenshot desktop/mobile diperiksa, termasuk ilustrasi widget dan footer.
- git diff --check lolos.

Skrip: work/check-support.cjs di root workspace.
Bukti: outputs/website-tests/task5/ di root workspace.
Ketersediaan profil sosial secara live tidak diuji; alamat memakai kiriman pengguna.

## Sisa pekerjaan

- Task 6: menu utama, penyelarasan navigasi, dan pemeriksaan responsif menyeluruh.
- Task 7: pengujian final, pemeriksaan klaim sesuai versi aplikasi aktif, dan ZIP.
- Ilustrasi HTML belum merupakan screenshot produk final.
- Domain belum diberikan. Website belum dipublikasikan.
