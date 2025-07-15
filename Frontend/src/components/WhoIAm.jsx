import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";

const WhoIAm = () => {
  return (
    <section className="w-full bg-gray-200 py-16 px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={assets.profile}
          alt="Profile"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full shadow-md border-4 border-primary object-cover"
        />

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-3xl"
        >
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
            Who I Am
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            I'm{" "}
            <span className="font-semibold text-orange-500">
              Himanshu Kumar
            </span>
            , a creative thinker and passionate builder. I love solving
            real-life problems, designing clean UI, and crafting digital stories
            through code and visuals. I'm deeply inspired by creativity,
            minimalism, and purpose.
          </p>
        </motion.div>
      </div>

      {/* Optional Animated Visual */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="my-6 text-center"
      >
        <p className="mt-4 font-semibold text-gray-900 italic text-md sm:text-md">
          “Design isn’t just what it looks like — it’s how it works.”
        </p>
      </motion.div>

      {/* Additional Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-12 bg-orange-50 rounded-xl shadow-md px-6 py-8 sm:px-10 sm:py-10"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          More About Me
        </h2>
        <ul className="list-disc pl-5 sm:pl-8 space-y-4 text-gray-700 text-base sm:text-lg">
          <li>💬 Fluent communicator and collaborative team player.</li>
          <li>
            📖 Avid learner who enjoys traveling, reading, and watching cricket.
          </li>
          <li>
            🎧 Passionate about music, design, and understanding human behavior.
          </li>
          <li>
            🌍 Driven to make a difference through creativity, innovation, and
            meaningful digital experiences.
          </li>
        </ul>
      </motion.div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="text-center mt-12"
      >
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
          “Live creatively, code meaningfully.”
        </h3>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          — Himanshu Kumar
        </p>
      </motion.div>
    </section>
  );
};

export default WhoIAm;
