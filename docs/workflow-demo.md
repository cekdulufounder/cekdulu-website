# Demo Cara Kerja

Tanggal: 31 Oktober 2026 (Asia/Jakarta).
Status: task 1-3 selesai, visual, animasi, dan kontrol manual tersedia.
Pembaruan: dua contoh (aman/melewati batas) tersedia; melewati batas menjadi
contoh awal saat JavaScript aktif. Rincian tambahan ada di bagian terakhir.
Rangkaian ini adalah tambahan setelah rekonstruksi beranda task 1-4.
Pengujian final website (task 5 sebelumnya) menunggu seluruh demo selesai.

## Alur yang disepakati

- Satu bingkai HP, bukan tiga HP atau carousel kedua.
- Ketik nominal: angka bertahap Rp2, Rp25, Rp250, Rp2.500, Rp25.000.
- Area nominal terangkat dan membesar sedikit, lalu kembali normal.
- Lihat dampak: ganti ke screenshot reflektif Aman dengan sisa Rp39.000.
- Putuskan: sorot Batal dan Lanjut Bayar tanpa otomatis memilih salah satunya.
- Kotak sorotan pada langkah teks berpindah bersamaan dengan layar HP.
- Satu putaran otomatis saat bagian terlihat; berhenti di Putuskan.
- Langkah bisa dipilih manual, yang menghentikan autoplay.
- Hentikan proses saat bagian keluar layar atau tab tersembunyi.
- Hormati reduced motion. Tidak menambah video, library, atau layanan.
- Carousel hero tetap terpisah dan tidak diubah.

## Aset dan konsistensi nominal

Gunakan screenshot asli tanpa mengubah file bitmap:

- `assets/app-home.jpg`, 762 x 1536: ruang Rp64.000, terpakai Rp36.000.
- `assets/reflection-safe.jpg`, 762 x 1536: ruang Rp39.000, terpakai Rp61.000.
- Contoh pembelian Rp25.000: 64.000 - 25.000 = 39.000;
  36.000 + 25.000 = 61.000. Batas awal hari Rp100.000.

Nominal bergerak merupakan lapisan HTML di atas screenshot halaman utama,
bukan hasil merekam atau mengubah aplikasi Android. Caption menandai contoh.
Jangan menambahkan pengeluaran kedua atau mengeksekusi transaksi sungguhan.

## Implementasi task 1

- `index.html`: bungkus langkah dan figure dalam `[data-workflow]`.
- `workflow.css`: layout terpisah yang hanya dimuat beranda.
- Desktop: tiga langkah vertikal di samping satu HP; <=760 px disusun ke bawah.
- Bingkai tetap mengikuti rasio screenshot 762 / 1536, lebar maksimal 284 px.
- Adegan input tampil, adegan hasil dan sorotannya memakai `hidden`.
- Lapisan nominal menampilkan Rp25.000 sebagai fallback statis yang terbaca.
- Tidak menambahkan timer, event handler, tombol semu, animasi, atau autoplay.
- Gambar lazy-loaded dan memiliki dimensi eksplisit. Aset yang sama juga sudah
  dipakai hero sehingga dapat menggunakan cache yang sama.

Titik penghubung untuk task berikutnya:

| Elemen | Hook / posisi relatif pada layar |
| --- | --- |
| Kontainer | `data-workflow`, `data-phase="input"` |
| Tiga langkah | `data-workflow-step="0"`, `1`, `2` |
| Dua adegan | `data-workflow-scene="input"`, `result` |
| Lapisan nominal | `data-workflow-amount`, `data-workflow-amount-text` |
| Kotak nominal | kiri 8%, atas 45.9%, lebar 84%, tinggi 8.3% |
| Sorotan hasil | `data-workflow-focus="impact"`: kiri 5%, atas 20%, lebar 90%, tinggi 13% |
| Sorotan keputusan | `data-workflow-focus="decision"`: kiri 5%, atas 90.2%, lebar 90%, tinggi 7.7% |

