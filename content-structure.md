# Naskah dan struktur website CekDulu

Tanggal: 28 Oktober 2026.
Status: task 2 selesai; sumber copy untuk implementasi task 3-6.
Dokumen ini belum mengubah tampilan HTML.

## Arah editorial

Bantu pengunjung memahami manfaat, melihat cara kerja, mengenali kecocokan,
dan mengunduh CekDulu. Lengkapi informasi melalui contoh dan FAQ, bukan
paragraf panjang pada setiap bagian.

- Pertahankan tema navy, bagian terang, hijau/cyan, font dan tombol yang ada.
- Bahasa sehari-hari, hangat, tanpa menghakimi pengeluaran pengguna.
- Satu pesan utama per bagian; detail kondisi khusus masuk FAQ.
- Screenshot menjadi bukti visual produk, bukan bukti keberhasilan finansial.
- Tidak mengarang testimoni, jumlah pengguna, rating, atau angka penghematan.
- Tidak menjanjikan target pasti tercapai atau saldo rekening dibaca otomatis.
- Premium, login Google, dan backup akun tidak ditawarkan sebagai fitur tersedia.
- Catatan implementasi dalam dokumen ini bukan teks yang ditampilkan ke pengunjung.

## Navigasi dan urutan

| Menu | Target | Tujuan |
| --- | --- | --- |
| Beranda / logo | #top | Perkenalan |
| Cara Kerja | #cara-kerja | Cek sebelum membayar |
| Fitur | #fitur | Target Aman dan manfaat fitur |
| Untuk Siapa | #untuk-siapa | Situasi pengguna |
| FAQ | #bantuan | Jawaban praktis |
| Privasi | privacy.html | Kebijakan Privasi |
| Download di Google Play | URL Google Play | Halaman aplikasi |

Urutan scroll: hero, pengenalan CekDulu, cara kerja, Target Aman, tiga pengaturan awal,
Untuk Siapa, fitur harian/widget, privasi ringkas, FAQ, CTA penutup, footer.

Privasi dan kontak tersedia di footer. Navigasi Privacy Policy menuju
`index.html#...`. Pertahankan ID `bantuan` untuk tautan lama.
Menu mobile memuat tujuan yang sama.

## 1. Hero (#top)

Identitas utama / H1: **CekDulu**

Tagline: **Sebelum Bayar**

Kalimat manfaat yang disepakati:

**Cara mudah untuk mulai menjaga uangmu tetap terkendali.**

Penjelasan:

Lihat dampaknya sebelum bayar, agar kamu bisa belanja lebih tenang tanpa kehilangan kendali.

CTA utama: **Download di Google Play**

CTA sekunder: **Lihat Cara Kerja** -> #cara-kerja

Tiga poin pendukung:

- Cek sebelum bayar
- Mulai tanpa login
- Tetap pegang keputusanmu

Catatan visual opsional:

> Keputusan hari ini ikut menentukan ruang untuk hari berikutnya.

Visual: screenshot reflektif asli dengan angka terbaca. Brand CekDulu menonjol
pada viewport pertama. Situasi pengguna ditempatkan di bagian Untuk Siapa,
bukan tiga paragraf di atas hero.

## 2. Cara kerja (#cara-kerja)

Sebelum bagian ini, tampilkan pengenalan pada #tentang:

**Pagar keuangan sebelum kamu membayar.**

CekDulu Sebelum Bayar adalah aplikasi yang membantu kamu menjaga batas pengeluaran
harian. Jika sebuah pembelian melewati batas tersebut, CekDulu menunjukkan dampaknya
terhadap uang bulananmu, sehingga kamu bisa memutuskan dengan lebih tenang.

Link scroll bawah hero menuju pengenalan. CTA Lihat Cara Kerja tetap langsung
menuju #cara-kerja.

Judul: **Sebelum bayar, lihat apa yang berubah.**

Mau pesan makanan, belanja, atau membeli sesuatu yang sudah kamu incar?
Masukkan nominalnya untuk melihat dampaknya pada uang yang masih bisa digunakan.

### Ketik nominal

Buka CekDulu dan masukkan jumlah yang ingin kamu bayar.

### Lihat dampaknya

