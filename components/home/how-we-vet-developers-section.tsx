"use client";

import type { BezierDefinition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: EASE },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: EASE },
  }),
};

const steps = [
  {
    percentage: "100%",
    title: "Profile Review",
    description:
      "We verify experience, outcomes, and seniority. Only proven professionals move forward.",
    icon: "/assets/icons/vetting/profile-review.svg",
    color: "text-neuronhire-pink",
  },
  {
    percentage: "12%",
    title: "Soft Skills & Collaboration",
    description:
      "We assess communication, collaboration, and English, no multiple-choice fluff.",
    icon: "/assets/icons/vetting/collaboration.svg",
    color: "text-neuronhire-pink",
  },
  {
    percentage: "3%",
    title: "Technical Evaluation",
    description:
      "We test critical thinking and culture fit with real-world engineering challenges.",
    icon: "/assets/icons/vetting/technical.svg",
    color: "text-neuronhire-pink",
  },
  {
    percentage: "1%",
    title: "Precision Matching",
    description:
      "Only aligned talent reaches you, by skills, timezone, and team style.",
    icon: "/assets/icons/vetting/matching.svg",
    color: "text-neuronhire-pink",
  },
];

export function HowWeVetDevelopersSection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          className="text-neuronhire-secondary-red text-sm font-normal uppercase tracking-wide mb-4 body-satoshi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0}
        >
          HOW WE VET DEVELOPERS
        </motion.p>

        <motion.h2
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neuronhire-secondary-red mb-6 body-mackinac max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0.1}
        >
          How we rigorously choose before you ever see them
        </motion.h2>

        <motion.p
          className="text-lg xl:text-xl text-neuronhire-black-100/60 max-w-3xl mx-auto mb-16 body-satoshi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0.2}
        >
          From code quality to communication style, every candidate goes through
          a multi-layered process designed to ensure technical excellence and
          cultural alignment.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-left flex flex-col h-full bg-[#FAFAFA] rounded-2xl p-6 pb-0"
              initial="hidden"
              whileInView="visible"
              whileHover={{
                y: -4,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              custom={0.3 + index * 0.1}
            >
              <div className="mb-6">
                <span
                  className={`text-5xl lg:text-4xl font-bold ${step.color} body-mackinac`}
                >
                  {step.percentage}
                </span>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold text-neuronhire-secondary-red mb-4 body-mackinac">
                {step.title}
              </h3>

              <p className="text-neuronhire-black-100/60 body-satoshi leading-relaxed mb-8 flex-grow">
                {step.description}
              </p>

              <div className="flex justify-center mt-auto">
                <div className="w-[70%] max-w-32 aspect-square flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={120}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
