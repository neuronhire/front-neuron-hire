import { FlagsMarquee } from "@/components/client-form/flags-marquee";
import { HowWeCanHelpSection } from "@/components/client-form/how-we-can-help-section";
import { HowWeVetDevelopersSection } from "@/components/for-companies/how-we-vet-developers-section";
import { HeroSection } from "@/components/home/hero-section";
import { MultiFaqSection } from "@/components/multi-faq-section";
import faqData from "@/data/companies-faq.json";

export default function NeuronHireLanding() {
  return (
    <div className="min-h-screen">
      <div className="pb-10 md:pb-15">
        <HeroSection
          header={{
            text: (
              <>
                Hire the best full-time remote <br className="block" /> tech
                talent from Latin America
              </>
            ),
            color: "text-neuronhire-secondary-red",
          }}
          subHeader={{
            text: (
              <>
                Top tech talents of LATAM, pre-vetted and timezone-aligned.{" "}
                <br className="hidden md:block" /> Transparent pricing. No
                hidden fees. No long-term commitments.
              </>
            ),
            color: "text-neuronhire-secondary-red",
          }}
          button1={{
            text: <>Start Hiring</>,
            href: "/client-form",
          }}
          button2={{
            text: <>See Jobs</>,
            href: "https://docs.google.com/forms/d/e/1FAIpQLSfK_M8uJ7t8Dt5RguEJm-u4XNGzznIoniMoiJjRRxA6tO6ozA/viewform",
            target: "_blank",
            rel: "noopener noreferrer",
          }}
        />
        <FlagsMarquee />
      </div>
      <HowWeCanHelpSection />
      <HowWeVetDevelopersSection />
      <MultiFaqSection sections={faqData.sections} />
    </div>
  );
}
