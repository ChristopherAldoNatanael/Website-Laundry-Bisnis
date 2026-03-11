"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { translations } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, Tag, Package, ChevronLeft, ChevronRight, X, SlidersHorizontal } from "lucide-react";
import { waProduct, WA_HERO } from "@/lib/whatsapp";

const ITEMS_PER_PAGE = 12;

// ── DATA PRODUK (dari katalog INOVA) ─────────────────────────────────────────

const allProducts = [
  // PAKET MESIN
  {
    id: 1,
    name: "PAKET 3 MESIN, PAKET 4 MESIN, PAKET BISNIS 4 MESIN",
    nameEn: "3 MACHINE PACKAGE, 4 MACHINE PACKAGE, 4 MACHINE BUSINESS PACKAGE",
    desc: "Washer LG 20kg, Dryer LG Giant Max",
    price: "Rp 106.500.000",
    category: "Paket Mesin",
  },
  {
    id: 2,
    name: "PAKET MESIN & INSTALASI",
    nameEn: "MACHINE PACKAGE & INSTALLATION",
    desc: "Washer LG 15kg, Dryer Speedqueen 15kg",
    price: "Rp 62.500.000",
    category: "Paket Mesin",
  },
  {
    id: 3,
    name: "PAKET MESIN & INSTALASI",
    nameEn: "MACHINE PACKAGE & INSTALLATION",
    desc: "Washer LG 15kg, Dryer LG Giant Max",
    price: "Rp 67.500.000",
    category: "Paket Mesin",
  },
  {
    id: 4,
    name: "PAKET MESIN & INSTALASI",
    nameEn: "MACHINE PACKAGE & INSTALLATION",
    desc: "Washer LG 15kg, Dryer LG Giant Max 10.5kg",
    price: "Rp 66.000.000",
    category: "Paket Mesin",
  },
  {
    id: 5,
    name: "PAKET 3 MESIN, PAKET 4 MESIN, PAKET 4 MESIN",
    nameEn: "3 MACHINE PACKAGE, 4 MACHINE PACKAGE, 4 MACHINE PACKAGE",
    desc: "Washer LG 20 LG, Dryer Speedqueen 15kg",
    price: "Rp 102.500.000",
    category: "Paket Mesin",
  },
  {
    id: 6,
    name: "PAKET 3 MESIN, PAKET4 MESIN, PAKET 5 MESIN",
    nameEn: "3 MACHINE PACKAGE, 4 MACHINE PACKAGE, 5 MACHINE PACKAGE",
    desc: "Washer LG 20kg, Dryer Maytag 15Kg",
    price: "Rp 109.000.000",
    category: "Paket Mesin",
  },
  {
    id: 7,
    name: "PAKET 2 MESIN, PAKET 3 MESIN, PAKET 4 MESIN, PAKET 5 MESIN",
    nameEn: "2 MACHINE PACKAGE, 3 MACHINE PACKAGE, 4 MACHINE PACKAGE, 5 MACHINE PACKAGE",
    desc: "Washer Samsung 16kg, Dryer Maytag 15kg",
    price: "Rp 70.000.000",
    category: "Paket Mesin",
  },
  {
    id: 8,
    name: "PAKET 2 MESIN, PAKET 3 MESIN, PAKET 4 MESIN, PAKET 5 MESIN",
    nameEn: "2 MACHINE PACKAGE, 3 MACHINE PACKAGE, 4 MACHINE PACKAGE, 5 MACHINE PACKAGE",
    desc: "Washer samsung 16kg, Dryer Speedqueen 15kg",
    price: "Rp 6.500.000",
    category: "Paket Mesin",
  },
  // PERLENGKAPAN SETRIKA
  {
    id: 9,
    name: "PAKET SETRIKA",
    nameEn: "IRON PACKAGE",
    desc: "Boiler, kepala setrika, selang setrika, kompor",
    price: "Hubungi Kami",
    category: "Setrika & Boiler",
  },
  {
    id: 10,
    name: "SETRIKA UAP",
    nameEn: "STEAM IRON",
    desc: "Setrika uap geser dan biasa",
    price: "Rp 375.000",
    category: "Setrika & Boiler",
  },
  {
    id: 11,
    name: "KEPALA SETRIKA UAP GESER BAIJINLONG",
    nameEn: "BAIJINLONG SLIDING STEAM IRON HEAD",
    desc: "Kepala Setrika Geser",
    price: "Rp 350.000",
    category: "Setrika & Boiler",
  },
  {
    id: 12,
    name: "Boiler Otomatis Kanaka",
    nameEn: "Kanaka Automatic Boiler",
    desc: "Air otomatis mengisi sendiri (tinggal sediakan tampungan air saja)",
    price: "Rp 4.750.000",
    category: "Setrika & Boiler",
  },
  {
    id: 13,
    name: "Selang Setrika uap Selang Setrika Uap",
    nameEn: "Steam Iron Hose",
    desc: "Selang Setrika Uap Berat /m 150grm",
    price: "Rp 35.000/m",
    category: "Setrika & Boiler",
  },
  {
    id: 14,
    name: "MEJA SETRIKA",
    nameEn: "IRONING TABLE",
    desc: "Meja Setrika Uap ukuran 80 x 120",
    price: "Rp 750.000",
    category: "Setrika & Boiler",
  },
  {
    id: 15,
    name: "REGULATOR GAS WINS",
    nameEn: "WINS GAS REGULATOR",
    desc: "Regulator Gas Wins",
    price: "Rp 135.000",
    category: "Setrika & Boiler",
  },
  // DETERJEN & KIMIA
  {
    id: 16,
    name: "Deterjen Cair Detoxy Akasia 5L",
    nameEn: "Detoxy Acacia Liquid Detergent 5L",
    desc: "Detoxy adalah deterjen laundry yang dilengkapi Oxy bleach pencernah warna. Detoxy aman bahan pakaian",
    price: "Rp 52.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 17,
    name: "Deterjen cair Detoxy Hijau (Lemon) 5L",
    nameEn: "Detoxy Green (Lemon) Liquid Detergent 5L",
    desc: "Detoxy dilengkapi Oxy bleach pencerah warna. Aman bahan pakaian",
    price: "Rp 47.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 18,
    name: "Deterjen Cair Detoxy (Violet) 5L",
    nameEn: "Detoxy (Violet) Liquid Detergent 5L",
    desc: "Detoxy dilengkapi Oxy bleach pencernah warna. Aman bahan pakaian",
    price: "Rp 42.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 19,
    name: "Detoxy pouch 125ml",
    nameEn: "Detoxy pouch 125ml",
    desc: "Deterjen laundry dilengkapi Oxy bleach pencerah warna kemasan pouch",
    price: "Rp 2.000",
    category: "Deterjen & Kimia",
  },
  {
    id: 20,
    name: "Oxy Booster Bubuk 1kg",
    nameEn: "Oxy Booster Powder 1kg",
    desc: "Oxy Booster pemutih dan pencerah pakaian",
    price: "Rp 36.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 21,
    name: "Anti noda Darah",
    nameEn: "Blood Stain Remover",
    desc: "Anti noda Darah dikenal dengan nama In kredible, digunakan untuk menghilangkan noda tinta",
    price: "Rp 34.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 22,
    name: "Anti noda Karat 1L",
    nameEn: "Rust Stain Remover 1L",
    desc: "Menghilangkan noda karat pada pakaian. Cairan pembersih noda ini sangat ampuh",
    price: "Rp 34.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 23,
    name: "SILICA GEL 1kg",
    nameEn: "SILICA GEL 1kg",
    desc: "Silica Gel penyerap lembab untuk penyimpanan produk laundry",
    price: "Rp 45.000",
    category: "Deterjen & Kimia",
  },
  // PARFUM & SOFTENER
  {
    id: 24,
    name: "Parfum Akasia 1L",
    nameEn: "Acacia Perfume 1L",
    desc: "Parfum Inomatique Akasia",
    price: "Rp 30.000",
    category: "Parfum & Softener",
  },
  {
    id: 25,
    name: "Parfum Akasia 5L",
    nameEn: "Acacia Perfume 5L",
    desc: "Parfum laundry aroma Akasia",
    price: "Rp 150.000",
    category: "Parfum & Softener",
  },
  {
    id: 26,
    name: "Parfum philux 1L",
    nameEn: "Philux Perfume 1L",
    desc: "Parfum laundry Philux",
    price: "Rp 30.000",
    category: "Parfum & Softener",
  },
  {
    id: 27,
    name: "Parfum Snappy 1L",
    nameEn: "Snappy Perfume 1L",
    desc: "Parfum Inomatique aroma Snappy",
    price: "Rp 33.000",
    category: "Parfum & Softener",
  },
  {
    id: 28,
    name: "Parfum Snappy 5L",
    nameEn: "Snappy Perfume 5L",
    desc: "Parfum laundry aroma Snappy kemasan 5 liter",
    price: "Rp 160.000",
    category: "Parfum & Softener",
  },
  {
    id: 29,
    name: "Parfum Selena 1L",
    nameEn: "Selena Perfume 1L",
    desc: "Parfum Inomatique aroma Selena",
    price: "Rp 33.000",
    category: "Parfum & Softener",
  },
  {
    id: 30,
    name: "Parfum Pakaian Laundry",
    nameEn: "Laundry Clothes Perfume",
    desc: "Parfum Laundry berbagai varian aroma",
    price: "Rp 30.000",
    category: "Parfum & Softener",
  },
  {
    id: 31,
    name: "Softener Dinda 5L Mistique",
    nameEn: "Dinda Softener 5L Mistique",
    desc: "Softener Dinda aroma Mistique 5 liter",
    price: "Rp 65.000",
    category: "Parfum & Softener",
  },
  {
    id: 32,
    name: "Softener Dinda Pink 5L",
    nameEn: "Dinda Pink Softener 5L",
    desc: "Softener Dinda aroma Pink 5 liter",
    price: "Rp 65.000",
    category: "Parfum & Softener",
  },
  {
    id: 33,
    name: "Softener Dinda Pink",
    nameEn: "Dinda Pink Softener",
    desc: "Softener Dinda Pink",
    price: "Rp 65.000",
    category: "Parfum & Softener",
  },
  {
    id: 34,
    name: "Softener Dinda Fresh Blue 5L",
    nameEn: "Dinda Fresh Blue Softener 5L",
    desc: "Softener Dinda aroma Fresh Blue 5 liter",
    price: "Rp 65.000",
    category: "Parfum & Softener",
  },
  {
    id: 35,
    name: "Softener Dinda Biru",
    nameEn: "Dinda Blue Softener",
    desc: "Softener Dinda Biru",
    price: "Rp 65.000",
    category: "Parfum & Softener",
  },
  {
    id: 36,
    name: "Pelicin / Pewangi Zahra 1L",
    nameEn: "Zahra Fabric Softener 1L",
    desc: "Pelicin dan pengharum pakaian, cairan pelicin dan pengharum setrika pakaian",
    price: "Rp 27.000",
    category: "Parfum & Softener",
  },
  {
    id: 37,
    name: "Pelicin / Pewangi Zahra 1000ml",
    nameEn: "Zahra Fabric Softener 1000ml",
    desc: "Pelicin dan pengharum pakaian setrika ukuran 1000ml",
    price: "Rp 27.000",
    category: "Parfum & Softener",
  },
  // PERLENGKAPAN TOKO
  {
    id: 38,
    name: "Rak Gantungan Baju Satuan",
    nameEn: "Single Clothes Hanger Rack",
    desc: "Rak Gantungan Baju Satuan Besi",
    price: "Rp 750.000",
    category: "Perlengkapan Toko",
  },
  {
    id: 39,
    name: "Rak besi laundry (Rak baju dan Gantungan)",
    nameEn: "Laundry Iron Rack (Clothes Rack and Hanger)",
    desc: "Rak besi laundry ukuran P.2m, L.60cm, T.2m bahan besi papan lapis HPL",
    price: "Rp 3.500.000",
    category: "Perlengkapan Toko",
  },
  {
    id: 40,
    name: "PAKET MEJA & RAK",
    nameEn: "TABLE & RACK PACKAGE",
    desc: "Meja kasir uk 120 x 80, rak 180 x 2m",
    price: "Rp 2.100.000",
    category: "Perlengkapan Toko",
  },
  {
    id: 41,
    name: "CCTV V380",
    nameEn: "CCTV V380",
    desc: "CCTV wifi yang memudahkan anda untuk mengontrol bisnis laundry Anda",
    price: "Rp 320.000",
    category: "Perlengkapan Toko",
  },
  {
    id: 42,
    name: "APAR Merk NANYANG",
    nameEn: "NANYANG Fire Extinguisher",
    desc: "Apar Merk NANYANG 5kg",
    price: "Rp 400.000",
    category: "Perlengkapan Toko",
  },
  // PLASTIK & KEMASAN
  {
    id: 43,
    name: "PLASTIK KEMAS PE KLIP Party",
    nameEn: "PE CLIP PARTY PACKAGING PLASTIC",
    desc: "Plastik kemas PE Klip Party",
    price: "Rp 100.000",
    category: "Plastik & Kemasan",
  },
  {
    id: 44,
    name: "Plastik jinjing print.. Ukuran 30,35,40,45,50,60",
    nameEn: "Printed Carrier Bag Size 30,35,40,45,50,60",
    desc: "Plastik jinjing sablon/print berbagai ukuran",
    price: "Rp 38.500",
    category: "Plastik & Kemasan",
  },
  {
    id: 45,
    name: "Plastik jinjing polos 30,35,40,45,50,60",
    nameEn: "Plain Carrier Bag 30,35,40,45,50,60",
    desc: "Plastik jinjing polos berbagai ukuran",
    price: "Rp 33.500",
    category: "Plastik & Kemasan",
  },
  {
    id: 46,
    name: "Plastik Jinjing ukuran 35,40,45",
    nameEn: "Carrier Bag Size 35,40,45",
    desc: "Plastik jinjing berbagai ukuran cocok untuk kemasan laundry",
    price: "Rp 33.500",
    category: "Plastik & Kemasan",
  },
  {
    id: 47,
    name: "Plastik jinjing sablon UK 30",
    nameEn: "Printed Carrier Bag Size 30",
    desc: "Plastik jinjing sablon/print ukuran 30",
    price: "Rp 38.500",
    category: "Plastik & Kemasan",
  },
  {
    id: 48,
    name: "Plastik jinjing Sablon UK 60",
    nameEn: "Printed Carrier Bag Size 60",
    desc: "Plastik Jinjing Sablon 60 cocok untuk bedcover",
    price: "Rp 38.500",
    category: "Plastik & Kemasan",
  },
  {
    id: 49,
    name: "PLASTIK HANGER SABLON UK 100x60",
    nameEn: "PRINTED HANGER PLASTIC 100x60",
    desc: "Plastik hanger sablon ukuran 100x60 satuan",
    price: "Rp 44.000",
    category: "Plastik & Kemasan",
  },
  {
    id: 50,
    name: "Plastik hanger sablon UK 150x60",
    nameEn: "Printed Hanger Plastic 150x60",
    desc: "Plastik hanger sablon UK 150x60 satuan",
    price: "Rp 44.000",
    category: "Plastik & Kemasan",
  },
  {
    id: 51,
    name: "Pita Laundry / Pita Nylon",
    nameEn: "Laundry Ribbon / Nylon Ribbon",
    desc: "Pita laundry Nylon, dapat di tulis dengan pena spidol permanen",
    price: "Rp 34.000",
    category: "Plastik & Kemasan",
  },
  // HANGER & AKSESORIS
  {
    id: 52,
    name: "Hanger Sepatu",
    nameEn: "Shoe Hanger",
    desc: "Hanger sepatu untuk laundry sepatu",
    price: "Rp 15.000",
    category: "Hanger & Aksesoris",
  },
  {
    id: 53,
    name: "Hanger Baju Jordan (1lusin)",
    nameEn: "Jordan Clothes Hanger (1 dozen)",
    desc: "Hanger baju merk Jordan 1 lusin",
    price: "Rp 9.000",
    category: "Hanger & Aksesoris",
  },
  {
    id: 54,
    name: "Hanger Jas Satuan (1Lusin)",
    nameEn: "Suit Hanger (1 Dozen)",
    desc: "Hanger Jas 1 lusin",
    price: "Rp 36.000",
    category: "Hanger & Aksesoris",
  },
  {
    id: 55,
    name: "Refill Bulu Anjing dan Kucing",
    nameEn: "Dog and Cat Hair Remover Refill",
    desc: "Refill Bulu Anjing dan Kucing, cocok untuk menghilangkan bulu kucing yang menempel di baju",
    price: "Rp 6.000",
    category: "Hanger & Aksesoris",
  },
  // SIKAT & PEMBERSIH
  {
    id: 56,
    name: "Sikat Sepatu",
    nameEn: "Shoe Brush",
    desc: "Sikat sepatu untuk laundry sepatu",
    price: "Rp 10.000",
    category: "Sikat & Pembersih",
  },
  {
    id: 57,
    name: "Sikat Baju Premium",
    nameEn: "Premium Clothes Brush",
    desc: "Sikat Baju Premium",
    price: "Rp 23.000",
    category: "Sikat & Pembersih",
  },
  {
    id: 58,
    name: "Sikat Bulu Kuda (Satuan)",
    nameEn: "Horse Hair Brush (Piece)",
    desc: "Sikat Bulu Kuda untuk pembersih halus",
    price: "Rp 23.000",
    category: "Sikat & Pembersih",
  },
  {
    id: 59,
    name: "Sikat Pembersih Washer",
    nameEn: "Washer Cleaner Brush",
    desc: "Sikat Pembersih Washer (mesin cuci)",
    price: "Rp 3.000",
    category: "Sikat & Pembersih",
  },
  {
    id: 60,
    name: "Lap Micro fiber 30x30",
    nameEn: "Microfiber Cloth 30x30",
    desc: "Lap Micro fiber ukuran 30x30 cm",
    price: "Rp 5.000",
    category: "Sikat & Pembersih",
  },
  {
    id: 61,
    name: "Lap Micro fiber 25x25",
    nameEn: "Microfiber Cloth 25x25",
    desc: "Lap Micro fiber ukuran 25x25 cm",
    price: "Rp 3.000",
    category: "Sikat & Pembersih",
  },
  // KOMPONEN TEKNIS
  {
    id: 62,
    name: "NEPEL STOP KRAN UAP",
    nameEn: "STEAM VALVE STOP NIPPLE",
    desc: "Nepel stop kran uap untuk instalasi boiler",
    price: "Rp 12.000",
    category: "Komponen Teknis",
  },
  {
    id: 63,
    name: "Jepit Buaya (500gr)",
    nameEn: "Alligator Clip (500gr)",
    desc: "Jepit Buaya plastik 500gr",
    price: "Rp 32.000",
    category: "Komponen Teknis",
  },
  // PAKET MESIN TAMBAHAN
  {
    id: 64,
    name: "PAKET 3 MESIN, PAKET 4 MESIN, PAKET 5 MESIN",
    nameEn: "3 MACHINE PACKAGE, 4 MACHINE PACKAGE, 5 MACHINE PACKAGE",
    desc: "Washer Samsung 16kg, Dryer LG Giant Max 10.5kg",
    price: "Rp 99.000.000",
    category: "Paket Mesin",
  },
  // SETRIKA & BOILER TAMBAHAN
  {
    id: 65,
    name: "Regulator Gas Starcam",
    nameEn: "Starcam Gas Regulator",
    desc: "Regulator Gas Starcam yang lengkap dengan meteran dan terdapat pengaman untuk mencegah kebocoran gas",
    price: "Rp 123.000",
    category: "Setrika & Boiler",
  },
  {
    id: 66,
    name: "Regulator Gas Com U12Rm",
    nameEn: "Com U12Rm Gas Regulator",
    desc: "Regulator Gas yang lengkap dengan meteran dan terdapat pengaman untuk mencegah kebocoran gas",
    price: "Rp 118.000",
    category: "Setrika & Boiler",
  },
  {
    id: 67,
    name: "KEPALA SETRIKA UAP TEKAN F-Strong",
    nameEn: "F-Strong Steam Iron Press Head",
    desc: "Kepala Setrika Uap Tekan F-Strong",
    price: "Rp 420.000",
    category: "Setrika & Boiler",
  },
  {
    id: 68,
    name: "TIMBANGAN Digital Nankai",
    nameEn: "Nankai Digital Scale",
    desc: "Timbangan digital kapasitas 30 kg",
    price: "Rp 350.000",
    category: "Perlengkapan Toko",
  },
  // DETERJEN & KIMIA TAMBAHAN
  {
    id: 69,
    name: "Anti noda Kunir & Luntur",
    nameEn: "Turmeric & Color Run Stain Remover",
    desc: "Anti noda Kunir dan Luntur, cairan untuk membuka serat kain, anti noda kunyit, noda getah, dan noda membandel lainnya",
    price: "Rp 34.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 70,
    name: "Anti noda Kerak / Deodorant",
    nameEn: "Scale / Deodorant Stain Remover",
    desc: "Anti noda kerak yang bisa menghilangkan noda kerak di daerah leher dan daerah ketiak",
    price: "Rp 34.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 71,
    name: "Anti noda Minyak",
    nameEn: "Oil Stain Remover",
    desc: "Anti noda minyak bisa menghilangkan noda minyak, lemak, saus, kecap, coklat, susu dan warna lainnya",
    price: "Rp 34.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 72,
    name: "Anti noda Tinta",
    nameEn: "Ink Stain Remover",
    desc: "Anti noda tinta bisa menghilangkan noda yang terkena tinta",
    price: "Rp 34.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 73,
    name: "Anti noda Luntur dan Jamur",
    nameEn: "Color Run & Mold Stain Remover",
    desc: "Anti noda Luntur & Jamur yang dikenal dengan nama Netral, merupakan cairan penetral setelah proses pencucian",
    price: "Rp 34.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 74,
    name: "Anti Noda 250ml dan Anti Noda 1L",
    nameEn: "Stain Remover 250ml and 1L",
    desc: "Anti noda untuk menghilangkan berbagai jenis noda pada pakaian, tersedia kemasan 250ml dan 1L",
    price: "Rp 15.000",
    category: "Deterjen & Kimia",
  },
  {
    id: 75,
    name: "Labsa Anti Noda Oli",
    nameEn: "Oil Stain Labsa",
    desc: "Anti noda untuk penghilang noda berat dan membandel seperti oli, minyak, dan sejenisnya",
    price: "Rp 45.000",
    category: "Deterjen & Kimia",
  },
  {
    id: 76,
    name: "Oxy Booster Cair 1L",
    nameEn: "Liquid Oxy Booster 1L",
    desc: "Oxy Booster cair pemutih dan pencerah pakaian kemasan 1 liter",
    price: "Rp 44.000",
    category: "Deterjen & Kimia",
  },
  // PARFUM & SOFTENER TAMBAHAN
  {
    id: 77,
    name: "Parfum Inomatique Selena 100ml",
    nameEn: "Inomatique Selena Perfume 100ml",
    desc: "Parfum Laundry dengan aroma Selena kemasan 100ml",
    price: "Rp 14.000",
    category: "Parfum & Softener",
  },
  {
    id: 78,
    name: "Parfum Inomatique Snappy 100ml",
    nameEn: "Inomatique Snappy Perfume 100ml",
    desc: "Parfum Laundry aroma Snappy kemasan 100ml",
    price: "Rp 14.000",
    category: "Parfum & Softener",
  },
  {
    id: 79,
    name: "Parfum Inomatique Philux 100ml",
    nameEn: "Inomatique Philux Perfume 100ml",
    desc: "Parfum Laundry dengan aroma Philux kemasan 100ml",
    price: "Rp 12.000",
    category: "Parfum & Softener",
  },
  {
    id: 80,
    name: "Parfum Inomatique Akasia 100ml",
    nameEn: "Inomatique Acacia Perfume 100ml",
    desc: "Parfum Laundry dengan aroma Akasia kemasan 100ml",
    price: "Rp 12.000",
    category: "Parfum & Softener",
  },
  {
    id: 81,
    name: "Parfum Selena 5L",
    nameEn: "Selena Perfume 5L",
    desc: "Parfum Inomatique aroma Selena kemasan 5 liter",
    price: "Rp 160.000",
    category: "Parfum & Softener",
  },
  {
    id: 82,
    name: "Parfum Philux 5L",
    nameEn: "Philux Perfume 5L",
    desc: "Parfum Inomatique dengan aroma Philux kemasan 5 liter",
    price: "Rp 145.000",
    category: "Parfum & Softener",
  },
  {
    id: 83,
    name: "Pelicin & Pewangi Akasia",
    nameEn: "Acacia Softener & Fragrance",
    desc: "Pelicin dan pengharum pakaian, cairan pelicin dan pengharum setrika pakaian aroma Akasia",
    price: "Rp 27.000",
    category: "Parfum & Softener",
  },
  {
    id: 84,
    name: "Pelicin dan Pewangi Ocean Fresh (OF)",
    nameEn: "Ocean Fresh (OF) Softener & Fragrance",
    desc: "Pelicin dan pengharum pakaian, cairan pelicin dan pengharum setrika pakaian aroma Ocean Fresh",
    price: "Rp 27.000",
    category: "Parfum & Softener",
  },
  {
    id: 85,
    name: "Pelicin dan Pewangi Philux",
    nameEn: "Philux Softener & Fragrance",
    desc: "Pelicin dan pengharum pakaian, cairan pelicin dan pengharum setrika pakaian aroma Philux",
    price: "Rp 27.000",
    category: "Parfum & Softener",
  },
  {
    id: 86,
    name: "Softener Dinda (Pink, Ungu, Biru)",
    nameEn: "Dinda Softener (Pink, Purple, Blue)",
    desc: "Softener Dinda tersedia dalam 3 varian: pink, ungu, dan biru",
    price: "Rp 65.000",
    category: "Parfum & Softener",
  },
  // HANGER & AKSESORIS TAMBAHAN
  {
    id: 87,
    name: "Roll Bulu Kucing",
    nameEn: "Cat Hair Roller",
    desc: "Roll Bulu Kucing, penghilang bulu yang efektif, alat khusus memudahkan proses penghapusan bulu kucing dari pakaian",
    price: "Rp 9.000",
    category: "Hanger & Aksesoris",
  },
  // SIKAT & PEMBERSIH TAMBAHAN
  {
    id: 88,
    name: "Sikat Suede",
    nameEn: "Suede Brush",
    desc: "Sikat Suede khusus untuk membersihkan bahan suede dan nubuck",
    price: "Rp 3.500",
    category: "Sikat & Pembersih",
  },
  // PAKET MESIN TAMBAHAN 2
  {
    id: 89,
    name: "PAKET 2 MESIN, PAKET 3 MESIN, PAKET 4 MESIN",
    nameEn: "2 MACHINE PACKAGE, 3 MACHINE PACKAGE, 4 MACHINE PACKAGE",
    desc: "Washer Samsung 16kg, Dryer LG Giant Max",
    price: "Rp 75.000.000",
    category: "Paket Mesin",
  },
  {
    id: 90,
    name: "PAKET MESIN & INSTALASI",
    nameEn: "MACHINE PACKAGE & INSTALLATION",
    desc: "Washer LG 20kg, Dryer Speedqueen 15kg",
    price: "Rp 112.000.000",
    category: "Paket Mesin",
  },
  // SETRIKA & BOILER TAMBAHAN 2
  {
    id: 91,
    name: "Boiler Manual Kanaka",
    nameEn: "Kanaka Manual Boiler",
    desc: "Boiler manual isi air sendiri, cocok untuk usaha laundry skala kecil hingga menengah",
    price: "Rp 3.500.000",
    category: "Setrika & Boiler",
  },
  {
    id: 92,
    name: "KEPALA SETRIKA UAP GESER F-Strong",
    nameEn: "F-Strong Sliding Steam Iron Head",
    desc: "Kepala Setrika Uap Geser merk F-Strong, lebih ringan dan awet",
    price: "Rp 380.000",
    category: "Setrika & Boiler",
  },
  {
    id: 93,
    name: "Kompor Gas Rinnai",
    nameEn: "Rinnai Gas Stove",
    desc: "Kompor gas Rinnai untuk boiler setrika uap laundry",
    price: "Rp 285.000",
    category: "Setrika & Boiler",
  },
  // DETERJEN & KIMIA TAMBAHAN 2
  {
    id: 94,
    name: "Deterjen Bubuk Laundry 1kg",
    nameEn: "Laundry Powder Detergent 1kg",
    desc: "Deterjen bubuk khusus laundry, bersih maksimal dan aman untuk semua jenis kain",
    price: "Rp 18.000",
    category: "Deterjen & Kimia",
  },
  {
    id: 95,
    name: "Anti noda (Pemutih) Pencerah Warna",
    nameEn: "Stain Remover (Whitener) Color Brightener",
    desc: "Cairan pemutih, pencerah warna khusus warna putih polos",
    price: "Rp 34.500",
    category: "Deterjen & Kimia",
  },
  {
    id: 96,
    name: "Detoxy Cair 1L",
    nameEn: "Liquid Detoxy 1L",
    desc: "Deterjen cair Detoxy kemasan 1 liter, praktis untuk penggunaan harian",
    price: "Rp 12.000",
    category: "Deterjen & Kimia",
  },
  // PARFUM & SOFTENER TAMBAHAN 2
  {
    id: 97,
    name: "Parfum Akasia 100ml",
    nameEn: "Acacia Perfume 100ml",
    desc: "Parfum Laundry dengan aroma Akasia kemasan 100ml",
    price: "Rp 12.000",
    category: "Parfum & Softener",
  },
  {
    id: 98,
    name: "Pelicin / Pewangi Zahra 5L",
    nameEn: "Zahra Fabric Softener 5L",
    desc: "Pelicin dan pengharum pakaian Zahra kemasan 5 liter, ekonomis untuk usaha laundry",
    price: "Rp 125.000",
    category: "Parfum & Softener",
  },
  {
    id: 99,
    name: "Softener Dinda Ungu 5L",
    nameEn: "Dinda Purple Softener 5L",
    desc: "Softener Dinda aroma ungu/lavender kemasan 5 liter",
    price: "Rp 65.000",
    category: "Parfum & Softener",
  },
  // PERLENGKAPAN TOKO TAMBAHAN
  {
    id: 100,
    name: "APAR TONATA 5kg",
    nameEn: "TONATA Fire Extinguisher 5kg",
    desc: "APAR TONATA alat pemadam api untuk usaha laundry Anda, kapasitas 5kg",
    price: "Rp 450.000",
    category: "Perlengkapan Toko",
  },
  {
    id: 101,
    name: "Nota / Struk Laundry",
    nameEn: "Laundry Receipt / Slip",
    desc: "Nota struk laundry 2 ply, sablon nama toko, ukuran 1/4 folio",
    price: "Rp 35.000",
    category: "Perlengkapan Toko",
  },
  {
    id: 102,
    name: "Spanduk Banner Laundry",
    nameEn: "Laundry Banner",
    desc: "Spanduk banner promosi laundry custom ukuran 1x2m atau 1x3m",
    price: "Rp 85.000",
    category: "Perlengkapan Toko",
  },
  // PLASTIK & KEMASAN TAMBAHAN
  {
    id: 103,
    name: "Plastik jinjing sablon UK 35",
    nameEn: "Printed Carrier Bag Size 35",
    desc: "Plastik jinjing sablon/print ukuran 35",
    price: "Rp 38.500",
    category: "Plastik & Kemasan",
  },
  {
    id: 104,
    name: "Plastik jinjing sablon UK 40",
    nameEn: "Printed Carrier Bag Size 40",
    desc: "Plastik jinjing sablon/print ukuran 40",
    price: "Rp 38.500",
    category: "Plastik & Kemasan",
  },
  {
    id: 105,
    name: "Plastik jinjing sablon UK 45",
    nameEn: "Printed Carrier Bag Size 45",
    desc: "Plastik Jinjing sablon / Print UK 45",
    price: "Rp 38.500",
    category: "Plastik & Kemasan",
  },
  {
    id: 106,
    name: "Plastik jinjing sablon UK 50",
    nameEn: "Printed Carrier Bag Size 50",
    desc: "Plastik jinjing sablon/Print UK 50",
    price: "Rp 38.500",
    category: "Plastik & Kemasan",
  },
  // HANGER & AKSESORIS TAMBAHAN 2
  {
    id: 107,
    name: "Hanger Baju Plastik Biasa (1 Lusin)",
    nameEn: "Regular Plastic Clothes Hanger (1 Dozen)",
    desc: "Hanger baju plastik standar 1 lusin, cocok untuk penggantungan pakaian laundry",
    price: "Rp 7.000",
    category: "Hanger & Aksesoris",
  },
  {
    id: 108,
    name: "Plastik hanger sablon UK 100x60 dan 150x60",
    nameEn: "Printed Hanger Plastic 100x60 and 150x60",
    desc: "Plastik hanger sablon ukuran 100x60 dan 150x60, satuan per pak",
    price: "Rp 44.000",
    category: "Plastik & Kemasan",
  },
];

