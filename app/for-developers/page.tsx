import { FlagsMarquee } from "@/components/client-form/flags-marquee";
import { HeroSection } from "@/components/home/hero-section";
import { JoinOurCommunity } from "@/components/join-our-community";
import { MultiFaqSection } from "@/components/multi-faq-section";
import { WeInvestInPeopleSection } from "@/components/we-invest-in-people";

import faqData from "@/data/dev-faq.json";

export default function NeuronHireLanding() {
  return (
    <div className="min-h-screen">
      <div className="pb-10 md:pb-15">
        <HeroSection />
        <FlagsMarquee />
      </div>

      <WeInvestInPeopleSection />
      <JoinOurCommunity />

      <MultiFaqSection sections={faqData.sections} />
    </div>
  );
}
