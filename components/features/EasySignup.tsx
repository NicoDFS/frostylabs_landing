"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function EasySignup() {
  const t = useTranslations("featuresPage.signup");

  return (
    <section id="authentication" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-deep-arctic via-frozen-slate/30 to-deep-arctic">
      {/* Ice crystal ambient effects */}
      <div className="absolute inset-0 ice-crystal opacity-15"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-frost-blue/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-ice-blue/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '-5s' }}></div>

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Sign-up methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative frosted-glass rounded-2xl p-8 border-2 border-frost-blue/30 overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-orbitron font-bold mb-8 text-center text-frost-blue">
                {t("chooseMethod")}
              </h3>

              <div className="space-y-6">
                {/* Email/Social Login */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="group frosted-glass rounded-xl p-6 border-l-4 border-frost-blue hover:border-ice-blue transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-frost-blue/20 to-ice-blue/20 border border-frost-blue/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">📧</span>
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-frost-blue transition-colors">{t("emailSocial.title")}</h4>
                  </div>
                  <p className="text-slate-300 mb-4">
                    {t("emailSocial.description")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.raw("emailSocial.methods").map((method: string) => (
                      <span
                        key={method}
                        className="px-3 py-1 bg-frost-blue/10 text-frost-blue border border-frost-blue/30 rounded-full text-sm hover:bg-frost-blue/20 transition-colors"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Existing Wallet */}
                <motion.div
                  whileHover={{ x: 5 }}
                  className="group frosted-glass rounded-xl p-6 border-l-4 border-ice-blue hover:border-crystal-blue transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-ice-blue/20 to-crystal-blue/20 border border-ice-blue/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🦊</span>
                    </div>
                    <h4 className="text-xl font-bold text-white group-hover:text-ice-blue transition-colors">{t("wallet.title")}</h4>
                  </div>
                  <p className="text-slate-300 mb-4">
                    {t("wallet.description")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {t.raw("wallet.wallets").map((wallet: string) => (
                      <span
                        key={wallet}
                        className="px-3 py-1 bg-ice-blue/10 text-ice-blue border border-ice-blue/30 rounded-full text-sm hover:bg-ice-blue/20 transition-colors"
                      >
                        {wallet}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: How it works */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="frosted-glass rounded-xl p-8 border border-frost-blue/20">
              <h3 className="text-xl font-orbitron font-bold mb-6 text-crystal-blue">
                {t("behindScenes.title")}
              </h3>
              <div className="space-y-6">
                {t.raw("behindScenes.steps").map((step: { title: string; description: string }, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-crystal-blue/20 to-frost-blue/20 border border-crystal-blue/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                      <span className="text-crystal-blue font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 group-hover:text-frost-blue transition-colors">{step.title}</h4>
                      <p className="text-slate-400 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-r from-frost-blue/10 to-ice-blue/10 rounded-xl p-6 border border-frost-blue/30 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-50 pointer-events-none"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💡</span>
                  <h4 className="font-bold text-white">{t("bestPart.title")}</h4>
                </div>
                <p className="text-slate-300">
                  {t("bestPart.description")}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

