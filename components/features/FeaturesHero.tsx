"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function FeaturesHero() {
  const t = useTranslations("featuresPage.hero");

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Ice crystal ambient effects */}
      <div className="absolute inset-0 ice-crystal opacity-20"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-frost-blue/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-ice-blue/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '-3s' }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <span className="px-6 py-2 bg-gradient-to-r from-frost-blue/20 to-ice-blue/20 border border-frost-blue/30 rounded-full text-frost-blue font-semibold text-sm">
              {t("badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl font-orbitron font-bold mb-6"
          >
            {t("title")}
            <br />
            <span className="gradient-text">{t("titleGradient")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto mb-12"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-orbitron font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">20+</div>
              <div className="text-slate-400 group-hover:text-frost-blue transition-colors">{t("stats.aiModels")}</div>
            </motion.div>
            <motion.div
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-orbitron font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">35+</div>
              <div className="text-slate-400 group-hover:text-ice-blue transition-colors">{t("stats.blockchainNetworks")}</div>
            </motion.div>
            <motion.div
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-orbitron font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-slate-400 group-hover:text-crystal-blue transition-colors">{t("stats.blockchainOperations")}</div>
            </motion.div>
            <motion.div
              className="text-center group"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-4xl font-orbitron font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">∞</div>
              <div className="text-slate-400 group-hover:text-frost-blue transition-colors">{t("stats.possibilities")}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

