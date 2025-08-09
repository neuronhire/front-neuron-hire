"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
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
];

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 body-mackinac">
            Frequently Asked Questions
          </h2>
          <p className="text-lg xl:text-xl text-gray-600 max-w-3xl mx-auto body-satoshi">
            We don't waste your time with endless interviews or technical debt.
            <br />
            Go fast, go smart, get results. We make serious startups. Fast.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 body-satoshi">
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 body-satoshi leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
