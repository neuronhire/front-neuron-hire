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

export function TrustedBySection() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {firstRow.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          {secondRow.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={40}
              className="object-contain grayscale hover:grayscale-0 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
