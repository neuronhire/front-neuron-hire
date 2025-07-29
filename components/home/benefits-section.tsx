"use client";

import BenefitsCard from "./cards/benefits-cards";

export function BenefitsSection() {
  return (
    <section className="py-24 px-6 text-center bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-[#4D1729] max-w-2xl mx-auto text-sm font-medium mb-1 body-satoshi">
            A RADICALLY DIFFERENT WAY TO HIRE
          </p>
          <h2 className="text-5xl font-bold text-[#4D1729] mb-5 body-mackinac">
            Built from the ground up for speed, quality, and control.
          </h2>
          <p className="text-[#4D1729] max-w-3xl mx-auto text-lg font-medium body-satoshi">
            NeuronHire replaces bloated hiring workflows with a lean,
            async-first system engineered for speed, quality, and complete team
            control.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-2">
            <BenefitsCard className="bg-[#FD4C86] w-sm h-80 flex flex-col justify-end">
              <div className="relative p-6 pt-0">
                <h3 className="text-xl font-bold mb-2 body-mackinac">
                  Pre-Vetted Talent Only
                </h3>
                <p className="body-satoshi">
                  Only top LATAM engineers. Every candidate passes technical
                  challenges and real-world scenarios before you ever see a
                  profile.
                </p>
              </div>
            </BenefitsCard>

            <BenefitsCard className="bg-[#330F1B] w-193">
              <div className="relative p-6">
                <h3 className="text-xl font-bold mb-2 body-mackinac">
                  Timezone-Aligned Collaboration
                </h3>
                <p className="body-satoshi">
                  Work with engineers fluent in English and synced to your
                  working hours. No late replies. No async lag. Just flow.
                </p>
              </div>
            </BenefitsCard>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <BenefitsCard className="bg-[#330F1B] w-sm h-80 flex flex-col justify-end">
              <div className="relative p-6 pt-0">
                <h3 className="text-xl font-bold mb-2 body-mackinac">
                  Hire Candidates With Your Company DNA
                </h3>
                <p className="body-satoshi">
                  We’ve identified a senior candidate that aligns with your tech
                  stack, communication style, and team culture. They’re
                  pre-vetted and ready to meet.
                </p>
              </div>
            </BenefitsCard>
            <BenefitsCard className="bg-[#330F1B] w-sm flex flex-col justify-end">
              <div className="relative p-6 pt-0">
                <h3 className="text-xl font-bold mb-2 body-mackinac">
                  Long-Term Retention Support
                </h3>
                <p className="body-satoshi">
                  We help your engineers stay. Think premium comp, wellness
                  perks, fiscal support, and real upskilling opportunities.
                </p>
              </div>
            </BenefitsCard>

            <BenefitsCard className="bg-[#330F1B] w-sm flex flex-col justify-end">
              <div className="relative p-6 pt-0">
                <h3 className="text-xl font-bold mb-2 body-mackinac">
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
