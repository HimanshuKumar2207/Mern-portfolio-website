import React from "react";
import { Link } from "react-scroll";
import Skills from "../components/Skills";
import Academics from "../components/Academics";
import Footer from "../components/Footer";
import WhoIAm from "../components/WhoIAm";
import Vision from "../components/Vision";
import Navbar from "../components/Navbar";
import WhatsappBanner from "../components/WhatsappBanner";

const About = () => {
  const navItems = [
    { to: "who", label: "Who I Am?" },
    { to: "skills", label: "Skills" },
    { to: "academics", label: "Academics" },
    { to: "vision", label: "Vision & Mission" },
  ];

  return (
    <>
      <Navbar />

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar: visible on large screens only */}
        <aside className="hidden lg:block fixed top-8 left-0 h-screen w-[14%] border-r border-gray-300 bg-primary shadow-md z-10">
          <nav className="w-full flex flex-col gap-6 pt-32 px-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="bg-gray-700 text-blue-600 shadow-md"
                className="cursor-pointer px-4 py-2 text-lg rounded-md transition-all duration-300 text-white hover:bg-white hover:text-gray-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Mobile Top Scroll Nav */}

        {/* Main Content */}
        <main className="w-full lg:ml-[14%] overflow-x-hidden">
          <section id="who" className="scroll-mt-24">
            <WhoIAm />
          </section>

          <section id="skills" className="scroll-mt-24">
            <Skills />
          </section>

          <section id="academics" className="scroll-mt-24">
            <Academics />
          </section>

          <section id="vision" className="scroll-mt-24">
            <Vision />
          </section>
          
          <WhatsappBanner />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default About;
