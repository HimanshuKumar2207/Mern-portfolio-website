import React from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";

// Dummy testimonial data
const testimonials = [
  {
    name: "Amit Sharma",
    position: "CTO, TechNova Solutions",
    image: "https://i.pravatar.cc/150?img=12",
    text: "Working with Himanshu was a game-changer. His MERN stack skills, clean code, and problem-solving mindset significantly accelerated our product development and overall team efficiency.",
  },
  {
    name: "Priya Verma",
    position: "Product Manager, FinEdge",
    image: "https://i.pravatar.cc/150?img=32",
    text: "Himanshu’s talent for turning complex requirements into intuitive UIs and robust backends truly streamlined our product delivery and improved user satisfaction.",
  },
  {
    name: "Rahul Mehta",
    position: "Founder, Learnify",
    image: "https://i.pravatar.cc/150?img=56",
    text: "He played a key role in launching our scalable e-learning platform. Himanshu is highly professional, technically sharp, and always delivers on time.",
  },
  {
    name: "Sneha Kapoor",
    position: "UI/UX Lead, PixelPro",
    image: "https://i.pravatar.cc/150?img=45",
    text: "His strong eye for UI design and frontend performance optimization brought clarity, speed, and beauty to our digital platform across all devices.",
  },
  {
    name: "Karan Bhatt",
    position: "CEO, DevGears",
    image: "https://i.pravatar.cc/150?img=15",
    text: "Himanshu continuously pushes innovation while delivering maintainable, scalable solutions. He’s reliable, efficient, and always brings a collaborative spirit to every project.",
  },
];

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonial = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-20 md:pb-30">
      <div className="text-center mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Testimonials
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
          Real stories from real clients. Hear what they have to say about
          working together.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col justify-between min-h-[300px] border border-orange-600 ">
                <FaQuoteLeft className="text-orange-500 text-3xl mb-4" />
                <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
