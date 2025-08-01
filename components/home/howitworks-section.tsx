"use client";

import { HowItWorksCard } from "./howitworks-card";

const steps = [
  {
    title: "Share Your Needs",
    description:
      "We kick off with a quick call to align on your tech stack, hiring goals, team culture, and compensation range.",
    highlight: "No fluff. Just real context.",
    image: "/assets/how-it-works/step1.png",
  },
  {
    title: "We Scan Our LATAM Network",
    description:
      "We filter thousands of engineers and select only the best, fully-vetted matches.",
    highlight: "No cold resumes. Just relevant talent.",
    image: "/assets/how-it-works/step2.png",
  },
  {
    title: "Get a Shortlist Within Days",
    description:
      "We deliver 3 to 4 engineers with full profiles, verified experience, and interview-ready status.",
    highlight: "You’re in full control, always.",
    image: "/assets/how-it-works/step3.png",
  },
  {
    title: "You Interview, We Support",
    description:
      "You meet the shortlisted candidates. Didn’t find the one? We iterate fast and send more. We’re on it.",
    highlight: "You interview. We handle the rest.",
    image: "/assets/how-it-works/step4.png",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 text-center">
      <h4 className="text-sm uppercase tracking-wide text-black mb-2 font-satoshi font-medium">
        How it works :)
      </h4>
      <h2 className="text-3xl md:text-5xl text-black mb-4 font-mackinac font-bold">
        A frictionless hiring engine <br /> made for speed and certainty.
      </h2>
      <p className="text-black max-w-2xl mx-auto mb-12 font-medium text-lg">
        We don’t waste your time with endless calls or shallow candidate pools.
        You tell us what you need. We deliver top-tier matches. Fast.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <HowItWorksCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
}
