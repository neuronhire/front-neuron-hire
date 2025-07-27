"use client";

import { Clock, Cpu, Layers, Rocket, UserCheck, Users } from "lucide-react";
import Marquee from "react-fast-marquee";

const features = [
  { icon: Rocket, text: "Used by funded startups" },
  { icon: UserCheck, text: "97% match accuracy" },
  { icon: Users, text: "LATAM-based" },
  { icon: Clock, text: "US/EU timezone aligned" },
  { icon: Cpu, text: "+1000 engineers indexed" },
  { icon: Layers, text: "All core stacks covered" },
];

export function FeatureMarquee() {
  return (
    <div className="bg-black rotate-[0.5deg] h-12 overflow-hidden flex items-center">
      <Marquee
        speed={40}
        gradient={false}
        pauseOnHover
        className=" flex items-center"
      >
        {features.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-white text-sm font-semibold px-6"
          >
            <item.icon size={18} />
            <span>{item.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
