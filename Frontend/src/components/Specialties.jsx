import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Title from "./Title";
import { assets } from "../assets/assets";

const specialties = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "Building responsive, dynamic user interfaces using React, Vue, and modern JavaScript frameworks with a strong focus on performance, accessibility, and pixel-perfect design implementation.",
    icon: assets.frontend,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Designing intuitive, user-centered interfaces using Figma, with a deep focus on visual hierarchy, accessibility, usability, and seamless user journey optimization across platforms.",
    icon: assets.ux,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Creating secure and scalable server-side applications with Node.js, Python, and Express, while managing databases like MongoDB and MySQL for efficient data handling.",
    icon: assets.backend,
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    title: "Mobile Development",
    description:
      "Developing high-performance, cross-platform mobile applications using React Native and Flutter, ensuring smooth navigation, native look-and-feel, and real-time updates.",
    icon: assets.js,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 5,
    title: "API Integration",
    description:
      "Implementing and managing RESTful APIs and third-party services, ensuring efficient communication between frontend and backend systems with proper error handling and security.",
    icon: assets.apiImg,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: 6,
    title: "DevOps Basics",
    description:
      "Handling version control, CI/CD workflows, cloud deployments, and scripting to automate development processes and support smooth production environments.",
    icon: assets.devOpsImg,
    color: "from-indigo-400 to-indigo-600",
  },
];

const Specialties = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="w-full py-16  sm:py-12 sm:pb-30 pb-24 px-4 sm:px-6 lg:px-20 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        <Title
          heading1="My Core Expertise"
          heading2="Leveraging specialized skills in design and development to craft seamless, user-centric digital experiences that engage, inspire, and perform flawlessly"
        />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-2 sm:mt-16">
          {specialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 3, rotateX: 3 }}
              className="relative bg-white rounded-xl shadow-2xl overflow-hidden group transform-gpu transition-transform duration-500"
              style={{ perspective: "1000px" }}
            >
              <div className={`h-2 bg-gradient-to-r ${item.color}`} />

              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mt-5 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
