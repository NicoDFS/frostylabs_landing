import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FeaturesHero } from "@/components/features/FeaturesHero";
import { BlockchainOperations } from "@/components/features/BlockchainOperations";
import { EasySignup } from "@/components/features/EasySignup";
import { SecurityFeatures } from "@/components/features/SecurityFeatures";

export const metadata = {
  title: "Features - FrostyLabs.ai | AI Workflow Automation & Blockchain Integration",
  description: "Explore all features of FrostyLabs.ai including AI workflow automation, blockchain vault operations powered by thirdweb, NFT subscriptions, and enterprise security. 20+ AI models, 35+ blockchain networks, 15+ blockchain operations.",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-deep-arctic text-white">
      <Navigation />
      <FeaturesHero />
      <BlockchainOperations />
      <EasySignup />
      <SecurityFeatures />
      <Footer />
    </main>
  );
}

