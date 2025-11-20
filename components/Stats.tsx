"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Stats() {
  const t = useTranslations("stats");

  const stats = [
    { value: "20+", label: t("aiModels") },
    { value: "35+", label: t("blockchainNetworks") },
    { value: "24/7", label: t("automatedExecution") },
    { value: "∞", label: t("possibilities") },
  ];

  return (
    <section className="relative py-16 border-y border-frost-blue/20 bg-gradient-to-b from-frozen-slate/20 via-deep-arctic/30 to-frozen-slate/20 overflow-hidden">
      {/* Ice crystal effect */}
      <div className="absolute inset-0 ice-crystal opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative space-y-2"
            >
              {/* Glow effect on hover */}
              <div className="absolute -inset-4 bg-gradient-to-b from-frost-blue/5 to-ice-blue/5 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                <div className="text-5xl md:text-6xl font-orbitron font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wider mt-2 group-hover:text-frost-blue transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

