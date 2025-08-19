"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSection {
  name: string;
  faqs: FaqItem[];
}

interface FaqSectionProps {
  section: FaqSection;
  title?: string;
  subtitle?: string;
  description?: string;
}

export function FaqSection({
  section,
  title = "FAQ",
  subtitle = "Frequently Asked Questions",
  description = "We don't waste your time with endless interviews or technical debt. Go fast, go smart, get results. We make serious startups. Fast.",
}: FaqSectionProps) {
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

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {section.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-gray-200 rounded-lg body-mackinac px-4 !border-b"
              >
                <AccordionTrigger className="text-2xl font-bold hover:no-underline">
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
    </section>
  );
}
