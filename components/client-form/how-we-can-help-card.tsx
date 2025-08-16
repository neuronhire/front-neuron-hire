import {
  BezierDefinition,
  motion,
  useAnimation,
  useReducedMotion,
  Variants,
} from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface HowWeCanHelpCardProps {
  title: string;
  icon: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  index?: number;
  className?: string;
  backgroundImage?: string;
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
  backgroundImage,
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
      whileHover={
        index === 0 && backgroundImage
          ? {
              scale: 1.01,
              y: -2,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : {
              y: -4,
              transition: { duration: 0.2, ease: "easeOut" },
            }
      }
      className={`select-none opacity-90 rounded-xl shadow-md p-6 flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 w-full h-full ${backgroundColor} ${className} ${
        index === 0 ? "justify-end relative group" : ""
      }`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : undefined
      }
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/20 rounded-xl transition-all duration-500 group-hover:bg-black/10 group-hover:scale-110" />
      )}
      <div
        className={`flex flex-col items-left justify-center gap-4 text-left transition-all duration-300 ${
          backgroundImage ? "relative z-10 group-hover:translate-y-[-4px]" : ""
        }`}
      >
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
          className={`transition-transform duration-300 ${
            index === 0 && backgroundImage
              ? "group-hover:scale-110 group-hover:-translate-y-1"
              : "group-hover:-translate-y-0.5"
          }`}
        />

        <h3
          className={`font-mackinac font-extrabold text-2xl ${titleColor} transition-all duration-300 ${
            index === 0 && backgroundImage
              ? "group-hover:text-white group-hover:drop-shadow-lg"
              : ""
          }`}
        >
          {title}
        </h3>

        {description && (
          <p
            className={`text-lg font-satoshi font-thin ${descriptionColor} transition-all duration-300 ${
              index === 0 && backgroundImage
                ? "group-hover:text-white/90 group-hover:drop-shadow-md"
                : ""
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
}
