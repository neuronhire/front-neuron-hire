"use client";

import { Button } from "@/components/ui/button";
import { Briefcase, CalendarClock, Pencil } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="px-6 md:px-10 py-20 text-center max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
        Hire the best full-time remote
        <br className="hidden md:block" />
        tech talent from Latin America
      </h1>

      <p className="mt-6 text-base md:text-lg text-gray-600">
        Top tech talents of LATAM, pre-vetted and timezone-aligned.
        <br className="hidden md:block" />
        Transparent pricing. No hidden fees. No long-term commitments.
      </p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
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

      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Pencil size={16} />
          Pre-Vetted Talent
        </div>
        <div className="flex items-center gap-2">
          <CalendarClock size={16} />
          No Long-Term Contracts
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          Full-Time Hiring
        </div>
      </div>
    </section>
  );
}
