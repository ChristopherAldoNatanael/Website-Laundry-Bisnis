'use client'

import { motion } from 'framer-motion'
import { translations } from '@/lib/i18n'

interface HowToOrderProps {
  locale: 'id' | 'en'
}

export function HowToOrder({ locale }: HowToOrderProps) {
  const t = translations[locale].common

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {t.howToOrder.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.howToOrder.subtitle}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          {/* Steps Grid */}
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {t.howToOrder.steps.map((step, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <div className="relative">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-2xl font-bold mb-6 mx-auto shadow-lg shadow-primary/30">
                    {step.num}
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
