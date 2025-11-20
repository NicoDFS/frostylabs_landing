import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { VideoDemo } from "@/components/VideoDemo";
import { Stats } from "@/components/Stats";
import { PoweredBy } from "@/components/PoweredBy";
import { UseCases } from "@/components/UseCases";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-arctic text-white">
      <Navigation />
      <Hero />
      <VideoDemo />
      <Stats />
      <PoweredBy />
      <UseCases />
      <Pricing />
      <Features />
      <Footer />
    </main>
  );
}
