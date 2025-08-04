"use client";

import type { BezierDefinition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import { HowItWorksCard } from "./howitworks-card";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

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

const textVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  // usa o "custom" do Framer para receber o delay
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom,
      duration: 0.55,
      ease: EASE,
    },
  }),
};

export function HowItWorksSection() {
  return (
    <section className="py-24 px-6 text-center bg-neuronhire-bg-main">
      <motion.h4
        className="text-sm uppercase tracking-wide text-black mb-2 font-satoshi font-medium"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={textVariants}
        custom={0}
      >
        How it works :)
      </motion.h4>

      <motion.h2
        className="text-3xl md:text-5xl text-black mb-4 font-mackinac font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={textVariants}
        custom={0.05}
      >
        A frictionless hiring engine <br /> made for speed and certainty.
      </motion.h2>

      <motion.p
        className="text-black max-w-2xl mx-auto mb-12 font-medium text-lg"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={textVariants}
        custom={0.1}
      >
        We don’t waste your time with endless calls or shallow candidate pools.
        You tell us what you need. We deliver top-tier matches. Fast.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <HowItWorksCard key={index} index={index} {...step} />
        ))}
      </div>
    </section>
  );
}
