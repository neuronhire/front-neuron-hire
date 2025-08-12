"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqMap: Record<string, FaqItem[]> = {
  "faq_1": [
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
  ],
    "faq_2": [
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
    "faq_3": [
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
  ],
}

export function FaqSection() {
  const categories = Object.keys(faqMap);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
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
          <p className="body-mackinac text-sm font-normal uppercase tracking-wide mb-2">
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
          {/* Coluna de categorias */}
          <div className="flex md:flex-col gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenFaq(null);
                }}
                className={`px-4 py-2 body-mackinac rounded-lg border ${
                  selectedCategory === cat
                    ? "bg-gray-900 text-white border-gray-900"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                } transition`}
              >
                {cat.replace("_", " ").toUpperCase()}
              </button>
            ))}
          </div>

          {/* Coluna de perguntas e respostas */}
          <div className="md:col-span-3 space-y-4">
            {faqMap[selectedCategory].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 body-satoshi">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-neuronhire-gray-64 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-neuronhire-gray-64 flex-shrink-0" />
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
      </div>
    </section>
  );
}
