# Eksperimen sentuhan animasi

Tanggal: 31 Oktober 2026 (Asia/Jakarta).
Status: task 1, checkpoint sebelum eksperimen. Belum ada perubahan visual baru.

## Baseline yang diamankan

Tag lokal: `checkpoint/website-before-motion-polish-2026-10-31`.
Tag ini menunjuk commit yang menyimpan seluruh sumber website saat task 1 selesai.
Revisi sebelum checkpoint ini tetap menjadi baseline, bukan bagian yang dibatalkan
jika pengguna tidak menyukai eksperimen animasi berikutnya.

Kondisi baseline:

- Beranda enam bagian, menonjolkan kesederhanaan dan kendali uang bulanan.
- Hero: "Jaga uang bulananmu tetap terkendali, tanpa ribet."
- Penjelasan: "Ingin uang terkendali, tapi nggak mau ribet?"
- Carousel hero serta demo Cara Kerja tiga langkah tetap tersedia.
- Demo memiliki pilihan aman dan melewati batas; contoh awal melewati batas.
- Kontrol manual, jeda/lanjut, putar ulang, serta reduced motion sudah diterapkan.
- FAQ berada di `faq.html`; isi utama Kebijakan Privasi tetap dipertahankan.
- CTA penutup: "Mudah dimulai. Membantu sejak hari pertama."
- Copy penutup: "Unduh sekarang dan rasakan bedanya."
- Tulisan tangan penutup kembali tampil: "Uang Kendali. Rencana Terjaga.
  Hidup Lebih Tenang."
- Tidak ada eyebrow "Mulai sekarang" atau catatan Android/login di bawah tombol.

Checkpoint mencakup HTML, CSS, JavaScript, aset lokal yang dipakai, dan dokumen
kerja dalam repo `website/`. Skrip tes `work/` dan hasil browser `outputs/` berada
di luar repo ini dan bukan bagian dari commit sumber website.

## Batas eksperimen

- Pertahankan tema, susunan halaman, copy yang disepakati, dan CTA yang dapat
  langsung diakses tanpa menunggu animasi selesai.
- Hero: kemunculan berurutan dan garis hijau pada "tanpa ribet".
- Garis Kendali: perpindahan sorotan demo dan penegasan Target Aman.
- Penutup: kemunculan tulisan tangan dan animasi garis bawah.
- Tidak menambahkan video, partikel, 3D, kursor khusus, atau scroll yang dikunci.
- Tidak menambah library besar. Pertahankan fallback dan reduced motion.
- Tidak ada push ke GitHub atau publikasi sebelum persetujuan pengguna.

## Cara evaluasi dan pengembalian

- Bandingkan perubahan eksperimen dengan tag baseline melalui `git diff`.
- Pisahkan perubahan animasi dalam commit tersendiri bila akan disimpan.
- Jika pengguna meminta undo, periksa status/diff terbaru dahulu dan batalkan
  hanya perubahan eksperimen. Pertahankan perubahan lain yang dibuat setelahnya.
- Jangan menjalankan reset hard atau menimpa seluruh worktree untuk undo.
- Task 1 tidak melakukan undo, mengubah branch, atau mengubah remote.

## Status task

- [x] Task 1: amankan baseline dan buat tag checkpoint lokal.
- [ ] Task 2: poles hero dan garis hijau, tanpa menahan tombol download.
- [ ] Task 3: Garis Kendali serta tulisan tangan penutup.
- [ ] Task 4: pengujian dan evaluasi desktop/mobile sebelum dipertahankan.

Pengujian final website dari rencana sebelumnya tetap menunggu eksperimen ini
disepakati. Checkpoint ini bukan pernyataan bahwa pengujian final sudah selesai.
