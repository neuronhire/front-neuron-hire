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
    <div className="min-h-screen">
      <div className="bg-neuronhire-bg-main">
        <section className="relative overflow-hidden nh-hero-right-bg min-h-[100svh]">
          <HeroSection />
          <FeatureMarquee />
          <TrustedBySection />
        </section>

        <section className="relative overflow-hidden nh-sphere-bg">
          <HowItWorksSection />
          <BenefitsSection />
        </section>
      </div>

      <HiringFlowSection />
      <RolesAndStacksSection />
      {/* <TestimonialsSection /> */}
    </div>
  );
}