Pembesaran `scale(1.12)` diuji muat di dalam layar pada semua lebar uji,
tetapi belum diterapkan pada tampilan publik task 1. Koordinat mengikuti aset
ini; jangan mengganti screenshot dengan rasio/potongan lain tanpa memeriksanya.

## Verifikasi task 1

- `work/check-workflow-visual.cjs` lulus pada 1440, 1024, 768, 600, 390, 320 px.
- Rasio layar stabil, nominal tidak terpotong, tidak ada overflow horizontal,
  tetap satu bingkai dan tiga langkah, serta tidak ada animasi pada fondasi ini.
- Adegan input dan hasil termuat. Sorotan hasil/keputusan serta pembesaran
  diperiksa melalui perubahan DOM khusus tes, bukan kontrol publik.
- Screenshot desktop, mobile, hasil, dan keputusan diperiksa visual.
- Hasil: `outputs/website-tests/workflow-task1/` di luar repo website.
- Pemeriksaan memakai Edge headless lokal setelah koneksi browser dalam aplikasi
  gagal saat inisialisasi. Tidak ada error JavaScript dalam tes.
- Tidak mengubah carousel hero, FAQ, copy Untuk Siapa, atau Kebijakan Privasi.
- Tidak ada push atau publikasi.

## Sisa pekerjaan

- [x] Task 1: visual HP, aset, lapisan nominal, dan area sorotan.
- [x] Task 2: animasi mengetik, pembesaran, perpindahan layar dan sorotan langkah.
- [x] Task 3: kontrol manual, satu putaran, lifecycle viewport/tab, reduced motion.
- [ ] Task 4: pengujian dan perapian seluruh demo pada desktop/mobile.

Pada task 2-4, pastikan langkah aktif dan HP dapat dibaca bersamaan pada HP.
Fondasi task 1 masih menampilkan ketiga deskripsi sebagai fallback tanpa JS;
saat demo aktif, susun label ringkas/deskripsi aktif jika dibutuhkan agar
animasi tidak berjalan saat bagian teks atau HP berada jauh di luar viewport.

Sesudah empat task ini selesai, lanjutkan task 5 verifikasi final website.

## Implementasi dan verifikasi task 2

- `workflow.js` menjalankan timeline terbatas sekitar 7,8 detik, bukan interval
  berulang. Contoh dimulai Rp0 lalu Rp2, Rp25, Rp250, Rp2.500, Rp25.000.
- Kotak nominal membesar 1,12 kali dengan `transform`, dengan redup transparan
  pada screenshot di sekelilingnya. Setelah itu kotak kembali normal.
- Pada 3,1 detik, adegan berganti ke hasil Rp39.000 melalui transisi opacity;
  langkah kedua dan area angka hasil disorot. Pada 5,6 detik, sorotan berpindah
  ke langkah ketiga dan area Batal/Lanjut Bayar. Tidak ada pilihan yang ditekan.
- Kotak langkah memakai warna mint dan garis hijau tipis. Border dicadangkan
  sejak awal supaya perubahan sorotan tidak menggeser layout.
- Ukuran bingkai tetap, dua gambar didekode sebelum animasi dimulai. Pergantian
  tidak menampilkan gambar kosong saat decode belum selesai.
- Mobile yang sudah mendapat peningkatan JS menampilkan tiga label ringkas di
  atas HP 244 px agar dapat terlihat bersama. Tanpa JS, tiga deskripsi lengkap
  dan nominal Rp25.000 tetap tersedia sebagai fallback statis.
- Penjaga dasar viewport/tab dan reduced motion sudah dipasang agar animasi
  task 2 tidak berjalan di latar belakang; kontrol manual dan perapian lifecycle
  tetap dilanjutkan pada task 3. Jika IntersectionObserver tidak tersedia atau
  decode gagal, tidak ada timer autoplay baru yang dipaksakan.
