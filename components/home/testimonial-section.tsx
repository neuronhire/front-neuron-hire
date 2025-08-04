"use client";

import type { BezierDefinition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useMemo } from "react";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

const sectionStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

const mediaItem: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

const listItem: Variants = {
  hidden: (i: number = 0) => ({ opacity: 0, y: 20, x: i % 2 === 0 ? -14 : 14 }),
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.55, ease: EASE, delay: i * 0.04 },
  }),
};

const testimonials = Array.from({ length: 5 }, () => ({
  title: "The best platform to design and manage incentive plans",
  description:
    "We are incredibly pleased with Teilur Talent as our talent partner. Their expertise has allowed us to recruit qualified",
  label: "A DISRUPTIVE NEW MODEL",
}));

export function TestimonialsSection() {
  const [first, ...rest] = useMemo(() => testimonials, []);

  return (
    <motion.section
      className="py-24 px-6 bg-white"
      variants={sectionStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={sectionStagger}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.p
            variants={textItem}
            className="text-sm uppercase font-medium tracking-wide text-neuronhire-red-lines mb-2 body-satoshi"
          >
            A DISRUPTIVE NEW MODEL
          </motion.p>

          <motion.h2
            variants={textItem}
            className="text-3xl md:text-5xl font-medium text-neuronhire-red-lines mb-4 body-mackinac"
          >
            The best platform to design <br /> and manage incentive plans
          </motion.h2>

          <motion.p
            variants={textItem}
            className="text-base text-neuronhire-red-lines font-medium body-satoshi"
          >
            We are incredibly pleased with Teilur Talent as our talent partner.
            Their expertise has <br /> allowed us to recruit qualified
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <motion.div variants={sectionStagger} className="flex flex-col">
            <motion.div
              aria-hidden
              variants={mediaItem}
              className="mb-6 h-[360px] w-full rounded-2xl bg-neuronhire-bg-main"
            />
            <motion.article
              variants={mediaItem}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <p className="text-[11px] uppercase tracking-[0.16em] mb-1 text-neuronhire-red-lines">
                {first.label}
              </p>
              <h3 className="text-lg font-semibold mb-2 text-neuronhire-red-lines">
                {first.title}
              </h3>
              <p className="text-sm text-neuronhire-red-lines">
                {first.description}
              </p>
            </motion.article>
          </motion.div>

          <motion.div variants={sectionStagger} className="flex flex-col gap-6">
            {rest.map((item, i) => (
              <motion.article
                key={i}
                custom={i}
                variants={listItem}
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 22px rgba(0,0,0,0.06)",
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                }}
                className="flex gap-4 rounded-2xl"
              >
                <div
                  aria-hidden
                  className="w-20 md:w-24 h-28 rounded-lg bg-neuronhire-bg-main shrink-0"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] mb-1 text-neuronhire-red-lines body-satoshi">
                    {item.label}
                  </p>
                  <h4 className="text-2xl font-medium leading-snug mb-2 text-neuronhire-red-lines body-mackinac">
                    {item.title}
                  </h4>
                  <p className="text-lg text-neuronhire-red-lines body-satoshi">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
