"use client";

import {
  BadgeCheck,
  Brain,
  Clock,
  Earth,
  Layers,
  MapPinned,
  MessageCircleMore,
  Rocket,
} from "lucide-react";
import Marquee from "react-fast-marquee";

const features = [
  { icon: Clock, text: "+5k hours delivered" },
  { icon: BadgeCheck, text: "97% match accuracy" },
  { icon: MapPinned, text: "LATAM-based" },
  { icon: Earth, text: "US/EU timezone aligned" },
  { icon: Brain, text: "+1000 engineers indexed" },
  { icon: Layers, text: "All core stacks covered" },
  { icon: Rocket, text: "Used by funded startups" },
  { icon: MessageCircleMore, text: "English-ready talent" },
];

export function FeatureMarquee() {
  return (
    <div className="bg-black h-12 overflow-hidden flex items-center shadow-[0_4px_5px_-1px_rgba(0,0,0,0.6)]">
      <Marquee
        speed={25}
        gradient={false}
        pauseOnHover
        className=" flex items-center"
      >
        {features.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 body-satoshi text-white text-sm font-normal px-10"
          >
            <item.icon size={18} />
            <span>{item.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
