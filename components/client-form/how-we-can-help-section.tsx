"use client";

import { BezierDefinition, motion, Variants } from "framer-motion";
import { Layers, Shield, Target, Volume2, Zap } from "lucide-react";
import { HowWeCanHelpCard } from "./how-we-can-help-card";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

const features = [
  {
    title: "Engineering Expertise",
    description:
      "We are engineers hiring engineers. We understand technical excellence and match companies with professionals who truly deliver.",
    backgroundColor: "bg-neuronhire-primary",
    titleColor: "text-white",
    descriptionColor: "text-white",
  },
  {
    title: "Long-Term Relationships",
    description: "",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-red-30",
    descriptionColor: "text-neuronhire-gray-64",
  },
  {
    title: "Cost Optimization",
    description:
      "Access global talent while reducing overhead, without sacrificing quality.",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-red-30",
    descriptionColor: "text-neuronhire-gray-64",
  },
  {
    title: "Honesty and Integrity",
    description: "We act transparently with your best interest at the center.",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-red-30",
    descriptionColor: "text-neuronhire-gray-64",
  },
  {
    title: "Efficiency and Speed",
    description: "",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-red-30",
    descriptionColor: "text-neuronhire-gray-64",
  },
  {
    title: "Flexibility",
    description: "From full-time to fractional roles, we adapt to your needs.",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-red-30",
    descriptionColor: "text-neuronhire-gray-64",
  },
];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
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

export function HowWeCanHelpSection() {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h4
          className="text-sm uppercase tracking-wide text-black mb-2 font-satoshi font-normal"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0}
        >
          How we can help
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
          className="text-black max-w-2xl mx-auto mb-12 font-normal text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0.1}
        >
          We don’t waste your time with endless calls or shallow candidate
          pools. You tell us what you need. We deliver top-tier matches. Fast.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <HowWeCanHelpCard key={index} index={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
