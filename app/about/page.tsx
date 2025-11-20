import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { Mission } from "@/components/about/Mission";
import { TechStack } from "@/components/about/TechStack";
import { Roadmap } from "@/components/about/Roadmap";

export const metadata = {
  title: "About - FrostyLabs.ai | Our Mission & Roadmap",
  description: "Learn about FrostyLabs.ai mission, team, and the future of AI automation with blockchain integration and NFT subscriptions. Launching December 2025.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-deep-arctic text-white">
      <Navigation />
      <AboutHero />
      <Mission />
      <TechStack />
      <Roadmap />
      <Footer />
    </main>
  );
}

