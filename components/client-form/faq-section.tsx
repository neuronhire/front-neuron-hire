"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqMap: Record<string, FaqItem[]> = {
  faq_1: [
    {
      question: "This is a question from the Faq?",
      answer:
        "This would be the answer to the frequently asked question that provides helpful information to potential clients. 1",
    },
    {
      question: "This is a question from the Faq?",
      answer:
        "This would be the answer to the frequently asked question that provides helpful information to potential clients.",
    },
  ],
  faq_2: [
    {
      question: "This is a question from the Faq?",
      answer:
        "This would be the answer to the frequently asked question that provides helpful information to potential clients. 2 ",
    },
    {
      question: "This is a question from the Faq?",
      answer:
        "This would be the answer to the frequently asked question that provides helpful information to potential clients.",
    },
    {
      question: "This is a question from the Faq?",
      answer:
        "This would be the answer to the frequently asked question that provides helpful information to potential clients.",
    },
  ],
  faq_3: [
    {
      question: "This is a question from the Faq?",
      answer:
        "This would be the answer to the frequently asked question that provides helpful information to potential clients. 3",
    },
  ],
};

export function FaqSection() {
  const categories = Object.keys(faqMap);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="body-mackinac text-xs font-normal uppercase tracking-wide mb-2">
            FAQ
          </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 body-mackinac">
            Frequently Asked Questions
          </h2>
          <p className="text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto body-satoshi">
            We don&apos;t waste your time with endless interviews or technical debt.
            <br />
            Go fast, go smart, get results. We make serious startups. Fast.
          </p>
        </motion.div>

        {/* Layout em duas colunas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Categorias */}
          <div className="flex md:flex-col gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 body-mackinac rounded-lg text-left ${
                  selectedCategory === cat
                    ? "bg-gray-100 font-extrabold"
                    : "bg-white font-bold hover:bg-gray-100"
                } transition`}
              >
                {cat.replace("_", " ").toUpperCase()}
              </button>
            ))}
          </div>

          {/* Perguntas */}
          <div className="md:col-span-3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqMap[selectedCategory].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="border border-gray-200 rounded-lg px-2 body-mackinac !border-b"
                >
                  <AccordionTrigger className="text-2xl font-extrabold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">
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
