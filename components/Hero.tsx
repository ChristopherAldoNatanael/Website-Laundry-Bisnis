"use client";

import { motion } from "framer-motion";
import { translations } from "@/lib/i18n";
import { Verified, Headphones, ArrowRight, Star } from "lucide-react";

interface HeroProps {
  locale: "id" | "en";
}

export function Hero({ locale }: HeroProps) {
  const t = translations[locale].common;

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const stats = [
    { value: "500+", label: locale === "id" ? "Mitra Aktif" : "Active Partners" },
    { value: "5 Kota", label: locale === "id" ? "Jangkauan" : "Coverage" },
    { value: "98%", label: locale === "id" ? "Kepuasan" : "Satisfaction" },
  ];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50" />
        <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-green-50 blur-3xl opacity-60" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#1e3a8a] text-xs font-semibold tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-blink" />
                {t.hero.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
                {locale === "id" ? (
                  <>
                    Partner <span className="gradient-text">Terpercaya</span>
                    <br />
                    untuk Bisnis
                    <br />
                    Laundry Anda.
                  </>
                ) : (
                  <>
                    Your <span className="gradient-text">Trusted</span>
                    <br />
                    Laundry Business
                    <br />
                    Partner.
                  </>
                )}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg text-slate-500 leading-relaxed max-w-lg">
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-2xl transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/35 hover:scale-[1.02] active:scale-100"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t.hero.cta}
              </a>
              <a
                href="#packages"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-200"
              >
                {t.hero.cta_secondary}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap items-center gap-5 pt-2">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-slate-600">4.9/5</span>
              </div>
              <div className="w-px h-5 bg-slate-200" />
              <div className="flex items-center gap-2">
                <Verified className="w-4 h-4 text-[#1e3a8a]" />
                <span className="text-sm font-semibold text-slate-600">Verified Partner</span>
              </div>
              <div className="w-px h-5 bg-slate-200" />
              <div className="flex items-center gap-2">
                <Headphones className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-slate-600">24/7 Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="relative">
            <div className="relative bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/60 p-8 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

              <div className="relative flex items-center justify-between mb-8">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{locale === "id" ? "Ringkasan Paket" : "Package Overview"}</p>
                  <h3 className="text-xl font-black text-slate-900">INOVA Business</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold border border-green-100">● {locale === "id" ? "Aktif" : "Active"}</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((s, i) => (
                  <div key={i} className="text-center p-4 rounded-2xl bg-slate-50">
                    <p className="text-2xl font-black text-slate-900 mb-1">{s.value}</p>
                    <p className="text-xs text-slate-400 font-medium leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              {[
                { label: locale === "id" ? "Kepuasan Pelanggan" : "Customer Satisfaction", value: 98 },
                { label: locale === "id" ? "Pengiriman Tepat Waktu" : "On-time Delivery", value: 95 },
                { label: locale === "id" ? "Kualitas Peralatan" : "Equipment Quality", value: 99 },
              ].map((item, i) => (
                <div key={i} className="mb-4 last:mb-0">
                  <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1.5">
                    <span>{item.label}</span>
                    <span className="text-slate-700">{item.value}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${item.value}%` }} transition={{ duration: 1.2, delay: 0.8 + i * 0.2, ease: "easeOut" }} className="h-full rounded-full bg-linear-to-r from-[#1e3a8a] to-[#3b82f6]" />
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 px-4 py-3 flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-black text-slate-900">WhatsApp Ready</p>
                <p className="text-[10px] text-slate-400">Respon dalam 5 menit</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
