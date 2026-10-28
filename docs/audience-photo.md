# Foto bagian Untuk Siapa

Mode: built-in Imagegen, generate baru sebagai ilustrasi, mengikuti komposisi
referensi pengguna. Bukan foto pengguna atau testimoni pelanggan.

Aset publik: `assets/city-evening.jpg`, 1536x1024, 147.908 byte.
Master PNG: `outputs/audience-city-original.png` di root workspace.
Master disalin dari hasil generator; JPEG kualitas 87 untuk pemakaian website.
Tidak ada teks yang dibakar ke dalam gambar. Quote tetap berupa HTML.

## Prompt final

Use case: photorealistic-natural. Asset type: lifestyle photo for the 'Untuk Siapa' section of the Indonesian CekDulu website. Create a realistic editorial photograph of a young adult Indonesian woman seen from behind, dark hair in a loose bun, wearing a simple dark navy jacket, standing calmly on a rooftop terrace looking toward a mid-rise Indonesian city skyline at sunset. Landscape composition, approximately 3:2. Place the woman in the right third of the photograph, occupying the lower two thirds; her hair and shoulders clearly readable. The left third must have uncluttered pale softly lit lavender-pink evening sky above a low distant skyline, enough quiet bright space for dark handwritten HTML text that will be added separately. Natural soft dusk light, muted cool lavender and pale peach sky, restrained realistic contrast, detailed fabric and hair, hopeful unposed everyday moment. This is a photo only, not a web page or UI mockup. No text, lettering, logos, watermark, borders, cards, lens flare or decorative bokeh. Do not show a face, phone or money. Match the warm, reflective rear-view city-at-dusk composition of a premium lifestyle website banner.

## Implementasi dan verifikasi

- Banner di bagian Untuk Siapa; foto di kiri dan teks di kanan pada desktop.
- Foto di atas teks pada HP, dengan quote tulisan tangan di area langit.
- Tiga situasi pengguna tetap tersedia di bawahnya.
- Dimensi foto ditetapkan dan lazy loading aktif.
- Tidak menambah layanan eksternal atau dependency runtime.
- Diperiksa pada 1440, 1024, 768, 600, 390 dan 320 px: foto termuat,
  tiga situasi tetap tersedia, tidak ada teks terpotong atau luapan horizontal.
- Screenshot desktop dan mobile ditinjau; teks quote mobile diperkecil agar
  tetap berada di area langit yang terang.

Bukti: `outputs/website-tests/audience-photo-*.png` di root workspace.
