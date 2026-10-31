# Rekonstruksi website: menjaga uang tanpa ribet

Tanggal: 31 Oktober 2026 (Asia/Jakarta).
Status: task 1-4 selesai. Menunggu verifikasi final pada task 5.

Tambahan terbaru: demo visual/animasi Cara Kerja mengikuti
[workflow-demo.md](workflow-demo.md). Pengujian final task 5 menunggu empat
task tambahan tersebut selesai; carousel hero tetap dipertahankan.
Dokumen ini menggantikan rancangan editorial di `content-structure.md`.
Belum ada perubahan tampilan, publikasi, atau push ke GitHub pada task 1.

## Checkpoint dan batas pekerjaan

- Kondisi awal bersih pada branch `main`, sama dengan `origin/main`.
- Commit baseline: `9ded4526cbf2a75fb56bcbd3a9d0e6200c742b8d`.
- Tag lokal: `checkpoint/website-before-simplicity-2026-10-31`.
- Checkpoint mencakup HTML, CSS, JS, aset, carousel, dan dokumen versi sebelumnya.
- Pertahankan warna navy, bagian terang, hijau/cyan, font, dan gaya tombol.
- Pertahankan carousel, kontrol manual, jeda, swipe, dan reduced motion.
- Pertahankan foto ilustrasi di bagian Untuk Siapa dan aset relevan lainnya.
- Tidak mengubah isi Kebijakan Privasi, aplikasi Android, atau koneksi Supabase.
- Tidak menambah framework, pelacak, layanan, atau fitur interaktif baru.
- Push hanya setelah hasil disetujui pengguna.

## Arah utama

Manfaat utama: **Jaga uang bulananmu tetap terkendali, tanpa ribet.**

Yang dijaga adalah uang bulanan; ruang harian merupakan cara untuk menjaganya.

Kesederhanaan adalah alasan memilih CekDulu. Perhitungan dampak adalah cara
aplikasi membantu, bukan materi yang harus dijelaskan panjang di beranda.

- "5 detik" adalah ajakan mengambil jeda sebelum bayar, bukan jaminan stopwatch.
- "Tiga langkah" adalah ketik nominal, lihat dampak, putuskan.
- Tidak perlu memilah kategori atau menyediakan sesi rekap tiap malam.
- Pengguna tetap perlu memasukkan nominal agar posisi uang mengikuti penggunaan.
- Pengaturan dilakukan pada awal setiap siklus, bukan sekali untuk selamanya.
- Jangan menyebut semua aplikasi lain mewajibkan kategori atau rekap malam.
- Jangan mengklaim bebas mencatat sama sekali, pasti hemat, atau pasti membentuk kebiasaan.

## Alur beranda

Enam bagian utama saja, kemudian footer:

1. Hero (`#top`).
2. Penjelasan aplikasi (`#tentang`).
3. Cara kerja tiga langkah (`#cara-kerja`).
4. Target Aman (`#fitur`, ID lama dipertahankan).
5. Untuk Siapa (`#untuk-siapa`).
6. CTA download (`#download`).

Tidak ada bagian terpisah untuk tiga pengaturan awal, contoh perhitungan,
daftar fitur harian, widget, atau privasi ringkas. Informasi yang masih diperlukan
masuk FAQ. Hilangkan pengulangan contoh angka dan daftar status panjang.

## 1. Hero

Identitas/H1: **CekDulu**

Tagline: **Sebelum Bayar**

Kalimat utama:

**Jaga uang bulananmu tetap terkendali, tanpa ribet.**

Penjelasan:

Tanpa repot memilah kategori atau merekap pengeluaran tiap malam.
Cukup jeda 5 detik sebelum bayar.

Penegas:

**Ketik nominal. Lihat dampak. Putuskan.**

CTA utama: **Unduh di Google Play**.

CTA sekunder: **Lihat Cara Kerja** -> `#cara-kerja`.

Tautan scroll: **Kenali CekDulu lebih dulu** -> `#tentang`.

Catatan implementasi:

- Jangan menambahkan lagi tiga poin manfaat yang mengulang copy di atas.
- Tetap gunakan identitas CekDulu dan aset produk nyata di viewport pertama.
- Carousel yang ada tetap di hero sebagai bukti visual produk sejak awal.
  Cara Kerja tidak menambah galeri kedua atau media hero baru.
- Tidak menambahkan klaim bahwa aplikasi memproses semuanya tepat lima detik.

## 2. Penjelasan aplikasi

Judul:

**Ingin uang terkendali, tapi nggak mau ribet?**

Pembuka perbandingan cara pakai:

**Biasanya kamu mencatat setelah uang keluar. Di CekDulu, kamu melihat dampaknya sebelum membayar.**

