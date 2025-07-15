import React from "react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { RxLinkedinLogo } from "react-icons/rx";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-gray-300 px-6 py-12 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
        {/* Logo and Tagline */}
        <div>
          <img
            src={assets.logo1}
            alt="Himanshu Logo"
            width={200}
            className="mx-auto mb-2"
          />
          <p className="text-gray-400 max-w-md mx-auto text-sm">
            Elevating digital commerce with smart design and scalable solutions.
            Let’s create something amazing together.
          </p>
        </div>

        {/* Navigation */}
        <ul className="flex flex-wrap gap-5 justify-center text-sm uppercase font-medium tracking-wider">
          {["Home", "About", "Expertise", "Projects", "Blog", "Contact"].map(
            (page) => {
              let path = "/";

              if (page === "Home") {
                path = "/";
              } else if (page === "Blog") {
                path = "/blogmain";
              } else {
                path = `/${page.toLowerCase()}`;
              }

              return (
                <li key={page}>
                  <Link
                    to={path}
                    className="hover:text-primary transition-colors duration-300"
                  >
                    {page}
                  </Link>
                </li>
              );
            }
          )}
        </ul>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:scale-110 transition-transform duration-300"
          >
            <SiFacebook className="text-3xl text-blue-500 hover:rotate-[360deg] transition-all duration-500" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:scale-110 transition-transform duration-300"
          >
            <FaSquareInstagram className="text-3xl text-pink-600 hover:rotate-[360deg] transition-all duration-500" />
          </a>
          <a
            href="https://github.com/HimanshuKumar2207"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:scale-110 transition-transform duration-300"
          >
            <ImGithub className="text-3xl text-white hover:rotate-[360deg] transition-all duration-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/himanshu-kumar-40663122b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:scale-110 transition-transform duration-300"
          >
            <RxLinkedinLogo className="text-3xl text-blue-600 hover:rotate-[360deg] transition-all duration-500" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <a
            href="/Himanshu_Kumar_CV.pdf" // Replace with actual file path
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 border border-white rounded-full text-white hover:bg-primary transition-all duration-300"
          >
            Download CV
          </a>
          <Link to="/contact">
            <button className="px-6 py-2 border border-white rounded-full text-white hover:bg-primary  transition-all duration-300">
              Let’s Talk
            </button>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 pt-6 border-t border-gray-700 w-full max-w-lg mx-auto mt-6">
          © {new Date().getFullYear()} All rights reserved. Built with passion
          by <span className="text-primary font-semibold">Himanshu Keshri</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
