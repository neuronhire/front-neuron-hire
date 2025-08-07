"use client";

import { Button } from "@/components/ui/button";
import { BriefcaseMedical, Shredder, TestTubeDiagonal } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="px-6 md:px-6 lg:px-0 pt-10 pb-7 mt-15 md:mt-25 text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neuronhire-black-100 body-mackinac">
        Hire the best full-time remote
        <br className="block" />
        tech talent from Latin America
      </h1>

      <p className="mt-8 text-base md:text-lg xl:text-xl text-neuronhire-black-100 font-normal body-satoshi">
        Top tech talents of LATAM, pre-vetted and timezone-aligned.
        <br className="hidden md:block" />
        Transparent pricing. No hidden fees. No long-term commitments.
      </p>

      <div className="mt-6 flex justify-center items-center gap-3 flex-wrap font-bold body-mackinac">
        <Link
          href="https://calendly.com/contact-neuronhire/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="inline-block p-0.5 rounded-full"
            style={{ background: "var(--neuronhire-gradient-2)" }}
          >
            <Button className="px-7 cursor-pointer">Start Hiring</Button>
          </div>
        </Link>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSfK_M8uJ7t8Dt5RguEJm-u4XNGzznIoniMoiJjRRxA6tO6ozA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="ghost"
            className="rounded-full px-7 py-2 text-base font-semibold border border-gray-300 bg-neuronhire-gray-12 text-black hover:bg-gray-100 cursor-pointer"
          >
            Be Hired
          </Button>
        </Link>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-6 text-base font-bold text-neuronhire-black-100 body-satoshi">
        <div className="flex items-center gap-2 whitespace-nowrap order-1">
          <TestTubeDiagonal size={23} className="text-neuronhire-gray-24" />
          Pre-Vetted Talent.
        </div>
        <div className="flex items-center gap-2 whitespace-nowrap order-3 sm:order-2">
          <Shredder size={23} className="text-neuronhire-gray-24" />
          No Long-Term Contracts.
        </div>
        <div className="flex items-center gap-2 whitespace-nowrap order-2 sm:order-3">
          <BriefcaseMedical size={23} className="text-neuronhire-gray-24" />
          Full-Time Hiring.
        </div>
      </div>
    </section>
  );
}
