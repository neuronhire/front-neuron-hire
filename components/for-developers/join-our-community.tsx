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
    title: "Apply Once",
    description: "Fill out your profile with experience, stack, and timezone.",
    icon: "/assets/icons/join-our-community/megaphone.png",
  },
  {
    title: "Get Vetted",
    description:
      "Technical, english and soft skills evaluation, reviewed by real engineers.",
    icon: "/assets/icons/join-our-community/broom.png",
  },
  {
    title: "Get Matched",
    description:
      "Receive role suggestions that fit your skills and work style.",
    icon: "/assets/icons/join-our-community/matched.png",
  },
  {
    title: "Start Building",
    description:
      "Join a real team, work remotely, grow with purpose and clarity.",
    icon: "/assets/icons/join-our-community/brackets.png",
  },
];

export function JoinOurCommunity() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto text-center bg-neuronhire-black-100 p-6 rounded-3xl">
        <motion.p
          className="text-white text-sm font-normal uppercase tracking-wide mb-4 body-satoshi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0}
        >
          HOW TO JOIN OUR COMMUNITY
        </motion.p>

        <motion.h2
          className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 body-mackinac max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0.1}
        >
          Join a community that opens doors
        </motion.h2>

        <motion.p
          className="text-lg xl:text-xl text-white max-w-3xl mx-auto mb-16 body-satoshi"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={textVariants}
          custom={0.2}
        >
          We&apos;re not another platform, we&apos;re your gateway to global
          product teams, better projects, and long-term career growth on your
          terms.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-left flex flex-col h-full bg-white/5 rounded-2xl p-6 pb-0"
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
              <div className="flex gap-2 items-center mb-4">
                <h3 className="rounded-full h-8 w-8 text-white bg-white/5 items-center flex justify-center">
                  {index + 1}
                </h3>
                <h3 className="text-xl lg:text-2xl font-bold text-white body-mackinac">
                  {step.title}
                </h3>
              </div>

              <p className="text-white/70 body-satoshi leading-relaxed mb-8 flex-grow">
                {step.description}
              </p>

              <div className="flex justify-center mt-auto">
                <div className="w-[70%] max-w-32 flex items-center justify-center">
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
