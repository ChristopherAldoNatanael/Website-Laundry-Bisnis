"use client";

import { motion } from "framer-motion";
import { translations } from "@/lib/i18n";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { waProduct } from "@/lib/whatsapp";

interface ProductsProps {
  locale: "id" | "en";
}

export function Products({ locale }: ProductsProps) {
  const t = translations[locale].common;

  const products = [
    {
      id: "parfum",
      title: locale === "id" ? "Parfum Laundry Inomatique" : "Inomatique Laundry Perfume",
      description:
        locale === "id" ? "Parfum laundry aroma premium — tersedia varian Akasia, Snappy, Selena. Membuat pakaian wangi tahan lama." : "Premium laundry perfume — available in Akasia, Snappy, Selena variants for long-lasting fresh clothes.",
      price: "Rp 30.000",
      priceNote: locale === "id" ? "per 1 Liter" : "per 1 Litre",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&h=400&fit=crop",
      tag: locale === "id" ? "Terlaris" : "Best Seller",
      category: locale === "id" ? "Parfum & Softener" : "Perfume & Softener",
      accent: "from-pink-400 to-rose-500",
    },
    {
      id: "setrika",
      title: locale === "id" ? "Paket Setrika Uap + Boiler" : "Steam Iron + Boiler Package",
      description:
        locale === "id" ? "Boiler otomatis + kepala setrika + meja setrika 80×120 cm. Solusi setrika profesional untuk bisnis laundry." : "Auto boiler + iron head + 80×120 cm iron table. Professional ironing solution for laundry business.",
      price: "Hubungi Kami",
      priceNote: locale === "id" ? "harga sesuai paket" : "price by package",
      image: "https://images.unsplash.com/photo-1558171813-f1f850c2fbf3?w=600&h=400&fit=crop",
      tag: null,
      category: locale === "id" ? "Setrika & Boiler" : "Iron & Boiler",
      accent: "from-orange-400 to-amber-500",
    },
    {
      id: "deterjen",
      title: locale === "id" ? "Deterjen Cair Detoxy" : "Detoxy Liquid Detergent",
      description:
        locale === "id" ? "Deterjen laundry dilengkapi Oxy Bleach pencerah warna. Aman untuk semua bahan pakaian. Tersedia 5 Liter." : "Laundry detergent with Oxy Bleach color brightener. Safe for all fabric types. Available in 5 Litres.",
      price: "Rp 47.500",
      priceNote: locale === "id" ? "per 5 Liter" : "per 5 Litres",
      image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=600&h=400&fit=crop",
      tag: null,
      category: locale === "id" ? "Deterjen & Kimia" : "Detergent & Chemical",
      accent: "from-yellow-400 to-lime-500",
    },
  ];

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-semibold tracking-wide uppercase mb-5">{t.products.title}</span>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">{t.products.subtitle}</h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-md hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
                {product.tag && <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-[11px] font-bold tracking-wide uppercase shadow-lg">{product.tag}</span>}
                {/* Category badge bottom-left */}
                <div className="absolute bottom-4 left-4">
                  <span className={`px-2.5 py-1 rounded-full bg-linear-to-r ${product.accent} text-white text-[10px] font-bold uppercase tracking-wide shadow`}>{product.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-black text-slate-900 mb-2">{product.title}</h3>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-0.5">{product.priceNote}</p>
                    <p className={`text-xl font-black ${product.price === "Hubungi Kami" ? "text-slate-600 text-base" : "text-blue-700"}`}>{product.price}</p>
                  </div>
                  <a
                    href={waProduct(product.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-all duration-200 shadow-md shadow-green-500/20 hover:shadow-green-500/30 hover:scale-[1.03] active:scale-100"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t.products.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <Link href="/produk" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors group">
            {locale === "id" ? "Lihat Semua Produk" : "View All Products"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
