"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  name: string;
  faqs: FaqItem[];
}

interface MultiFaqSectionProps {
  sections: FaqSection[];
  title?: string;
  subtitle?: string;
  description?: string;
}

export function MultiFaqSection({
  sections,
  title = "FAQ",
  subtitle = "Frequently Asked Questions",
  description = "We don't waste your time with endless interviews or technical debt. Go fast, go smart, get results. We make serious startups. Fast.",
}: MultiFaqSectionProps) {
  const [selectedSection, setSelectedSection] = useState(
    sections[0]?.name || ""
  );

  const currentSection =
    sections.find((section) => section.name === selectedSection) || sections[0];

  const formatSectionName = (name: string) => {
    return name
      .replace(/[-_]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="body-mackinac text-xs font-normal uppercase tracking-wide mb-2">
            {title}
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-neuronhire-black-100 mb-6 body-mackinac">
            {subtitle}
          </h2>
          <p className="text-lg xl:text-xl text-neuronhire-black-100/60 max-w-3xl mx-auto body-satoshi">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {sections.length > 1 && (
            <div className="flex overflow-x-auto lg:flex-col gap-4 pb-2">
              {sections.map((section) => (
                <Button
                  key={section.name}
                  variant="ghost"
                  onClick={() => setSelectedSection(section.name)}
                  className={`body-mackinac rounded-md whitespace-nowrap flex-shrink-0 ${
                    selectedSection === section.name
                      ? "bg-gray-100 font-bold"
                      : "bg-white font-medium hover:bg-gray-100"
                  } transition`}
                >
                  {formatSectionName(section.name)}
                </Button>
              ))}
            </div>
          )}

          <div
            className={
              sections.length > 1
                ? "lg:col-span-3"
                : "col-span-full max-w-4xl mx-auto"
            }
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {currentSection?.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-gray-200 rounded-lg body-mackinac px-4 !border-b"
                >
                  <AccordionTrigger className="text-lg md:text-2xl font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-neuronhire-black-100/60 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
