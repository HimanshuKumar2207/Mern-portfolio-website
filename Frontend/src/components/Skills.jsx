import { useEffect, useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiAdobexd,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbCircleLetterCFilled } from "react-icons/tb";
import Title from "./Title";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skill = [
    { id: 1, name: "HTML", icon: <FaHtml5 />, color: "text-orange-600" },
    { id: 2, name: "CSS", icon: <FaCss3Alt />, color: "text-blue-600" },
    {
      id: 3,
      name: "JavaScript",
      icon: <FaJsSquare />,
      color: "text-yellow-400",
    },
    { id: 4, name: "React.js", icon: <FaReact />, color: "text-sky-400" },
    { id: 5, name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
    {
      id: 6,
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-cyan-400",
    },
    {
      id: 7,
      name: "Bootstrap",
      icon: <FaBootstrap />,
      color: "text-purple-600",
    },
    { id: 8, name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    { id: 9, name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { id: 10, name: "Express.js", icon: <SiExpress />, color: "text-gray-800" },
    { id: 11, name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
    { id: 13, name: "REST API", icon: <FaNodeJs />, color: "text-gray-700" },
    { id: 14, name: "Java", icon: <FaJava />, color: "text-red-600" },
    {
      id: 20,
      name: "C Language",
      icon: <TbCircleLetterCFilled />,
      color: "text-blue-800",
    },
  ];

  const tools = [
    { id: 17, name: "Git & GitHub", icon: <FaGithub />, color: "text-black" },
    { id: 18, name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    { id: 20, name: "Vs Code", icon: <VscVscode />, color: "text-blue-600" },
    { id: 15, name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
    { id: 16, name: "Adobe XD", icon: <SiAdobexd />, color: "text-pink-700" },
  ];

  const containerRef = useRef(null);
  const skillCardsRef = useRef([]);
  const progressBarsRef = useRef([]);

  // Add to ref array
  const addToRefs = (el) => {
    if (el && !skillCardsRef.current.includes(el)) {
      skillCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    // Animate container entrance
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Animate skill cards with 3D tilt effect
    skillCardsRef.current.forEach((card, index) => {
      gsap.set(card, {
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
      });

      // Hover effect
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 10;
        const rotateX = ((centerY - y) / centerY) * 10;

        gsap.to(card, {
          rotateY,
          rotateX,
          z: 20,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          z: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      });

      // Scroll animation
      ScrollTrigger.create({
        trigger: card,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            card,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              delay: index * 0.05,
              ease: "back.out(1.7)",
            }
          );
        },
      });
    });

    // Animate progress bars
    progressBarsRef.current.forEach((bar, index) => {
      ScrollTrigger.create({
        trigger: bar,
        start: "top 80%",
        onEnter: () => {
          const percent = bar.dataset.percent;
          gsap.fromTo(
            bar.querySelector(".progress-fill"),
            { width: 0 },
            {
              width: `${percent}%`,
              duration: 1.5,
              delay: index * 0.1,
              ease: "elastic.out(1, 0.5)",
            }
          );
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full bg-white/15 sm:py-16 sm:pb-30 py-10 pb-24 px-4 sm:px-6 lg:px-20 relative overflow-hidden"
    >
      {/* Floating background bubbles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-orange-100 to-orange-200 opacity-20"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              filter: "blur(40px)",
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* 🔹 Title at Top */}
        <Title
          heading1={"My Skills & Technologie"}
          heading2={
            "Designing modern digital experiences using advanced technologies, latest frameworks, and scalable solutions to enhance usability, performance, and impact"
          }
        />

        {/* 🔹 About (Left) and Skill Bars (Right) */}
        <div className="flex flex-col md:flex-row gap-12 sm:py-12 py-2">
          {/* About Section */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white border-opacity-30">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text ">
                About Me
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Hi, I'm{" "}
                <span className="font-bold text-orange-500">Himanshu</span>, a
                dedicated full stack developer with strong expertise in both
                frontend and backend technologies. I specialize in building
                responsive, interactive, and scalable web applications that
                deliver seamless user experiences and high performance across
                all devices.
              </p>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-100">
                <p className="text-gray-700 font-medium italic">
                  "I bridge the gap between design and technology, delivering
                  full-stack solutions that solve real-world problems with
                  elegant code."
                </p>
              </div>
            </div>
          </div>

          {/* Skill Progress Bars */}
          <div className="w-full md:w-1/2">
            <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white border-opacity-30">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Skill Proficiency
              </h3>
              {[
                { label: "Frontend Development", percent: 80 },
                { label: "Backend Development", percent: 70 },
                { label: "UI/UX Design", percent: 70 },
                { label: "Problem Solving", percent: 90 },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="mb-6"
                  ref={(el) => (progressBarsRef.current[idx] = el)}
                  data-percent={skill.percent}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-md font-semibold text-gray-800">
                      {skill.label}
                    </span>
                    <span className="text-sm font-medium bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="progress-fill h-full rounded-full bg-gradient-to-r from-orange-400 to-orange-600 shadow-orange-200 shadow-inner"
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Skills Grid */}
        <div className="mt-18 sm:mt-10">
          <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white border-opacity-30">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skill.map((item, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                >
                  <div className={`text-4xl mb-2 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🔹 Tools Grid */}
        <div className="mt-16">
          <div className="bg-white bg-opacity-80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white border-opacity-30">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Development Tools
              </span>{" "}
              I Use Daily
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {tools.map((item, index) => (
                <div
                  key={index}
                  ref={addToRefs}
                  className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
                >
                  <div className={`text-4xl mb-2 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-800 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Background Orb */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 opacity-20 filter blur-3xl -z-10" />
      </div>
    </div>
  );
};

export default Skills;
