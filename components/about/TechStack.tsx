"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const techStacks = [
  {
    key: "backend",
    icon: "⚡",
    borderClass: "border-frost-blue/30",
    bgClass: "bg-gradient-to-br from-frost-blue/20 to-ice-blue/20",
    textClass: "text-frost-blue",
    glowClass: "from-frost-blue/30 to-ice-blue/30",
    itemKeys: ["framework", "runtime", "database", "auth", "orm"],
  },
  {
    key: "blockchain",
    icon: "🔗",
    borderClass: "border-ice-blue/30",
    bgClass: "bg-gradient-to-br from-ice-blue/20 to-crystal-blue/20",
    textClass: "text-ice-blue",
    glowClass: "from-ice-blue/30 to-crystal-blue/30",
    itemKeys: ["sdk", "vault", "networks", "security", "nftStandards"],
  },
  {
    key: "aiModels",
    icon: "🤖",
    borderClass: "border-crystal-blue/30",
    bgClass: "bg-gradient-to-br from-crystal-blue/20 to-frost-blue/20",
    textClass: "text-crystal-blue",
    glowClass: "from-crystal-blue/30 to-frost-blue/30",
    itemKeys: ["openai", "anthropic", "google", "xai", "total"],
  },
  {
    key: "devops",
    icon: "🚀",
    borderClass: "border-frost-blue/30",
    bgClass: "bg-gradient-to-br from-frost-blue/20 to-ice-blue/20",
    textClass: "text-frost-blue",
    glowClass: "from-frost-blue/30 to-ice-blue/30",
    itemKeys: ["container", "orchestration", "cicd", "monitoring", "cloud"],
  },
  {
    key: "frontend",
    icon: "🎨",
    borderClass: "border-ice-blue/30",
    bgClass: "bg-gradient-to-br from-ice-blue/20 to-crystal-blue/20",
    textClass: "text-ice-blue",
    glowClass: "from-ice-blue/30 to-crystal-blue/30",
    itemKeys: ["framework", "styling", "uiLibrary", "workflowUI", "animations"],
  },
  {
    key: "security",
    icon: "🔐",
    borderClass: "border-crystal-blue/30",
    bgClass: "bg-gradient-to-br from-crystal-blue/20 to-frost-blue/20",
    textClass: "text-crystal-blue",
    glowClass: "from-crystal-blue/30 to-frost-blue/30",
    itemKeys: ["walletAuth", "encryption", "keyStorage", "compliance", "privacy"],
  },
];

export function TechStack() {
  const t = useTranslations("aboutPage.techStack");

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-deep-arctic via-frozen-slate/30 to-deep-arctic">
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
          <h2 className="text-4xl font-orbitron font-bold mb-6">
            <span className="gradient-text">{t("title")}</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 300 }}
              className={`group relative frosted-glass rounded-xl p-8 border-2 ${stack.borderClass} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${stack.glowClass} rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`w-14 h-14 ${stack.bgClass} border ${stack.borderClass} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl">{stack.icon}</span>
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-frost-blue transition-colors">{t(`stacks.${stack.key}.title`)}</h3>
                </div>
                <div className="space-y-3">
                  {stack.itemKeys.map((itemKey, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between">
                      <span className="text-slate-300 group-hover:text-slate-200 transition-colors">{t(`labels.${itemKey}`)}</span>
                      <span className={`${stack.textClass} font-mono text-sm font-semibold`}>{t(`stacks.${stack.key}.items.${itemKey}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

