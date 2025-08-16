"use client";

import { motion } from "framer-motion";
import { BriefcaseMedical, Shredder, TestTubeDiagonal } from "lucide-react";
import { features } from "../home/feature-marquee";
import { FlagsMarquee } from "./flags-marquee";
import { FormCard } from "./form-card";

const featuresList = [
  ...features,
  { icon: TestTubeDiagonal, text: "Pre-Vetted Talent" },
  { icon: Shredder, text: "No Long-Term Contracts" },
  { icon: BriefcaseMedical, text: "Full-Time Hiring" },
];

export function FormSection() {
  return (
    <section
      className="
        relative w-full max-w-none
        pl-6 sm:pl-8 md:pl-12 lg:pl-15 xl:pl-7
        pr-6 sm:pr-8 md:pr-12
        py-20 lg:py-15
        overflow-visible
      "
    >
      <div className="grid grid-cols-1 xl:grid-cols-3 items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          <div className="space-y-4 pt-5 lg:pt-15 xl:pt-20">
            <div>
              <h1 className="text-5xl font-extrabold text-neuronhire-black-100 mb-6 body-satoshi leading-none">
                Let&apos;s build your tech team!
              </h1>
              <div className="text-lg text-neuronhire-black-100 body-satoshi font-normal">
                <p>Fill out the form and book your call.</p>
                <p>
                  We&apos;ll get back to you within 24 hours with next steps.
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-neuronhire-black-100 body-satoshi font-normal text-lg list-disc pl-5 marker:text-neuronhire-black-100 ml-2">
              <li>
                Speak with a tech-savvy specialist who understands your stack
                and team culture
              </li>
              <li>
                Get a personalized hiring plan focused on top LATAM senior
                talent
              </li>
              <li>
                Risk-free, you only pay when you hire. Full replacement
                guarantee included
              </li>
            </ul>

            <div className="mt-6 xl:hidden">
              <FormCard />
            </div>

            <div className="mt-15 flex flex-wrap gap-3 sm:gap-4 lg:gap-5 max-w-4xl">
              {featuresList.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-neuronhire-black-100 body-satoshi font-semibold"
                >
                  <feature.icon className="w-5 h-5 text-neuronhire-primary" />
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute left-0 right-0 z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <FlagsMarquee />
          </motion.div>
        </motion.div>

        <div className="hidden lg:block lg:col-span-1" aria-hidden />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden xl:block absolute z-30 top-[60px] right-0 pr-16"
      >
        <FormCard />
      </motion.div>
    </section>
  );
}