const categoriesId = ["Semua", "Paket Mesin", "Setrika & Boiler", "Deterjen & Kimia", "Parfum & Softener", "Perlengkapan Toko", "Plastik & Kemasan", "Hanger & Aksesoris", "Sikat & Pembersih", "Komponen Teknis"];
const categoriesEn = ["All", "Machine Packages", "Iron & Boiler", "Detergents & Chemistry", "Perfume & Softener", "Store Supplies", "Plastic & Packaging", "Hangers & Accessories", "Brushes & Cleaners", "Technical Components"];

const categoryColors: Record<string, string> = {
  "Paket Mesin": "bg-blue-100 text-blue-700",
  "Machine Packages": "bg-blue-100 text-blue-700",
  "Setrika & Boiler": "bg-orange-100 text-orange-700",
  "Iron & Boiler": "bg-orange-100 text-orange-700",
  "Deterjen & Kimia": "bg-yellow-100 text-yellow-700",
  "Detergents & Chemistry": "bg-yellow-100 text-yellow-700",
  "Parfum & Softener": "bg-pink-100 text-pink-700",
  "Perfume & Softener": "bg-pink-100 text-pink-700",
  "Perlengkapan Toko": "bg-purple-100 text-purple-700",
  "Store Supplies": "bg-purple-100 text-purple-700",
  "Plastik & Kemasan": "bg-teal-100 text-teal-700",
  "Plastic & Packaging": "bg-teal-100 text-teal-700",
  "Hanger & Aksesoris": "bg-indigo-100 text-indigo-700",
  "Hangers & Accessories": "bg-indigo-100 text-indigo-700",
  "Sikat & Pembersih": "bg-green-100 text-green-700",
  "Brushes & Cleaners": "bg-green-100 text-green-700",
  "Komponen Teknis": "bg-slate-100 text-slate-700",
  "Technical Components": "bg-slate-100 text-slate-700",
};

