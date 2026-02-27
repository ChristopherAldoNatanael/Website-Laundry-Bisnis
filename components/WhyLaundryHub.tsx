"use client";

import { motion } from "framer-motion";
import { Award, Shield, Tag, HeadphonesIcon } from "lucide-react";
import { translations } from "@/lib/i18n";

interface WhyLaundryHubProps {
  locale: "id" | "en";
}

const icons = [Award, Shield, Tag, HeadphonesIcon];
const iconColors = [
  { bg: "bg-blue-50", icon: "text-blue-600" },
  { bg: "bg-green-50", icon: "text-green-600" },
  { bg: "bg-amber-50", icon: "text-amber-600" },
  { bg: "bg-purple-50", icon: "text-purple-600" },
];

export function WhyLaundryHub({ locale }: WhyLaundryHubProps) {
  const t = translations[locale].common;

  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">{t.whyLaundryHub.title}</h2>
          <p className="text-slate-500 leading-relaxed">{t.whyLaundryHub.subtitle}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyLaundryHub.items.map((item, idx) => {
            const Icon = icons[idx];
            const color = iconColors[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.1 }}
                className="group p-7 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-2xl ${color.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${color.icon}`} />
                </div>
                <h3 className="text-base font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
