import { BenefitsSection } from "@/components/home/benefits-section";
import { FeatureMarquee } from "@/components/home/feature-marquee";
import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/howitworks-section";
import { TrustedBySection } from "@/components/home/trusted-section";

export default function NeuronHireLanding() {
  return (
    <div className="bg-pink-100 min-h-screen">
      <HeroSection />
      <FeatureMarquee />
      <TrustedBySection />
      <HowItWorksSection />
      <BenefitsSection />
    </div>
  );
}
