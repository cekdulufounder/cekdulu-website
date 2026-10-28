# Task 4: Cara Kerja dan Target Aman

Selesai 28 Oktober 2026.

## Implementasi

- `#cara-kerja` sekarang menjelaskan ketik nominal, lihat dampak, putuskan.
- Contoh Rp100.000 dikurangi Rp25.000 menghasilkan Rp75.000; sisa bar 75%.
- Penjelasan status aman, mendekati batas, dan melewati batas.
- Penjelasan bahwa pengecekan belum mencatat pembayaran dan aplikasi tidak
  melakukan pembayaran sebenarnya.
- `#fitur` mengenalkan Target Aman melalui contoh tujuan jalan-jalan Rp600.000.
- Empat contoh tujuan, penjelasan pilihan tanpa target, dan batas fungsi
  Target Aman sebagai perhitungan, bukan pemindahan uang.
- Tiga pengaturan awal dipindahkan sesudah Target Aman dengan ID `#mulai`.
  Copy pembukanya disesuaikan; pengayaan bagian ini tetap masuk task 5.
- Bagian fitur lama menjadi `#keseharian`, menunggu revisi task 5.
- Anchor lama `#pengalaman` dipertahankan pada contoh pembayaran.
- `stories.css` hanya dimuat halaman utama. Wajib ikut paket website task 7.

## Verifikasi

Playwright dengan Edge headless lokal, membuka HTML langsung:

- 1440x900, 1024x768, 768x1024, 481x900, 390x844, 320x740.
- Tidak ada luapan horizontal halaman atau elemen dua bagian baru.
- Tidak ada ID duplikat, anchor lokal yang hilang, atau error JavaScript.
- Tautan hero Cara Kerja dan menu Fitur menggulir ke posisi di bawah header.
- Menu mobile menutup setelah memilih Fitur.
- Rasio bar contoh diperiksa 75% dengan toleransi pembulatan pixel.
- Urutan hero, Cara Kerja, Target Aman, pengaturan awal, fitur harian diperiksa.
- Privacy Policy pada 320 px tetap tidak meluap dan tidak memuat stories.css.
- Screenshot desktop dan mobile diperiksa visual.

Bukti: `outputs/website-tests/task4/` pada root workspace, termasuk results.json.
Script: `work/check-stories.cjs`. Screenshot per bagian menyembunyikan header
dan skip-link hanya saat pengambilan gambar agar elemen fixed tidak menutupi
hasil capture panjang. Screenshot navigation-* mempertahankan header asli.

## Batas lingkup

Visual memakai ilustrasi HTML berlabel contoh. Screenshot produk final masih
menunggu materi yang sesuai. Tidak ada kalkulator baru, simulasi pembayaran
interaktif, perubahan kebijakan, publikasi, atau build aplikasi.
