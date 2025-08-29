"use client";

import { motion } from "framer-motion";

export default function Testimonial1() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug max-w-lg">
            We’ve helped businesses and individuals harness the{" "}
            <span className="text-green-500 font-bold">power of AI</span> to
            drive growth, efficiency, and innovation.
          </h2>

          <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:scale-105 hover:shadow-green-500/40 transition">
            Our Testimonial
          </button>
        </motion.div>

        {/* Right Content (Stats) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 text-center lg:text-left"
        >
          {/* 1M+ */}
          <div>
            <h3 className="text-4xl font-bold text-green-400">1M+</h3>
            <p className="mt-2 text-gray-400 text-sm md:text-base">
              Users benefiting from our AI-powered solutions
            </p>
          </div>

          {/* 4.9/5 */}
          <div>
            <h3 className="text-4xl font-bold text-green-400">4.9/5</h3>
            <p className="mt-2 text-gray-400 text-sm md:text-base">
              Average rating across all AI-driven applications
            </p>
          </div>

          {/* 80% */}
          <div>
            <h3 className="text-4xl font-bold text-green-400">80%</h3>
            <p className="mt-2 text-gray-400 text-sm md:text-base">
              Faster decision-making with AI recommendations
            </p>
          </div>

          {/* 99% */}
          <div>
            <h3 className="text-4xl font-bold text-green-400">99%</h3>
            <p className="mt-2 text-gray-400 text-sm md:text-base">
              Uptime guarantee for seamless AI experience
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
