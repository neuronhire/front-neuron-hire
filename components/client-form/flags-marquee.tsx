"use client";

import {
  AR,
  BO,
  BR,
  CL,
  CO,
  CR,
  CU,
  DO,
  EC,
  GT,
  GY,
  HN,
  HT,
  JM,
  MX,
  NI,
  PA,
  PE,
  PY,
  SR,
  SV,
  TT,
  UY,
  VE,
} from "country-flag-icons/react/3x2";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const countryFlags = [
  { Component: BR, name: "Brazil" },
  { Component: AR, name: "Argentina" },
  { Component: CL, name: "Chile" },
  { Component: CO, name: "Colombia" },
  { Component: PE, name: "Peru" },
  { Component: VE, name: "Venezuela" },
  { Component: EC, name: "Ecuador" },
  { Component: BO, name: "Bolivia" },
  { Component: PY, name: "Paraguay" },
  { Component: UY, name: "Uruguay" },
  { Component: GY, name: "Guyana" },
  { Component: SR, name: "Suriname" },

  { Component: MX, name: "Mexico" },
  { Component: GT, name: "Guatemala" },
  { Component: CR, name: "Costa Rica" },
  { Component: PA, name: "Panama" },
  { Component: HN, name: "Honduras" },
  { Component: NI, name: "Nicaragua" },
  { Component: SV, name: "El Salvador" },

  { Component: CU, name: "Cuba" },
  { Component: DO, name: "Dominican Republic" },
  { Component: JM, name: "Jamaica" },
  { Component: HT, name: "Haiti" },
  { Component: TT, name: "Trinidad and Tobago" },
];

export function FlagsMarquee() {
  const [isPlaying, setIsPlaying] = useState(false);
  const duplicatedFlags = [...countryFlags, ...countryFlags, ...countryFlags];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPlaying(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-16 overflow-hidden flex items-center">
      <Marquee
        speed={30}
        className="flex items-center"
        play={isPlaying}
      >
        {duplicatedFlags.map((flag, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-1"
            title={flag.name}
          >
            <flag.Component className="w-8 h-6 rounded-sm shadow-sm border border-gray-200/50" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