- `data-playback`: idle, running, paused, complete, atau unavailable.
  `data-phase`: input, impact, decision. `data-zoom`: true/false.
- Animasi otomatis baru berjalan saat >=80% area demo masuk viewport dengan
  ruang header 84 px. Keluar area atau tab tersembunyi menjeda sisa waktu,
  bukan mempercepat semua tahap ketika kembali. Selesai satu putaran tidak diulang.
- Reduced motion awal menampilkan contoh statis tanpa autoplay atau pembesaran.
  Perubahan ke reduced motion di tengah timeline menghentikan animasi dan
  menampilkan keputusan akhir tanpa pembesaran. Interaksi manual belum tersedia.
- `work/check-workflow-animation.cjs` lulus di 1440, 1024, 768, 600, 390, 320 px:
  urutan keenam nominal, sinkronisasi fase/langkah, pembesaran tetap muat,
  bingkai stabil, tidak ada teks terpotong atau overflow, satu putaran, serta
  tidak ada error JavaScript. Jeda/lanjut karena viewport, reduced motion awal,
  dan fallback tanpa JS juga lulus.
- Screenshot mengetik desktop/mobile, hasil 320 px, dan keputusan 390 px
  diperiksa. Hasil: `outputs/website-tests/workflow-task2/` di luar repo website.
- `node --check workflow.js` dan `git diff --check` lulus.
- Tidak mengubah carousel hero, screenshot asli, FAQ, isi privasi, atau copy
  Untuk Siapa. Tidak ada library baru, push, atau publikasi.
- Tes task 1 adalah laporan fondasi statis; tes task 2 menjadi acuan animasi.
  Task 4 tetap menguji breakpoint/landscape, pembesaran teks, dan integrasi penuh.

## Implementasi dan verifikasi task 3

- Ketiga judul langkah menjadi tombol native. Area ketuk mencakup seluruh baris
  melalui pseudo-element, tanpa mengubah copy atau membuat tiga bingkai HP.
- Memilih langkah menghentikan autoplay dan menampilkan cuplikan akhir tahap
  itu. Ketik nominal secara manual menampilkan Rp25.000; gunakan putar ulang
  untuk melihat urutan mengetiknya lagi.
- Kontrol ikon jeda/lanjut dan putar ulang berada di samping caption. Ikon
  putar ulang memakai `assets/rotate-ccw.svg` dari lucide-static 0.468.0 (ISC).
- Kontrol memiliki nama aksesibel, tooltip, ukuran tetap, dan focus-visible.
  Tombol langkah mendukung Enter/Space native, panah, Home/End, aria-pressed,
  serta deskripsi yang terhubung ke tiap langkah.
- Live region hanya mengumumkan pilihan manual/reset, bukan setiap digit
  atau perubahan otomatis. Tanpa JS, kontrol tersembunyi dan langkah disabled
  sehingga contoh statis tetap dapat dibaca.
- Pilihan manual tetap bertahan ketika pengguna menggulir keluar lalu kembali.
  Putar ulang/reset dilakukan hanya atas perintah pengguna; tidak ada loop baru.
- Autoplay tetap memerlukan >=80% area terlihat. Putar eksplisit boleh berjalan
  ketika bagian hanya terlihat sebagian, sehingga tetap bisa dipakai di landscape
  pendek. Sepenuhnya keluar viewport tetap menjeda.
- Timer dijeda saat visibilitychange/pagehide dan dilanjutkan secara aman saat
  terlihat/pageshow; pilihan manual dan status selesai tidak direset.
- Reduced motion memungkinkan pemilihan tahap statis. Putar ulang hanya reset
  ke tahap pertama; tombol animasi dinonaktifkan. Mengaktifkan reduced motion
  saat berjalan mempertahankan tahap yang sedang dilihat dengan nominal penuh
  dan tanpa pembesaran (menggantikan perilaku task 2 yang langsung ke keputusan).
