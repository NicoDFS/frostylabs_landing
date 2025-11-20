"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export function PoweredBy() {
  const t = useTranslations("poweredBy");

  const providers = [
    { name: "OpenAI", logo: "/icons/OpenAI_wordmark_dark.svg", width: 140 },
    { name: "Anthropic", logo: "/icons/Claude AI_wordmark_dark.svg", width: 130 },
    { name: "Google AI", logo: "/icons/gemini_wordmark.svg", width: 120 },
    { name: "xAI", logo: "/icons/Grok_wordmark_dark.svg", width: 100 },
    { name: "OpenRouter", logo: "/icons/OpenRouter_dark.svg", width: 45 },
    { name: "Qwen", logo: "/icons/Qwen_dark.svg", width: 100 },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-deep-arctic via-frozen-slate/30 to-deep-arctic">
      {/* Floating ice crystals background */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-frost-blue/5 rounded-full blur-3xl float-animation"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-ice-blue/5 rounded-full blur-3xl float-animation" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-frost-blue/20 to-ice-blue/20 px-6 py-2 rounded-full border border-frost-blue/30 mb-4">
            <span className="text-sm font-medium text-frost-blue uppercase tracking-wider">Industry Leaders</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-3">
            Powered By The <span className="gradient-text">Best AI Models</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose from 20+ premium AI models. Route intelligently based on cost, speed, and quality.
          </p>
        </motion.div>

        {/* Logo grid with frosted glass cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
        >
          {providers.map((provider, index) => (
            <motion.div
              key={provider.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.05 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                type: "spring",
                stiffness: 300
              }}
              className="group relative bg-slate-200/90 backdrop-blur-sm rounded-xl p-6 flex items-center justify-center border border-frost-blue/20 hover:border-frost-blue/50 hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-frost-blue/20"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-frost-blue/30 to-ice-blue/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative flex items-center justify-center h-12">
                <Image
                  src={provider.logo}
                  alt={`${provider.name} logo`}
                  width={provider.width}
                  height={48}
                  className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  priority={index < 4}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional context */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center text-slate-500 text-sm mt-8"
        >
          + 14 more AI models available in the platform
        </motion.p>
      </div>
    </section>
  );
}

