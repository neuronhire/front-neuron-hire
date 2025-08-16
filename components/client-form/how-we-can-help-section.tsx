"use client";

import { BezierDefinition, motion, Variants } from "framer-motion";
import { HowWeCanHelpCard } from "./how-we-can-help-card";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

const features = [
  {
    title: "Tech Hiring Tech",
    description:
      "We are engineers hiring engineers. We understand technical excellence and match companies with professionals who truly deliver.",
    backgroundColor: "bg-neuronhire-primary",
    titleColor: "text-white",
    descriptionColor: "text-white",
    icon: "/assets/icons/how-can-we-help-section/engineering_expertise.svg",
    backgroundImage: "/assets/client-form/tech-hire-card.png",
  },
  {
    title: "Long-Term Relationships",
    description:
      "We build lasting bonds between engineers and companies that value growth.",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-secondary-red",
    descriptionColor: "text-neuronhire-gray-64",
    icon: "/assets/icons/how-can-we-help-section/group.svg",
  },
  {
    title: "Cost Optimization",
    description:
      "Access global talent while reducing overhead, without sacrificing quality.",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-secondary-red",
    descriptionColor: "text-neuronhire-gray-64",
    icon: "/assets/icons/how-can-we-help-section/dollar.svg",
  },
  {
    title: "Precision Over Volume",
    description:
      "We focus on perfect-fit talent, not flooding pipelines with noise.",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-secondary-red",
    descriptionColor: "text-neuronhire-gray-64",
    icon: "/assets/icons/how-can-we-help-section/precision.svg",
  },
  {
    title: "Flexibility",
    description: "From full-time to fractional roles, we adapt to your needs.",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-secondary-red",
    descriptionColor: "text-neuronhire-gray-64",
    icon: "/assets/icons/how-can-we-help-section/trending.svg",
  },
  {
    title: "Efficiency and Speed",
    description:
      "Fast, structured hiring without compromising quality or depth of evaluation.",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-secondary-red",
    descriptionColor: "text-neuronhire-gray-64",
    icon: "/assets/icons/how-can-we-help-section/lightning.svg",
  },
  {
    title: "Honesty and Integrity",
    description: "We act transparently with your best interest at the center.",
    backgroundColor: "bg-gray-50",
    titleColor: "text-neuronhire-secondary-red",
    descriptionColor: "text-neuronhire-gray-64",
    icon: "/assets/icons/how-can-we-help-section/shield.svg",
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
          className="text-xs uppercase tracking-wide text-black mb-2 font-satoshi font-normal"
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
          className="text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto body-satoshi mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0.1}
        >
          We don’t waste your time with endless calls or shallow candidate
          pools. You tell us what you need. We deliver top-tier matches. Fast.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <HowWeCanHelpCard
              key={index}
              index={index}
              {...feature}
              className={
                index === 0 ? "lg:row-span-3 min-h-[400px]" : "min-h-[180px]"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
