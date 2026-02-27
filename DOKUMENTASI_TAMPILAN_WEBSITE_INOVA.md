# Dokumentasi Tampilan Website INOVA

## Mitra Bisnis Laundry Terpercaya

---

## 1. Gambaran Umum Website

Website **INOVA** adalah platform digital untuk mempromosikan paket usaha laundry dan peralatan laundry berkualitas tinggi. Website ini dirancang dengan desain modern, responsif, dan profesional untuk menarik calon mitra bisnis laundry.

### Teknologi yang Digunakan:

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Animasi**: Framer Motion
- **Bahasa**: TypeScript
- **Multi-bahasa**: Bahasa Indonesia (ID) dan English (EN)

---

## 2. Struktur Halaman & Komponen

### 2.1 Splash Screen (Layar Pembuka)

Komponen awal yang muncul saat website dimuat:

- Logo animasi INOVA yang berputar
- Transisi halus ke halaman utama
- Durasi: beberapa detik saja

### 2.2 Navbar (Navigasi Header)

**Fitur:**

- Logo INOVA dengan animasi SVG gradient
- Menu navigasi: Beranda, Paket, Produk, Tentang
- Tombol bahasa (ID/EN) dengan toggle pill
- Tombol WhatsApp (CTA utama)
- Menu mobile dengan hamburger icon
- Efek transparan berubah menjadi solid saat di-scroll

### 2.3 Hero Section (Bagian Utama)

**Elemen Visual:**

- Heading besar dengan gradient text "Partner Terpercaya"
- Subtitle yang menjelaskan value proposition
- 2 tombol CTA:
  - WhatsApp (warna hijau dominant)
  - Lihat Paket (warna putih/border)
- Indikator kepercayaan: rating 4.9/5, Verified Partner, 24/7 Support
- Kartu statistik animasi:
  - 500+ Mitra Aktif
  - 5 Kota Jangkauan
  - 98% Kepuasan
- Floating card WhatsApp Ready

### 2.4 Packages Section (Paket Usaha)

Tiga paket bisnis laundry yang ditawarkan:

| Paket       | Harga         | Fitur Utama                                                                                 |
| ----------- | ------------- | ------------------------------------------------------------------------------------------- |
| **Basic**   | Rp 15.000.000 | 1 Mesin Cuci 10kg, 1 Mesin Cuci 15kg, Pengering 10kg, Perlengkapan dasar                    |
| **Medium**  | Rp 28.500.000 | 2 Mesin Cuci 15kg, 1 Mesin Cuci 20kg, 2 Pengering 15kg, Mesin Packing, Konsultasi Gratis    |
| **Premium** | Rp 45.000.000 | 2 Mesin Cuci 20kg, 1 Mesin Cuci 30kg, 3 Pengering 20kg, Mesin Finishing, Software Manajemen |

**Desain:**

- Paket Medium ditandai sebagai "Most Popular"
- Efek hover dengan translateY
- Harga dan fitur tercantum jelas
- Tombol hubungi via WhatsApp

### 2.5 Products Section (Produk)

Tiga produk utama yang ditampilkan:

1. **Mesin Cuci Industrial** - Rp 8.500.000

   - Rating: 4.9 (128 review)
   - Tag: Terlaris

2. **Mesin Pengering** - Rp 6.000.000

   - Rating: 4.8 (96 review)

3. **Setrika Uap & Meja** - Rp 2.500.000
   - Rating: 4.7 (64 review)

**Desain:**

- Gambar produk dari Unsplash
- Rating bintang
- Harga yang jelas
- Tombol pesan via WhatsApp

### 2.6 Calculator Section (Kalkulator) ⭐

**Fitur utama:**

- Input kapasitas harian (kg)
- Input harga per kg
- Input biaya operasional harian
- Input pajak (%)
- Input target omset bulanan

**Hasil kalkulasi:**

- Omset Harian
- Profit Bersih Harian
- Margin Profit (%)
- BEP (Break Even Point) dalam kg
- Hari untuk Mencapai Target

**Desain:**

- Slider interaktif untuk setiap input
- Hasil real-time dengan animasi
- Indikator warna (hijau/kuning/merah) untuk profit & margin
- Tampilan responsif (2 kolom: input & hasil)

### 2.7 Why LaundryHub Section (Mengapa Memilih Kami)

Empat keunggulan utama:

1. **🏆 Kualitas Terjamin**

   - Peralatan berkualitas tinggi dengan garansi resmi

2. **🛡️ Aman & Terpercaya**

   - Transaksi aman, dukungan penuh

3. **💰 Harga Transparan**

   - Tidak ada biaya tersembunyi

