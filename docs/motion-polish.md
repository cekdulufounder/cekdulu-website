# Eksperimen sentuhan animasi

Tanggal: 31 Oktober 2026 (Asia/Jakarta).
Status: task 1-4 selesai secara teknis. Eksperimen tersedia untuk evaluasi visual lokal.
Revisi 1 November 2026: rencana motion Samsung terverifikasi; rincian task 4 di bawah.
Catatan implementasi sebelumnya adalah riwayat; batas verifikasi terbaru tercantum pada task 4.

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
- [x] Task 2: poles hero dan garis hijau, tanpa menahan tombol download.
- [x] Task 3: Garis Kendali serta tulisan tangan penutup.
- [x] Task 4: pengujian dan evaluasi teknis desktop/mobile sebelum dipertahankan.

Verifikasi teknis eksperimen dan regresi website selesai pada 1 November 2026.
Penilaian visual serta persetujuan publikasi tetap di tangan pengguna.

## Implementasi task 2

- Perubahan tampilan hanya `hero.css` dan satu class pada penegas "tanpa ribet"
  di `index.html`. Tidak mengubah copy, warna tema, susunan halaman, atau aset.
- Logo/tagline, headline, penjelasan, dan penegas tiga langkah masuk dengan
  opacity serta translateY 12 px. Durasi 520 ms, delay 0/90/170/240 ms.
- Garis hijau 2 px pada "tanpa ribet" tergambar dari kiri melalui scaleX,
  durasi 600 ms dengan delay 320 ms. Seluruh rangkaian selesai di bawah 1 detik.
- Semua animasi satu putaran, tanpa timer, library, file JS, atau aset baru.
- Tombol download dan Lihat Cara Kerja tidak ikut animasi, termasuk seluruh
  parent-nya. Teks muncul per blok, bukan satu per satu huruf/kata.
- Underline absolut dan gerakan transform tidak menggeser alur layout.
- Animasi hanya aktif pada prefers-reduced-motion: no-preference. Dengan
  reduced motion, teks dan garis langsung terlihat tanpa gerak.
- Tanpa JS tetap bekerja memakai CSS; jika animasi CSS tidak tersedia, konten
  dasar tetap terlihat. Tidak ada opacity tersembunyi yang memerlukan JS untuk dibuka.

Verifikasi task 2:

- `work/check-motion-hero.cjs` lulus pada 1440, 1024, 768, 600, 390, 320 px.
- Fase animasi dijeda pada 0 ms untuk membuktikan CTA tetap terlihat, terkena
  hit-test, dan bisa diklik sebelum teks selesai masuk. Klik dicegat khusus tes
  sehingga tidak membuka Google Play atau melakukan permintaan eksternal.
- Delay, durasi, satu putaran, tidak adanya animasi pada CTA, posisi CTA dan
  tinggi hero yang stabil, garis selesai, serta tidak ada teks terpotong diuji.
- Reduced motion awal/perubahan preferensi, fallback tanpa JS, dan anchor Cara
  Kerja lulus. Tidak ada error JavaScript dalam pemeriksaan enam viewport.
- Markup pengenalan, Cara Kerja, Target Aman, Untuk Siapa, penutup, footer,
  carousel, dan tombol dibandingkan ke tag checkpoint dan tetap identik.
- Screenshot pertengahan desktop serta hasil akhir mobile 390/320 px diperiksa.
- Hasil: `outputs/website-tests/motion-hero/` di luar repo website. Browser lokal
  Edge digunakan setelah koneksi browser dalam aplikasi gagal saat inisialisasi.
- Pengujian performa pada perangkat nyata dan penilaian akhir masih task 4;
  tidak mengklaim peningkatan kecepatan dari pemeriksaan ini.
- Checkpoint tetap tersedia pada commit `496986f`; eksperimen belum di-commit
  atau di-push. Task 3 dilanjutkan di bawah.

## Implementasi task 3

- Satu garis sorotan berpindah mengikuti langkah aktif demo selama 380 ms.
  Posisi mengikuti ukuran baris desktop atau tab mobile, termasuk setelah resize.
  Sorotan tidak menerima pointer; kontrol klik, sentuh, dan keyboard tetap aktif.
- Garis tipis mengelilingi contoh Target Aman ketika masuk viewport, selama
  900 ms. Nominal dan penjelasan tetap langsung terbaca.
