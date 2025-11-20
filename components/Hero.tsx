"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");
  const currentLocale = useLocale();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to Google Forms
      const formData = new FormData();
      formData.append("entry.1398251643", email); // Email field
      formData.append("entry.1447021014", currentLocale); // Language field

      // Submit to Google Form (using no-cors mode to avoid CORS issues)
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfjfqckeNMdvRYw1mKq0-mro2-8bb1UHuMfGhCECEaMZ-n_sw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Required for Google Forms
        }
      );

      toast.success(t("successMessage"));
      setEmail("");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error(t("errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden hero-gradient-bg">
      <div className="absolute insert-0 bg-gradient-radial from-transparent via-frozen-slate/20 to-frozen-slate/40"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl md:text-8xl font-orbitron font-bold mb-8 leading-tight"
          >
            <span className="gradient-text">{t("title")}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-orbitron font-semibold mb-6 text-white"
          >
            {t("subtitle")}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-frost-blue/20 text-frost-blue px-8 py-3 rounded-full font-semibold mb-10 text-lg border border-frost-blue/30"
          >
            {t("launchBadge")}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            {t("description")}
          </motion.p>

          {/* Email Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-3xl mx-auto mb-10"
          >
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                required
                className="flex-1 px-8 py-6 rounded-xl bg-frozen-slate/50 border-2 border-slate-700 focus:border-frost-blue text-white placeholder-gray-400 text-lg"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-frost-blue to-crystal-blue hover:from-ice-blue hover:to-frost-blue px-10 py-6 rounded-xl font-semibold text-lg transition-all transform hover:scale-105 pulse-glow"
              >
                {t("joinBeta")}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

