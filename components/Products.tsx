"use client";

import { motion } from "framer-motion";
import { translations } from "@/lib/i18n";
import { ArrowRight, Star, MessageCircle } from "lucide-react";

interface ProductsProps {
  locale: "id" | "en";
}

export function Products({ locale }: ProductsProps) {
  const t = translations[locale].common;

  const products = [
    {
      id: "washing-machine",
      title: locale === "id" ? "Mesin Cuci Industrial" : "Industrial Washing Machine",
      description: locale === "id" ? "Mesin cuci kapasitas besar dengan teknologi hemat energi dan sistem pencucian optimal." : "High-capacity washing machines with energy-saving technology and optimal washing system.",
      price: "Rp 8.500.000",
      image: "https://images.unsplash.com/photo-1626806800700-5c4a0f2e80e6?w=600&h=400&fit=crop",
      rating: 4.9,
      reviews: 128,
      tag: locale === "id" ? "Terlaris" : "Best Seller",
    },
    {
      id: "dryer",
      title: locale === "id" ? "Mesin Pengering" : "Commercial Dryer",
      description: locale === "id" ? "Mesin pengering efisien dengan berbagai kapasitas untuk hasil kering sempurna." : "Efficient dryers with various capacities for perfectly dried results.",
      price: "Rp 6.000.000",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      rating: 4.8,
      reviews: 96,
      tag: null,
    },
    {
      id: "ironing",
      title: locale === "id" ? "Setrika Uap & Meja" : "Steam Ironing Station",
      description: locale === "id" ? "Setrika uap profesional dengan meja setrika anti panas untuk hasil rapi." : "Professional steam ironing with heat-resistant table for crisp results.",
      price: "Rp 2.500.000",
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=400&fit=crop",
      rating: 4.7,
      reviews: 64,
      tag: null,
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
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                    <span className="text-xs font-black text-slate-800">{product.rating}</span>
                    <span className="text-xs text-slate-400">({product.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-black text-slate-900 mb-2">{product.title}</h3>
                <p className="text-sm text-slate-500 mb-5 leading-relaxed line-clamp-2">{product.description}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-0.5">{t.products.startPrice}</p>
                    <p className="text-xl font-black text-blue-700">{product.price}</p>
                  </div>
                  <a
                    href="https://wa.me/6281234567890"
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
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors group">
            {locale === "id" ? "Lihat Semua Produk" : "View All Products"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
