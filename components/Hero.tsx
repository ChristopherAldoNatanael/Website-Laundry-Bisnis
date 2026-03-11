"use client";

import { motion } from "framer-motion";
import { translations } from "@/lib/i18n";
import { WA_HERO } from "@/lib/whatsapp";
import { ArrowRight, Settings2, GraduationCap, ShieldCheck } from "lucide-react";

interface HeroProps {
  locale: "id" | "en";
}

export function Hero({ locale }: HeroProps) {
  const t = translations[locale].common;

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const features = [
    {
      icon: <Settings2 className="w-5 h-5" />,
      title: "Professional Equipment",
      desc: locale === "id" ? "Peralatan standar industri terbaik untuk efisiensi dan hasil pembersihan maksimal." : "Industry-standard equipment for maximum cleaning efficiency and results.",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Training & Support",
      desc: locale === "id" ? "Sistem pelatihan ahli untuk memastikan operasional bisnis Anda berjalan mulus." : "Expert training systems to ensure your business operations run smoothly.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "After-Sales Warranty",
      desc: locale === "id" ? "Dukungan teknis berdedikasi dan jaminan suku cadang untuk ketenangan Anda." : "Dedicated technical support and spare parts guarantee for your peace of mind.",
    },
  ];

  return (
    <section className="relative bg-[#f6f6f8] overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #1c3ca6 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        {/* ── MAIN HERO GRID ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Text */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">
            {/* Badge with ping */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 text-blue-700 text-xs font-bold uppercase tracking-wider w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
                </span>
                {t.hero.badge}
              </div>
            </motion.div>

            {/* Heading */}
            <motion.div custom={1} variants={fadeUp} initial="hidden" animate="visible">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] text-slate-900 tracking-tight">
                {locale === "id" ? (
                  <>
                    Partner <span className="gradient-text">Terpercaya</span> untuk Bisnis Laundry Anda
                  </>
                ) : (
                  <>
                    Your <span className="gradient-text">Trusted</span> Laundry Business Partner
                  </>
                )}
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-base lg:text-lg text-slate-500 leading-relaxed max-w-xl">
              {t.hero.subtitle}
            </motion.p>

            {/* CTAs */}
            <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap gap-3">
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {t.hero.cta}
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-slate-200 hover:border-blue-600 text-slate-700 text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 bg-white"
              >
                {t.hero.cta_secondary}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="flex items-center gap-8 pt-2">
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900">50+</span>
                <span className="text-xs text-slate-500 font-medium">{locale === "id" ? "Mitra Aktif" : "Active Partners"}</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900">98%</span>
                <span className="text-xs text-slate-500 font-medium">{locale === "id" ? "Kepuasan Klien" : "Client Satisfaction"}</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-slate-900">5+</span>
                <span className="text-xs text-slate-500 font-medium">{locale === "id" ? "Kota Jangkauan" : "Cities Covered"}</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Machine Image */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="relative order-1 lg:order-2 flex justify-center items-center">
            {/* Glow behind card */}
            <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-3xl scale-125 pointer-events-none" />

            {/* Card container */}
            <div className="relative bg-white rounded-4xl shadow-2xl shadow-blue-900/10 border border-slate-100 p-6">
              <motion.img
                src="/3d mesin cuci.png"
                alt="Mesin Cuci 3D"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-full max-w-md h-auto object-contain"
                style={{ filter: "drop-shadow(0 20px 40px rgba(28,60,166,0.12))" }}
              />
            </div>
          </motion.div>
        </div>

        {/* ── FEATURE CARDS ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-700 mb-4">{f.icon}</div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{f.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