- Tulisan tangan penutup muncul dengan gerakan 8 px selama 450 ms, disusul
  garis bawah 550 ms. Efek penutup dan Target Aman hanya sekali per kunjungan.
- Tambahan dekorasi dipisahkan dalam `motion.css` dan `motion.js`. Menggunakan
  IntersectionObserver untuk dua target, bukan listener scroll atau polling.
  Perpindahan sorotan memakai Web Animations API tanpa library tambahan.
- Tidak mengubah copy, aset produk, carousel hero, perhitungan contoh, atau CTA.
- Reduced motion menghentikan gerakan sorotan dan menampilkan dekorasi statis.
  Transisi global lama 0.01 ms tetap dipertahankan. Tanpa JS, konten tetap terlihat
  dan sorotan tambahan tersembunyi.

Verifikasi task 3:

- `work/check-motion-details.cjs` lulus pada 1440, 1024, 768, 600, 390, 320 px:
  posisi/durasi sorotan, resize, efek sekali jalan, reduced motion, fallback tanpa
  JS, tidak ada overflow horizontal, dan tidak ada error JavaScript.
- `work/check-workflow-controls.cjs` lulus pada tujuh ukuran layar, termasuk
  landscape: klik/keyboard/sentuh, jeda/lanjut/ulang, perubahan preferensi animasi,
  perpindahan viewport, decode bersamaan, serta fallback kegagalan gambar/tanpa JS.
- Screenshot sorotan desktop/mobile, Target Aman, dan penutup diperiksa secara
  visual. Hasil tersimpan di `outputs/website-tests/motion-details/` di luar repo.
- Pengujian memakai Edge lokal; browser dalam aplikasi tidak berhasil terhubung.
- Tidak ada push, publikasi, atau klaim performa perangkat nyata. Evaluasi
  keseluruhan dan keputusan mempertahankan eksperimen tetap menunggu task 4.

## Revisi motion hero: 1 November 2026

Rencana baru mempertahankan desain navy. Percobaan latar terang dibatalkan;
tidak termasuk dalam revisi ini. Durasi task 2 awal di atas kini digantikan:

- Teks hero: 900 ms per blok, delay 0/180/360/540 ms, naik 18 px.
  Rangkaian selesai dalam 1.44 detik; underline 850 ms dengan delay 500 ms.
- Preview HP beserta keterangannya: naik 32 px selama 1100 ms, delay 180 ms.
  Animasi dimulai sekali saat area preview terlihat, bukan sebelum discroll
  ke sana di layar kecil. Sudut, ukuran, screenshot, dan posisi akhirnya tetap.
- Memakai observer yang sudah ada, ditambah satu target hero. Tidak ada library,
  aset, polling, timer, atau file skrip tambahan.
- CTA download dan Lihat Cara Kerja tetap di luar animasi. Fokus ke kontrol
  carousel langsung menyelesaikan kemunculan agar kontrol dapat digunakan.
- Reduced motion menampilkan HP langsung dan menghentikan kemunculan aktif.
  Tanpa JS, tanpa IntersectionObserver, atau saat `motion.js` gagal dimuat,
  preview tetap terlihat. Teks tetap memiliki fallback CSS yang terbaca.
- `work/check-hero-paced.cjs`: lulus enam ukuran layar, mencakup timing, CTA
  sejak awal, geometri akhir dibanding kondisi sebelum revisi, carousel,
  reduced motion/perubahan preferensi, tiga fallback, dan error JavaScript.
  Screenshot: `outputs/website-tests/hero-paced/` (di luar repo).
- Verifikasi browser memakai Edge lokal karena koneksi browser dalam aplikasi
  gagal diinisialisasi. Tidak ada publikasi atau klaim performa perangkat nyata.

Status rencana baru:

- [x] Task 1: perlambat hero dan kemunculan HP.
- [x] Task 2: kemunculan bagian berikutnya saat scroll.
- [x] Task 3: selaraskan animasi yang sudah ada.
- [x] Task 4: pengujian dan evaluasi menyeluruh.

## Revisi scroll: task 2

- Menambahkan 26 target kemunculan pada pengenalan aplikasi, Cara Kerja, copy
  Target Aman, ide tujuan, Untuk Siapa, serta judul/penjelasan CTA penutup.
