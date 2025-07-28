"use client";

import { CheckCircle } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="py-24 px-6 text-center bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          Get it done with a hiring engine <br /> you can actually rely on
        </h2>
        <p className="text-neutral-600 max-w-2xl mx-auto mb-16">
          We obsess over quality so you don&apos;t have to. Here’s why hundreds of
          teams trust us with their hiring.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-neutral-100 rounded-2xl p-6 text-left">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Pre-Vetted Talent
            </h3>
            <p className="text-neutral-600 text-sm">
              Every engineer is tested for tech skills, communication, and
              real-world experience.
            </p>
          </div>
          <div className="bg-neutral-100 rounded-2xl p-6 text-left">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Timezone Collaboration
            </h3>
            <p className="text-neutral-600 text-sm">
              All candidates work in your time zone. From LATAM, for real-time
              collaboration.
            </p>
          </div>
          <div className="bg-neutral-100 rounded-2xl p-6 text-left">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Easy Hiring Process
            </h3>
            <ul className="text-sm text-neutral-600 space-y-1 mt-2">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-1" />
                No upfront cost
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-1" />
                Pay only if you hire
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-green-500 mt-1" />
                2-week risk-free trial
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-neutral-100 rounded-2xl p-6 text-left">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Dedicated Account Manager
            </h3>
            <p className="text-neutral-600 text-sm">
              You’ll have a single point of contact guiding you and adapting to
              your needs.
            </p>
          </div>
          <div className="bg-neutral-100 rounded-2xl p-6 text-left">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Scale Faster
            </h3>
            <p className="text-neutral-600 text-sm">
              We send candidates in days, not weeks. We streamline the process
              and handle the heavy lifting.
            </p>
          </div>
          <div className="bg-neutral-100 rounded-2xl p-6 text-left">
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">
              Proven Success
            </h3>
            <p className="text-neutral-600 text-sm">
              90% of our clients hire from the first shortlist. Trusted by top
              startups & global brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
