# Task 6: navigasi dan responsif

## Hasil

- Menu konsisten: Beranda, Cara Kerja, Fitur, Untuk Siapa, FAQ, Privasi.
- Navigasi Privacy Policy kembali ke anchor beranda yang sesuai.
- Menu ringkas dipakai sampai 980 px; CSS dan JS menggunakan breakpoint sama.
- Menu tertutup memakai inert dan visibility agar tidak terjangkau lewat Tab.
- Escape menutup menu dan mengembalikan fokus ke tombol pembuka.
- Menu menutup setelah memilih tautan, klik di luar, atau fokus meninggalkannya.
- Perubahan ke desktop membuka akses navigasi; perubahan ke mobile tidak
  meninggalkan fokus di menu tersembunyi.
- Tinggi menu dibatasi viewport, bisa digulir pada HP mendatar, dan kembali
  ke bagian awal setiap kali dibuka.
- Tombol menu 44x44 px; tautan menu minimal 44 px desktop / 48 px mobile.
- Header mobile tetap 72 px sebelum dan sesudah scroll.
- Aria-current menunjukkan halaman privasi atau anchor beranda yang dipilih.
  Ini mengikuti URL/hash, bukan scroll-spy.
- Main dan section anchor menerima fokus untuk navigasi keyboard dan skip-link.
- Dimensi intrinsik logo header ditetapkan, dengan tinggi otomatis.
- navigation.css digunakan bersama; wajib masuk paket task 7.
- Tidak ada library, layanan jaringan, atau framework baru.

## Pengujian

Playwright / Edge lokal, 20 kombinasi halaman dan viewport:

- Beranda dan Privacy Policy masing-masing pada 1920x1080, 1366x768,
  1024x768, 981x800, 980x800, 768x1024, 640x720, 390x844,
  320x740, dan 844x390.
- Tidak ada luapan horizontal pada konten, footer, atau header.
- Heading, paragraf, FAQ, dan definisi tidak terpotong secara horizontal.
- Header desktop tidak bertabrakan antara logo, menu, dan CTA.
- Skip-link via Tab/Enter memindahkan fokus ke main.
- Menu tertutup tidak mengambil fokus keyboard; menu terbuka menerima Tab.
- Escape mengembalikan fokus ke tombol menu.
- Link Untuk Siapa menggulir ke bawah header dan memfokuskan section.
- Menu Privasi dan daftar isi penyimpanan mengarah ke tujuan yang benar.
- CTA menu terjangkau pada viewport mendatar melalui scroll menu.
- Resize desktop/mobile mempertahankan keadaan fokus yang benar.
- Tidak ada error JavaScript selama pengujian.
- Screenshot menu mobile, landscape, dan halaman privasi diperiksa visual.
- Skrip task 3-5 diselaraskan dengan breakpoint/menu/urutan terbaru untuk
  verifikasi final; suite lengkap akan dijalankan pada task 7.

Script: work/check-navigation.cjs di root workspace.
Bukti: outputs/website-tests/task6/ di root workspace.

## Batas

Pengujian dilakukan pada browser desktop dengan viewport responsif, bukan
perangkat Android fisik atau Safari iOS. Tidak ada pengubahan copy kebijakan,
publikasi, atau ZIP baru. Domain dan screenshot final masih diperlukan untuk
melengkapi materi publikasi.
