"use client";

import {
  AR,
  AT,
  AU,
  BE,
  BO,
  BR,
  CA,
  CH,
  CL,
  CN,
  CO,
  CR,
  CZ,
  DE,
  DK,
  EC,
  EG,
  ES,
  FI,
  FR,
  GB,
  GT,
  HN,
  HU,
  ID,
  IE,
  IL,
  IN,
  IT,
  JP,
  KE,
  KR,
  LU,
  MA,
  MX,
  MY,
  NG,
  NI,
  NL,
  NO,
  NZ,
  PA,
  PE,
  PH,
  PL,
  PT,
  PY,
  RO,
  RU,
  SE,
  SG,
  TH,
  TN,
  TR,
  UA,
  US,
  UY,
  VE,
  VN,
  ZA,
} from "country-flag-icons/react/3x2";
import Marquee from "react-fast-marquee";

const countryFlags = [
  { Component: US, name: "United States" },
  { Component: CA, name: "Canada" },
  { Component: GB, name: "United Kingdom" },
  { Component: DE, name: "Germany" },
  { Component: FR, name: "France" },
  { Component: ES, name: "Spain" },
  { Component: IT, name: "Italy" },
  { Component: NL, name: "Netherlands" },
  { Component: SE, name: "Sweden" },
  { Component: NO, name: "Norway" },
  { Component: DK, name: "Denmark" },
  { Component: FI, name: "Finland" },
  { Component: AU, name: "Australia" },
  { Component: NZ, name: "New Zealand" },
  { Component: JP, name: "Japan" },
  { Component: KR, name: "South Korea" },
  { Component: SG, name: "Singapore" },
  { Component: IL, name: "Israel" },
  { Component: CH, name: "Switzerland" },
  { Component: AT, name: "Austria" },
  { Component: BE, name: "Belgium" },
  { Component: IE, name: "Ireland" },
  { Component: PT, name: "Portugal" },
  { Component: LU, name: "Luxembourg" },
  { Component: MX, name: "Mexico" },
  { Component: BR, name: "Brazil" },
  { Component: AR, name: "Argentina" },
  { Component: CL, name: "Chile" },
  { Component: CO, name: "Colombia" },
  { Component: PE, name: "Peru" },
  { Component: UY, name: "Uruguay" },
  { Component: EC, name: "Ecuador" },
  { Component: BO, name: "Bolivia" },
  { Component: PY, name: "Paraguay" },
  { Component: CR, name: "Costa Rica" },
  { Component: PA, name: "Panama" },
  { Component: GT, name: "Guatemala" },
  { Component: HN, name: "Honduras" },
  { Component: NI, name: "Nicaragua" },
  { Component: VE, name: "Venezuela" },
  { Component: RU, name: "Russia" },
  { Component: CN, name: "China" },
  { Component: IN, name: "India" },
  { Component: TH, name: "Thailand" },
  { Component: VN, name: "Vietnam" },
  { Component: ID, name: "Indonesia" },
  { Component: MY, name: "Malaysia" },
  { Component: PH, name: "Philippines" },
  { Component: TR, name: "Turkey" },
  { Component: EG, name: "Egypt" },
  { Component: ZA, name: "South Africa" },
  { Component: NG, name: "Nigeria" },
  { Component: KE, name: "Kenya" },
  { Component: MA, name: "Morocco" },
  { Component: TN, name: "Tunisia" },
  { Component: UA, name: "Ukraine" },
  { Component: PL, name: "Poland" },
  { Component: RO, name: "Romania" },
  { Component: HU, name: "Hungary" },
  { Component: CZ, name: "Czech Republic" },
];

export function FlagsMarquee() {
  const duplicatedFlags = [...countryFlags, ...countryFlags, ...countryFlags];

  return (
    <div className="w-full h-16 overflow-hidden flex items-center">
      <Marquee
        speed={30}
        gradient={false}
        pauseOnHover
        className="flex items-center"
      >
        {duplicatedFlags.map((flag, i) => (
          <div
            key={i}
            className="flex items-center justify-center px-3 lg:px-4 xl:px-5"
            title={flag.name}
          >
            <flag.Component className="w-8 h-6 lg:w-10 lg:h-7 rounded-sm shadow-sm border border-gray-200/50" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
