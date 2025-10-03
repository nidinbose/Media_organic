"use client";

import { motion } from "framer-motion";
import { IoLogoYoutube } from "react-icons/io5";
import { FaDollarSign, FaSearch, FaRocket } from "react-icons/fa";

// Services with descriptions & proper icons
const services = [
  {
    title: "YouTube Video Promotion",
    description:
      "Boost visibility with targeted campaigns that drive views, subscribers, and brand awareness.",
    icon: <IoLogoYoutube size={42} className="text-red-500" />,
  },
  {
    title: "YouTube Monetization",
    description:
      "Grow your channel to meet YouTube’s monetization policies and start earning from your content.",
    icon: <FaDollarSign size={38} className="text-yellow-400" />,
  },
  {
    title: "YouTube SEO",
    description:
      "Optimize video titles, tags, and descriptions to rank higher and reach the right audience organically.",
    icon: <FaSearch size={38} className="text-green-400" />,
  },
];

export default function ServicesPage() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center bg-black text-white">
      {/* Animated Blobs */}
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Helping creators grow with{" "}
          <span className="text-green-500 font-semibold">strategic YouTube services</span>.
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative rounded-2xl p-6 flex flex-col justify-between h-96 shadow-md border border-gray-700 bg-gradient-to-b from-green-950 to-black transition-all duration-500 hover:shadow-green-500/40"
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
              }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Icon */}
              <div className="w-20 h-20 flex items-center justify-center rounded-lg bg-green-400/20 group-hover:bg-green-500/30 transition">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-semibold text-white transition group-hover:text-green-400">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                {service.description}
              </p>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-6 py-2 px-4 rounded-md font-medium text-sm transition-all duration-500 bg-green-600 text-white hover:bg-black border border-green-500 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-black group-hover:shadow-lg"
              >
                Talk With Us
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
