"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Features() {
  const t = useTranslations("features");

  const features = [
    {
      key: "multiModel",
      emoji: "🧠",
      gradient: "from-frost-blue/20 to-ice-blue/20",
      borderColor: "border-frost-blue/30",
      hoverBorder: "hover:border-frost-blue",
      glowColor: "from-frost-blue/30 to-ice-blue/30",
    },
    {
      key: "blockchain",
      emoji: "⛓️",
      gradient: "from-ice-blue/20 to-crystal-blue/20",
      borderColor: "border-ice-blue/30",
      hoverBorder: "hover:border-ice-blue",
      glowColor: "from-ice-blue/30 to-crystal-blue/30",
    },
    {
      key: "workflow",
      emoji: "🔄",
      gradient: "from-crystal-blue/20 to-frost-blue/20",
      borderColor: "border-crystal-blue/30",
      hoverBorder: "hover:border-crystal-blue",
      glowColor: "from-crystal-blue/30 to-frost-blue/30",
    },
    {
      key: "analytics",
      emoji: "📊",
      gradient: "from-frost-blue/20 to-ice-blue/20",
      borderColor: "border-frost-blue/30",
      hoverBorder: "hover:border-frost-blue",
      glowColor: "from-frost-blue/30 to-ice-blue/30",
    },
    {
      key: "security",
      emoji: "🔐",
      gradient: "from-ice-blue/20 to-crystal-blue/20",
      borderColor: "border-ice-blue/30",
      hoverBorder: "hover:border-ice-blue",
      glowColor: "from-ice-blue/30 to-crystal-blue/30",
    },
    {
      key: "nft",
      emoji: "🌐",
      gradient: "from-crystal-blue/20 to-frost-blue/20",
      borderColor: "border-crystal-blue/30",
      hoverBorder: "hover:border-crystal-blue",
      glowColor: "from-crystal-blue/30 to-frost-blue/30",
    },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden bg-gradient-to-b from-deep-arctic via-frozen-slate/30 to-deep-arctic">
      {/* Ice crystal ambient effects */}
      <div className="absolute inset-0 ice-crystal opacity-20"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-frost-blue/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-ice-blue/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }}
            >
              <Card className={`group relative frosted-glass p-8 rounded-2xl border-2 ${feature.borderColor} ${feature.hoverBorder} transition-all duration-500 h-full overflow-hidden`}>
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-br ${feature.glowColor} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} border ${feature.borderColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <span className="text-3xl">{feature.emoji}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-orbitron font-bold mb-4 text-white group-hover:text-frost-blue transition-colors">
                    {t(`cards.${feature.key}.title`)}
                  </h3>
                  <p className="text-slate-300 group-hover:text-slate-200 transition-colors leading-relaxed">
                    {t(`cards.${feature.key}.description`)}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-frost-blue to-crystal-blue hover:from-ice-blue hover:to-frost-blue text-white px-10 py-6 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-frost-blue/50 pulse-glow"
          >
            <a href="/features">{t("cta")}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

