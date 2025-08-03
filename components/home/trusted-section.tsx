"use client";

import Image from "next/image";

const firstRow = [
  { src: "/assets/logos/linkedin.png", alt: "LinkedIn" },
  { src: "/assets/logos/glassdoor.png", alt: "Glassdoor" },
  { src: "/assets/logos/github.png", alt: "GitHub" },
  { src: "/assets/logos/stackoverflow.png", alt: "Stack Overflow" },
];

const secondRow = [
  { src: "/assets/logos/slack.png", alt: "Slack" },
  { src: "/assets/logos/codility.png", alt: "Codility" },
  { src: "/assets/logos/toptal.png", alt: "Toptal" },
];

const mobileFirstRow = [
  { src: "/assets/logos/linkedin.png", alt: "LinkedIn" },
  { src: "/assets/logos/glassdoor.png", alt: "Glassdoor" },
  { src: "/assets/logos/github.png", alt: "GitHub" },
];

const mobileSecondRow = [
  { src: "/assets/logos/stackoverflow.png", alt: "Stack Overflow" },
  { src: "/assets/logos/slack.png", alt: "Slack" },
];

const mobileThirdRow = [
  { src: "/assets/logos/codility.png", alt: "Codility" },
  { src: "/assets/logos/toptal.png", alt: "Toptal" },
];

export function TrustedBySection() {
  return (
    <section className="pt-14 pb-0 sm:pb-10 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="block sm:hidden space-y-6">
          <div className="flex justify-center gap-x-8 gap-y-6">
            {mobileFirstRow.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={40}
                className="object-contain w-26 h-10"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {mobileSecondRow.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={40}
                className="object-contain w-30 h-10"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {mobileThirdRow.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={40}
                className="object-contain w-25 h-10"
              />
            ))}
          </div>
        </div>

        <div className="hidden sm:block space-y-10">
          <div className="flex flex-wrap justify-center gap-x-18 gap-y-6">
            {firstRow.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={40}
                className="object-contain"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-18 gap-y-6">
            {secondRow.map((logo, i) => (
              <Image
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={40}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
