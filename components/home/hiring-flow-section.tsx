"use client";

import Image from "next/image";

const leftItems = [
  {
    text: "Aligned on skills, timezone, experience and team culture from day one.",
    icon: "/assets/icons/flow/skills.png",
  },
  {
    text: "We search thousands of engineers across LATAM using a tech-enabled process.",
    icon: "/assets/icons/flow/search.png",
  },
  {
    text: "Interview with support. Didn’t find the one? We adjust fast.",
    icon: "/assets/icons/flow/support.png",
  },
];

const rightItems = [
  {
    title: "Scale Up or Down",
    description:
      "Expand or shrink your team as needed, anytime. No penalties. No questions.",
  },
  {
    title: "Instant Replacements",
    description:
      "Not a perfect fit? We’ll replace talent instantly no extra cost, no delay.",
  },
  {
    title: "Direct Hiring Allowed",
    description:
      "Love working with someone? Hire them full-time whenever you want. No buyouts.",
  },
  {
    title: "Monthly Billing",
    description:
      "Simple month-to-month pricing. No long-term commitments. Pause whenever.",
  },
  {
    title: "No-Risk Commitment",
    description:
      "Start with a 7-day trial. If it’s not working, we replace or refund. You’re covered.",
  },
];

export function HiringFlowSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase text-sm font-medium text-neutral-400 mb-2">
            Total control, zero lock-in
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            You have ultimate <br /> control over your <br /> hiring flow.
          </h2>
          <p className="text-neutral-600 mb-8">
            Scale up, scale down, or hire permanently, all without risk,
            contracts, or friction. NeuronHire replaces bloated hiring pipelines
            with a sharp, async-first system that works on your terms.
          </p>

          <div className="space-y-4 mb-8">
            {leftItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Image
                  src={item.icon}
                  alt="icon"
                  width={24}
                  height={24}
                  className="mt-1"
                />
                <p className="text-neutral-800 text-sm">{item.text}</p>
              </div>
            ))}
          </div>

          <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition">
            Build my team
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {rightItems.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-100 rounded-xl p-5 text-left h-full"
            >
              <h3 className="text-base font-semibold text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
