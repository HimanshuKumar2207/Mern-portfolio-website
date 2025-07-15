import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaDraftingCompass,
  FaCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";
import Title from "./Title";

const steps = [
  {
    icon: <FaLightbulb />,
    title: "Idea & Planning",
    desc: "We start with collaborative discovery meetings to understand your needs, target users, and goals. From there, we brainstorm innovative solutions and craft a technical roadmap.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Design & Prototyping",
    desc: "Our designers sketch wireframes and turn them into interactive prototypes using Figma. Every pixel and interaction is optimized for usability and aesthetics.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    desc: "Using agile sprints, we build frontend and backend features using MERN stack. Clean code, modular structure, and performance-first development ensure scalability.",
  },
  {
    icon: <FaUsers />,
    title: "Testing & Feedback",
    desc: "We run multiple testing phases—unit, integration, and real-user testing—gathering live feedback, fixing bugs, and polishing the experience before release.",
  },
  {
    icon: <FaRocket />,
    title: "Launch & Support",
    desc: "Once perfect, we deploy via CI/CD pipelines and provide continuous support, monitoring, and feature rollouts. We’re with you post-launch for long-term success.",
  },
];

const Process = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-200 to-gray-200 sm:py-10 py-14 sm:pb-30 pb-30 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28">
      <div className="text-center mb-8">
        <Title
          heading1={"Our Process"}
          heading2={
            "We follow a human-centric, agile approach to build scalable, efficient, and user-friendly software solutions with impact"
          }
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute left-6 sm:left-8 md:left-10 top-0 h-full w-1 bg-gradient-to-b from-orange-500 to-yellow-400 rounded-full shadow-md z-0" />

        <div className="space-y-16 sm:space-y-20 pl-12 sm:pl-16 md:pl-20 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-xl shadow-md px-6 py-6 border-l-4 border-orange-400 hover:shadow-xl transition duration-300"
            >
              {/* Icon bubble */}
              <div className="absolute -left-12 sm:-left-15 md:-left-17 top-6 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white text-lg sm:text-xl bg-orange-500 rounded-full shadow-md z-10">
                {step.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