Isi:

CekDulu membantu menjaga uang bulananmu lewat keputusan kecil sebelum bayar.
Tentukan uang yang bisa digunakan dan sampai kapan harus bertahan. CekDulu
membaginya menjadi ruang harian, lalu menunjukkan dampak setiap pembelian
terhadap hari-hari berikutnya dan rencana yang ingin kamu jaga.

Catatan implementasi: dua paragraf pendek, tanpa tabel atau daftar fitur tambahan.
Perbandingan menonjolkan fokus CekDulu, bukan klaim semua pesaing hanya mencatat.

## 3. Cara kerja

Judul:

**Cukup tiga langkah sebelum bayar.**

### 01. Ketik nominal

Buka CekDulu dan masukkan jumlah yang ingin kamu bayar.

### 02. Lihat dampak

Masih aman? Atau ruang untuk hari berikutnya perlu disesuaikan?
CekDulu menunjukkan dampaknya sebelum kamu lanjut.

### 03. Putuskan

Lanjut beli atau tunda dulu. Keputusan tetap di tanganmu.

Catatan singkat:

**Cek dulu, baru bayar. Pembayaran tetap dilakukan di tempat kamu bertransaksi.**

Catatan implementasi:

- Gunakan satu carousel yang ada, tanpa galeri kedua atau simulasi baru.
- Jangan mengulang tiga langkah menjadi paragraf pembuka panjang.
- Tidak perlu contoh Rp100.000/Rp25.000 terpisah atau penjelasan semua status.
- Makna konfirmasi pembayaran dan akurasi data dijelaskan di FAQ.

## 4. Target Aman

Judul:

**Mau ada uang yang tetap tersisa? Bisa.**

Isi:

Untuk jalan-jalan, self reward, atau sekadar ditabung. Tentukan jumlah yang ingin
kamu jaga sebagai **Target Aman**. CekDulu memperhitungkannya dalam ruang harianmu.

Penegas:

**Opsional. Tanpa target pun tetap bisa mulai.**

Catatan kecil:

Target Aman membantu perhitungan. CekDulu tidak memindahkan atau menyimpan uangmu.

Visual: pertahankan ilustrasi Target Aman Rp600.000 / Jalan-jalan yang sudah ada.
Contoh tujuan cukup menjadi label ringkas, tidak perlu empat kartu berparagraf
dan penjelasan tambahan yang mengulang manfaat.

## 5. Untuk Siapa

Judul:

**Buat kamu yang ingin menjaga uang, tapi tidak mau ribet.**

Tiga situasi:

- **Keseharian sudah cukup sibuk.** Tidak ingin menghabiskan waktu mengurus kategori dan membaca banyak laporan.
- **Ingin cara yang lebih praktis.** Cukup ketik nominal, lihat dampak, lalu putuskan sebelum bayar.
- **Ingin belanja lebih tenang.** Tetap menikmati pilihan hari ini sambil menjaga rencana berikutnya.

Pertahankan foto ilustrasi dan catatan tulisan tangan yang ada:

> Bukan soal berapa yang kamu beli, tapi bagaimana kamu tetap sampai tujuan.

Jangan menambah daftar profesi, usia, atau paragraf penutup lain.

## 6. CTA penutup

Judul:

**Mudah dimulai. Membantu sejak hari pertama.**

Isi:

Unduh sekarang dan rasakan bedanya.

CTA: **Unduh di Google Play**.

Tidak memakai eyebrow "Mulai sekarang" atau keterangan Android/login di bawah
tombol. Catatan tulisan tangan ditampilkan kembali: **Uang Kendali. Rencana
Terjaga. Hidup Lebih Tenang.** Di desktop berada di kanan, di mobile di bawah.
Tidak menambahkan masa trial atau janji hasil keuangan tertentu.

## Navigasi, footer, dan FAQ (task 4)

Navigasi utama diringkas: **Cara Kerja**, **Target Aman**, **Untuk Siapa**,
dan tombol **Unduh**. Logo menuju beranda. Hindari menu Fitur yang terlalu umum.

Footer tetap menyediakan:

- FAQ -> `faq.html`.
- Kebijakan Privasi -> `privacy.html`.
- Bantuan -> `mailto:cekdulu.help@gmail.com`.
- Instagram -> `https://www.instagram.com/cekdulu_5detik/`.
- TikTok -> `https://www.tiktok.com/@cekdulu5detik`.
- Google Play -> `https://play.google.com/store/apps/details?id=com.cekdulu.sebelumbayar`.

Pindahkan 12 FAQ yang ada ke halaman tersendiri, bukan dihapus. Tambahkan jawaban
singkat "Apakah tetap perlu memasukkan pengeluaran?":

