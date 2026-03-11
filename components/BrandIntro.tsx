"use client";

import { motion } from "framer-motion";
import { WA_BRAND_INTRO } from "@/lib/whatsapp";

interface BrandIntroProps {
  locale: "id" | "en";
}

export function BrandIntro({ locale }: BrandIntroProps) {
  return (
    <section className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — Logo with decorative elements */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center items-center relative"
          >
            {/* Decorative circles behind logo */}
            <div className="absolute w-72 h-72 rounded-full bg-blue-50 opacity-80" />
            <div className="absolute w-52 h-52 rounded-full bg-blue-100/60 opacity-60" />

            {/* Decorative sparkles */}
            <div className="absolute top-6 left-16 w-3 h-3 text-blue-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-400">
                <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="absolute bottom-8 right-14 w-3 h-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-blue-300">
                <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="absolute top-1/3 right-8">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-blue-400">
                <path d="M12 2L13.09 8.26L19 9L13.09 9.74L12 16L10.91 9.74L5 9L10.91 8.26L12 2Z" />
              </svg>
            </div>

            {/* Logo image */}
            <motion.img src="/LOGO_INOVA.png" alt="INOVA Logo" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="relative z-10 w-56 h-56 object-contain drop-shadow-lg" />
          </motion.div>

          {/* RIGHT — Text content */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col gap-5">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">{locale === "id" ? "INOVA Laundry" : "INOVA Laundry"}</h2>

            <p className="text-base text-slate-500 leading-relaxed">
              {locale === "id"
                ? "Di INOVA, kami menyediakan solusi bisnis laundry yang lengkap dan terpercaya. Dari mesin cuci industri berkualitas tinggi hingga pelatihan operasional, kami hadir untuk memastikan kesuksesan dan kelancaran usaha laundry Anda dari awal hingga berkembang."
                : "At INOVA, we provide complete and trusted laundry business solutions. From high-quality industrial washing machines to operational training, we are here to ensure the success and smooth running of your laundry business from start to growth."}
            </p>

            <p className="text-base text-slate-500 leading-relaxed">
              {locale === "id"
                ? "Dapatkan paket usaha lengkap, produk berkualitas, dan dukungan purna jual terbaik hanya bersama INOVA — mitra bisnis laundry terpercaya Anda."
                : "Get complete business packages, quality products, and the best after-sales support only with INOVA — your trusted laundry business partner."}
            </p>

            <div className="pt-2">
              {" "}
              <a
                href={WA_BRAND_INTRO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-green-500 hover:bg-green-600 text-white text-sm font-bold rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {locale === "id" ? "Hubungi Kami" : "Contact Us"}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
