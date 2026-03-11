"use client";

import { motion } from "framer-motion";
import { Check, Plus, MessageCircle, Package2, Zap, Star } from "lucide-react";
import Image from "next/image";
import { WA_PAKET_SPEEDQUEEN, WA_PAKET_LGGIANTMAX, WA_PAKET_MAYTAG } from "@/lib/whatsapp";

interface PackagesProps {
  locale: "id" | "en";
}

const packages = [
  {
    id: "speedqueen",
    name: "Paket 3 / 4 Mesin",
    priceShort: "102,5",
    popular: false,
    tagline: "Dryer SpeedQueen",
    waLink: WA_PAKET_SPEEDQUEEN,
    accentColor: "from-slate-400 to-slate-600",
    badgeColor: "bg-slate-100 text-slate-600",
    iconColor: "text-slate-500",
    image: null,
    features: [
      { text: "Washer LG 20 Kg", highlight: false },
      { text: "Dryer SpeedQueen 15 Kg", highlight: false },
      { text: "Pilihan: 3 atau 4 Set Mesin", highlight: false },
      { text: "Instalasi Lengkap Termasuk", highlight: false },
      { text: "Garansi Alat 1 Tahun", highlight: false },
      { text: "Training Operasional Gratis", highlight: false },
    ],
  },
  {
    id: "lggiantmax",
    name: "Paket 3 / 4 / Bisnis 4",
    priceShort: "106,5",
    popular: true,
    tagline: "Dryer LG Giant Max",
    waLink: WA_PAKET_LGGIANTMAX,
    accentColor: "from-[#1c3ca6] to-[#2c5ddc]",
    badgeColor: "bg-[#1c3ca6] text-white",
    iconColor: "text-[#2c5ddc]",
    image: null,
    features: [
      { text: "Washer LG 20 Kg", highlight: false },
      { text: "Dryer LG Giant Max", highlight: false },
      { text: "Pilihan: 3, 4, atau Bisnis 4 Set", highlight: false },
      { text: "Instalasi Lengkap Termasuk", highlight: false },
      { text: "Garansi Alat 1 Tahun", highlight: false },
      { text: "Training Operasional Gratis", highlight: false },
      { text: "Kapasitas Dryer Terbesar", highlight: true },
    ],
  },
  {
    id: "maytag",
    name: "Paket 3 / 4 / 5 Mesin",
    priceShort: "109",
    popular: false,
    tagline: "Dryer Maytag Premium",
    waLink: WA_PAKET_MAYTAG,
    accentColor: "from-slate-600 to-slate-800",
    badgeColor: "bg-slate-100 text-slate-600",
    iconColor: "text-slate-500",
    image: null,
    features: [
      { text: "Washer LG 20 Kg", highlight: false },
      { text: "Dryer Maytag 15 Kg", highlight: false },
      { text: "Pilihan: 3, 4, atau 5 Set Mesin", highlight: false },
      { text: "Instalasi Lengkap Termasuk", highlight: false },
      { text: "Garansi Alat 1 Tahun", highlight: false },
      { text: "Training Operasional Gratis", highlight: false },
      { text: "Dryer Maytag Premium USA", highlight: true },
    ],
  },
];

export function Packages({ locale }: PackagesProps) {
  return (
    <section id="packages" className="py-24 bg-[#f0f1f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c3ca6]/10 text-[#1c3ca6] text-xs font-bold uppercase tracking-widest mb-4">
            <Zap className="w-3.5 h-3.5" />
            Paket Mesin Laundry
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3 leading-tight">Pilih Paket Kemitraan Anda</h2>
          <p className="text-slate-500 text-base">Investasi transparan tanpa biaya tersembunyi</p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid md:grid-cols-3 gap-7 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 group ${
                pkg.popular ? "border-2 border-[#2c5ddc] shadow-2xl shadow-[#1c3ca6]/15" : "border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#2c5ddc] text-white text-[10px] font-black uppercase tracking-widest shadow-lg">
                    <Star className="w-2.5 h-2.5 fill-white" />
                    Terlaris
                  </span>
                </div>
              )}

              {/* ── IMAGE AREA ── */}
              <div className={`relative w-full aspect-video overflow-hidden bg-linear-to-br ${pkg.accentColor} flex items-center justify-center`}>
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Glow blob */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 blur-2xl" />
                </div>

                {/* Real image — ganti src saat foto tersedia */}
                {pkg.image ? (
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
                ) : (
                  /* Placeholder saat belum ada foto */
                  <div className="relative flex flex-col items-center gap-3 text-white/60">
                    <Package2 className="w-12 h-12 text-white/50" />
                    <div className="text-center">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">Foto Produk</p>
                      <p className="text-xs font-semibold text-white/60 mt-0.5">{pkg.tagline}</p>
                    </div>
                  </div>
                )}

                {/* Tagline chip */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold uppercase tracking-wide">{pkg.tagline}</span>
                </div>
              </div>

              {/* ── CONTENT ── */}
              <div className="p-7 flex flex-col grow">
                {/* Name */}
                <h3 className="text-lg font-black text-slate-900 mb-1 leading-snug">{pkg.name}</h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-1 mt-3">
                  <span className="text-xs font-bold text-slate-400">Rp</span>
                  <span className={`text-4xl font-black ${pkg.popular ? "text-[#1c3ca6]" : "text-slate-900"}`}>{pkg.priceShort}</span>
                  <span className="text-sm font-semibold text-slate-400 ml-0.5">Juta</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 mb-6">Sekali Bayar</span>

                {/* Divider */}
                <div className={`h-px mb-6 ${pkg.popular ? "bg-[#2c5ddc]/20" : "bg-slate-100"}`} />

                {/* Features */}
                <ul className="space-y-3 mb-8 grow">
                  {pkg.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 border-2 ${
                          feature.highlight ? "bg-[#2c5ddc] border-[#2c5ddc]" : pkg.popular ? "bg-transparent border-[#2c5ddc]" : "bg-transparent border-slate-300"
                        }`}
                      >
                        {feature.highlight ? <Plus className="w-3 h-3 text-white stroke-3" /> : <Check className={`w-3 h-3 stroke-3 ${pkg.popular ? "text-[#2c5ddc]" : "text-slate-400"}`} />}
                      </span>
                      <span className={`text-sm leading-relaxed ${feature.highlight ? "font-bold text-[#2c5ddc]" : "text-slate-600"}`}>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA — langsung WA */}
                <a
                  href={pkg.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:scale-[1.02] active:scale-100 ${
                    pkg.popular ? "bg-[#2c5ddc] hover:bg-[#2347b8] text-white shadow-lg shadow-[#2c5ddc]/30" : "bg-slate-100 hover:bg-slate-200 text-slate-800"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  Pesan via WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom note ── */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="text-center text-xs text-slate-400 mt-10">
          Semua paket sudah termasuk instalasi & training • Harga belum termasuk pajak • Hubungi kami untuk penawaran khusus
        </motion.p>
      </div>
    </section>
  );
}