- Teks naik 18 px selama 900 ms; visual demo HP dan foto naik 28 px selama
  1050 ms. Delay teks berurutan 0/120/240/360 ms, visual 180 ms.
- Menggunakan properti `translate` terpisah agar rotasi tulisan tangan yang
  sudah ada tetap utuh. Posisi, dimensi, font, warna, dan copy tidak diganti.
- Efek lama pada contoh Target Aman dan tulisan tangan penutup tidak ditumpuk
  dengan kemunculan baru. CTA dan kontrol mode tetap langsung tersedia.
- Memakai observer yang sama dengan hero, threshold 12% untuk target scroll;
  setiap target dilepas dari observer setelah muncul sekali. Tidak ada listener
  scroll, polling, timer, library, aset, atau file produksi tambahan.
- Penggunaan keyboard pada daftar langkah menyelesaikan kemunculan langsung.
  Reduced motion menampilkan semua target tanpa gerakan, termasuk saat preferensi
  berubah. Tanpa JS/observer atau saat `motion.js` diblokir, konten tetap terlihat.

Verifikasi task 2:

- `work/check-scroll-reveals.cjs`: 26 target lulus di enam ukuran layar,
  termasuk kemunculan saat masuk viewport, satu putaran, timing, scroll cepat,
  fokus keyboard, perubahan reduced motion, empat fallback, dan error JavaScript.
- Sumber HTML dibanding sebelum task 2: hanya atribut reveal/delay yang berubah.
  Geometri section dan heading serta ukuran font identik dengan baseline.
- Sampel frame 400 ms membuktikan opacity judul/penjelasan meningkat berurutan,
  bukan muncul bersamaan. Screenshot desktop/mobile diperiksa; hasil di
  `outputs/website-tests/scroll-reveals/` (di luar repo).
- `work/check-workflow-controls.cjs`: lulus tujuh ukuran layar, keyboard/sentuh,
  jeda/lanjut/ulang, perpindahan viewport, decode bersamaan, dan fallback gambar.
- `work/check-hero-paced.cjs` dan `work/check-motion-details.cjs`: regresi hero,
  sorotan demo, garis Target Aman, dan penutup tetap lulus.
- Pemeriksaan browser memakai Edge lokal; koneksi browser dalam aplikasi belum
  tersedia. Pengujian performa perangkat nyata tetap menjadi bagian task 4.
- Tidak melakukan push, publikasi, atau melanjutkan implementasi task 3.

## Penyelarasan: task 3

- Kemunculan hero/scroll mengumumkan status selesai lewat event lokal
  `cekdulu:motion-settled`. Mengikuti promise animasi browser, tanpa polling
  atau timer tambahan; tidak menunggu animasi anak seperti carousel/sorotan.
- Carousel baru menghitung interval baca 6 detik setelah preview HP selesai
  muncul. Klik, keyboard, serta swipe manual tetap dapat mendahului interval.
- Demo menunggu daftar langkah dan HP siap sebelum menjalankan timeline ketik.
  Nominal awal Rp0, bukan nominal penuh yang kemudian berkedip kembali ke Rp0.
  Mode statis/reduced motion dan kegagalan decode tetap menampilkan nominal penuh.
- Efek garis Target Aman dan tulisan tangan penutup menunggu kemunculan teks
  di bagiannya selesai. Dekorasi tetap diamati saat ditunda; hanya berjalan saat
  terlihat, tidak menyembunyikan nominal maupun konten dasarnya.
- Interaksi manual menyelesaikan kemunculan terkait. Klik diproses setelah target
  klik ditentukan, sehingga gerakan tidak memindahkan tombol saat pointer-down.
  Perintah play manual tidak terbalik menjadi pause karena event kemunculan.
- Reduced motion menyelesaikan kemunculan dan meniadakan gerak dekorasi tanpa
  mengulangnya saat preferensi dikembalikan. Fallback tanpa skrip motion/observer
  tidak menahan carousel atau demo karena status kemunculan tidak disyaratkan.
- Tidak mengubah HTML, copy, warna, font, aset, layout, atau angka contoh.
  Tidak menambah library, file produksi, timer, atau listener scroll.

Verifikasi task 3:

