"use client";

import Image from "next/image";
import BenefitsCard from "./cards/benefits-cards";

export function BenefitsSection() {
  return (
    <section className="py-24 px-6 text-center bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-neuronhire-red-lines max-w-2xl mx-auto text-sm font-medium mb-1 body-satoshi">
            A RADICALLY DIFFERENT WAY TO HIRE
          </p>
          <h2 className="text-5xl font-bold text-neuronhire-red-lines mb-5 body-mackinac">
            Built from the ground up for speed, quality, and control.
          </h2>
          <p className="text-neuronhire-red-lines max-w-3xl mx-auto text-lg font-medium body-satoshi">
            NeuronHire replaces bloated hiring workflows with a lean,
            async-first system engineered for speed, quality, and complete team
            control.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
            <BenefitsCard className="bg-neuronhire-primary h-90 flex flex-col relative overflow-hidden">
              <div className="absolute top-7 -right-29 z-10">
                <Image
                  src="/assets/benefits-cards-images/card1.png"
                  alt="Pre-vetted talent illustration"
                  width={350}
                  height={330}
                  className="object-contain"
                />
              </div>
              <div className="px-6 pb-6 mt-auto relative z-20">
                <h3 className="text-2xl font-medium mb-2 body-mackinac">
                  Pre-Vetted Talent Only
                </h3>
                <p className="body-satoshi">
                  Only top LATAM engineers. Every candidate passes technical
                  challenges and real-world scenarios before you ever see a
                  profile.
                </p>
              </div>
            </BenefitsCard>

            <BenefitsCard className="bg-neuronhire-red-30 h-90 lg:col-span-2 flex flex-col relative overflow-hidden">
              <div className="absolute bottom-0 right-0 z-10">
                <Image
                  src="/assets/benefits-cards-images/card3.png"
                  alt="Latam connection illustration"
                  width={800}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div className="relative p-6 z-20">
                <h3 className="text-2xl font-medium mb-2 body-mackinac">
                  Timezone-Aligned Collaboration
                </h3>
                <p className="body-satoshi">
                  Work with engineers fluent in English and synced to your
                  working hours. No late replies. No async lag. Just flow.
                </p>
              </div>
            </BenefitsCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <BenefitsCard className="bg-neuronhire-red-30 h-90 flex flex-col justify-end overflow-hidden relative">
              <div className="absolute left-5 -top-16 z-10">
                <Image
                  src="/assets/benefits-cards-images/card2.png"
                  alt="Candidates match illustration"
                  width={337}
                  height={310}
                  className="object-contain"
                />
              </div>
              <div className="relative p-6 pt-0 z-20">
                <h3 className="text-2xl font-medium mb-2 body-mackinac">
                  Hire Candidates With Your Company DNA
                </h3>
                <p className="body-satoshi">
                  We've identified a senior candidate that aligns with your tech
                  stack, communication style, and team culture. They're
                  pre-vetted and ready to meet.
                </p>
              </div>
            </BenefitsCard>
            <BenefitsCard className="bg-neuronhire-red-30 h-90 flex flex-col justify-end overflow-hidden relative">
              <div className="absolute -top-11 -right-18 md:-top-15 md:-right-22 z-10">
                <Image
                  src="/assets/benefits-cards-images/card4.png"
                  alt="Long-Term Retention Support illustration"
                  width={260}
                  height={330}
                  className="object-contain"
                />
              </div>
              <div className="relative p-6 pt-0 z-20">
                <h3 className="text-2xl font-medium mb-2 body-mackinac">
                  Long-Term Retention Support
                </h3>
                <p className="body-satoshi">
                  We help your engineers stay. Think premium comp, wellness
                  perks, fiscal support, and real upskilling opportunities.
                </p>
              </div>
            </BenefitsCard>

            <BenefitsCard className="bg-neuronhire-red-30 h-90 flex flex-col justify-end overflow-hidden relative">
              <div className="absolute left-5 -top-15 z-10">
                <Image
                  src="/assets/benefits-cards-images/card5.png"
                  alt="Onboarding illustration"
                  width={337}
                  height={310}
                  className="object-contain"
                />
              </div>
              <div className="relative p-6 pt-0 z-20">
                <h3 className="text-2xl font-medium mb-2 body-mackinac">
                  Onboard candidates in 1 week
                </h3>
                <p className="body-satoshi">
                  Interview vetted senior talent. No resume spam. No sourcing
                  headaches. Just fast, precise hiring.
                </p>
              </div>
            </BenefitsCard>
          </div>
        </div>
      </div>
    </section>
  );
}