Periksa sisa Ruang Hari Ini. Jika nominalnya melewati batas, lihat pengaruhnya
pada Hasil Terjaga Harian atau ruang untuk hari-hari berikutnya.

### Putuskan

Lanjutkan jika sesuai kebutuhanmu, atau batalkan jika ingin menundanya.
Keputusan tetap di tanganmu.

Catatan setelah langkah:

**Mengecek nominal belum berarti mencatat pembayaran.** Kamu melihat dampaknya
lebih dulu, lalu memilih lanjut atau batal. Pembayaran sebenarnya tetap
dilakukan di tempat kamu bertransaksi.

| Status | Copy pendek |
| --- | --- |
| Aman | Penggunaan masih dalam batas harian yang dihitung CekDulu. |
| Mendekati batas | Ruang untuk pengeluaran hari ini mulai menipis. |
| Melewati batas | Pengeluaran melampaui ruang hari ini. Periksa dampaknya sebelum lanjut. |

Visual: input dan reflektif dari skenario yang sama. Jangan menetapkan persentase
ambang status tanpa pemeriksaan kode aplikasi.

## 3. Rencana dan Target Aman (#fitur)

Judul: **Mau sisihkan uang untuk sesuatu yang berarti buatmu?**

Jalan-jalan, sesuatu untuk diri sendiri, atau sekadar punya tabungan.
Tentukan jumlah yang ingin tetap ada di akhir siklus sebagai Target Aman.
CekDulu memperhitungkannya saat membagi ruang untuk kebutuhan sehari-hari.

Contoh tujuan, bukan input interaktif:

- **Self reward:** sesuatu yang sudah lama kamu inginkan.
- **Jalan-jalan:** rencana pergi yang ingin kamu siapkan.
- **Simpan:** uang yang ingin tetap tersisa.
- **Rencanamu sendiri:** beri nama tujuan yang berarti buatmu.

Setiap kali ingin membayar, kamu bisa melihat pengaruhnya terhadap ruang uangmu
dan rencana yang sedang dijaga.

**Belum punya target? Tetap bisa mulai.** Fokuskan siklusmu untuk membuat uang
cukup sampai pemasukan berikutnya.

Visual: Target Aman di drawer dengan nama tujuan terbaca.
Target Aman adalah bagian dari perhitungan, bukan pemindahan uang ke rekening
lain. Jangan menggambarkannya sebagai uang yang dijamin terkunci.

## 4. Pengaturan awal (#mulai)

Judul: **Mulainya cukup dengan tiga hal.**

Pembuka: Sesuaikan dengan kondisi uangmu sekarang.

### Dana Kendali

Uang yang biasa kamu pakai untuk kebutuhan sehari-hari di luar kebutuhan tetap.
Bukan seluruh gaji jika sebagian sudah disiapkan untuk kewajiban lain.

### Durasi Siklus

Tentukan sampai kapan uang ini harus bertahan, biasanya sampai sebelum gajian
atau pemasukan berikutnya. Tidak harus mengikuti tanggal awal dan akhir bulan.

### Target Aman

Jumlah yang ingin tetap ada di akhir siklus. Isi sesuai rencanamu, atau mulai
tanpa target jika yang terpenting adalah uang cukup sampai akhir periode.

Contoh ringkas, diberi label **Contoh saat memulai siklus**:

| Dana Kendali | Target Aman | Durasi | Ruang Harian awal |
| --- | --- | --- | --- |
| Rp3.000.000 | Rp600.000 | 30 hari | Rp80.000/hari |

Dari Rp3.000.000, kamu ingin menjaga Rp600.000. Sisa Rp2.400.000 dibagi untuk
30 hari, sehingga Ruang Harian awalmu Rp80.000.

Catatan: Ruang harian dapat menyesuaikan mengikuti pengeluaran dan perubahan siklus.

Contoh hanya menjelaskan pembagian awal, bukan simulasi seluruh kondisi,
pembulatan, atau pemulihan. Tidak perlu membangun kalkulator baru.

## 5. Untuk siapa (#untuk-siapa)

Judul: **Untuk kamu yang ingin belanja lebih tenang dan tetap punya kendali.**

