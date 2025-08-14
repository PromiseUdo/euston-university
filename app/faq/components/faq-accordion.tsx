"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4 ">
      {items.map((item, index) => (
        <div
          key={index}
          className={`
             border
            ${activeIndex === index ? "border-[#890c25]" : "border-gray-200"}
            transition-colors duration-200
          `}
        >
          <button
            className={`
              flex justify-between items-center w-full p-4
              text-left font-medium text-lg focus:outline-none
              rounded-lg
            `}
            onClick={() => toggleAccordion(index)}
            aria-expanded={activeIndex === index}
            aria-controls={`faq-content-${index}`}
          >
            <span>{item.question}</span>
            {/* Changed the icon container to have a circular border */}
            <motion.span
              className="ml-4 h-8 w-8 aspect-square flex items-center justify-center rounded-full border border-gray-300"
              animate={{
                rotate: activeIndex === index ? 45 : 0,
                // Added border color change animation
                borderColor: activeIndex === index ? "#d1d5db" : "#d1d5db",
              }}
              transition={{ duration: 0.2 }}
            >
              {activeIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4" // Made icon slightly smaller to fit in circle
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4" // Made icon slightly smaller to fit in circle
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              )}
            </motion.span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                id={`faq-content-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 text-gray-600">{item.answer}</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
