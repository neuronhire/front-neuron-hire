"use client";

import { Button } from "@/components/ui/button";
import { Briefcase, CalendarClock, Pencil } from "lucide-react";
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

      <div className="mt-8 flex justify-center gap-4 flex-wrap font-bold body-mackinac">
        <Link href="#">
          <Button className="">Start Hiring</Button>
        </Link>
        <Link href="#">
          <Button
            variant="ghost"
            className="rounded-full px-6 py-2 text-base font-semibold border border-gray-300 text-black hover:bg-gray-100"
          >
            Be Hired
          </Button>
        </Link>
      </div>

      <div className="mt-10 flex flex-row justify-center gap-2 sm:gap-6 text-base font-bold text-neuronhire-black-100 body-satoshi">
        <div className="flex items-center gap-0 sm:gap-2">
          <Pencil size={20} />
          Pre-Vetted Talent.
        </div>
        <div className="flex items-center gap-0 sm:gap-2">
          <CalendarClock size={20} />
          No Long-Term Contracts.
        </div>
        <div className="flex items-center gap-0 sm:gap-2">
          <Briefcase size={20} />
          Full-Time Hiring.
        </div>
      </div>
    </section>
  );
}
