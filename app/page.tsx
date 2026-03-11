"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { SplashScreen } from "@/components/SplashScreen";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BrandIntro } from "@/components/BrandIntro";
import { Packages } from "@/components/Packages";
import { Products } from "@/components/Products";
import { Calculator } from "@/components/Calculator";
import { WhyLaundryHub } from "@/components/WhyLaundryHub";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";

function HomeContent() {
  const searchParams = useSearchParams();
  const [showSplash, setShowSplash] = useState(true);
  const [locale, setLocale] = useState<Locale>("id");
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize locale from URL or localStorage
  useEffect(() => {
    const langParam = searchParams.get("lang");
    if (langParam === "en" || langParam === "id") {
      setLocale(langParam);
      localStorage.setItem("inova-locale", langParam);
    } else {
      const savedLocale = localStorage.getItem("inova-locale") as Locale;
      if (savedLocale === "en" || savedLocale === "id") {
        setLocale(savedLocale);
      }
    }
    setIsLoaded(true);
  }, [searchParams]);

  // Force scroll to top on mount and when splash completes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!showSplash) {
      window.scrollTo(0, 0);
    }
  }, [showSplash]);

  const handleLocaleChange = (newLocale: "id" | "en") => {
    setLocale(newLocale);
    localStorage.setItem("inova-locale", newLocale);
    
    // Update URL without refreshing
    const url = new URL(window.location.href);
    if (newLocale === "id") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", newLocale);
    }
    window.history.pushState({}, "", url.toString());
  };

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      <div className="overflow-hidden">
        <Navbar locale={locale} onLocaleChange={handleLocaleChange} />

        <main className="pt-20">
          <Hero locale={locale} />
          <BrandIntro locale={locale} />
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

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
