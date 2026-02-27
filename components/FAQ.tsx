"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { translations } from "@/lib/i18n";

interface FAQProps {
  locale: "id" | "en";
}

export function FAQ({ locale }: FAQProps) {
  const t = translations[locale].common;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">{t.faq.title}</h2>
          <p className="text-slate-500 leading-relaxed">{t.faq.subtitle}</p>
        </motion.div>

        {/* Items */}
        <div className="space-y-3">
          {t.faq.items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className={`rounded-2xl border overflow-hidden transition-all duration-200 ${openIdx === idx ? "bg-white border-slate-200 shadow-md shadow-slate-100/60" : "bg-white border-slate-100 hover:border-slate-200"}`}
            >
              <button onClick={() => setOpenIdx(openIdx === idx ? null : idx)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left" suppressHydrationWarning>
                <span className={`text-sm font-bold leading-snug ${openIdx === idx ? "text-blue-700" : "text-slate-800"}`}>{item.q}</span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${openIdx === idx ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                  {openIdx === idx ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIdx === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden">
                    <div className="px-6 pb-5">
                      <div className="pt-1 border-t border-slate-100" />
                      <p className="pt-4 text-sm text-slate-500 leading-relaxed">{item.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
