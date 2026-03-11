"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Phone, Instagram, Music2 } from "lucide-react";
import { translations } from "@/lib/i18n";
import { WA_FOOTER } from "@/lib/whatsapp";

interface FooterProps {
  locale: "id" | "en";
}

export function Footer({ locale }: FooterProps) {
  const t = translations[locale].common;

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 py-16 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group logo-spin-container">
              <div className="relative w-10 h-10 shrink-0">
                <Image src="/LOGO_INOVA.png" alt="INOVA Logo" width={40} height={40} className="w-full h-full object-contain logo-spin drop-shadow-lg opacity-90 group-hover:opacity-100" />
              </div>
              <div className="leading-none">
                <span className="block text-lg font-black tracking-[0.12em] text-white group-hover:text-blue-400 transition-colors">INOVA</span>
                <span className="block text-[9px] font-semibold tracking-[0.15em] uppercase text-slate-500 mt-0.5">Mitra Bisnis Laundry Terpercaya</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {locale === "id"
                ? "Mitra terpercaya untuk kesuksesan bisnis laundry Anda. Menyediakan paket lengkap peralatan berkualitas tinggi."
                : "Your trusted partner for laundry business success. Providing complete packages of high-quality equipment."}
            </p>

            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/inovalaundrysolution/" },
                { icon: Music2, href: "https://www.tiktok.com/@inovalaundrysolution?_r=1&_t=ZS-93GzrDP0rll&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnFqdoanOV-lbXo06Y8gsmOri4MdSsy5Ay0xi6je0CkZHfHtJwLAz09qnyvuI_aem_qoMXJxHUbj645aiPAyFy_g" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-black tracking-[0.15em] uppercase text-slate-400 mb-5">{locale === "id" ? "Navigasi" : "Navigation"}</h4>
            <ul className="space-y-3">
              {[
                { label: locale === "id" ? "Beranda" : "Home", href: "#" },
                { label: locale === "id" ? "Paket Usaha" : "Business Packages", href: "#packages" },
                { label: locale === "id" ? "Produk" : "Products", href: "#products" },
                { label: locale === "id" ? "Tentang Kami" : "About Us", href: "#why" },
                { label: locale === "id" ? "Proses" : "Process", href: "#process" },
              ].map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-black tracking-[0.15em] uppercase text-slate-400 mb-5">{locale === "id" ? "Produk" : "Products"}</h4>
            <ul className="space-y-3">
              {[
                locale === "id" ? "Mesin Cuci" : "Washing Machines",
                locale === "id" ? "Mesin Pengering" : "Dryers",
                locale === "id" ? "Setrika Uap" : "Steam Irons",
                locale === "id" ? "Aksesoris" : "Accessories",
                locale === "id" ? "Paket Lengkap" : "Complete Packages",
              ].map((item, i) => (
                <li key={i}>
                  <a href="#products" className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-black tracking-[0.15em] uppercase text-slate-400 mb-5">{t.nav.contact}</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-400 leading-relaxed">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-sm text-slate-400">{t.footer.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="text-sm text-slate-400">{t.footer.email}</span>
              </li>
            </ul>

            <a
              href={WA_FOOTER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-400 text-white text-sm font-bold rounded-xl transition-all duration-200 shadow-lg shadow-green-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              {locale === "id" ? "Hubungi Kami" : "Contact Us"}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">© 2025 INOVA. {locale === "id" ? "Hak cipta dilindungi." : "All rights reserved."}</p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
              {locale === "id" ? "Kebijakan Privasi" : "Privacy Policy"}
            </a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-sm transition-colors">
              {locale === "id" ? "Syarat & Ketentuan" : "Terms & Conditions"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
