# Screenshot dari pengguna

Status terkini: presentasi screenshot/crop di seluruh halaman dibatalkan.
Empat screenshot kini dipakai hanya dalam carousel di hero, sesuai arahan
pengguna. Lihat `docs/hero-carousel.md`. screenshots.css tetap tidak digunakan;
bagian bawah tetap memakai ilustrasi HTML. Catatan di bawah adalah riwayat
percobaan, bukan tampilan aktif.

Enam gambar diberikan pengguna dan disalin utuh dari Downloads ke assets.
File sumber tidak dipotong, diberi ulang angka, atau diubah isi tampilannya.
Pembaruan presentasi: halaman memakai crop CSS untuk menampilkan bagian penting
dari empat gambar. Klik gambar membuka file lengkap, bukan crop.

| File asal | Aset website | Penempatan |
| --- | --- | --- |
| 1000515995.jpg | reflection-safe.jpg | Hero |
| 1000516002.jpg | app-home.jpg | Crop kartu Ruang Hari Ini di Cara Kerja |
| 1000516008.jpg | reflection-over-limit.jpg | Crop perubahan ruang harian |
| 1791722599047.jpeg | drawer-target.jpg | Crop nominal dan tujuan Target Aman |
| 1791722441595.jpeg | daily-history.jpg | Pratinjau lewat tombol Riwayat Harian |
| 1791722879797.jpeg | home-widgets.jpg | Crop widget ringkas |

Penjelasan contoh Aman diselaraskan: batas Rp100.000, sudah terpakai Rp36.000,
sisa Rp64.000. Mengecek Rp25.000 menghasilkan total Rp61.000 dan sisa Rp39.000.
Bar contoh HTML menunjukkan sisa 39%, sesuai screenshot. Ini contoh untuk
menjelaskan gambar, bukan mesin perhitungan aplikasi.

Semua screenshot dapat diperbesar lewat dialog yang sudah tersedia, dengan
alt, caption, tombol tutup, Escape, dan fokus kembali ke gambar pemicu.
Gambar hero dimuat prioritas tinggi; screenshot lainnya lazy-loaded.
Total gambar sumber sekitar 656 KB. Ukuran dan rasio gambar dipertahankan.
screenshots.css wajib disertakan pada paket website.

Verifikasi: 1440, 1366, 1024, 768, 580, 390, dan 320 px. Keenam gambar
termuat, rasio tidak terdistorsi, dialog berfungsi dan tidak ada luapan
horizontal/error JavaScript. Screenshot hasil desktop dan mobile diperiksa.
Skrip: work/check-screenshots.cjs. Bukti: outputs/website-tests/screenshots/.

Catatan sebelumnya tentang belum tersedianya screenshot kini sudah terpenuhi.
Materi domain/hosting dan verifikasi paket final tetap masuk task 7.
