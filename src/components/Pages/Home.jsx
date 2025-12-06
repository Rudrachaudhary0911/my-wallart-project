import React from "react";
import { motion } from "framer-motion";
import rudraImg from "../../assets/wonderfulart.jpg";
import heroImg from "../../assets/rudra.wallart.jpg";
import {Link} from "react-router-dom";
import { Instagram, Twitter, Facebook, MessageCircle } from "lucide-react";


export default function Home() {
  return (
    <div className="w-full min-h-screen bg-[#f4f0ea] text-[#1c1c1c] overflow-hidden">

      {/* ✅ HERO SECTION */}
      <section className="pt-25 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* ✅ LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.25,
                delayChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 80 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl text-gay-900 font-bold lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            Rudra Wall Art
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9 }}
            className="mt-10 text-gray-600 text-lg max-w-lg"
          >
            Handcrafted murals & premium wall designs that transform your space and Discover the perfect blend of creativity and elegance with our exclusive Wall Art Collection, designed to transform any space into a personal expression of style. 
          </motion.p>

          {/* ✅ BUTTONS */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
            className="mt-10 flex gap-10"
          > <Link to = "/mywork">
            <button className="px-7 py-3 bg-black text-white rounded-full shadow-lg hover:scale-105 transition">
              Explore Works
            </button>
              </Link>
              <Link to= "/contact">
            <button className="px-7 py-3 bg-white rounded-full border hover:shadow-md transition">
              Get Quote
            </button>
            </Link>
          </motion.div>

          {/* ✅ FEATURE TAGS */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex gap-8 text-sm text-gray-700"
          >
            <span>✔ Custom Murals</span>
            <span>✔ Premium Paint</span>
            <span>✔ On-site Work</span>
          </motion.div>
        </motion.div>

        {/* ✅ RIGHT IMAGE WITH FLOATING CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
          className="relative"
        >
          {/* ✅ CARD FRAME */}
          <div className="rounded-[2.5rem] bg-white p-4 shadow-2xl">
            <motion.img
              src={rudraImg}
              alt="Rudra Wall Art"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="rounded-[2rem] w-full object-cover"
            />
          </div>

          {/* ✅ FLOATING LIMITED EDITION TAG */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-6 right-10 bg-white px-5 py-3 rounded-2xl shadow-xl"
          >
            <h4 className="text-sm font-semibold">Limited Edition</h4>
            <p className="text-xs text-gray-500">Hand-painted mural</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ✅ RECENT WORKS SECTION */}
      <section className="py-28 max-w-7xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 text-center"
        >
          Recent Works
        </motion.h1>
       
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-10">
          {[1,2,3,4].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="bg-white p-3 rounded-2xl shadow-xl"
            >
              <img
                src={heroImg}
                className="h-60 w-full object-cover rounded-xl"
                alt="work"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ FOOTER */}
       <footer className="w-full mt-20 py-10 bg-[#1A2933] backdrop-blur-lg border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 gap-6"
      >
        {/* LEFT TEXT */}
        <p className="text-gray-300 text-center md:text-left text-sm tracking-wide">
          © {new Date().getFullYear()} | Built by <span className="text-white font-semibold">Rudra Chaudhary</span>
        </p>

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-6"
        >
          {/* Instagram */}
          <motion.a
            href="https://instagram.com/i.rudra_chaudhary0911"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 5 }}
            className="text-gray-300 hover:text-pink-500 transition-all"
          >
            <Instagram size={26} />
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -5 }}
            className="text-gray-100 hover:text-blue-400 transition-all"
          >
            <Twitter size={26} />
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-100 hover:text-blue-600 transition-all"
          >
            <Facebook size={26} />
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-100 hover:text-green-500 transition-all"
          >
            <MessageCircle size={26} />
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
    </div>
  );
}