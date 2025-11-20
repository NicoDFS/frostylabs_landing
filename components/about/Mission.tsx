"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const goals = [
  { icon: "🎯", borderClass: "border-frost-blue/30", bgClass: "bg-gradient-to-br from-frost-blue/20 to-ice-blue/20" },
  { icon: "🔒", borderClass: "border-ice-blue/30", bgClass: "bg-gradient-to-br from-ice-blue/20 to-crystal-blue/20" },
  { icon: "🌐", borderClass: "border-crystal-blue/30", bgClass: "bg-gradient-to-br from-crystal-blue/20 to-frost-blue/20" },
];

export function Mission() {
  const t = useTranslations("aboutPage.mission");

  return (
    <section id="mission" className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-deep-arctic via-frozen-slate/20 to-deep-arctic">
      {/* Ice crystal ambient effects */}
      <div className="absolute inset-0 ice-crystal opacity-15"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-frost-blue/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-ice-blue/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-orbitron font-bold mb-8">
              <span className="gradient-text">{t("title")}</span>
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              {t("paragraph1")}
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {t("paragraph2")}
            </p>

            <div className="space-y-4">
              {goals.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }}
                  className={`group flex items-center space-x-4 p-3 rounded-lg ${item.bgClass} border ${item.borderClass} hover:shadow-lg transition-all duration-300`}
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform">{item.icon}</div>
                  <span className="text-slate-300 group-hover:text-white transition-colors">{t(`goals.${index}`)}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative frosted-glass rounded-2xl p-8 border-2 border-frost-blue/30 overflow-hidden"
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-orbitron font-bold mb-6 text-center text-frost-blue">{t("vision.title")}</h3>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-48 bg-gradient-to-br from-frost-blue/20 via-ice-blue/20 to-crystal-blue/20 border border-frost-blue/30 rounded-lg mb-6 flex items-center justify-center transition-transform duration-300"
              >
                <span className="text-6xl">🚀</span>
              </motion.div>
              <p className="text-slate-300 text-center leading-relaxed">
                {t("vision.description")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

