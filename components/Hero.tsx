"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ConnectButton, useActiveAccount } from "thirdweb/react";
import { Loader2, Twitter, CheckCircle2, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { client, chain, wallets } from "@/lib/thirdweb";

export function Hero() {
  const t = useTranslations("hero");
  const currentLocale = useLocale();
  const account = useActiveAccount();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinWaitlist = async () => {
    if (!account) return;

    setIsSubmitting(true);

    try {
      // Submit Wallet Address to Google Forms
      const formData = new FormData();
      formData.append("entry.1398251643", account.address); // Using Email field for Wallet Address
      formData.append("entry.1447021014", currentLocale); // Language field

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSfjfqckeNMdvRYw1mKq0-mro2-8bb1UHuMfGhCECEaMZ-n_sw/formResponse",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setIsJoined(true);
      toast.success("Application Received! You are on the list.");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShare = () => {
    const text = "Just secured my spot as a Founding Member of @FrostyLabsAi ❄️\n\nBuilding the future of AI Agents on @Base.\n\nJoin the revolution:";
    const url = "https://frostylabs.ai";
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank");
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

          {/* Wallet Connection & Waitlist Flow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl mx-auto mb-10 p-8 rounded-2xl bg-frozen-slate/30 border border-frost-blue/20 backdrop-blur-sm"
          >
            {!account ? (
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg text-slate-300 mb-2">{t("waitlistOffer")}</p>
                <ConnectButton
                  client={client}
                  chain={chain}
                  wallets={wallets}
                  theme="dark"
                  connectButton={{
                    label: "Connect Wallet",
                    className: "!bg-frost-blue !text-white !font-orbitron !px-8 !py-4 !h-auto !text-lg !rounded-xl hover:!bg-ice-blue transition-all",
                  }}
                  connectModal={{
                    size: "compact",
                    title: "Join FrostyLabs",
                    showThirdwebBranding: false,
                  }}
                />
              </div>
            ) : !isJoined ? (
              <div className="flex flex-col items-center gap-6">
                {/* Show ConnectButton here too so users can Disconnect/Switch */}
                <ConnectButton
                  client={client}
                  chain={chain}
                  wallets={wallets}
                  theme="dark"
                  connectButton={{
                    className: "!bg-frozen-slate/50 !text-white !font-orbitron !px-6 !py-3 !h-auto !text-sm !rounded-full !border !border-frost-blue/30 hover:!bg-frozen-slate/80 transition-all",
                  }}
                />

                <Button
                  onClick={handleJoinWaitlist}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-frost-blue to-crystal-blue hover:from-ice-blue hover:to-frost-blue px-10 py-8 rounded-xl font-semibold text-xl transition-all transform hover:scale-105 pulse-glow flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <>
                      <Wallet className="w-6 h-6" />
                      Apply for Founder Access
                    </>
                  )}
                </Button>
                <p className="text-sm text-slate-400">
                  Limited to first 100 users. No gas required to apply.
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-6 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                  <p className="text-slate-300">
                    You are on the list. We will review your application shortly.
                  </p>
                </div>

                <Button
                  onClick={handleShare}
                  className="w-full bg-[#1DA1F2] hover:bg-[#1a91da] text-white px-8 py-6 rounded-xl font-semibold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <Twitter className="w-5 h-5" />
                  Share on Twitter
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

