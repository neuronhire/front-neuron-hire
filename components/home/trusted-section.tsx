"use client";

import Image from "next/image";
import { useState } from "react";

const firstRow = [
  { src: "/assets/logos/InPower.png", alt: "InPower" },
  { src: "/assets/logos/app_onboard.png", alt: "App Onboard" },
  { src: "/assets/logos/aws.png", alt: "AWS" },
  { src: "/assets/logos/buildbox.png", alt: "Buildbox" },
];

const secondRow = [
  { src: "/assets/logos/cloud303.png", alt: "Cloud303" },
  { src: "/assets/logos/quvy.png", alt: "Quvy" },
];

const mobileFirstRow = [
  { src: "/assets/logos/InPower.png", alt: "InPower" },
  { src: "/assets/logos/app_onboard.png", alt: "App Onboard" },
  { src: "/assets/logos/aws.png", alt: "AWS" },
];

const mobileSecondRow = [
  { src: "/assets/logos/buildbox.png", alt: "Buildbox" },
  { src: "/assets/logos/cloud303.png", alt: "Cloud303" },
];

const mobileThirdRow = [{ src: "/assets/logos/quvy.png", alt: "Quvy" }];

export function TrustedBySection() {
  return (
    <section className="pt-12 pb-0 sm:pb-10 px-6">
      <h4 className="text-sm tracking-wide uppercase text-black mb-2 body-mackinac text-center font-normal">
        trusted by
      </h4>
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="block sm:hidden space-y-6">
          <div className="flex justify-center gap-x-8 gap-y-6">
            {mobileFirstRow.map((logo, i) => (
              <FadeInImage
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={32}
                className="object-contain w-26 h-10"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {mobileSecondRow.map((logo, i) => (
              <FadeInImage
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={32}
                className="object-contain w-30 h-10"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
            {mobileThirdRow.map((logo, i) => (
              <FadeInImage
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={42}
                className="object-contain w-25 h-10"
              />
            ))}
          </div>
        </div>

        <div className="hidden sm:block space-y-10">
          <div className="flex flex-wrap justify-center gap-x-18 gap-y-6">
            {firstRow.map((logo, i) => (
              <FadeInImage
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={32}
                className="object-contain"
              />
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-x-18 gap-y-6">
            {secondRow.map((logo, i) => (
              <FadeInImage
                key={i}
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={32}
                className="object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FadeInImage({
  className,
  ...props
}: React.ComponentProps<typeof Image>) {
  const [loaded, setLoaded] = useState(false);
  return (
    <Image
      {...props}
      className={`${
        className ?? ""
      } transition-opacity duration-700 ease-in-out${
        loaded ? " opacity-100" : " opacity-0"
      }`}
      onLoadingComplete={() => setLoaded(true)}
    />
  );
}
