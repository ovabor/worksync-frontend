"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";

type faqs = {
  question: string;
  answer: string;
};

const faqs: faqs[] = [
  {
    question: "Are you SOC 2 certified?",
    answer:
      "We're currently in the process of obtaining our SOC 2 Type II certification (expected Q3 2024). However, we already follow SOC 2 security practices and are GDPR and CCPA compliant. We're happy to share our ....",
  },
  {
    question: "How is a 'user' defined for billing?",
    answer:
      "We're currently in the process of obtaining our SOC 2 Type II certification (expected Q3 2024). However, we already follow SOC 2 security practices and are GDPR and CCPA compliant. We're happy to share our ....",
  },
  {
    question: "How is a 'user' defined for billing?",
    answer:
      "We're currently in the process of obtaining our SOC 2 Type II certification (expected Q3 2024). However, we already follow SOC 2 security practices and are GDPR and CCPA compliant. We're happy to share our ....",
  },
  {
    question: "What are the typical AI interaction limits for 'Generous Pool'?",
    answer:
      "We're currently in the process of obtaining our SOC 2 Type II certification (expected Q3 2024). However, we already follow SOC 2 security practices and are GDPR and CCPA compliant. We're happy to share our ....",
  },
  {
    question: "Can I add departments or features later?",
    answer:
      "We're currently in the process of obtaining our SOC 2 Type II certification (expected Q3 2024). However, we already follow SOC 2 security practices and are GDPR and CCPA compliant. We're happy to share our ....",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-16 font-alliance grid grid-cols-10 gap-8">
      <div className="col-span-10 lg:col-span-4">
        <h2 className="text-5xl font-bold">Frequently asked questions</h2>
        <Link href="/faqs">
          <button className="py-3 px-6 mt-10 text-sm bg-[#FFFFFF] rounded-full border-2 border-[#FFFFFF] text-[#121212] font-bold cursor-pointer hover:bg-transparent hover:text-[#FFFFFF] transition-colors duration-300">
            View All FAQs
          </button>
        </Link>
      </div>

      <div className="col-span-10 lg:col-span-6 w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#CCCBCB] pb-4">
            <button
              className="flex items-center w-full text-left text-lg font-medium py-3 gap-x-4"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-lato font-bold text-left text-base flex-1">
                {faq.question}
              </span>
              <span
                className={`cursor-pointer transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-[#FFFFFF99] py-2 text-sm font-medium">
                {faq.answer}
              </p>
              <Link
                href="/faqs/question"
                className="text-[#FFFFFF] text-sm pt-2 font-semibold flex items-center gap-x-1"
              >
                <span>See All</span>
                <span>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0125 13.75H5V16.25H20.0125V20L25 15L20.0125 10V13.75Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