function ProdukContent() {
  const searchParams = useSearchParams();
  const [locale, setLocale] = useState<"id" | "en">("id");
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const t = translations[locale].common;

  const categories = locale === "id" ? categoriesId : categoriesEn;

  // Initialize locale from URL or localStorage
  useEffect(() => {
    const langParam = searchParams.get("lang");
    if (langParam === "en" || langParam === "id") {
      setLocale(langParam);
      localStorage.setItem("inova-locale", langParam);
    } else {
      const savedLocale = localStorage.getItem("inova-locale") as "id" | "en";
      if (savedLocale === "en" || savedLocale === "id") {
        setLocale(savedLocale);
      }
    }
    setIsLoaded(true);
  }, [searchParams]);

  const handleLocaleChange = (newLocale: "id" | "en") => {
    setLocale(newLocale);
    localStorage.setItem("inova-locale", newLocale);
    const url = new URL(window.location.href);
    if (newLocale === "id") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", newLocale);
    }
    window.history.pushState({}, "", url.toString());
  };

  // Reset page whenever filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, search]);

  const filtered = useMemo(() => {
    const enCategories: Record<string, string> = {
      "Paket Mesin": "Machine Packages",
      "Setrika & Boiler": "Iron & Boiler",
      "Deterjen & Kimia": "Detergents & Chemistry",
      "Parfum & Softener": "Perfume & Softener",
      "Perlengkapan Toko": "Store Supplies",
      "Plastik & Kemasan": "Plastic & Packaging",
      "Hanger & Aksesoris": "Hangers & Accessories",
      "Sikat & Pembersih": "Brushes & Cleaners",
      "Komponen Teknis": "Technical Components",
    };

    return allProducts.filter((p) => {
      const category = locale === "id" ? p.category : enCategories[p.category] || p.category;
      const matchCat = activeCategory === "Semua" || activeCategory === "All" || category === activeCategory;
      const matchSearch = search.trim() === "" || p.name.toLowerCase().includes(search.toLowerCase()) || (p.nameEn && p.nameEn.toLowerCase().includes(search.toLowerCase())) || p.desc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search, locale]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  function handlePageChange(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function getPageNumbers(): (number | "…")[] {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | "…")[] = [1];
    if (currentPage > 3) pages.push("…");
    for (let p = Math.max(2, currentPage - 1); p <= Math.min(totalPages - 1, currentPage + 1); p++) {
      pages.push(p);
    }
    if (currentPage < totalPages - 2) pages.push("…");
    pages.push(totalPages);
    return pages;
  }

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="min-h-screen bg-[#f6f6f8] flex flex-col">
      <Navbar locale={locale} onLocaleChange={handleLocaleChange} basePath="/" />

      <main className="grow pt-20">
        {/* ── SEO HERO ── */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide mb-4">
                <Tag className="w-3.5 h-3.5" />
                {locale === "id" ? "Katalog Resmi INOVA" : "INOVA Official Catalog"}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 leading-tight">
                {locale === "id" ? "Produk Laundry Bisnis" : "Complete & Trusted Laundry Business Products"} <span className="text-[#1c3ca6]">{locale === "id" ? "Lengkap & Terpercaya" : ""}</span>
              </h1>
              <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto mb-8">
                {locale === "id"
                  ? "Temukan perlengkapan laundry profesional — mesin cuci, setrika, deterjen, parfum, kemasan, hingga aksesoris toko. Semua tersedia dari satu sumber terpercaya."
                  : "Find professional laundry equipment — washing machines, irons, detergents, perfume, packaging, and store accessories. All available from one trusted source."}
              </p>
              {/* Stats bar */}
              <div className="inline-flex flex-wrap justify-center gap-6 md:gap-10 px-8 py-4 rounded-2xl bg-slate-50 border border-slate-200">
                {[
                  { value: "108+", label: locale === "id" ? "Produk Tersedia" : "Products Available" },
                  { value: "9", label: locale === "id" ? "Kategori" : "Categories" },
                  { value: "100%", label: "Original INOVA" },
                  { value: "Free", label: locale === "id" ? "Konsultasi" : "Consultation" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl md:text-2xl font-black text-[#1c3ca6]">{s.value}</div>
                    <div className="text-xs text-slate-500 font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STICKY FILTER & SEARCH ── */}
        <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-3">
            {/* Search row */}
            <div className="flex gap-2 mb-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  suppressHydrationWarning
                  type="text"
                  placeholder={locale === "id" ? "Cari produk, nama, atau deskripsi..." : "Search products, name, or description..."}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition"
                />
                {search && (
                  <button
                    suppressHydrationWarning
                    onClick={() => setSearch("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition"
                    aria-label={locale === "id" ? "Hapus pencarian" : "Clear search"}
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              {/* Mobile filter toggle */}
              <button
                suppressHydrationWarning
                onClick={() => setShowMobileFilter((v) => !v)}
                className={`md:hidden flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                  showMobileFilter ? "bg-[#1c3ca6] text-white border-[#1c3ca6]" : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
                aria-label={locale === "id" ? "Toggle filter kategori" : "Toggle category filter"}
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>
            </div>

            {/* Category tabs — always visible on md+, togglable on mobile */}
            <div className={`${showMobileFilter ? "flex" : "hidden md:flex"} gap-2 overflow-x-auto pb-1 scrollbar-hide`}>
              {categories.map((cat) => (
                <button
                  suppressHydrationWarning
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setShowMobileFilter(false);
                  }}
                  className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    activeCategory === cat ? "bg-[#1c3ca6] text-white shadow-md shadow-[#1c3ca6]/20" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUCT GRID ── */}
        <section className="max-w-7xl mx-auto px-6 py-10">
          {/* Result count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-slate-400 font-medium">
              {filtered.length === 0 ? (
                locale === "id" ? (
                  "Tidak ada produk ditemukan"
                ) : (
                  "No products found"
                )
              ) : (
                <>
                  {locale === "id" ? "Menampilkan" : "Showing"}{" "}
                  <span className="text-slate-700 font-bold">
                    {startIdx + 1}–{Math.min(startIdx + ITEMS_PER_PAGE, filtered.length)}
                  </span>{" "}
                  {locale === "id" ? "dari" : "of"} <span className="text-slate-700 font-bold">{filtered.length}</span> {locale === "id" ? "produk" : "products"}
                  {activeCategory !== "Semua" && activeCategory !== "All" && (
                    <>
                      {" "}
                      {locale === "id" ? "dalam kategori" : "in category"} <span className="text-[#1c3ca6] font-bold">{activeCategory}</span>
                    </>
                  )}
                </>
              )}
            </p>
            {search && <span className="text-xs text-blue-600 font-semibold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">"{search}"</span>}
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-24 text-slate-400">
                <p className="text-5xl mb-4">🔍</p>
                <p className="font-bold text-slate-500 text-lg mb-1">{locale === "id" ? "Produk tidak ditemukan" : "Product not found"}</p>
                <p className="text-sm mb-5">{locale === "id" ? "Coba kata kunci lain atau pilih kategori berbeda" : "Try a different keyword or select a different category"}</p>
                <button
                  suppressHydrationWarning
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("Semua");
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1c3ca6] text-white text-sm font-bold hover:bg-[#1632a0] transition"
                >
                  <X className="w-4 h-4" /> {locale === "id" ? "Reset Filter" : "Reset Filter"}
                </button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {paginated.map((product, i) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25, delay: Math.min(i * 0.04, 0.25) }}
                    className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-blue-200 transition-all duration-200 flex flex-col cursor-pointer"
                  >
                    {/* Product image / placeholder */}
                    <div className="relative w-full aspect-4/3 overflow-hidden flex items-center justify-center bg-linear-to-br from-slate-100 to-slate-200">
                      {/* Tinted overlay */}
                      <div className={`absolute inset-0 opacity-10 ${categoryColors[product.category]?.split(" ")[0] ?? "bg-slate-200"}`} />
                      {/* Shimmer on hover */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none" />
                      {/* Icon */}
                      <div className="relative flex flex-col items-center gap-1.5 text-slate-300 group-hover:text-slate-400 transition-colors">
                        <Package className="w-10 h-10" />
                        <span className="text-[10px] font-semibold uppercase tracking-widest">{locale === "id" ? "Foto Produk" : "Product Photo"}</span>
                      </div>
                      {/* Category badge */}
                      <div className="absolute bottom-2 left-2">
                        <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide shadow-sm ${categoryColors[product.category] ?? "bg-slate-100 text-slate-500"}`}>
                          {locale === "id"
                            ? product.category
                            : product.category === "Paket Mesin"
                            ? "Machine Packages"
                            : product.category === "Setrika & Boiler"
                            ? "Iron & Boiler"
                            : product.category === "Deterjen & Kimia"
                            ? "Detergents & Chemistry"
                            : product.category === "Parfum & Softener"
                            ? "Perfume & Softener"
                            : product.category === "Perlengkapan Toko"
                            ? "Store Supplies"
                            : product.category === "Plastik & Kemasan"
                            ? "Plastic & Packaging"
                            : product.category === "Hanger & Aksesoris"
                            ? "Hangers & Accessories"
                            : product.category === "Sikat & Pembersih"
                            ? "Brushes & Cleaners"
                            : product.category === "Komponen Teknis"
                            ? "Technical Components"
                            : product.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 flex flex-col grow">
                      <h2 className="text-sm font-bold text-slate-900 leading-snug mb-1.5 line-clamp-2 group-hover:text-[#1c3ca6] transition-colors">{locale === "id" ? product.name : product.nameEn || product.name}</h2>
                      <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2 grow">{product.desc}</p>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100">
                        <span className="text-sm font-black text-[#1c3ca6]">{product.price}</span>
                        <a
                          href={waProduct(product.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-xs font-bold rounded-lg transition-all duration-200 hover:scale-[1.04] active:scale-100 shrink-0 shadow-sm shadow-green-500/30"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          {locale === "id" ? "Pesan" : "Order"}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="flex items-center gap-1.5">
                {/* Prev */}
                <button
                  suppressHydrationWarning
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  <ChevronLeft className="w-4 h-4" /> {locale === "id" ? "Prev" : "Prev"}
                </button>

                {/* Page numbers */}
                {getPageNumbers().map((p, idx) =>
                  p === "…" ? (
                    <span key={`ellipsis-${idx}`} className="px-2 text-slate-400 text-sm select-none">
                      …
                    </span>
                  ) : (
                    <button
                      suppressHydrationWarning
                      key={p}
                      onClick={() => handlePageChange(p as number)}
                      className={`w-9 h-9 rounded-xl text-xs font-bold transition-all duration-150 ${
                        currentPage === p ? "bg-[#1c3ca6] text-white shadow-md shadow-[#1c3ca6]/25" : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                      }`}
                    >
                      {p}
                    </button>
                  )
                )}

                {/* Next */}
                <button
                  suppressHydrationWarning
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-1 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 bg-white hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  {locale === "id" ? "Next" : "Next"} <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-xs text-slate-400">
                {locale === "id" ? "Halaman" : "Page"} <span className="font-bold text-slate-600">{currentPage}</span> {locale === "id" ? "dari" : "of"} <span className="font-bold text-slate-600">{totalPages}</span>
              </p>
            </div>
          )}
        </section>

        {/* ── CTA BOTTOM ── */}
        <section className="bg-[#1c3ca6] mt-4">
          <div className="max-w-4xl mx-auto px-6 py-16 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-wide mb-5">
                <MessageCircle className="w-3.5 h-3.5" />
                {locale === "id" ? "Butuh Bantuan Memilih Produk?" : "Need Help Choosing Products?"}
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-4 leading-tight">{locale === "id" ? "Konsultasi Gratis via WhatsApp" : "Free Consultation via WhatsApp"}</h2>
              <p className="text-blue-200 text-base mb-8 max-w-xl mx-auto">
                {locale === "id"
                  ? "Tim kami siap membantu Anda memilih produk yang tepat sesuai kebutuhan dan anggaran bisnis laundry Anda."
                  : "Our team is ready to help you choose the right products according to your needs and laundry business budget."}
              </p>
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 text-white font-bold text-base transition-all duration-200 hover:scale-105 active:scale-100 shadow-xl shadow-green-900/30"
              >
                <MessageCircle className="w-5 h-5" />
                {locale === "id" ? "Tanya via WhatsApp Sekarang" : "Ask via WhatsApp Now"}
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </div>
  );
}

export default function ProdukPage() {
  return (
    <Suspense fallback={null}>
      <ProdukContent />
    </Suspense>
  );
}
