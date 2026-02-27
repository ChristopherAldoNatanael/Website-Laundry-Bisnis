"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, MessageCircle } from "lucide-react";
import { translations } from "@/lib/i18n";

interface PackagesProps {
  locale: "id" | "en";
}

const packages = [
  {
    id: "basic",
    name: "Paket Basic",
    price: "Rp 15.000.000",
    description: "Solusi laundry entry-level dengan peralatan efisien dan hemat energi.",
    features: ["1 Mesin Cuci 10kg", "1 Mesin Cuci 15kg", "1 Set Pengering 10kg", "1 Set Peluru Deterjen", "Meja Setrika & Setrika", "Perlengkapan Toko Dasar", "Bahan Promosi Digital"],
    color: "slate",
    popular: false,
  },
  {
    id: "medium",
    name: "Paket Medium",
    price: "Rp 28.500.000",
    description: "Paket optimal untuk laundry rumahan dengan kapasitas lebih besar.",
    features: ["2 Mesin Cuci 15kg", "1 Mesin Cuci 20kg", "2 Set Pengering 15kg", "2 Set Peluru Deterjen", "Meja Setrika & Setrika", "Mesin Packing", "Perlengkapan Toko Lengkap", "Bahan Promosi Digital", "Konsultasi Bisnis Gratis"],
    color: "blue",
    popular: true,
  },
  {
    id: "premium",
    name: "Paket Premium",
    price: "Rp 45.000.000",
    description: "Solusi laundry profesional dengan peralatan premium dan dukungan penuh.",
    features: [
      "2 Mesin Cuci 20kg",
      "1 Mesin Cuci 30kg",
      "3 Set Pengering 20kg",
      "3 Set Peluru Deterjen",
      "Mesin Finishing",
      "Mesin Packing Otomatis",
      "Perlengkapan Toko Premium",
      "Bahan Promosi Digital",
      "Konsultasi Bisnis Prioritas",
      "Software Manajemen",
    ],
    color: "slate",
    popular: false,
  },
];

export function Packages({ locale }: PackagesProps) {
  const t = translations[locale].common;

  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            {t.packages.badge}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">{t.packages.title}</h2>
          <p className="text-slate-500 leading-relaxed">{t.packages.subtitle}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular ? "bg-slate-900 border-slate-700 shadow-2xl shadow-slate-900/20 scale-105 z-10" : "bg-white border-slate-100 shadow-lg shadow-slate-100/60 hover:shadow-xl hover:shadow-slate-200/60"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-blue-500 text-white text-[11px] font-black tracking-widest uppercase shadow-lg shadow-blue-500/30">Most Popular</span>
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="mb-8">
                  <h3 className={`text-sm font-bold uppercase tracking-wider mb-3 ${pkg.popular ? "text-blue-400" : "text-blue-600"}`}>{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className={`text-3xl font-black ${pkg.popular ? "text-white" : "text-slate-900"}`}>{pkg.price}</span>
                  </div>
                  <p className={`text-sm leading-relaxed ${pkg.popular ? "text-slate-400" : "text-slate-500"}`}>{pkg.description}</p>
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 mb-8 ${
                    pkg.popular ? "bg-blue-500 hover:bg-blue-400 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-400/40" : "bg-slate-900 hover:bg-slate-800 text-white shadow-md hover:shadow-lg"
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.packages.cta}
                </a>

                {/* Divider */}
                <div className={`border-t mb-6 ${pkg.popular ? "border-slate-700" : "border-slate-100"}`} />

                {/* Features */}
                <ul className="space-y-3">
                  {pkg.features.map((feature, fi) => (
                    <li key={fi} className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${pkg.popular ? "bg-blue-500/20" : "bg-green-50"}`}>
                        <Check className={`w-3 h-3 ${pkg.popular ? "text-blue-400" : "text-green-600"}`} />
                      </span>
                      <span className={`text-sm ${pkg.popular ? "text-slate-300" : "text-slate-600"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-12">{t.packages.note}</p>
      </div>
    </section>
  );
}