CekDulu cocok untuk siapa pun yang ingin memahami dampak pembelian dan menjaga
rencana keuangannya.

Pembuka memakai foto ilustrasi perempuan dari belakang menghadap kota saat senja.
Catatan tulisan tangan: **Bukan soal berapa yang kamu beli, tapi bagaimana kamu
tetap sampai tujuan.** Tiga situasi pengguna berikut tetap berada di bawahnya.

### Ada rencana, tetapi uangnya habis duluan.

Saat pemasukan datang kamu sudah punya tujuan. Di tengah jalan, pengeluaran
sehari-hari membuat rencana itu kembali tertunda.

### Ingin membeli, tetapi belum yakin masih aman.

Kamu ingin tahu apakah pembelian ini masih menyisakan cukup ruang untuk
kebutuhan berikutnya.

### Yang penting cukup sampai pemasukan berikutnya.

Belum ada target khusus. Kamu hanya ingin lebih mudah melihat batas penggunaan
uang selama periode yang kamu tentukan.

Penutup:

Baik dari gaji, uang saku, maupun pemasukan lainnya, kamu bisa mulai dari uang
yang memang tersedia untuk kamu kendalikan.

Tiga situasi cukup; tidak perlu kartu tambahan berdasarkan profesi atau usia.

## 6. Fitur harian dan widget (#keseharian)

Judul: **Kondisi uangmu, lebih mudah terlihat.**

Setelah mulai, gunakan ringkasan ini untuk mengikuti perjalanan siklusmu.

| Fitur | Penjelasan singkat |
| --- | --- |
| Ruang Hari Ini | Acuan uang yang masih bisa kamu gunakan hari ini berdasarkan kondisi siklus yang tercatat. |
| Kalender Siklus | Lihat tanggal dan ringkasan perjalanan harian dalam siklusmu. |
| Hasil Terjaga Harian | Ruang dari hari sebelumnya yang tidak terpakai dapat membantu menutup pengeluaran di atas batas harian. |
| Riwayat dan laporan | Tinjau catatan penggunaan dan ringkasan hasil saat siklus selesai. |

Subjudul widget: **Biar ingat sebelum uang keluar.**

Letakkan widget CekDulu di layar depan. Ringkasan kondisi siklus lebih mudah
terlihat, sehingga kamu lebih mudah ingat untuk cek sebelum membayar.

Dua pendukung:

- **Pengingat harian:** bantu ingat untuk kembali mengecek kondisi siklus.
  Kamu bisa mengaturnya melalui Pengaturan.
- **Lencana progres:** lihat ringkasan kendali dan kebiasaan menggunakan CekDulu.

Visual: widget asli, ditambah potongan kalender/riwayat bila membantu.
Hindari galeri tambahan yang mengulang fitur. Jangan menjanjikan widget selalu
real-time atau notifikasi selalu tepat waktu di semua perangkat.

## 7. Kepercayaan dan privasi (#privasi)

Judul: **Kamu tetap memegang kendali atas uangmu.**

CekDulu menghitung dari nominal yang kamu masukkan. Aplikasi tidak terhubung
ke rekening atau dompet digital, dan tidak memindahkan maupun memotong uangmu.

- Mulai menggunakan aplikasi tanpa membuat akun.
- Data keuangan utama disimpan di perangkatmu.
- Tidak meminta PIN atau kata sandi bank.

Saat online, data penggunaan minimum tanpa nominal keuangan dapat dikirim
untuk membantu memperbaiki aplikasi. Rinciannya tersedia di Kebijakan Privasi.

CTA: **Baca Kebijakan Privasi** -> privacy.html

Gunakan bagian pendek dengan tema mint yang sudah ada. Jangan mengklaim
seluruh data hanya di HP atau sudah dicadangkan. Isi kebijakan tidak diubah.

## 8. FAQ (#bantuan)

Judul: **Hal yang mungkin ingin kamu tanyakan.**

Masih ada yang ingin ditanyakan? Hubungi kami di **cekdulu.help@gmail.com**.

Gunakan accordion dengan jawaban tertutup pada awal. Kelompok di bawah bisa
menjadi label pemindaian tanpa tab atau halaman baru.

### Mulai menggunakan

