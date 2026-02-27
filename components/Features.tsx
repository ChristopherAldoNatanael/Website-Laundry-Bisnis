"use client";

import { translations } from "@/lib/i18n";
import { CheckCircle2, Zap, Shield, TrendingUp, Headphones, Clock } from "lucide-react";

interface FeaturesProps {
  locale: "id" | "en";
}

const features = [
  {
    icon: Zap,
    name: "Produk Berkualitas",
    desc: "Peralatan laundry premium dari brand terpercaya dengan teknologi terbaru.",
  },
  {
    icon: Shield,
    name: "Garansi Resmi",
    desc: "Semua produk memiliki garansi resmi untuk keamanan transaksi Anda.",
  },
  {
    icon: TrendingUp,
    name: "Bisnis Terjamin",
    desc: "Dukungan lengkap untuk membangun dan mengembangkan bisnis laundry Anda.",
  },
  {
    icon: Headphones,
    name: "Layanan 24/7",
    desc: "Tim support siap membantu Anda kapan saja dengan respons cepat.",
  },
  {
    icon: Clock,
    name: "Pengiriman Cepat",
    desc: "Layanan pengiriman cepat dan aman ke seluruh Indonesia.",
  },
  {
    icon: CheckCircle2,
    name: "Kualitas Terbaik",
    desc: "Kontrol kualitas ketat untuk memastikan kepuasan pelanggan.",
  },
];

export function Features({ locale }: FeaturesProps) {
  const t = translations[locale].common;

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-primary font-semibold text-sm mb-6">{t.features.title}</div>
          <h2 className="text-4xl lg:text-5xl font-extrabold font-display text-slate-900 mb-6">{t.features.subtitle}</h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-2xl p-8 border border-slate-200 hover:border-primary hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-primary to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: locale === "id" ? "Pelanggan Puas" : "Happy Customers" },
            { number: "50+", label: locale === "id" ? "Merek Produk" : "Product Brands" },
            { number: "24/7", label: locale === "id" ? "Layanan Support" : "Support Service" },
            { number: "98%", label: locale === "id" ? "Tingkat Kepuasan" : "Satisfaction Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold text-primary mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
