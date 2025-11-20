"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

const operations = [
  {
    id: "transfer",
    icon: "💸",
    borderClass: "border-frost-blue/30 hover:border-frost-blue",
    bgClass: "bg-gradient-to-br from-frost-blue/20 to-ice-blue/20",
    glowClass: "from-frost-blue/30 to-ice-blue/30",
  },
  {
    id: "swap",
    icon: "🔄",
    borderClass: "border-ice-blue/30 hover:border-ice-blue",
    bgClass: "bg-gradient-to-br from-ice-blue/20 to-crystal-blue/20",
    glowClass: "from-ice-blue/30 to-crystal-blue/30",
  },
  {
    id: "stake",
    icon: "🔒",
    borderClass: "border-crystal-blue/30 hover:border-crystal-blue",
    bgClass: "bg-gradient-to-br from-crystal-blue/20 to-frost-blue/20",
    glowClass: "from-crystal-blue/30 to-frost-blue/30",
  },
  {
    id: "bridge",
    icon: "🌉",
    borderClass: "border-frost-blue/30 hover:border-frost-blue",
    bgClass: "bg-gradient-to-br from-frost-blue/20 to-ice-blue/20",
    glowClass: "from-frost-blue/30 to-ice-blue/30",
  },
  {
    id: "mint",
    icon: "🎨",
    borderClass: "border-ice-blue/30 hover:border-ice-blue",
    bgClass: "bg-gradient-to-br from-ice-blue/20 to-crystal-blue/20",
    glowClass: "from-ice-blue/30 to-crystal-blue/30",
  },
  {
    id: "deploy",
    icon: "📜",
    borderClass: "border-crystal-blue/30 hover:border-crystal-blue",
    bgClass: "bg-gradient-to-br from-crystal-blue/20 to-frost-blue/20",
    glowClass: "from-crystal-blue/30 to-frost-blue/30",
  },
  {
    id: "governance",
    icon: "🗳️",
    borderClass: "border-frost-blue/30 hover:border-frost-blue",
    bgClass: "bg-gradient-to-br from-frost-blue/20 to-ice-blue/20",
    glowClass: "from-frost-blue/30 to-ice-blue/30",
  },
  {
    id: "yield",
    icon: "📈",
    borderClass: "border-ice-blue/30 hover:border-ice-blue",
    bgClass: "bg-gradient-to-br from-ice-blue/20 to-crystal-blue/20",
    glowClass: "from-ice-blue/30 to-crystal-blue/30",
  },
];

export function BlockchainOperations() {
  const t = useTranslations("featuresPage.blockchain");
  const [selectedOp, setSelectedOp] = useState<string | null>(null);

  return (
    <section id="blockchain" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-deep-arctic via-frozen-slate/20 to-deep-arctic">
      {/* Ice crystal ambient effects */}
      <div className="absolute inset-0 ice-crystal opacity-15"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-frost-blue/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-ice-blue/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {operations.map((op, index) => (
            <motion.div
              key={op.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }}
              onClick={() => setSelectedOp(op.id)}
              className={`group relative frosted-glass rounded-xl p-6 border-2 ${op.borderClass} hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${op.glowClass} rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`w-14 h-14 ${op.bgClass} border ${op.borderClass} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-2xl">{op.icon}</span>
                  </div>
                  <h3 className="text-lg font-orbitron font-bold text-white group-hover:text-frost-blue transition-colors">{t(`operations.${op.id}.title`)}</h3>
                </div>
                <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors">{t(`operations.${op.id}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative frosted-glass rounded-2xl p-10 border-2 border-frost-blue/30 overflow-hidden"
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 shimmer opacity-50 pointer-events-none"></div>

          <div className="relative z-10 text-center text-slate-300">
            <div className="text-6xl mb-4">⛓️</div>
            <h3 className="text-2xl font-orbitron font-bold mb-2 text-white">
              {selectedOp ? `${t("selectedPrefix")} ${t(`operations.${selectedOp}.title`)}` : t("selectOperation")}
            </h3>
            <p className="text-slate-400">
              {selectedOp
                ? t("securityNote")
                : t("clickPrompt")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

