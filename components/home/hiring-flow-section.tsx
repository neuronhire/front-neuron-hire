"use client";

import type { BezierDefinition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

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
    icon: "/assets/icons/hiring-flow/vector.svg",
  },
  {
    title: "Instant Replacements",
    description:
      "Not a perfect fit? We’ll replace talent instantly no extra cost, no delay.",
    icon: "/assets/icons/hiring-flow/lightning.svg",
  },
  {
    title: "Direct Hiring Allowed",
    description:
      "Love working with someone? Hire them full-time whenever you want. No buyouts.",
    icon: "/assets/icons/hiring-flow/person.svg",
  },
  {
    title: "Monthly Billing",
    description:
      "Simple month-to-month pricing. No long-term commitments. Pause whenever.",
    icon: "/assets/icons/hiring-flow/calendar-check.svg",
  },
  {
    title: "No-Risk Commitment",
    description:
      "Start with a 7-day trial. If it’s not working, we replace or refund. You’re covered.",
    icon: "/assets/icons/hiring-flow/shield-check.svg",
  },
];

const isOdd = rightItems.length % 2 !== 0;

const sectionVariant: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

export function HiringFlowSection() {
  return (
    <motion.section
      className="py-24 px-6 bg-white"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <motion.div variants={sectionVariant} className="">
          <motion.p
            variants={textItem}
            className="body-satoshi uppercase text-sm font-normal text-neuronhire-red-30 mb-3"
          >
            Total control, zero lock-in
          </motion.p>

          <motion.h2
            variants={textItem}
            className="body-mackinac text-4xl md:text-5xl font-semibold text-neuronhire-red-30 mb-6 leading-tight"
          >
            You have ultimate <br /> control over your hiring <br /> flow.
          </motion.h2>

          <motion.p
            variants={textItem}
            className="body-satoshi text-neuronhire-red-30 mb-10 text-base max-w-lg"
          >
            Scale up, scale down, or hire permanently, all without risk,
            contracts, or friction. NeuronHire replaces bloated hiring pipelines
            with a sharp, async-first system that works on your terms.
          </motion.p>

          <motion.div variants={sectionVariant} className="space-y-6 mb-10">
            {leftItems.map((item, index) => (
              <motion.div
                key={index}
                variants={textItem}
                className="flex items-start gap-3"
              >
                <Image
                  src={item.icon}
                  alt="icon"
                  width={28}
                  height={28}
                  className="mt-1"
                />
                <p className="text-neuronhire-red-30 text-base font-medium">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.a
            variants={textItem}
            href="https://calendly.com/contact-neuronhire/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="body-satoshi px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-neutral-800 transition inline-block"
          >
            Build my team
          </motion.a>
        </motion.div>

        <motion.div variants={sectionVariant} className="order-1 lg:order-2">
          <div className="grid grid-cols-1 sm:hidden gap-3">
            {rightItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardItem}
                className="bg-neuronhire-bg-main body-satoshi rounded-xl p-4 flex flex-col relative min-h-[120px]"
              >
                <h3 className="body-mackinac text-lg text-neuronhire-gray-100 font-semibold mb-1 z-10 pr-16">
                  {item.title}
                </h3>
                <p className="body-satoshi text-sm text-neuronhire-red-30 z-10 pr-16 leading-relaxed">
                  {item.description}
                </p>
                <div className="absolute bottom-2 right-2 pointer-events-none select-none opacity-60">
                  <Image
                    src={item.icon || "/placeholder.svg"}
                    alt={`${item.title} icon`}
                    width={60}
                    height={60}
                    className="w-12 h-12 sm:w-16 sm:h-16"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-3 auto-rows-fr">
            {rightItems.map((item, index) => {
              const isLast = index === rightItems.length - 1;
              const colSpanClass = isLast && isOdd ? "md:col-span-2" : "";
              return (
                <motion.div
                  key={index}
                  variants={cardItem}
                  className={`bg-neuronhire-bg-main body-satoshi rounded-xl p-4 flex flex-col relative ${colSpanClass}`}
                >
                  <h3 className="body-mackinac text-2xl text-neuronhire-gray-100 font-semibold mb-1 z-10">
                    {item.title}
                  </h3>
                  <p className="body-satoshi text-neuronhire-red-30 text-sm sm:text-base lg:text-lg z-10 pr-16 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-4 pointer-events-none select-none opacity-60">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt={`${item.title} icon`}
                      width={100}
                      height={100}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
