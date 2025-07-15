import React, { useState, useEffect } from "react";
import Profile from "../assets/profile Pic.png";
import { Link } from "react-router-dom";
import GlobeBackground from "./GlobeBackground";

const Hero = () => {
  const careers = [
    "Software Developer",
    "Full Stack Developer",
    "Java Developer",
    "Freelancer",
    "UI/UX Developer",
  ];

  const [careerIndex, setCareerIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (characterIndex < careers[careerIndex].length) {
        setTypedText(
          (prevText) => prevText + careers[careerIndex][characterIndex]
        );
        setCharacterIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCareerIndex((prev) => (prev + 1) % careers.length);
          setCharacterIndex(0);
          setTypedText("");
        }, 1200);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [characterIndex, careerIndex]);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/7479867857", "_blank");
  };

  return (
    <section className="relative w-full h-auto overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <GlobeBackground />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center max-w-7xl mx-auto">
        {/* Left Section */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Hey, I am <br />
            <span className="text-orange-500">Himanshu Keshri</span>
          </h2>
          <h3 className="text-xl sm:text-2xl text-white">
            I am{" "}
            <span className="font-semibold text-orange-400">{typedText}</span>
          </h3>

          <p className="text-white text-base leading-relaxed">
            I build interactive websites and scalable web apps with modern tech
            stacks. I’m passionate about solving real-world problems through
            clean, user-focused design and performance-optimized code.
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center md:justify-start">
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "#"; // Replace with your actual resume path
                link.download = "Himanshu_Resume.pdf";
                link.click();
              }}
              className="bg-blue-600 hover:bg-white hover:text-primary text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 cursor-pointer"
            >
              Download CV
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-white hover:text-green-600 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 cursor-pointer"
            >
              Connect on WhatsApp
            </button>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="hidden md:block w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white drop-shadow">
            Drop Your Query
          </h2>

          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white placeholder-transparent px-2 py-4 focus:outline-none focus:border-orange-400"
            />
            <label className="absolute left-2 top-0 text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b-2 border-gray-300 text-white placeholder-transparent px-2 py-4 focus:outline-none focus:border-orange-400"
            />
            <label className="absolute left-2 top-0 text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Email Address
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              rows="5"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-2 border-gray-300 text-white placeholder-transparent px-4 py-4 rounded-xl focus:outline-none focus:border-orange-400"
            />
            <label className="absolute left-4 top-1 text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              How can we help?
            </label>
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold tracking-wide shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
