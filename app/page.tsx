"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { SplashScreen } from "@/components/SplashScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Packages } from "@/components/Packages";
import { Calculator } from "@/components/Calculator";
import { Products } from "@/components/Products";
import { WhyLaundryHub } from "@/components/WhyLaundryHub";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [locale, setLocale] = useState<Locale>("id");

  // Force scroll to top on mount and when splash completes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      window.scrollTo(0, 0);
    }
  }, [showSplash]);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <div className="overflow-hidden">
        <Navbar locale={locale} onLocaleChange={setLocale} />

        <main className="pt-20">
          <Hero locale={locale} />
          <Packages locale={locale} />
          <Products locale={locale} />
          <Calculator locale={locale} />
          <WhyLaundryHub locale={locale} />
          <ProcessSteps locale={locale} />
          <Testimonials locale={locale} />
          <FAQ locale={locale} />
          <CTABanner locale={locale} />
        </main>

        <Footer locale={locale} />
      </div>
    </>
  );
}
