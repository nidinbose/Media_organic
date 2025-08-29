'use client';

import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#00ff84_0%,_transparent_40%)] opacity-40"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 grid-bg"
        animate={{ backgroundPosition: ["0px 0px", "20px 20px", "0px 0px"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute top-24 left-24 w-16 h-16 bg-green-500/10"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute top-48 left-48 w-16 h-16 bg-green-500/10"
        animate={{ y: [0, 20, 0], x: [0, 10, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute top-40 right-20 w-12 h-12 bg-green-500/10 rounded"
        animate={{ scale: [1, 1.3, 1], rotate: [0, 360] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-20 left-10 w-10 h-10 bg-green-500/10 rounded"
        animate={{ y: [0, -15, 0], rotate: [0, -15, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-40 right-32 w-14 h-14 bg-green-500/10"
        animate={{ x: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute top-10 right-10 w-8 h-8 bg-green-500/10 rounded"
        animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-24 text-center">

        {/* Pixel badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm bg-black/50 border border-green-500/40 rounded-full backdrop-blur"
          animate={{ boxShadow: ["0 0 0px #00ff84", "0 0 20px #00ff84", "0 0 0px #00ff84"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
          Orgainic Media
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Turning Visions into <br className="hidden md:block" />
          <span className="text-green-500 drop-shadow-lg">Viral Contents</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Helping businesses stand out through bold designs and strategic branding.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00ff84" }}
            className="bg-green-500 text-black px-6 py-3 rounded-full font-medium hover:bg-green-400 transition"
          >
            Get Start
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00ff84" }}
            className="border border-green-500/50 text-green-500 px-6 py-3 rounded-full font-medium hover:bg-green-500 hover:text-black transition"
          >
            See Our Work
          </motion.button>
        </motion.div>

        {/* Stats container */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row justify-center gap-12 bg-transparent backdrop-blur rounded-full px-8 py-6 border border-green-500/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {[
            { value: "500+", label: "Projects Completed" },
            { value: "600+", label: "Happy Clients" },
            { value: "7+", label: "Industry Awards" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Custom grid background */}
      <style jsx>{`
        .grid-bg {
          background-image:
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 80px 80px;
        }
      `}</style>
    </section>
  );
}