> Ya. Masukkan nominal dan konfirmasikan jika jadi membayar, supaya kondisi uang
> yang ditampilkan mengikuti penggunaanmu. Kamu tidak perlu memilah kategori
> atau menunggu malam untuk merekap. Jika sempat lupa beberapa hari, kamu bisa
> memperbarui total pengeluaran untuk periode yang terlewat.

Informasi privasi ringkas dan penjelasan pengaturan awal yang relevan boleh
digabungkan ke jawaban FAQ. Jangan mengubah ketentuan, status backup, atau
menjanjikan fitur yang belum tersedia.

Sinkronkan tautan navigasi/footer `privacy.html` dan halaman FAQ tanpa mengubah
isi kebijakan. Tangani tautan `#bantuan` lama ke FAQ dan tinjau anchor bagian
yang dihapus agar tidak meninggalkan tautan mati. Jangan menambah redirect
hosting baru tanpa kebutuhan.

Metadata rencana:

- Title: `CekDulu - Jaga Uangmu Tetap Terkendali, Tanpa Ribet`.
- Description: `Tanpa repot memilah kategori atau merekap tiap malam. Cukup jeda 5 detik sebelum bayar: ketik nominal, lihat dampak, lalu putuskan bersama CekDulu.`
- Tidak mengubah domain, DNS, hosting, atau pengaturan GitHub Pages pada rangkaian ini.

## Handoff dan verifikasi

- [x] Task 1: checkpoint lokal dan finalisasi naskah enam bagian.
- [x] Task 2: hero dan penjelasan aplikasi sesuai copy di atas.
- [x] Task 3: ringkas Cara Kerja, Target Aman, dan Untuk Siapa; hilangkan bagian berulang.
- [x] Task 4: CTA, navigasi, footer, halaman FAQ, dan tautan lama.
- [ ] Task 5: pengujian desktop/mobile dan laporan hasil, tanpa push sebelum persetujuan.

Task 5 mencakup lebar 320/390/768/1024/1440 px, layout teks dan tombol,
carousel otomatis/manual/reduced motion, menu mobile dan keyboard, tautan lokal,
aset, Google Play, footer, FAQ, serta pemeriksaan isi Kebijakan Privasi tetap utuh.
Tidak perlu menjalankan ulang seluruh tes UI pada task 1 karena HTML/CSS/JS
belum berubah. Periksa `git diff --check` dan target checkpoint.

## Hasil task 2

- Hero memakai pesan "Jaga uangmu tetap terkendali, tanpa ribet."
- Ajakan jeda 5 detik diberi baris tersendiri dan angka ditegaskan.
- Tiga poin ikon lama diganti satu kalimat tiga langkah di bawah tombol.
- Penjelasan aplikasi menjadi dua paragraf sesuai naskah bagian 2.
- Tema, carousel, aset produk, tautan CTA, dan bagian setelah pengenalan tetap.
- Hanya `index.html` dan `hero.css` berubah untuk tampilan.
- Tidak mengubah metadata, menu, FAQ, atau bagian task 3-4 lebih dulu.
- Pemeriksaan `work/check-hero.cjs` lulus pada 1440, 1366, 1024, 768,
  600, 390, dan 320 px: copy sesuai, aset hero aktif termuat, tidak ada overflow
  horizontal, anchor pengenalan/cara kerja berfungsi, menu mobile bisa dibuka
  dan ditutup dengan Escape, panah carousel maju/mundur berfungsi.
- Pengujian menggunakan Edge headless lokal karena koneksi browser dalam aplikasi
  gagal saat inisialisasi. Tidak ada error JavaScript dalam pengujian.
- Screenshot desktop 1440 px dan mobile 390 px (hero dan pengenalan) diperiksa.
- Halaman privasi dicek pada 390 px tanpa overflow; berkas dan isi tidak diubah.
- Hasil dan screenshot: `outputs/website-tests/simplicity-task2/` di luar repo website.
- Pengujian penuh carousel dan seluruh halaman tetap menjadi bagian task 5.
- Belum ada push ke GitHub atau publikasi.

## Hasil task 3

- Cara Kerja menjadi tiga langkah dan satu catatan pembayaran; contoh angka
  serta penjelasan tiga status yang mengulang screenshot dikeluarkan.
- Target Aman memakai copy ringkas dan penegas opsional. Ilustrasi Rp600.000 /
  Jalan-jalan tetap. Empat kartu tujuan diganti ikon dan label tanpa paragraf.
- Untuk Siapa memakai tiga situasi sesuai naskah; foto dan catatan tulisan tangan
  tetap. Paragraf pengantar, label situasi berulang, dan penutup lama dihilangkan.