- Decode gambar memakai satu promise bersama. Token operasi memastikan pilihan
  terbaru menang ketika klik/replay terjadi cepat selama decode berlangsung.
  Kegagalan decode mempertahankan fallback dan menonaktifkan kontrol.
- `data-playback="manual"` menandai jeda pilihan pengguna; `paused` adalah jeda
  viewport/tab. Tidak menambah library atau interval yang berjalan terus.

Tes task 3:

- `work/check-workflow-controls.cjs` lulus pada 1440, 1024, 768, 600, 390,
  320 px, serta 844 x 390 px. Pemilihan tahap, keyboard, area ketuk baris penuh,
  tidak ada overflow/teks terpotong, dan tidak ada error JavaScript diuji.
- Jeda/lanjut, putar ulang sesudah selesai, pilihan manual setelah scroll,
  perubahan reduced motion, decode lambat/gagal, serta fallback tanpa JS lulus.
- visibilitychange dan pagehide/pageshow diuji melalui simulasi event browser;
  ini bukan klaim pengujian BFCache pada seluruh browser/perangkat nyata.
- Ketukan touch native pada emulasi mobile serta putar eksplisit di landscape
  pendek juga lulus. Screenshot desktop dan mobile diperiksa.
- Regresi `work/check-workflow-animation.cjs` tetap lulus di enam ukuran layar:
  urutan angka, sinkronisasi, satu putaran, frame stabil, viewport pause/resume,
  reduced motion awal, dan fallback tanpa JS.
- Hasil kontrol: `outputs/website-tests/workflow-task3/`, di luar repo website.
- `node --check workflow.js` dan `git diff --check` lulus. Carousel hero, screenshot
  asli, FAQ, copy Untuk Siapa, dan isi Kebijakan Privasi tidak diubah.
- Tidak ada push atau publikasi. Task 4 demo dan task 5 final website masih menunggu.

## Tambahan: contoh melewati batas (riwayat, diganti 1 November 2026)

Pengguna meminta manfaat saat melewati batas juga diperlihatkan. Tiga langkah
tetap sama, dengan dua opsi pada segmented control native radio:

- **Masih aman**: pembelian Rp25.000, sisa Rp39.000, total terpakai Rp61.000.
- **Melewati batas** (awal): pembelian Rp250.000, total terpakai Rp286.000,
  Hasil Terjaga Harian dipakai Rp114.500, ruang harian berikutnya Rp97.140
  dari Rp100.000 untuk 25 hari.

Angka ilustrasi diperiksa: ruang hari ini Rp64.000, terpakai sebelumnya Rp36.000.
Kelebihan Rp186.000 ditutup hasil terjaga Rp114.500; sisa Rp71.500 dibagi 25 hari
sehingga ruang harian turun Rp2.860 menjadi Rp97.140. Ini konsistensi contoh
dengan screenshot asli, bukan implementasi ulang mesin hitung aplikasi.

- Gunakan `assets/reflection-over-limit.jpg` asli (762 x 1536). Tidak ada bitmap
  baru atau penyuntingan screenshot. Carousel hero tidak diubah.
- Pilihan contoh berada di atas demo, tanpa menambah langkah keempat atau HP kedua.
- Pergantian contoh mengulang timeline saat area demo terlihat; reduced motion
  hanya reset statis. Nominal, caption, alt gambar, dan checked radio diselaraskan.
- Digit memakai Intl.NumberFormat id-ID. Contoh aman berhenti di Rp25.000;
  contoh melewati batas menambahkan digit terakhir Rp250.000 pada 2 detik.
- Sorotan dampak melewati batas memakai garis kuning di kiri 5%, atas 19%,
  lebar 90%, tinggi 16%, mencakup perubahan angka dan jumlah hari.
- Versi aset dan token operasi mencegah decode/klik lama mengubah contoh terbaru.
  Kontrol lama tetap berfungsi; hanya hasil sesuai contoh terpilih yang ditampilkan.
