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

const globeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number = 0) => ({
    opacity: 0.6,
    scale: 1,
    transition: { delay, duration: 1.2, ease: EASE },
  }),
};

const steps = [
  {
    title: "Growth & Development",
    description:
      "Ongoing learning and growth opportunities are part of every journey.",
    icon: "/assets/icons/we-invest-in-people/triangle.png",
  },
  {
    title: "Above-Market Pay",
    description:
      "We offer competitive pay to reward real commitment and performance.",
    icon: "/assets/icons/we-invest-in-people/smile.png",
  },
  {
    title: "Meaningful Benefits",
    description:
      "From health insurance to wellness perks, we support balance in life.",
    icon: "/assets/icons/we-invest-in-people/star.png",
  },
];

export function WeInvestInPeopleSection() {
  return (
    <section className="py-12 px-6 relative overflow-hidden">
      <motion.div
        className="absolute flex items-center justify-center pointer-events-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={globeVariants}
        custom={0.15}
      >
        <Image
          src="/assets/icons/we-invest-in-people/globe.png"
          alt="Globe background"
          width={800}
          height={800}
          className="w-auto h-auto sm:max-w-[50%] object-contain"
        />
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.p
          className="text-neuronhire-black-100 text-sm font-normal uppercase tracking-wide mb-4 body-satoshi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0}
        >
          WE INVEST IN PEOPLE
        </motion.p>

        <motion.h2
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neuronhire-black-100 mb-6 body-mackinac max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0.1}
        >
          We don&apos;t just find great talent, we invest in it
        </motion.h2>

        <motion.p
          className="text-lg xl:text-xl text-neuronhire-black-100 max-w-3xl mx-auto mb-16 body-satoshi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0.2}
        >
          We don&apos;t just connect people to companies. We invest in people so
          companies want to keep them.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-left flex flex-col h-full bg-[#FAFAFA] rounded-2xl p-6 pb-0 relative"
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
              <h3 className="text-xl lg:text-2xl font-bold text-neuronhire-black-100 mb-4 body-mackinac">
                {step.title}
              </h3>

              <p className="text-neuronhire-black-100/60 body-satoshi leading-relaxed mb-8 flex-grow">
                {step.description}
              </p>

              <div className="flex justify-center">
                <div className="w-[60%] bottom-0 flex items-center justify-center">
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