**Apakah CekDulu gratis?**

Versi CekDulu saat ini dapat digunakan gratis. Kamu bisa mengatur siklus dan
mengecek dampak pengeluaran sebelum membayar.

**Apakah harus login atau selalu online?**

Kamu bisa mulai tanpa login. Pengaturan siklus, pengecekan nominal, dan catatan
utama berjalan di perangkat sehingga dapat digunakan saat offline. Koneksi
internet diperlukan untuk mengunduh atau memperbarui aplikasi.

**Apakah tersedia untuk iPhone?**

Saat ini CekDulu tersedia untuk Android melalui Google Play.

### Menjalankan siklus

**Apa bedanya Dana Kendali dan saldo rekening?**

Dana Kendali adalah uang yang kamu tentukan untuk kebutuhan sehari-hari di luar
kebutuhan tetap. Nilainya kamu masukkan sendiri, bukan saldo yang dibaca dari rekening.

**Apakah Target Aman wajib diisi?**

Tidak. Kamu bisa memulai tanpa Target Aman dan fokus menjaga Dana Kendali cukup
sampai akhir siklus. Jika digunakan, Target Aman diperhitungkan saat menentukan
ruang harian; uangnya tidak dipindahkan oleh aplikasi.

**Apa yang terjadi jika pengeluaran melewati Ruang Hari Ini?**

CekDulu memperlihatkan dampaknya sebelum kamu melanjutkan. Hasil Terjaga Harian,
jika tersedia, dapat membantu menutup kelebihannya. Jika belum cukup, ruang
untuk hari-hari berikutnya dapat berubah. Periksa penyesuaian yang ditampilkan
agar kamu tahu kondisi setelah pembayaran.

**Bagaimana kalau lupa membuka CekDulu selama beberapa hari?**

Saat diminta memperbarui periode yang terlewat, kamu bisa memilih tidak ada
pengeluaran, tidak ingat, atau mengisi total pengeluaran. Total gabungan dicatat
untuk periode itu tanpa menebak pengeluaran pada masing-masing tanggal.

**Bagaimana kalau hari ini tidak ada pengeluaran?**

Gunakan pilihan **Tandai hari ini tanpa bayar**. Kondisi hari itu tercatat dan
kebiasaan cek dulu tetap terjaga tanpa perlu membuat pengeluaran.

**Apa yang terjadi setelah siklus selesai?**

Kamu bisa meninjau ringkasan siklus, lalu mengisi Dana Kendali, Durasi Siklus,
dan Target Aman untuk periode berikutnya sesuai kondisi terbaru.

### Data dan bantuan

**Apakah data bisa kembali jika aplikasi dihapus atau saya ganti HP?**

Data keuangan utama disimpan di perangkat. Backup dan pemulihan melalui akun
belum tersedia untuk umum pada versi saat ini. Menghapus aplikasi atau data
aplikasi, mereset HP, maupun mengganti HP dapat membuat catatan tidak dapat dipulihkan.

**Bagaimana kalau angka yang ditampilkan tidak sesuai?**

Periksa Dana Kendali, durasi, dan pengeluaran yang sudah kamu masukkan, termasuk
hari yang terlewat. Perhitungan mengikuti data yang tercatat. Jika masih ada
kendala, kirim penjelasan dan versi aplikasi ke **cekdulu.help@gmail.com**.
Jangan sertakan PIN, kata sandi, atau informasi rekening.

**Bagaimana cara mengirim masukan?**

Kirim pengalaman atau saranmu ke **cekdulu.help@gmail.com**. Ceritakan bagian
yang membantu atau masih membingungkan agar kami bisa memahami kebutuhanmu.

Catatan publikasi: gratis, offline, Android, label aksi, dan status backup
mengikuti konteks versi rilis terakhir dalam percakapan serta kebijakan lokal.
Periksa terhadap rilis aktif pada task 7; ini bukan hasil audit kode aplikasi.

## 9. CTA penutup (#download)

Judul: **Belanja dengan lebih tenang, mulai dari CekDulu.**

Body: Unduh sekarang dan rasakan bedanya.

CTA: **Unduh di Google Play**, tombol dengan logo berwarna.

