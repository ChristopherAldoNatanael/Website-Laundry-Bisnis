"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { translations } from "@/lib/i18n";
import { WA_NAVBAR } from "@/lib/whatsapp";

interface NavbarProps {
  locale: "id" | "en";
  onLocaleChange: (locale: "id" | "en") => void;
  /** Prefix untuk semua anchor link. Default "/". Di halaman selain home, isi dengan "/" agar anchor mengarah ke halaman utama. */
  basePath?: string;
}

export function Navbar({ locale, onLocaleChange, basePath = "" }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = translations[locale].common;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: locale === "id" ? "Beranda" : "Home", href: basePath || "/" },
    { label: t.nav.packages, href: `${basePath}#packages` },
    { label: locale === "id" ? "Produk" : "Products", href: "/produk" },
    { label: locale === "id" ? "Tentang" : "About", href: `${basePath}#why` },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "bg-white/98 backdrop-blur-xl shadow-sm shadow-slate-200/60 py-3 border-b border-slate-100" : "bg-white/80 backdrop-blur-sm py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group logo-spin-container">
            <div className="relative w-9 h-9 shrink-0">
              <Image src="/LOGO_INOVA.png" alt="INOVA Logo" width={36} height={36} className="w-full h-full object-contain logo-spin drop-shadow-sm" priority />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-black tracking-[0.12em] text-[#1e3a8a] group-hover:text-blue-700 transition-colors">INOVA</span>
              <span className="text-[9px] font-semibold tracking-[0.15em] uppercase text-slate-400 mt-0.5">Mitra Bisnis Laundry Terpercaya</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link-hover text-sm font-semibold text-slate-600 hover:text-[#1e3a8a] transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2.5">
            {/* Language Toggle */}
            <div className="hidden sm:flex items-center bg-slate-100 rounded-full p-1 text-xs font-bold">
              <button
                onClick={() => onLocaleChange("id")}
                suppressHydrationWarning
                className={`px-3 py-1 rounded-full transition-all duration-200 ${locale === "id" ? "bg-white text-[#1e3a8a] shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
              >
                ID
              </button>
              <button
                onClick={() => onLocaleChange("en")}
                suppressHydrationWarning
                className={`px-3 py-1 rounded-full transition-all duration-200 ${locale === "en" ? "bg-white text-[#1e3a8a] shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
              >
                EN
              </button>
            </div>

            {/* WhatsApp Button */}
            <a
              href={WA_NAVBAR}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-sm font-bold rounded-full transition-all duration-200 shadow-md shadow-green-500/25 hover:shadow-green-500/35 hover:scale-[1.03] active:scale-100"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>

            {/* Mobile Menu Button */}
            <button suppressHydrationWarning onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-4 mb-4 rounded-2xl bg-white border border-slate-100 shadow-xl overflow-hidden">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="flex items-center px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#1e3a8a] transition-colors" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}

            <div className="pt-3 space-y-3 border-t border-slate-100 mt-3">
              <div className="flex items-center gap-2 px-4 py-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Bahasa:</span>
                <div className="flex bg-slate-100 rounded-full p-0.5 text-xs font-bold">
                  <button
                    onClick={() => {
                      onLocaleChange("id");
                      setIsOpen(false);
                    }}
                    suppressHydrationWarning
                    className={`px-3 py-1 rounded-full transition-all ${locale === "id" ? "bg-white text-[#1e3a8a] shadow-sm" : "text-slate-400"}`}
                  >
                    ID
                  </button>
                  <button
                    onClick={() => {
                      onLocaleChange("en");
                      setIsOpen(false);
                    }}
                    suppressHydrationWarning
                    className={`px-3 py-1 rounded-full transition-all ${locale === "en" ? "bg-white text-[#1e3a8a] shadow-sm" : "text-slate-400"}`}
                  >
                    EN
                  </button>
                </div>
              </div>
              <a
                href={WA_NAVBAR}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mx-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-4 h-4" />
                {locale === "id" ? "Hubungi via WhatsApp" : "Contact via WhatsApp"}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
