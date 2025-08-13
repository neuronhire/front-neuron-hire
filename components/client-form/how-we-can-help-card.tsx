import {
  BezierDefinition,
  motion,
  useAnimation,
  useReducedMotion,
  Variants,
} from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface HowWeCanHelpCardProps {
  title: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  index?: number;
}

const EASE: BezierDefinition = [0.22, 1, 0.36, 1];

export function HowWeCanHelpCard({
  title,
  description,
  backgroundColor,
  titleColor,
  descriptionColor,
  index = 0,
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
    <div className="max-w-7xl">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        className={`opacity-90 rounded-xl shadow-md p-6 flex flex-col justify-end overflow-hidden hover:shadow-lg transition-shadow h-80 w-95 ${backgroundColor} `}
      >
        <div>
          <h3
            className={`mb-2 font-mackinac font-bold text-2xl text-start ${titleColor}`}
          >
            {title}
          </h3>
          {description && (
            <p
              className={`text-lg font-satoshi font-normal text-start ${descriptionColor}`}
            >
              {description}
            </p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
