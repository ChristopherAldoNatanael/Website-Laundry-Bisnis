/**
 * Nomor WhatsApp INOVA Laundry
 * Format internasional tanpa + dan tanpa spasi
 */
const WA_NUMBER = "628161333440";

/**
 * Membuat link WhatsApp dengan pesan otomatis yang sudah terisi
 * @param message - Pesan yang akan muncul otomatis di keyboard WA
 */
export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// ── Link spesifik per konteks ──────────────────────────────────────────────

/** Hero / CTA utama — ingin konsultasi mulai bisnis */
export const WA_HERO = waLink("Halo INOVA, saya ingin konsultasi mengenai paket usaha laundry. Bisa bantu saya?");

/** BrandIntro — ingin tahu lebih lanjut tentang INOVA */
export const WA_BRAND_INTRO = waLink("Halo INOVA, saya tertarik dengan solusi bisnis laundry dari INOVA. Bisa ceritakan lebih lanjut?");

/** Navbar — tombol WhatsApp di header */
export const WA_NAVBAR = waLink("Halo INOVA, saya ingin bertanya tentang paket kemitraan laundry. Apakah bisa dibantu?");

/** Packages — tombol Pilih Paket (dari halaman utama) */
export const WA_PACKAGES = waLink("Halo INOVA, saya tertarik dengan paket kemitraan laundry. Bisa saya dapatkan informasi lebih lengkap?");

/** Packages — Paket SpeedQueen (Rp 102,5 Juta) */
export const WA_PAKET_SPEEDQUEEN = waLink("Halo INOVA, saya tertarik dengan *Paket 3/4 Mesin — Dryer SpeedQueen 15 Kg* seharga Rp 102.500.000. Bisa saya dapatkan info lengkapnya?");

/** Packages — Paket LG Giant Max (Rp 106,5 Juta) */
export const WA_PAKET_LGGIANTMAX = waLink("Halo INOVA, saya tertarik dengan *Paket 3/4/Bisnis 4 Mesin — Dryer LG Giant Max* seharga Rp 106.500.000. Bisa saya dapatkan info lengkapnya?");

/** Packages — Paket Maytag (Rp 109 Juta) */
export const WA_PAKET_MAYTAG = waLink("Halo INOVA, saya tertarik dengan *Paket 3/4/5 Mesin — Dryer Maytag 15 Kg* seharga Rp 109.000.000. Bisa saya dapatkan info lengkapnya?");

/** Products — tombol order per produk (menerima nama produk) */
export function waProduct(productName: string): string {
  return waLink(`Halo INOVA, saya ingin memesan *${productName}*. Bisa saya dapatkan info harga dan ketersediaannya?`);
}

/** Products — lihat semua produk */
export const WA_PRODUCTS_ALL = waLink("Halo INOVA, saya ingin melihat katalog lengkap produk mesin laundry yang tersedia. Bisa dibantu?");

/** Footer — tombol Hubungi Kami */
export const WA_FOOTER = waLink("Halo INOVA, saya ingin menghubungi tim Anda untuk informasi lebih lanjut mengenai layanan laundry.");

/** CTABanner — tombol utama di bagian bawah halaman */
export const WA_CTA_BANNER = waLink("Halo INOVA, saya siap memulai bisnis laundry bersama INOVA! Bisa bantu saya untuk langkah selanjutnya?");
