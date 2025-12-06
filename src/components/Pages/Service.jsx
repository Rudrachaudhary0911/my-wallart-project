import React from "react";
import { motion } from "framer-motion";
import {
  Brush,
  Palette,
  Layers,
  PenTool,
  Ruler,
  Feather
} from "lucide-react";

import wall1 from "../../assets/mural.wallart.avif"
import wall6 from "../../assets/graffiti-508272_1280.jpg"
import wall3 from "../../assets/Creative.panel.avif"
import wall2 from "../../assets/texture.wallart.avif"
import wall5 from "../../assets/Creative.jpg"
import wall4 from "../../assets/rudra.wallart.jpg"

const services = [
  {
    title: "Custom Wall murals",
    desc: "Hand-painted murals designed uniquely for your home or office.",
    icon: Brush,
    img: wall1,
  },
  {
    title: "Premium Texture Painting",
    desc: "Luxurious textures that enhance the mood of your interior.",
    icon: Layers,
    img: wall2,
  },
  {
    title: "Creative Art Panels",
    desc: "Modern abstract panels perfect for bedrooms & living rooms.",
    icon: Palette,
    img: wall3,
  },
  {
  title: "Advanced Design Sketching",
  desc: "Professional sketch outlines before painting.",
  icon: PenTool,
  img: wall4,
},
{
  title: "Measurement Perfection",
  desc: "Accurate wall measurement for perfect fit.",
  icon: Ruler,
  img: wall5,
},
{
  title: "Feather Art Detailing",
  desc: "Soft feather-stroke texture painting.",
  icon: Feather,
  img: wall6,
},
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-20 bg-[#f7f4ef]">

      {/* Heading Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Premium <span className="text-black">Wall Painting Services</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Transform your space with handcrafted murals, textured finishes,
          and premium art that adds elegance to your walls.
        </p>
      </motion.div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-3 gap-10">
        {services.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-[30px] shadow-md p-8 hover:shadow-xl 
              duration-300 border border-gray-200"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-full h-48 rounded-2xl overflow-hidden mb-6"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-gray-900" />
                <h2 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h2>
              </div>

              <p className="text-gray-600 leading-relaxed">{item.desc}</p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 w-full py-3 rounded-xl bg-black text-white text-sm font-medium"
              >
                Learn More
              </motion.button>
            </motion.div>
          );
        })}
              {/* ✅ FOOTER */}
      <footer className=" text-center text-gray-500 text-sm ">
        © {new Date().getFullYear()} Rudra Wall Art — Luxury Wall Stories
      </footer>

      </div>
    </div>
  );
};

export default Services;