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
- `faq.html`: FAQ dan bantuan.
- `privacy.html`: Kebijakan Privasi.
- `styles.css` dan CSS komponen: tampilan responsif.
- `script.js`: menu, FAQ, dan pratinjau gambar.
- `carousel.js`: carousel screenshot di hero.
- `workflow.css` dan `workflow.js`: visual dan animasi tiga langkah Cara Kerja.
- `assets/`: gambar dan ikon lokal.
- `docs/` dan `content-structure.md`: catatan kerja, bukan konten untuk deployment.

## Publikasi

Publikasi menggunakan GitHub Pages dengan sumber **GitHub Actions**.
Workflow `.github/workflows/pages.yml` berjalan setiap ada push ke `main`
atau melalui **Actions > Publish CekDulu website > Run workflow**.

Paket publik dibuat di `_site/` dan hanya berisi HTML, CSS, JavaScript,
manifest, `.nojekyll`, dan `assets/`. Dokumen kerja, `.git/`, README, serta
file lingkungan lokal tidak disertakan dalam paket deployment.

Alamat sementara: https://cekdulufounder.github.io/cekdulu-website/

Domain `cekdulu.app` dihubungkan terpisah melalui **Settings > Pages >
Custom domain**, kemudian DNS Hostinger. Tambahkan custom domain di GitHub
sebelum mengarahkan DNS ke Pages. Aktifkan **Enforce HTTPS** setelah
sertifikat domain tersedia. Jangan menghapus record DNS untuk email.

Perubahan website berikutnya dipublikasikan melalui commit dan push ke
branch `main`. Periksa status sukses workflow sebelum menganggap versi
terbaru sudah terbit; push yang gagal deployment tidak mengganti versi live.

Foto ilustrasi pada bagian Untuk Siapa dibuat menggunakan Imagegen.
Ikon antarmuka menggunakan Lucide; logo layanan adalah milik pemilik mereknya.
