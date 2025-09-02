"use client";

import type { BezierDefinition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import CobeGlobeBg from "../cobe-globe";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: EASE },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.55, ease: EASE },
  }),
};

const globeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay = 0) => ({
    opacity: 1,
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
    <section className="py-12 px-6 relative overflow-hidden isolate">
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={globeVariants}
        custom={0.15}
      >
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CobeGlobeBg size={950} className=" blur-[1px]" />
        </div>

        <div className="lg:hidden absolute left-1/2 top-[22%] sm:top-[24%] md:top-[26%] -translate-x-1/2 -translate-y-1/2">
          <CobeGlobeBg size={720} className=" blur-[0.5px]" />
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="relative pb-16 lg:pb-24">
          <div className="relative z-10">
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
              className="text-lg xl:text-xl text-neuronhire-black-100 max-w-3xl mx-auto body-satoshi"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={textVariants}
              custom={0.2}
            >
              We don&apos;t just connect people to companies. We invest in
              people so companies want to keep them.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-2 relative z-10">
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
                    src={step.icon || "/placeholder.svg"}
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
