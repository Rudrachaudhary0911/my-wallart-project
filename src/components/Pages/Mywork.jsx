
import React from "react";
import { motion } from "framer-motion";

import bigWork from "../../assets/wonderfulart.jpg";
import work1 from "../../assets/mural.wallart.avif";
import work2 from "../../assets/Creative.jpg";
import work3 from "../../assets/rudra.wallart.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function MyWork() {
  return (
    <div className="w-full min-h-screen bg-[#f7f4ef] text-white px-6 md:px-20 pt-24 pb-20">

      {/* TITLE */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6 }}
        className="text-4xl text-gray-900 md:text-6xl font-extrabold tracking-tight text-center font-['Playfair_Display']"
      >
        My Creative <span className="text-indigo-400">Work</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 text-center max-w-2xl mx-auto mt-4 text-lg font-light"
      >
        Some of my finest wall-art & interior decorating masterpieces crafted with precision.
      </motion.p>

      {/* BIG FEATURED WORK */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.3, duration: 0.7 }}
        className="w-full mt-16"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src={bigWork}
            alt="Main Work"
            className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>

        <h2 className="text-3xl md:text-4xl text-gray-900 mt-6 font-bold font-['Playfair_Display']">
          Premium Wall Mural Artwork
        </h2>
        <p className="text-gray-600 mt-3 max-w-3xl font-light leading-relaxed">
          A premium hand-crafted masterpiece designed for luxury interiors. Smooth gradients,
          elegant strokes, and perfect color balance rebuilt this space with artistic vibrance.
        </p>
      </motion.div>

      {/* SMALL WORK GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 bg-">
        
        {[work1, work2, work3].map((img, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            className="rounded-2xl overflow-hidden bg-[#111] shadow-xl hover:shadow-indigo-600/20 transition-all duration-500"
          >
            <img
              src={img}
              alt="Work"
              className="w-full h-56 object-cover hover:scale-110 transition-transform duration-700"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold font-['Playfair_Display']">
                Modern Wall Art
              </h3>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                Clean lines, soft textures, and a bold finish to enrich modern home interiors.
              </p>
            </div>
          </motion.div>
        ))}
                   <footer className=" text-center text-gray-500 text-sm ">
        © {new Date().getFullYear()} Rudra Wall Art — Luxury Wall Stories
      </footer>



      </div>
    </div>
  );
}