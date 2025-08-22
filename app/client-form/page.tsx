import { FormSection } from "@/components/client-form/form-section";
import { HowWeCanHelpSection } from "@/components/client-form/how-we-can-help-section";
import { MultiFaqSection } from "@/components/multi-faq-section";
import faqData from "@/data/client-form-faq.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Top Technical Talent - Get Started",
  description:
    "Start your journey to hire the best technical talent. Fill out our form and let our AI-powered platform match you with top developers and engineers.",
  keywords: [
    "hire developers",
    "technical talent acquisition",
    "software engineer recruitment",
    "AI hiring platform",
    "tech team building",
    "remote developer hiring",
  ],
  openGraph: {
    title: "Hire Top Technical Talent - Get Started | NeuronHire",
    description:
      "Start your journey to hire the best technical talent. Fill out our form and let our AI-powered platform match you with top developers and engineers.",
    url: "/client-form",
  },
  twitter: {
    title: "Hire Top Technical Talent - Get Started | NeuronHire",
    description:
      "Start your journey to hire the best technical talent. Fill out our form and let our AI-powered platform match you with top developers and engineers.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function ClientFormPage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden nh-hero-right-bg md:min-h-[85svh] mx-auto">
        <FormSection />
      </section>
      <HowWeCanHelpSection />
      <MultiFaqSection sections={faqData.sections} />
    </div>
  );
}
