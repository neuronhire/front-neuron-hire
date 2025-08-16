import {
  BezierDefinition,
  motion,
  useAnimation,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface HowWeCanHelpCardProps {
  title: string;
  icon: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  index?: number;
  className?: string;
}

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

export function HowWeCanHelpCard({
  title,
  description,
  backgroundColor,
  titleColor,
  descriptionColor,
  index = 0,
  icon = "",
  className = "",
}: HowWeCanHelpCardProps) {
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const distance = prefersReducedMotion ? 0 : 24;
  const duration = prefersReducedMotion ? 0 : 0.55;

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: distance, x: -distance },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        delay: index * 0.1,
        duration,
        ease: EASE,
      },
    },
  };
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className={`opacity-90 rounded-xl shadow-md p-6 flex flex-col overflow-hidden hover:shadow-lg transition-shadow w-full h-full ${backgroundColor} ${className} ${index === 0 ? "justify-end" : ""}`}
    >
      <div className="flex flex-col items-left justify-center gap-4 text-left">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className="transition-transform duration-300 group-hover:-translate-y-0.5"
        />

        <h3 className={`font-mackinac font-extrabold text-2xl ${titleColor}`}>
          {title}
        </h3>

        {description && (
          <p className={`text-lg font-satoshi font-thin ${descriptionColor}`}>
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
