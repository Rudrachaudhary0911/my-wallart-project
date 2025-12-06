import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = new FormData(form);

    // Send request to Web3Forms
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      form.reset();          
      setSent(true);         

      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f0ea] via-gray-800 to-black px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white/10 backdrop-blur-xl border border-gray-200 shadow-2xl p-10 rounded-3xl"
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-3xl font-bold text-gray-900 tracking-wide"
        >
           Contact <span className="text-blue-500"> Rudra Wall Art</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-center mt-3 mb-10 text-lg"
        >
          Have a project in mind? Let’s create something beautiful.
        </motion.p>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Web3Forms Access Key */}
          <input type="hidden" name="access_key" value="32336f63-c81c-4775-9e70-37eb20858d86" />

          {/* Where to receive emails */}
          <input
            type="hidden"
            name="email_to"
            value="chaudharyrudra746@gmail.com"
          />

          {/* Name Field */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="text-gray-900 block mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-[#f4f0ea] border border-gray-400 text-gray-600 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </motion.div>

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="text-gray-900 block mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-[#f4f0ea] border border-gray-400 text-gray-600 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="text-gray-900 block mb-2">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              className="w-full bg-[#f4f0ea] border border-gray-400 text-gray-600 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Tell me about your project..."
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold tracking-wide shadow-lg"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* SUCCESS MESSAGE */}
        <AnimatePresence>
          {sent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 text-center text-green-400 font-semibold"
            >
              ✅ Message Sent Successfully!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}