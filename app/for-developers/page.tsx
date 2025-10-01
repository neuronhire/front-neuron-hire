import { FlagsMarquee } from "@/components/client-form/flags-marquee";
import { JoinOurCommunity } from "@/components/for-developers/join-our-community";
import { WeInvestInPeopleSection } from "@/components/for-developers/we-invest-in-people";
import { HeroSection } from "@/components/home/hero-section";
import { MultiFaqSection } from "@/components/multi-faq-section";

import faqData from "@/data/dev-faq.json";

export default function NeuronHireLanding() {
  return (
    <div className="min-h-screen">
      <div className="pb-10 md:pb-15">
        <HeroSection
          header={{
            text: <>Join a curated network of Latin America’s top developers</>,
            color: "text-neuronhire-black-100",
          }}
          subHeader={{
            text: (
              <>
                You won’t chase gigs. You won’t fight for attention.{" "}
                <br className="hidden md:block" /> NeuronHire connects you
                directly with global product teams looking for people like you.
              </>
            ),
            color: "text-neuronhire-black-100",
          }}
          button1={{
            text: <>Join as developer</>,
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

      <WeInvestInPeopleSection />
      <JoinOurCommunity />

      <MultiFaqSection sections={faqData.sections} />
    </div>
  );
}
