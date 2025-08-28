"use client";

import { Button } from "@/components/ui/button";
import type { BezierDefinition, Variants } from "framer-motion";
import { motion } from "framer-motion";
import { BriefcaseMedical, Shredder, TestTubeDiagonal } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: EASE },
  }),
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: EASE },
  }),
};

const featureVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.4, ease: EASE },
  }),
};

interface Header {
  text: ReactNode;
  color: string;
}

interface MeuCardProps {
  header: Header;
  subHeader: Header;
  button1: Header;
  button2: Header;
}

export function HeroSection({
    header, 
    subHeader,
    button1,
    button2,
  }: MeuCardProps) {
  return (
    <section className="px-6 md:px-6 lg:px-0 pt-10 pb-7 mt-15 md:mt-25 text-center max-w-4xl mx-auto">
      <motion.h1
        className={`text-5xl md:text-6xl font-bold tracking-tight body-mackinac ${header.color}`}
        initial="hidden"
        animate="visible"
        variants={textVariants}
        custom={0}
      >
        {header.text}
      </motion.h1>

      <motion.p
        className={`mt-8 text-base md:text-lg xl:text-xl font-normal body-satoshi ${subHeader.color}`}
        initial="hidden"
        animate="visible"
        variants={textVariants}
        custom={0.15}
      >
        {subHeader.text}
      </motion.p>

      <motion.div
        className="mt-6 flex justify-center items-center gap-3 flex-wrap font-bold body-mackinac"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        custom={0.3}
      >
        <Link href="/client-form">
          <motion.div
            className="inline-block p-0.5 rounded-full"
            style={{ background: "var(--neuronhire-gradient-2)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button className="px-7 cursor-pointer">{button1.text}</Button>
          </motion.div>
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfK_M8uJ7t8Dt5RguEJm-u4XNGzznIoniMoiJjRRxA6tO6ozA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button
              variant="ghost"
              className="rounded-full px-7 py-2 text-base font-semibold border border-gray-300 bg-neuronhire-gray-12 text-black hover:bg-gray-100 cursor-pointer"
            >
              {button2.text}
            </Button>
          </motion.div>
        </Link>
      </motion.div>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-6 text-base font-bold text-neuronhire-black-100 body-satoshi"
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center gap-2 whitespace-nowrap order-1"
          variants={featureVariants}
          custom={0.5}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <TestTubeDiagonal size={23} className="text-neuronhire-gray-24" />
          Pre-Vetted Talent.
        </motion.div>
        <motion.div
          className="flex items-center gap-2 whitespace-nowrap order-3 sm:order-2"
          variants={featureVariants}
          custom={0.6}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <Shredder size={23} className="text-neuronhire-gray-24" />
          No Long-Term Contracts.
        </motion.div>
        <motion.div
          className="flex items-center gap-2 whitespace-nowrap order-2 sm:order-3"
          variants={featureVariants}
          custom={0.7}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <BriefcaseMedical size={23} className="text-neuronhire-gray-24" />
          Full-Time Hiring.
        </motion.div>
      </motion.div>
    </section>
  );
}
