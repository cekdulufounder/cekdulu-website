# Audit awal revisi website CekDulu

Tanggal: 28 Oktober 2026 (Asia/Jakarta).
Task 1 selesai: checkpoint dan audit sumber website.

## Checkpoint

- Sebelumnya workspace dan folder website belum memiliki repositori Git.
- Repositori lokal dibuat khusus di `website/`, branch `main`.
- Commit kondisi awal: `dfea70a`.
- Tag: `checkpoint/website-before-redesign-2026-10-28`.
- Delapan file awal, termasuk dua aset PNG, sudah tercatat.
- Belum ada remote atau publikasi. Folder aplikasi Flutter tidak disentuh.
- Folder `.git` dan dokumen kerja harus dikecualikan dari paket publikasi.

## Struktur yang ditemukan

- `index.html`: hero, tiga pengaturan awal, contoh refleksi pembayaran,
  fitur, galeri tersembunyi, privasi, FAQ, download, footer.
- `privacy.html`: Kebijakan Privasi, menggunakan CSS dan JS yang sama.
- `styles.css`: tema, komponen, breakpoint 980/760/600/480 px,
  focus-visible dan prefers-reduced-motion.
- `script.js`: menu mobile, header scroll, FAQ, toast tautan sementara,
  dan lightbox galeri.
- `site.webmanifest`: nama, warna, dan ikon website.
- `content-structure.md`: rancangan copy sebelumnya; perlu diselaraskan pada task 2.
- HTML/CSS/JS statis tanpa framework atau kebutuhan build.

## Tema yang dipertahankan

Referensi pengguna menjadi acuan komposisi; tema HTML saat ini tetap menjadi dasar.

| Elemen | Nilai saat ini / keputusan |
| --- | --- |
| Background gelap | Navy `#001426` dan `#001a2e` |
| Bagian terang | `#f6f9fb`, teks `#142238` |
| CTA utama | Hijau `#14bf91` |
| Aksen | Cyan `#20c7d9`, mint `#c9f5e7` |
| Font | Inter, Segoe UI, Arial, sans-serif |
| Font yang dimuat | Tidak ada berkas font/webfont; Inter hanya dipakai jika tersedia |
| Tombol | Radius 8 px, tinggi utama minimal 52 px |
| Lebar konten | Maksimal 1160 px |
| Layout | Bagian penuh dengan konten terpusat |

Pertahankan identitas warna, keluarga font, bentuk tombol, dan pergantian bagian
gelap/terang. Komposisi hero dan hierarki tulisan akan diperbarui pada task 3.

## Copy dan urutan yang sudah disepakati

Hero:

> Cara mudah untuk mulai menjaga uangmu tetap terkendali.

> Lihat dampaknya sebelum bayar, supaya uangmu cukup sampai akhir bulan dan
> rencanamu tetap terjaga.

Brand CekDulu dan Sebelum Bayar tetap menonjol. CTA utama Google Play;
CTA kedua Lihat Cara Kerja.

Urutan isi yang menjadi dasar task 2:

1. Hero.
2. Cara kerja: ketik nominal, lihat dampak, putuskan.
3. Target Aman dan rencana yang ingin dijaga.
4. Tiga pengaturan awal: Dana Kendali, Durasi Siklus, Target Aman opsional.
5. Untuk siapa: situasi pengguna, bukan batasan profesi/usia.
6. Widget dan pengingat kebiasaan.
7. FAQ.
8. Download dan footer dengan akses bantuan, privasi, dan media sosial.

## Inventaris aset dan tautan

- Tersedia dalam `website/assets/`: logo (31.287 byte) dan ikon (28.481 byte).
- Belum ada screenshot aplikasi asli atau widget dalam aset website.
- Tampilan ponsel dan reflektif saat ini merupakan ilustrasi HTML/CSS.
- `outputs/website-tests/` berisi screenshot website, bukan screenshot aplikasi.
- `.codex-remote-attachments/` berisi lampiran JPG percakapan; belum dipilih
  atau diverifikasi sebagai screenshot versi aplikasi terbaru.
- Galeri screenshot saat ini masih `hidden`.
- Google Play sudah mengarah ke package `com.cekdulu.sebelumbayar`.
- Bantuan: `cekdulu.help@gmail.com`.
- Pengguna mengonfirmasi adanya akun Instagram dan TikTok.
- Footer sudah memiliki placeholder keduanya yang tersembunyi; URL/handle
  belum diberikan. Jangan menebak akun atau menampilkan link `#` sebagai link aktif.
- Tautan sosial direncanakan pada footer, termasuk footer Privacy Policy.

Materi visual yang perlu dipilih untuk revisi: halaman utama, halaman reflektif,
Target Aman di drawer, dan widget versi terbaru. Hindari memperlakukan ilustrasi
HTML sebagai screenshot asli aplikasi.

## Hal yang perlu diperiksa pada tahap implementasi

- CSS/JS dipakai bersama oleh halaman utama dan Privacy Policy; perubahan global
  harus diperiksa pada kedua halaman.
- Hero desktop memiliki min-height 900 px; evaluasi agar konten berikutnya
  mulai terlihat pada viewport sasaran.
- Susunan menu saat ini belum memiliki Untuk Siapa; anchor baru perlu konsisten
  antara navigasi beranda dan Privacy Policy.
- Contoh nominal dan status harus konsisten dengan screenshot yang dipakai.
- Klaim FAQ gratis/offline/login perlu sesuai versi aplikasi yang dirilis.
- Privacy Policy tetap diakses; task ini bukan pembaruan isi kebijakan.
- Ada deklarasi `gap: 10px` ganda pada header mobile, tidak memblokir revisi.
- ZIP pada `outputs/` adalah paket lama; paket baru dibuat pada task 7.

## Batas verifikasi task 1

Audit dilakukan terhadap struktur file, sumber HTML/CSS/JS, manifest, dan laporan
lama. Laporan tes yang tersedia bertanggal 7 September 2026; hasilnya tidak dianggap
sebagai hasil pengujian baru. Pengujian browser desktop/mobile dan interaksi
dilakukan pada tahap verifikasi setelah implementasi.

## Status pekerjaan

- [x] Task 1: checkpoint dan audit.
- [x] Task 2: finalisasi copy dan susunan halaman di `content-structure.md`.
- [x] Task 3: rekonstruksi hero; verifikasi di `docs/task3-hero.md`.
- [x] Task 4: cara kerja dan Target Aman; verifikasi di `docs/task4-stories.md`.
- [x] Task 5: bagian pendukung dan footer sosial; verifikasi di `docs/task5-support.md`.
- [x] Task 6: navigasi dan responsif; verifikasi di `docs/task6-navigation.md`.
- [ ] Task 7: pengujian dan paket final.

Pembaruan task 5: pengguna sudah memberikan URL Instagram dan TikTok resmi.
Keduanya aktif di footer beranda dan Privacy Policy. Catatan aset/tautan di atas
menggambarkan kondisi audit awal; domain dan screenshot final masih menunggu.
