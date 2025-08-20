import { FlagsMarquee } from "@/components/client-form/flags-marquee";
import { HowWeCanHelpSection } from "@/components/client-form/how-we-can-help-section";
import { HeroSection } from "@/components/home/hero-section";
import { HowWeVetDevelopersSection } from "@/components/home/how-we-vet-developers-section";
import { MultiFaqSection } from "@/components/multi-faq-section";
import faqData from "@/data/client-form-faq.json";

export default function NeuronHireLanding() {
  return (
    <div className="min-h-screen">
      <div className="">
        <HeroSection />
        <FlagsMarquee />
        <HowWeCanHelpSection />
      </div>
      <HowWeVetDevelopersSection />
      <MultiFaqSection sections={faqData.sections} />
    </div>
  );
}
