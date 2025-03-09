"use client";

import { useState } from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";

export default function FAQs() {
  const faqs = [
    {
      question: "What is our platform about?",
      answer:
        "Our platform is a marketplace for buying and selling second-hand fashion while educating users on sustainable fashion practices.",
    },
    {
      question: "How can I sell my clothes?",
      answer:
        "Simply sign up, take clear pictures of your clothing, set a price, and list them on our platform. Buyers can contact you directly through the app.",
    },
    {
      question: "Why should I buy second-hand clothing?",
      answer:
        "Buying second-hand fashion reduces waste, minimizes the environmental impact of fast fashion, and helps you save money while finding unique styles.",
    },
    {
      question: "Is there a quality check for listed items?",
      answer:
        "We encourage sellers to provide accurate descriptions and images. Buyers can also rate and review sellers to maintain quality control.",
    },
    {
      question: "How do I learn more about sustainable fashion?",
      answer:
        "We provide educational content, blog posts, and guides to help you understand the importance of sustainability in fashion.",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  // Filter FAQs based on search input
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Animated Title */}
      <motion.h1
        className="text-4xl font-bold text-gray-900 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 text-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Find answers to common questions about our platform and sustainable fashion.
      </motion.p>

      {/* Search Bar */}
      <motion.div
        className="mt-6 flex justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </motion.div>

      {/* Accordion */}
      <div className="mt-8 space-y-4">
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                title={faq.question} // Accordion Item Title
                className="bg-white shadow-md rounded-lg p-4"
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              </AccordionItem>
            ))
          ) : (
            <p className="text-center text-gray-500">No results found.</p>
          )}
        </Accordion>
      </div>
    </div>
  );
}
