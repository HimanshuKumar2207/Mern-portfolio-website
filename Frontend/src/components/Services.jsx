import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import Title from "./Title";

const services = [
  {
    id: 1,
    name: "Website Development",
    img: assets.webdev,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    name: "Social Media Marketing",
    img: assets.social,
    color: "from-pink-400 to-pink-600",
  },
  {
    id: 3,
    name: "SEO Optimization",
    img: assets.seo,
    color: "from-green-400 to-green-600",
  },
  {
    id: 4,
    name: "UI/UX Design",
    img: assets.ui,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 5,
    name: "Digital Marketing",
    img: assets.digital,
    color: "from-yellow-400 to-yellow-600",
  },

  {
    id: 6,
    name: "App Development",
    img: assets.app,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    id: 7,
    name: "Website Designing",
    img: assets.webdesign,
    color: "from-indigo-400 to-indigo-600",
  },

  {
    id: 8,
    name: "Content Creation",
    img: assets.content,
    color: "from-rose-400 to-rose-600",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-10 sm:py-24 lg:py-12 px-6 sm:px-10 lg:px-20 lg:pb-30">
      <div className="max-w-7xl mx-auto text-center">
        <Title
          heading1="Digital Services I Provide"
          heading2="Offering web development, UI/UX design, and integration services focused on performance, scalability, and user experience."
        />

        <div className="sm:mt-16 lg:mt-14 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="relative bg-white/80 border border-gray-200 rounded-2xl pt-2 pb-6 px-6 flex flex-col items-center text-center shadow-sm hover:shadow-md backdrop-blur-lg overflow-hidden"
            >
              {/* Gradient bar on top */}
              <div
                className={`absolute top-0 left-0 w-full h-2 rounded-t-2xl bg-gradient-to-r ${service.color}`}
              />

              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mt-4">
                <img
                  src={service.img}
                  alt={service.name}
                  className="w-8 h-8 object-contain"
                />
              </div>

              <h3 className="text-gray-800 font-semibold text-sm mb-2">
                {service.name}
              </h3>

              <div className="w-10 h-1 bg-indigo-500 rounded-full mt-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