4. **🎧 Support 24/7**
   - Layanan pelanggan kapan saja

### 2.8 Process Steps Section (Cara Pemesanan)

4 langkah mudah:

1. **Hubungi Kami** - Konsultasi kebutuhan
2. **Pilih Paket** - Sesuai budget & kebutuhan
3. **Pembayaran** - Proses mudah & aman
4. **Pengiriman** - Equipment dikirim ke lokasi

### 2.9 Testimonials Section (Testimoni)

3 kartu testimoni dari mitra:

- Rating 5 bintang
- Nama dan peran (Pemilik Laundry)
- Komentar pengalaman

### 2.10 FAQ Section (Pertanyaan Umum)

Pertanyaan yang sering ditanyakan:

- Cara memesan paket
- Proses pembayaran
- Jadwal pengiriman
- Garansi produk
- Layanan purna jual

**Desain:**

- Accordion yang bisa di-expand/collapse
- Plus/minus icon animasi

### 2.11 CTA Banner (Ajakan Bertindak)

Banner penuh warna biru tua:

- Heading yang menarik
- Subtitle motivasi
- 2 tombol CTA utama

### 2.12 Footer (Bagian Bawah)

**Konten:**

- Logo INOVA
- Deskripsi singkat
- Link navigasi
- Daftar produk
- Informasi kontak:
  - Alamat
  - Telepon
  - Email
- Link sosial media (Instagram, Facebook, YouTube)
- Copyright 2025
- Link legal (Privacy Policy, Terms)

---

## 3. Fitur Interaktif

### 3.1 Multi-language Support

- Dukungan Bahasa Indonesia & English
- Toggle di navbar
- Semua konten translate otomatis
- State disimpan saat navigasi

### 3.2 Animasi

- **Framer Motion** untuk animasi smooth
- Fade-in saat scroll masuk viewport
- Hover effects pada cards
- Floating animations
- Progress bars animasi

### 3.3 Responsif Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Grid layout yang fleksibel
- Touch-friendly di mobile

### 3.4 WhatsApp Integration

- Tombol CTA terhubung ke WhatsApp
- Link: https://wa.me/6281234567890
- Format yang 方便 untuk kontak langsung

---

## 4. Desain Visual

### 4.1 Warna (Color Palette)

```
Primary:    #1e3a8a (Blue-900)
Secondary:  #3b82f6 (Blue-500)
Accent:     #22c55e (Green-500)
Background: #f8fafc (Slate-50)
Text:       #0f172a (Slate-900)
```

### 4.2 Tipografi

- Font: Sans-serif (Tailwind default)
- Heading: Bold/Black
- Body: Regular/Medium

### 4.3 Komponen UI

- Cards dengan shadow
- Border radius: rounded-2xl / rounded-3xl
- Gradients pada elemen khusus
- Backdrop blur effects

---

## 5. Struktur Navigasi

```
Beranda (#)
    │
    ├── Paket Usaha (#packages)
    │       ├── Basic
    │       ├── Medium (Most Popular)
    │       └── Premium
    │
    ├── Produk (#products)
    │       ├── Mesin Cuci
    │       ├── Mesin Pengering
    │       └── Setrika Uap
    │
    ├── Tentang (#why)
    │       ├── Kualitas Terjamin
    │       ├── Aman & Terpercaya
    │       ├── Harga Transparan
    │       └── Support 24/7
    │
    ├── Proses (#process)
    │       ├── Hubungi Kami
    │       ├── Pilih Paket
    │       ├── Pembayaran
    │       └── Pengiriman
    │
    ├── FAQ (#faq)
    │
    └── Hubungi WhatsApp
```

---

## 6. Ringkasan Fitur Utama

✅ Splash Screen dengan animasi  
✅ Navbar responsif dengan mobile menu  
✅ Hero section dengan statistik animasi  
✅ 3 Paket usaha laundry  
✅ Kalkulator harga  
✅ 3 Produk peralatan laundry  
✅ 4 Keunggulan kompetitif  
✅ 4 Langkah cara pemesanan  
✅ 3 Testimoni mitra  
✅ FAQ accordion  
✅ CTA banner menarik  
✅ Footer lengkap dengan kontak  
✅ Multi-language (ID/EN)  
✅ Animasi smooth  
✅ Desain mobile-friendly  
✅ Integrasi WhatsApp  
✅ Loading states & transitions

---

## 7. Informasi Kontak

- **WhatsApp**: +62 812-3456-7890
- **Email**: info@inova-laundry.com
- **Alamat**: [alamat lengkap]

---

_Dokumen ini dibuat untuk keperluan presentasi kepada atasan/pemimpin._
_Last updated: 2025_
