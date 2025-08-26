import { BenefitsSection } from "@/components/home/benefits-section";
import { FeatureMarquee } from "@/components/home/feature-marquee";
import { HeroSection } from "@/components/home/hero-section";
import { HiringFlowSection } from "@/components/home/hiring-flow-section";
import { HowItWorksSection } from "@/components/home/howitworks-section";
import { RolesAndStacksSection } from "@/components/home/roles-stacks-section";
import { TrustedBySection } from "@/components/home/trusted-section";

export default function NeuronHireLanding() {
  return (
    <div className="min-h-screen">
      <div className="bg-neuronhire-bg-main">
        <section className="relative overflow-hidden nh-hero-right-bg min-h-[100svh]  mx-auto">
          <HeroSection 
            header={{ text: <>Hire the best full-time remote <br className="block" /> tech talent from Latin America</>, color: "text-neuronhire-black-100" }}
            subHeader={{ text: <>Top tech talents of LATAM, pre-vetted and timezone-aligned. <br className="hidden md:block" /> Transparent pricing. No hidden fees. No long-term commitments.</>, color: "text-neuronhire-black-100" }}
                    button1={{text: <>Start Hiring</>, color: ""}}
          button2={{text: <>Start Hiring</>, color: ""}}
/>
          <FeatureMarquee />
          <TrustedBySection />
        </section>

        <section className="relative overflow-hidden nh-sphere-bg  mx-auto">
          <HowItWorksSection />
          <BenefitsSection />
        </section>
      </div>

      <div className="mx-auto">
        <HiringFlowSection />
        <RolesAndStacksSection />
        {/* <TestimonialsSection /> */}
      </div>
    </div>
  );
}
