import React from "react";
import GlobeBackground from "./GlobeBackground";

const WhatsappBanner = () => {
  const handleWhatsAppClick = () => {
    const phone = "917479867857"; // Include country code (91 for India)
    const message = `Let's Connect with me`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="relative overflow-hidden w-full  mb-[-40px] text-center py-16 px-4 sm:px-8 md:px-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <GlobeBackground />
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Connect with Us to Grow Your Business
        </h2>

        <p className="text-white/90 text-sm sm:text-base md:text-lg font-medium max-w-3xl mx-auto">
          Let’s build something great together. Whether you're launching a new
          website, marketing your brand, or optimizing your digital presence —
          we’re here to help you scale.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="bg-green-600 text-white hover:bg-white hover hover:text-green-600 px-5 py-2 rounded-md font-semibold uppercase shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
        >
          Connect me on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default WhatsappBanner;
