"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 600);
    }, 2800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.02 }} transition={{ duration: 0.6, ease: "easeInOut" }} className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white">
          {/* Subtle dot pattern */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "radial-gradient(circle, #1e3a8a 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Soft ambient glow — pulsing */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-125 h-125 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(244,124,32,0.15) 0%, rgba(30,58,138,0.08) 50%, transparent 70%)" }}
          />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center justify-center px-8 text-center">
            {/* Logo */}
            <motion.div initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.65, ease: [0.34, 1.56, 0.64, 1] }} className="mb-10">
              <div className="relative w-32 h-32 mx-auto">
                {/* Glow behind logo */}
                <div className="absolute inset-0 rounded-full blur-2xl opacity-40 scale-110" style={{ background: "radial-gradient(circle, #f47c20 0%, #2b7de9 100%)" }} />
                {/* Spinning logo image */}
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="relative w-full h-full drop-shadow-xl">
                  <Image src="/LOGO_INOVA.png" alt="INOVA Logo" width={128} height={128} className="w-full h-full object-contain" priority />
                </motion.div>
              </div>
            </motion.div>

            {/* Brand name */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-[0.22em] mb-3">INOVA</h1>
            </motion.div>

            {/* Tagline */}
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="text-slate-400 text-[11px] font-semibold tracking-[0.3em] uppercase mb-16">
              Mitra Bisnis Laundry Terpercaya
            </motion.p>

            {/* Progress bar */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.55 }} className="flex items-center gap-3">
              <div className="w-36 h-0.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-40 linear"
                  style={{
                    width: `${progress}%`,
                    background: "linear-gradient(to right, #2b7de9, #f47c20)",
                  }}
                />
              </div>
              <span className="text-slate-300 text-[10px] font-semibold tabular-nums w-8">{progress}%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
