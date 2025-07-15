import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Title from "./Title";

const faqData = [
  {
    question: "What services do you offer?",
    answer:
      "I provide comprehensive digital services including web development, UI/UX design, SEO, branding strategy, content creation, and social media marketing to help businesses thrive in today’s competitive online landscape.",
  },
  {
    question: "Can you help redesign an existing website?",
    answer:
      "Absolutely. I specialize in modernizing outdated websites by improving UI/UX, performance, SEO, and responsiveness—giving your online presence a fresh, effective look that drives better engagement and conversions.",
  },
  {
    question: "Do you also provide content for websites and marketing?",
    answer:
      "Yes. I offer tailored content creation for websites, blogs, and social platforms—designed to boost user engagement, build brand authority, and improve SEO through targeted, high-quality writing.",
  },
  {
    question: "How long will it take to complete my project?",
    answer:
      "Project timelines depend on complexity. Simple websites usually take 1–2 weeks, while full-stack platforms or branding campaigns may require 3–5 weeks. Timelines are finalized after a discovery session.",
  },
  {
    question: "Do you offer support after project delivery?",
    answer:
      "Yes. I provide ongoing post-launch support including bug fixes, updates, maintenance, and performance optimization—ensuring your digital solution remains reliable, secure, and effective long after deployment.",
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer:
      "I collaborate with both startups and established brands—offering scalable, flexible solutions that align with your growth goals, team size, and budget, no matter where you are in your journey.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I use modern technologies like React, Node.js, Tailwind CSS, MongoDB, and Express. I also integrate APIs, deploy via cloud platforms, and ensure performance and security best practices are followed.",
  },
  {
    question: "Can I request changes during the project?",
    answer:
      "Yes. I follow an iterative process that allows for feedback and changes at key milestones, ensuring your vision is accurately translated into the final product without unexpected surprises.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-200 via-slate-100 to-slate-200 py-10 md:py-12 sm:py-24 px-6 sm:px-10 lg:px-24 relative overflow-hidden pb-24 md:pb-30">
      {/* Floating neon glow circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 blur-[120px] opacity-20 rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 blur-[120px] opacity-10 rounded-full -z-10" />

      <div className="max-w-5xl mx-auto">
        <Title
          heading1="Frequently Asked Questions"
          heading2="Insight into how I work, what I offer, and how I help businesses thrive through digital solutions."
        />

        <div className="sm:mt-16 md:mt-14 mt-4 space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`group transition-all duration-300 border border-gray-200 rounded-2xl shadow-md overflow-hidden relative bg-white/60 backdrop-blur-md`}
              >
                {/* Left bar indicator */}
                <div
                  className={`absolute top-0 left-0 h-full w-2 bg-primary transition-all duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-80"
                  }`}
                />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-6 py-3 text-left text-gray-800 font-semibold text-base sm:text-lg transition-all duration-300"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                >
                  <span className="transition-all duration-300 ">
                    {item.question}
                  </span>
                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-purple-600" : "text-blue-500"
                    }`}
                  >
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>

                {/* Answer Section */}
                <div
                  id={`faq-${index}`}
                  className={`transition-all duration-500 px-6 text-gray-600 text-sm sm:text-base  ${
                    isOpen
                      ? "max-h-[500px] pb-5 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
