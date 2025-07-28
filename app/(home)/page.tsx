import { BenefitsSection } from "@/components/home/benefits-section";
import { FeatureMarquee } from "@/components/home/feature-marquee";
import { HeroSection } from "@/components/home/hero-section";
import { HiringFlowSection } from "@/components/home/hiring-flow-section";
import { HowItWorksSection } from "@/components/home/howitworks-section";
import { RolesAndStacksSection } from "@/components/home/roles-stacks-section";
import { TestimonialsSection } from "@/components/home/testimonial-section";
import { TrustedBySection } from "@/components/home/trusted-section";

export default function NeuronHireLanding() {
  return (
    <div className="bg-pink-100 min-h-screen">
      <HeroSection />
      <FeatureMarquee />
      <TrustedBySection />
      <HowItWorksSection />
      <BenefitsSection />
      <HiringFlowSection />
      <RolesAndStacksSection />
      <TestimonialsSection />
    </div>
  );
}
