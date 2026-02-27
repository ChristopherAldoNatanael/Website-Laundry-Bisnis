"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { translations } from "@/lib/i18n";

interface TestimonialsProps {
  locale: "id" | "en";
}

const avatarColors = ["bg-blue-600", "bg-green-600", "bg-purple-600"];

export function Testimonials({ locale }: TestimonialsProps) {
  const t = translations[locale].common;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">{t.testimonials.title}</h2>
          <p className="text-slate-500 leading-relaxed">{t.testimonials.subtitle}</p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="relative flex flex-col p-7 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-10 h-10 text-slate-900 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full ${avatarColors[idx % avatarColors.length]} flex items-center justify-center text-white font-black text-sm shrink-0`}>{testimonial.name.charAt(0)}</div>
                <div>
                  <p className="text-sm font-black text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
