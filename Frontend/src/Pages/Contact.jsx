import React, { useRef } from "react";
import { IoHome } from "react-icons/io5";
import { MdAddCall, MdEmail, MdWork } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import contactImg from "../assets/contact.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7vfx7p7",
        "template_e8v21mu",
        form.current,
        "rq17KEfytUz84NGBE"
      )
      .then(
        () => alert("Message sent successfully!"),
        () => alert("There was an error. Please try again.")
      );
  };

  return (
    <>
      <Navbar />
      <div className="mt-16 mb-20 px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Form */}
          <div className="w-full lg:w-[60%] bg-white/90 shadow-xl backdrop-blur-md rounded-2xl p-6 sm:p-10 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <input
                name="from_subject"
                placeholder="Enter Subject"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                name="message"
                placeholder="Enter Message"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                required
              ></textarea>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  name="from_name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <input
                  name="from_email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 font-semibold rounded-md shadow-md hover:scale-105 transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Info */}
          <div
            className="w-full lg:w-[35%] space-y-8 bg-white/90 shadow-xl rounded-2xl p-6 sm:p-8 bg-cover bg-center text-white"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.55)), url(${contactImg})`,
            }}
          >
            <h3 className="text-2xl font-bold">Contact Info</h3>

            <div className="flex items-start gap-4">
              <IoHome className="text-3xl text-primary" />
              <div>
                <p className="font-medium">Patna Saheb near Gurudwara</p>
                <span className="text-sm text-gray-200">Patna, Bihar</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdAddCall className="text-3xl text-primary" />
              <div>
                <p className="font-medium">+91 7479867857</p>
                <span className="text-sm text-gray-200">Mon–Fri, 9am–6pm</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MdEmail className="text-3xl text-primary" />
              <div>
                <p className="font-medium">himanshukeshri986@gmail.com</p>
                <span className="text-sm text-gray-200">
                  Reach out anytime!
                </span>
              </div>
            </div>

            {/* 🔥 New Section: Freelance Availability */}
            <div className="flex items-start gap-4">
              <MdWork className="text-3xl text-primary" />
              <div>
                <p className="font-medium">Freelance Available</p>
                <span className="text-sm text-gray-200">
                  Open to remote & contract roles
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.301808526481!2d85.23221557485036!3d25.594885515479074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5f002e13c73d%3A0xb01eb1213fe09f87!2sKaimashikoh%20Patna%20City!5e0!3m2!1sen!2sin!4v1737493666906!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="border-0 w-full"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
