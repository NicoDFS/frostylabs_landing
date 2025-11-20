"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function SecurityFeatures() {
  const t = useTranslations("featuresPage.security");

  return (
    <section id="security" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-deep-arctic via-frozen-slate/20 to-deep-arctic">
      {/* Ice crystal ambient effects */}
      <div className="absolute inset-0 ice-crystal opacity-15"></div>
      <div className="absolute top-40 left-10 w-96 h-96 bg-frost-blue/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-ice-blue/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '-6s' }}></div>

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: What is thirdweb Vault? */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative frosted-glass rounded-2xl p-8 border-2 border-frost-blue/30 overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-frost-blue/20 to-ice-blue/20 border border-frost-blue/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔐</span>
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold text-frost-blue">{t("vault.title")}</h3>
                </div>
                <p className="text-slate-300 mb-6">
                  {t("vault.description")}
                </p>

                <div className="space-y-4">
                  {t.raw("vault.features").map((feature: { title: string; description: string }, index: number) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-frost-blue/20 to-ice-blue/20 border border-frost-blue/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                        <span className="text-frost-blue text-xs font-bold">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 group-hover:text-frost-blue transition-colors">{feature.title}</h4>
                        <p className="text-slate-400 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="frosted-glass rounded-xl p-8 border border-frost-blue/20">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-ice-blue">{t("useCases.title")}</h3>
              <div className="space-y-3">
                {t.raw("useCases.items").map((useCase: string, index: number) => (
                  <motion.div
                    key={index}
                    className="group flex items-center gap-3 p-3 bg-ice-blue/10 border border-ice-blue/20 rounded-lg hover:bg-ice-blue/15 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-ice-blue font-bold">→</span>
                    <span className="text-slate-300 group-hover:text-white transition-colors">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Security Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="frosted-glass rounded-xl p-8 border border-frost-blue/20">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-crystal-blue">{t("architecture.title")}</h3>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-crystal-blue/10 to-frost-blue/10 rounded-lg p-6 border-l-4 border-crystal-blue overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>

                  <div className="relative z-10">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">🏰</span>
                      {t("architecture.nitro.title")}
                    </h4>
                    <p className="text-slate-300 text-sm mb-4">
                      {t("architecture.nitro.description")}
                    </p>
                    <div className="space-y-2">
                      {t.raw("architecture.nitro.features").map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <span className="text-crystal-blue font-bold">✓</span>
                          <span className="text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-frost-blue/10 to-ice-blue/10 rounded-lg p-6 border-l-4 border-frost-blue overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>

                  <div className="relative z-10">
                    <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                      <span className="text-2xl">🔒</span>
                      {t("architecture.encryption.title")}
                    </h4>
                    <p className="text-slate-300 text-sm mb-4">
                      {t("architecture.encryption.description")}
                    </p>
                    <div className="space-y-2">
                      {t.raw("architecture.encryption.features").map((feature: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <span className="text-frost-blue font-bold">✓</span>
                          <span className="text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

