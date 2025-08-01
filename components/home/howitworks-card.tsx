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
      className="bg-white opacity-90 rounded-xl shadow-md p-6 pb-0 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div>
        <h3 className=" text-black mb-2 font-mackinac font-bold text-xl text-start">
          {title}
        </h3>
        <p className="text-lg text-neuronhire-gray-64 font-satoshi font-medium">
          {description}
        </p>
        {highlight && (
          <p className="italic text-medium text-neuronhire-gray-64 mt-3 font-satoshi text-base">
            {highlight}
          </p>
        )}
      </div>
      <div className="mt-4">
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
