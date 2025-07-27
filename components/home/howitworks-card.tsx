"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface HowItWorksCardProps {
  title: string;
  description: string;
  highlight?: string;
  image: string;
  index?: number;
}

export function HowItWorksCard({
  title,
  description,
  highlight,
  image,
  index = 0,
}: HowItWorksCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.15,
        duration: 0.5,
        ease: [0.25, 0.8, 0.25, 1],
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="bg-white rounded-3xl shadow-md p-6 pb-0 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 mb-2">{title}</h3>
        <p className="text-sm text-neutral-600">{description}</p>
        {highlight && (
          <p className="italic text-sm text-neutral-500 mt-3">{highlight}</p>
        )}
      </div>
      <div className="mt-6">
        <Image
          src={image}
          alt={title}
          width={320}
          height={160}
          className="rounded-none object-contain w-full"
        />
      </div>
    </motion.div>
  );
}