Catatan tulisan tangan: Uang Kendali. Rencana Terjaga. Hidup Lebih Tenang.

Tidak perlu hitung mundur, penawaran premium, atau CTA di setiap bagian.

## 10. Footer

Identitas: **CekDulu** / **Sebelum Bayar**

Kalimat pendek: Temani keputusan kecilmu sebelum bayar.

| Label | Target |
| --- | --- |
| Cara Kerja | #cara-kerja |
| Untuk Siapa | #untuk-siapa |
| FAQ | #bantuan |
| Kebijakan Privasi | privacy.html |
| Hubungi Kami | mailto:cekdulu.help@gmail.com |
| Google Play | https://play.google.com/store/apps/details?id=com.cekdulu.sebelumbayar |
| Instagram | https://www.instagram.com/cekdulu_5detik/ |
| TikTok | https://www.tiktok.com/@cekdulu5detik |

Pengantar sosial: **Ikuti kabar CekDulu**.

Instagram/TikTok memakai nama platform yang terbaca dan label aksesibel.
URL resmi diberikan pengguna saat task 5. Tautan membuka tab baru; parameter
berbagi TikTok dihilangkan. Tidak memakai feed embed. Berlaku juga di footer privasi.

Copyright: tahun berjalan, CekDulu.

## Metadata dan domain

- Title: `CekDulu - Lihat Dampaknya Sebelum Bayar`.
- Meta description: `Cara mudah untuk mulai menjaga uangmu tetap terkendali. Cek dampak pembelian sebelum bayar, agar uang bulanan dan rencanamu tetap terjaga.`
- Open Graph: judul/ringkasan konsisten dengan hero; gambar mengikuti tampilan
  final. Jangan memakai feature graphic lama tanpa pemeriksaan.
- Domain sudah dimiliki pengguna, tetapi alamatnya belum diberikan.
- Canonical, og:url, sitemap, robots, dan URL privasi publik disiapkan setelah
  domain dan jalur hosting diketahui. Jangan menerbitkan domain contoh.
- Tidak menambah blog, newsletter, tracking, atau klaim layanan baru.

## Aset dan batas implementasi

Keenam screenshot asli sudah diterima. Atas arahan pengguna, empat screenshot
hanya ditampilkan dalam carousel di bingkai ponsel hero: halaman utama,
reflektif Aman, Melewati Batas, dan Riwayat Harian. Bagian lain tetap menggunakan
ilustrasi HTML seperti sebelum percobaan penempatan screenshot di seluruh halaman.
Carousel berganti setiap 6 detik, dengan swipe, panah, indikator, dan kontrol
jeda/putar. Satu catatan tulisan tangan ikut berganti sesuai layar. Ukuran frame
tetap; autoplay berhenti saat interaksi manual, hover, di luar viewport, tab
tersembunyi, atau pengaturan reduced motion aktif.

1. Hero: screenshot reflektif terbaru yang terbaca jelas.
2. Cara kerja: input nominal dan hasil dari skenario konsisten.
3. Target Aman: drawer berisi nominal dan nama tujuan.
4. Keseharian: widget, ditambah kalender/riwayat bila membantu.
5. Logo/ikon yang sudah tersedia tetap digunakan.

Lampiran percakapan perlu ditinjau sebelum dipakai. Screenshot website hasil tes
bukan screenshot aplikasi. Kekurangan aset dicatat di dokumen kerja, bukan
ditampilkan sebagai placeholder di website publik.

Paragraf utama tetap pendek. Tabel dalam dokumen ini tidak semuanya perlu
diterjemahkan menjadi tabel pada website. Detail FAQ tampil saat dibuka.

## Handoff task berikutnya

- Task 3: hero dengan copy bagian 1 dan tema HTML yang ada.
- Task 4: cara kerja dan Target Aman (bagian 2-3).
- Task 5: pengaturan awal, Untuk Siapa, fitur/widget, privasi ringkas, FAQ,
  CTA penutup, dan footer (bagian 4-10).
- Task 6: navigasi, anchor, aksesibilitas, dan responsif pada kedua halaman.
- Task 7: pemeriksaan isi terhadap rilis aktif, aset/tautan, browser, dan paket.