- Bagian terpisah pengaturan awal, fitur harian/widget, dan privasi ringkas
  dikeluarkan dari beranda. Detail lama tetap tercatat di arsip naskah dan Git.
- FAQ, CTA penutup, menu, footer, serta carousel belum diubah pada task ini.
- Beranda sementara berisi tujuh section: enam bagian yang direncanakan ditambah
  FAQ lama. Task 4 memindahkan FAQ dan menangani tautan lama dari luar website.
- CSS hanya menyesuaikan jarak catatan, label tujuan, dan perataan teks Untuk Siapa.
  Tidak mengubah JS atau menambah aset/dependensi.
- `work/check-stories.cjs` lulus pada 1440, 1024, 768, 600, 481, 390, dan 320 px.
  Tidak ada overflow horizontal, ID ganda, tautan internal tanpa target, atau
  error JavaScript; langkah berjumlah tiga dan situasi pengguna berjumlah tiga.
- Tes memverifikasi FAQ, CTA, dan markup carousel tetap sama dengan baseline Git,
  serta seluruh isi `privacy.html` tetap identik (di luar format akhir baris).
- Aset ilustrasi, foto, dan ikon termuat pada section yang diuji. Screenshot
  Target Aman desktop/mobile, Untuk Siapa mobile, dan Cara Kerja desktop diperiksa.
- Regresi hero `work/check-hero.cjs` juga lulus di tujuh ukuran layar.
- Laporan/screenshot: `outputs/website-tests/simplicity-task3/` di luar repo website.
- `git diff --check` lulus. Tidak ada push atau publikasi.

## Hasil task 4

- Beranda sekarang memiliki tepat enam bagian. FAQ dipindahkan ke `faq.html`.
- Dua belas jawaban lama dipertahankan, ditambah tiga pertanyaan tentang
  pengaturan awal, memasukkan pengeluaran, serta rekening/data. Total 15 FAQ.
- Halaman FAQ memakai gaya yang sama, accordion native, tautan kembali ke
  beranda, kontak, menu, footer, dan skip link yang dapat digunakan dengan keyboard.
- CTA penutup memakai "Coba 7 hari. Mulai kebiasaan cek dulu." dan satu tombol
  Google Play, tanpa slogan kedua. Catatan Android/tanpa login tetap tersedia.
- Menu ketiga halaman disamakan: Cara Kerja, Target Aman, Untuk Siapa, Unduh.
  FAQ, Kebijakan Privasi, kontak, dan media sosial tersedia di footer.
- Title/description beranda mengikuti pesan baru. README mencantumkan FAQ.
- Isi `main` Kebijakan Privasi diverifikasi identik dengan baseline Git;
  perubahan `privacy.html` hanya menu dan tautan footer.
- Tautan lama `index.html#bantuan` diarahkan ke FAQ, `#privasi` ke Privacy Policy
  menggunakan `location.replace` agar tombol kembali tidak berputar. Tanpa JS,
  keduanya tetap memiliki target tautan yang terlihat di footer.
- Anchor lama `#mulai` tetap menuju pengenalan; `#pengalaman`, `#keseharian`,
  dan `#tampilan` menuju Cara Kerja melalui anchor nol-tinggi di HTML.
- Tidak ada interval baru, layanan, dependensi, perubahan hosting, atau push.

Verifikasi task 4:

- `work/check-simplicity-support.cjs` lulus 27 kombinasi: tiga halaman pada
  1440, 1024, 981, 980, 768, 600, 390, 320 px, dan 844 x 390 px.
- Tidak ada overflow horizontal, teks terpotong, ID ganda, atau tautan lokal
  tanpa halaman/target. Seluruh 12 FAQ lama dan isi kebijakan dibandingkan
  menggunakan DOMParser terhadap baseline Git.
- Menu mobile, Escape, fokus skip link, status navigasi aktif, navigasi antarhalaman,
  daftar isi privasi, keyboard accordion, dan seluruh 15 FAQ berjalan.
- Tautan lama diuji saat membuka URL dan saat hash berubah. FAQ native dan
  tautan fallback juga diuji dengan JavaScript nonaktif (reduced motion).
- Regresi hero `work/check-hero.cjs` lulus di tujuh ukuran layar.
- Screenshot CTA desktop/320 px serta FAQ desktop/390 px diperiksa.
- Hasil: `outputs/website-tests/simplicity-task4/` di luar repo website.
- Task 5 masih mencakup pengujian akhir carousel, pembesaran teks, audit aset,
  tautan eksternal, dan penyesuaian fixture tes lama yang mengacu struktur sebelum
  pemindahan FAQ. Tidak menganggap tes lama task 3/6 sebagai tes struktur baru.
