"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Github } from "lucide-react";

const roadmapItems = [
  {
    key: "q4_2025",
    statusColor: "bg-gradient-to-r from-frost-blue to-ice-blue",
    textClass: "text-frost-blue",
    borderClass: "border-2 border-frost-blue/30",
    glowClass: "from-frost-blue/30 to-ice-blue/30",
  },
  {
    key: "q1_2026",
    statusColor: "bg-gradient-to-r from-ice-blue to-crystal-blue",
    textClass: "text-ice-blue",
    borderClass: "border-2 border-ice-blue/30",
    glowClass: "from-ice-blue/30 to-crystal-blue/30",
  },
  {
    key: "q2_2026",
    statusColor: "bg-gradient-to-r from-crystal-blue to-frost-blue",
    textClass: "text-crystal-blue",
    borderClass: "border-2 border-crystal-blue/30",
    glowClass: "from-crystal-blue/30 to-frost-blue/30",
  },
];

export function Roadmap() {
  const t = useTranslations("aboutPage.roadmap");

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-deep-arctic via-frozen-slate/20 to-deep-arctic">
      {/* Ice crystal ambient effects */}
      <div className="absolute inset-0 ice-crystal opacity-15"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-frost-blue/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-ice-blue/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '-6s' }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-orbitron font-bold mb-6">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="space-y-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 5, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 300 }}
              className={`group relative frosted-glass rounded-2xl p-8 ${item.borderClass} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${item.glowClass} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
                  <h3 className={`text-2xl font-orbitron font-bold ${item.textClass}`}>
                    {t(`quarters.${item.key}.quarter`)}
                  </h3>
                  <span className={`${item.statusColor} text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg`}>
                    {t(`quarters.${item.key}.status`)}
                  </span>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-frost-blue transition-colors">{t(`quarters.${item.key}.title`)}</h4>
                <ul className="space-y-3 text-slate-300">
                  {t.raw(`quarters.${item.key}.items`).map((listItem: { icon: string; text: string; bold?: boolean }, itemIndex: number) => (
                    <motion.li
                      key={itemIndex}
                      className="flex items-start group/item"
                      whileHover={{ x: 5 }}
                    >
                      <span className={`${item.textClass} mr-3 mt-1 text-xl group-hover/item:scale-110 transition-transform`}>{listItem.icon}</span>
                      <span className={`${listItem.bold ? "font-semibold text-white" : ""} group-hover/item:text-slate-200 transition-colors`}>
                        {listItem.text}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h2 className="text-4xl font-orbitron font-bold mb-6">
            <span className="gradient-text">{t("community.title")}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            {t("community.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <motion.a
              href="https://github.com/FrostyLabsAi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group px-10 py-5 bg-gradient-to-r from-frost-blue/20 to-ice-blue/20 border-2 border-frost-blue/30 hover:border-frost-blue rounded-xl hover:shadow-frost-blue/30 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10 flex items-center gap-3">
                <Github className="w-5 h-5" />
                <span className="font-bold text-white">{t("community.github")}</span>
              </div>
            </motion.a>
            <motion.a
              href="https://x.com/FrostyLabsAi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group px-10 py-5 bg-gradient-to-r from-ice-blue/20 to-crystal-blue/20 border-2 border-ice-blue/30 hover:border-ice-blue rounded-xl hover:shadow-ice-blue/30 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative z-10 flex items-center gap-3">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-bold text-white">{t("community.twitter")}</span>
              </div>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