- Tanpa JS, contoh aman Rp25.000 yang sudah ada tetap menjadi fallback statis,
  dan pilihan skenario tidak ditampilkan.

Verifikasi tambahan:

- `work/check-workflow-scenarios.cjs` lulus pada 1440, 1024, 768, 600, 390,
  320 px: kedua contoh, gambar/nominal/caption, radio keyboard, posisi sorotan,
  pergantian saat decode lambat, dan pergantian ketika autoplay sedang berjalan.
- Screenshot kedua contoh pada desktop dan mobile diperiksa. Hasil berada di
  `outputs/website-tests/workflow-scenarios/`, di luar repo website.
- Regresi kontrol `work/check-workflow-controls.cjs` lulus tujuh ukuran layar
  dengan contoh awal baru, termasuk touch dan landscape. Fixture animasi
  `work/check-workflow-animation.cjs` disesuaikan ke nominal awal Rp250.000.
- `node --check workflow.js` dan `git diff --check` lulus. Tidak ada push atau publikasi.
- Task 4 demo dan task 5 final website tetap belum ditandai selesai.

## Screenshot melewati batas terbaru: 1 November 2026

- Pengguna mengonfirmasi pembelian Rp1.000.000 dan memberikan ulang file
  `Downloads/Melewati batas.PNG` (424 x 888). File disalin utuh menjadi
  `assets/reflection-over-limit-current.png`, tanpa mengubah piksel atau angka.
  Dipakai di carousel hero dan hasil simulasi Cara Kerja.
- Contoh ini adalah pembayaran pertama: ruang hari ini Rp100.000, sebelumnya
  belum ada pengeluaran. Sisa Rp900.000 memakai hasil terjaga Rp400.000;
  Rp500.000 tersisa dibagi 25 hari, sehingga Rp100.000 menjadi Rp80.000/hari.
- Keadaan awal ditampilkan dengan overlay HTML pada panel uang dan pesan di
  gambar input yang sudah ada. Contoh Aman tetap memakai tampilan asli
  Rp64.000/terpakai Rp36.000 dan pembelian Rp25.000. Screenshot hasil tidak diedit.
- Urutan ketikan mengikuti skenario: Rp1 sampai Rp1.000.000 untuk melewati
  batas, Rp2 sampai Rp25.000 untuk Aman. Rp1.000.000 tercapai pada 2250 ms;
  zoom berakhir 2550 ms, dampak muncul 3100 ms, putusan 5600 ms, selesai 7800 ms.
- Rasio bingkai tetap. Gambar hasil memakai `object-fit: contain`; sorotan
  dampak disesuaikan ke atas 15.5%/tinggi 14.5%, putusan 91%/tinggi 7.1%.
- Alt, caption, nominal, dan fixture pengujian diperbarui sesuai contoh baru.
  Tidak mengubah mesin perhitungan aplikasi, motion scroll, atau navigasi.
- Kedua contoh, perpindahan keyboard, decode lambat, dan pergantian saat
  autoplay lulus di enam ukuran layar lewat `work/check-workflow-scenarios.cjs`.
  Hasil dan screenshot: `outputs/website-tests/workflow-scenarios/`.
- `work/check-workflow-animation.cjs` lulus enam viewport: seluruh digit,
  perpindahan fase, sorotan, jeda viewport, reduced motion, dan fallback tanpa JS.
  `work/check-workflow-controls.cjs` lulus tujuh viewport beserta kontrol manual,
  keyboard/sentuh, decode lambat, dan kegagalan gambar. File hasil sama persis
  dengan sumber pengguna (hash SHA-256 diverifikasi).
- Galeri diuji pada 1440, 390, 320 px; gambar baru utuh dan bingkai tetap stabil.
  Pemeriksaan memakai Edge lokal karena browser dalam aplikasi gagal terhubung.
  Tidak ada push/publikasi atau build aplikasi.
