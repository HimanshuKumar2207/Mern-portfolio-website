import React from "react";
import Title from "./Title";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaCode,
  FaRocket,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Custom, high-performance websites with clean code, built using React, Node.js, and MongoDB. Fully responsive and SEO-optimized.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform apps using React Native that ensure seamless user experiences on both iOS and Android.",
    icon: <FaMobileAlt />,
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting beautiful, user-centered designs with interactive prototypes and smooth flows that users love.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Deployment & DevOps",
    description:
      "Automated deployment pipelines, continuous integration, and cloud hosting to keep your app always running.",
    icon: <FaCloud />,
  },
  {
    title: "API Development",
    description:
      "Secure and scalable REST & GraphQL APIs to power your web and mobile apps efficiently.",
    icon: <FaCode />,
  },
  {
    title: "Performance Optimization",
    description:
      "Supercharge your site speed with lazy loading, code splitting, caching, and image optimization.",
    icon: <FaRocket />,
  },
];

const WeOffer = () => {
  return (
    <section className="w-full py-10 sm:pb-30 pb-24 bg-gradient-to-br from-gray-50 to-gray-100 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32">
      <div className="text-center mb-4">
        <Title
          heading1={"What we Offer"}
          heading2={
            "Delivering innovative and creative digital solutions that seamlessly merge design and functionality — customized to meet your unique business goals and user needs effectively"
          }
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-md border border-orange-200 rounded-2xl p-6 shadow-xl hover:shadow-orange-200 transition duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-orange-100 text-orange-500 rounded-full p-4 text-3xl shadow-inner shadow-orange-200">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WeOffer;
