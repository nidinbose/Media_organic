"use client";

import { motion } from "framer-motion";
import { FaMicrochip, FaComments, FaChartBar, FaProjectDiagram } from "react-icons/fa";

const services = [
  { title: "Automation Machine Learning", icon: <FaMicrochip size={28} /> },
  { title: "AI-Powered Chatbots", icon: <FaComments size={28} /> },
  { title: "Data Analytics Deep Insights", icon: <FaChartBar size={28} /> },
  { title: "AI Strategy Pro Consulting", icon: <FaProjectDiagram size={28} /> },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black text-white">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-10 left-[-5rem] w-[20rem] md:w-[28rem] h-[20rem] md:h-[28rem] bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 100, -80, 0], y: [0, 60, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[18rem] md:w-[25rem] h-[18rem] md:h-[25rem] bg-green-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -100, 80, 0], y: [0, -60, 60, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[15rem] md:w-[20rem] h-[15rem] md:h-[20rem] bg-green-400 rounded-full mix-blend-multiply filter blur-2xl opacity-25"
        animate={{ x: [0, 60, -60, 0], y: [0, 40, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Heading */}
        <motion.h2
          className="text-center text-xl md:text-2xl lg:text-3xl font-medium mb-14 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          We are pioneers in{" "}
          <span className="text-green-500 font-semibold">AI consulting</span>, dedicated to helping
          businesses harness the power of artificial intelligence to drive innovation, efficiency,
          and growth.
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`
                group relative rounded-2xl p-6 flex flex-col justify-between h-80 md:h-96
                shadow-md border border-gray-700 bg-gradient-to-b from-green-950 to-black
                transition-all duration-500 hover:shadow-green-500/40
              `}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-lg text-black
                           bg-green-400 group-hover:bg-green-500 transition"
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-white transition group-hover:text-green-400">
                {service.title}
              </h3>

              {/* Button */}
              <button
                className={`
                  mt-6 py-2 px-4 rounded-md font-medium text-sm transition-all duration-500
                  bg-green-600 text-white hover:bg-black border border-green-500
                  group-hover:bg-gradient-to-r group-hover:from-green-600 
                  group-hover:to-black group-hover:shadow-lg
                `}
              >
                Talk With Us
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
