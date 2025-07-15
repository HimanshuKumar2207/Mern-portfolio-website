import React from "react";
import { motion } from "framer-motion";
import Title from "./Title";

const uniqueTraits = [
  {
    title: "Problem-Solving Mindset",
    description:
      "I approach every project with curiosity and logic—breaking down complex challenges into structured, creative solutions.",
    delay: 0.1,
  },
  {
    title: "Full-Stack Versatility",
    description:
      "From crafting engaging UI in React to building secure APIs in Node.js, I’m comfortable across the entire web development stack.",
    delay: 0.2,
  },
  {
    title: "User-Centered Thinking",
    description:
      "My design and code decisions revolve around one thing: creating a seamless and delightful user experience.",
    delay: 0.3,
  },
  {
    title: "Code Quality & Standards",
    description:
      "I follow modern best practices, writing clean, modular, and testable code that scales well over time.",
    delay: 0.4,
  },
  {
    title: "Agile Collaboration",
    description:
      "I thrive in collaborative environments—communicating clearly, adapting quickly, and contributing proactively in team settings.",
    delay: 0.5,
  },
  {
    title: "Focus on Impact",
    description:
      "Beyond building software, I aim to make a real difference—by solving real problems and delivering measurable value.",
    delay: 0.6,
  },
];

const coreValues = [
  {
    title: "Integrity",
    description:
      "I prioritize honesty, transparency, and accountability to build strong trust with clients, teams, and every professional relationship.",
  },
  {
    title: "Growth Mindset",
    description:
      "I embrace continuous learning, adapting to new technologies and feedback to improve my skills and professional development constantly.",
  },
  {
    title: "Collaboration",
    description:
      "I value teamwork, open communication, and shared goals to build productive, respectful, and innovative cross-functional working environments.",
  },
  {
    title: "Innovation",
    description:
      "I seek creative solutions, challenge conventions, and apply modern technologies to build smarter, more efficient digital products and experiences.",
  },
  {
    title: "User Focus",
    description:
      "I design and build with users in mind, ensuring clarity, accessibility, and seamless interaction in every product experience.",
  },
  {
    title: "Excellence",
    description:
      "I maintain high standards by delivering polished, efficient, and reliable work that reflects a strong attention to detail.",
  },
];

const Vision = () => {
  return (
    <section className="bg-white sm:py-20 px-6 py-10 md:px-16" id="vision">
      <div className="max-w-6xl mx-auto text-center">
        <Title
          heading1={"Vision & Mission"}
          heading2={
            "Aiming to build meaningful digital solutions that improve lives,empower businesses, and push the boundaries of innovation"
          }
        />
        {/* Section Title */}

        {/* Vision + Mission Boxes */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 sm:mt-14">
          {/* Vision Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-primary"
          >
            <h3 className="sm:text-3xl text-2xl font-semibold text-primary mb-4">
              My Vision
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To become a catalyst for digital transformation by developing
              intelligent, user-centric software solutions. I envision a future
              where technology is accessible, secure, and scalable—helping
              startups, enterprises, and communities thrive in an ever-changing
              world.
            </p>
          </motion.div>

          {/* Mission Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-xl p-8 border-l-4 border-orange-500"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-orange-600 mb-4">
              My Mission
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              To deliver high-quality digital products by staying committed to
              continuous learning, design thinking, and clean coding practices.
              I strive to solve real-world problems, collaborate effectively
              with teams, and bring innovation to every project I work on.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="bg-primary-50/70 backdrop-blur-lg rounded-xl p-10 shadow-xl border border-sky-200 max-w-6xl mx-auto mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-3xl text-2xl font-semibold text-orange-600 mb-10 text-center"
          >
            {" "}
            Core Values That Drive Me
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 text-left text-gray-700 text-sm">
            {coreValues.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: trait.delay, duration: 0.6 }}
                className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary"
              >
                <h4 className="text-primary font-semibold mb-2">
                  {trait.title}
                </h4>
                <p>{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-primary-50/70 backdrop-blur-lg rounded-xl p-10 shadow-xl border border-sky-200 max-w-6xl mx-auto mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="sm:text-3xl text-2xl font-semibold text-orange-600 mb-10 text-center"
          >
            What Sets Me Apart
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8 text-left text-gray-700 text-sm">
            {uniqueTraits.map((trait, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: trait.delay, duration: 0.6 }}
                className="bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary"
              >
                <h4 className="text-primary font-semibold mb-2">
                  {trait.title}
                </h4>
                <p>{trait.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
