"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Phone, CreditCard, Truck } from "lucide-react";
import { translations } from "@/lib/i18n";

interface ProcessStepsProps {
  locale: "id" | "en";
}

const icons = [Phone, CheckCircle2, CreditCard, Truck];

export function ProcessSteps({ locale }: ProcessStepsProps) {
  const t = translations[locale].common;

  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">{t.process.title}</h2>
          <p className="text-slate-500 leading-relaxed">{t.process.subtitle}</p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

          {t.process.steps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="relative flex flex-col items-center text-center p-7 rounded-3xl bg-white border border-slate-100 shadow-md hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step number */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm mb-5 shadow-lg shadow-blue-500/30">{step.num}</div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>

                <h3 className="text-base font-black text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