- `work/check-motion-handoff.cjs`: carousel tidak berganti selama kemunculan
  ditahan lebih dari 6 detik, lalu memperoleh interval baca penuh setelah selesai.
- Enam viewport lulus: demo menunggu kemunculan, mulai dari Rp0, beralih ke
  dampak dengan nominal benar, dan sorotan tetap sejajar. Screenshot desktop
  serta mobile diperiksa di `outputs/website-tests/motion-handoff/`.
- Klik carousel/play/langkah saat kemunculan masih ditahan tetap diproses.
  Dekorasi menunggu teks pada desktop/mobile, termasuk perubahan reduced motion.
- Regresi `work/check-workflow-controls.cjs`, `work/check-scroll-reveals.cjs`,
  `work/check-hero-paced.cjs`, dan `work/check-motion-details.cjs` lulus.
- Edge lokal digunakan karena koneksi browser dalam aplikasi belum tersedia.
  Pengujian menyeluruh/perangkat nyata tetap task 4. Belum ada push/publikasi.

## Verifikasi final: task 4

Tanggal: 1 November 2026 (Asia/Jakarta).

Temuan dan perbaikan terbatas pada `motion.js`:

- Pada viewport 667 x 320, syarat 35% dari preview HP yang tinggi tidak mungkin
  terpenuhi sehingga preview tetap transparan. Jika tinggi area yang tersedia
  tidak cukup, pemicu kini menerima perpotongan yang terlihat dengan viewport.
- Resize saat preview baru terlihat sebagian juga direproduksi: rasio dapat
  berubah tanpa melewati threshold observer. Setelah resize, hanya target yang
  belum muncul diamati ulang. Target yang selesai tidak mengulang animasinya.
- Tetap memakai observer yang sama; tidak menambah library, polling, timer,
  atau handler scroll. Copy, warna, aset, layout, dan angka contoh tidak diubah.

Hasil pemeriksaan:

- `work/check-final-motion.cjs`: 24 pemeriksaan lulus, terdiri dari 13 viewport,
  2 kasus resize, 8 fallback, serta pemeriksaan pemutaran/timer saat di luar layar.
- Viewport: 1920x1080, 1440x900, 1366x768, 1024x768, 981x800, 980x800,
  768x1024, 600x900, 390x844, 320x568, 844x390, 667x320, 568x320.
- Scroll cepat/bolak-balik, kemunculan satu kali, tombol, menu mobile, contoh
  Rp1.000.000, geometri bingkai, teks tidak terpotong, dan duplikasi ID diuji.
- Fallback: JS dimatikan, semua JS diblokir, masing-masing modul motion/demo/
  carousel diblokir, IntersectionObserver tidak tersedia, API animasi tidak
  tersedia, serta animasi CSS dinonaktifkan. Konten dan CTA tetap terlihat;
  FAQ native dapat digunakan. Reduced motion awal dan perubahan preferensi diuji.
- Sembilan rangkaian regresi lulus: hero, hero-paced, motion-details, skenario
  demo, kontrol demo, timeline ketikan, handoff motion, carousel, serta FAQ/
  privasi/navigasi. FAQ dan privasi diuji bersama beranda dalam 27 kombinasi
  halaman/viewport; isi utama kebijakan tetap identik dan tautan lokal valid.
- Fixture FAQ lama memakai checkpoint sebelum rekonstruksi, bukan HEAD yang
  sekarang sudah berisi FAQ terpisah. Tidak mengubah konten agar cocok dengan tes.
- Matrix akhir dan pemeriksaan resize/sorotan diulang setelah perbaikan terakhir.
  Syntax keempat file JS dan `git diff --check` lulus.

Bukti: `outputs/website-tests/final-motion/` dan
`outputs/website-tests/final-motion-suite/`, di luar repo website. Runner:
`work/run-final-motion-suite.cjs`. Screenshot desktop/mobile/landscape diperiksa.

Batas: memakai Edge lokal dengan emulasi viewport dan sentuh. Koneksi Browser
dalam aplikasi gagal diinisialisasi. Belum diuji pada HP fisik, Safari/Firefox,
atau jaringan seluler nyata; hasil ini bukan klaim FPS/performa perangkat nyata.
Klik CTA diuji di halaman tanpa mengirim aksi ke Google Play. Tidak ada push,
publikasi, atau build APK/AAB. Checkpoint Git tetap tersedia.
