"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { translations } from "@/lib/i18n";

interface CalculatorProps {
  locale: "id" | "en";
}

export function Calculator({ locale }: CalculatorProps) {
  const t = translations[locale].common;

  const [kapasitas, setKapasitas] = useState(50);
  const [harga, setHarga] = useState(3000);
  const [operational, setOperational] = useState(200000);
  const [pajak, setPajak] = useState(10);
  const [target, setTarget] = useState(5000000);

  const [results, setResults] = useState({
    omset: 0,
    profit: 0,
    margin: 0,
    bep: 0,
    targetDays: 0,
  });

  useEffect(() => {
    // Calculate metrics
    const dailyOmset = kapasitas * harga;
    const profitBruto = dailyOmset - operational;
    const taxtAmount = (profitBruto * pajak) / 100;
    const profitNetto = profitBruto - taxtAmount;
    const marginPercent = (profitNetto / dailyOmset) * 100;
    const bepCapacity = operational / harga;
    const daysToTarget = target / dailyOmset;

    setResults({
      omset: dailyOmset,
      profit: profitNetto,
      margin: marginPercent,
      bep: bepCapacity,
      targetDays: daysToTarget,
    });
  }, [kapasitas, harga, operational, pajak, target]);

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);

  const getResultColor = (metric: string) => {
    if (metric === "margin") {
      if (results.margin > 30) return "text-green-500";
      if (results.margin > 15) return "text-yellow-500";
      return "text-red-500";
    }
    if (metric === "profit") {
      if (results.profit > 0) return "text-green-500";
      return "text-red-500";
    }
    return "text-accent";
  };

  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-slate-900">{t.calculator?.title || "Kalkulator Bisnis"}</h2>
          <p className="text-lg text-slate-500">{t.calculator?.subtitle || "Hitung potensi keuntungan bisnis laundry Anda"}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            {[
              { label: t.calculator?.inputs?.kapasitas || "Kapasitas Harian (kg)", value: kapasitas, setValue: setKapasitas, min: 10, max: 500 },
              { label: t.calculator?.inputs?.harga || "Harga per kg", value: harga, setValue: setHarga, min: 1000, max: 10000, step: 100 },
              { label: t.calculator?.inputs?.operational || "Biaya Operasional Harian", value: operational, setValue: setOperational, min: 50000, max: 2000000, step: 10000 },
              { label: t.calculator?.inputs?.pajak || "Pajak (%)", value: pajak, setValue: setPajak, min: 0, max: 50, step: 1 },
              { label: t.calculator?.inputs?.target || "Target Omset Bulanan", value: target, setValue: setTarget, min: 1000000, max: 100000000, step: 100000 },
            ].map((input, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="flex justify-between mb-3">
                  <label className="font-semibold text-slate-700">{input.label}</label>
                  <span className="text-[#1e3a8a] font-bold">{input.label.includes("%") ? `${input.value}%` : formatCurrency(input.value)}</span>
                </div>
                <input
                  type="range"
                  min={input.min}
                  max={input.max}
                  step={input.step || 1}
                  value={input.value}
                  onChange={(e) => input.setValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1e3a8a]"
                />
              </div>
            ))}
          </div>

          {/* Results */}
          <div className="space-y-4">
            {[
              { label: t.calculator?.results?.omset || "Omset Harian", key: "omset", isCurrency: true },
              { label: t.calculator?.results?.profit || "Profit Bersih Harian", key: "profit", isCurrency: true },
              { label: t.calculator?.results?.margin || "Margin Profit", key: "margin", isCurrency: false, suffix: "%" },
              { label: t.calculator?.results?.bep || "BEP (kg)", key: "bep", isCurrency: false, suffix: "kg" },
              { label: t.calculator?.results?.target_days || "Hari untuk Target", key: "targetDays", isCurrency: false, suffix: " hari" },
            ].map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-xl p-6 border border-slate-200 shadow-sm ${
                  result.key === "profit" && results.profit > 0 ? "border-l-4 border-l-green-500" : result.key === "profit" && results.profit <= 0 ? "border-l-4 border-l-red-500" : ""
                }`}
              >
                <p className="text-slate-500 text-sm mb-2">{result.label}</p>
                <p className={`font-display text-3xl font-bold ${getResultColor(result.key)}`}>
                  {result.isCurrency ? formatCurrency(results[result.key as keyof typeof results]) : `${Math.round(results[result.key as keyof typeof results])}${result.suffix}`}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
