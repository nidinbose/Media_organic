"use client";
import { motion } from "framer-motion";

const cards = [
  {
    title: "GRAPHIC DESIGN",
    subtitle: "VISUAL ARTS",
    img: "https://img.freepik.com/free-photo/smiling-portrait-business-woman-beautiful_1303-2288.jpg?w=740&q=80",
  },
  {
    title: "CREATIVE CONTENT CREATION",
    subtitle: "SCRIPT WRITING & DEVELOPMENT",
    img: "https://img.freepik.com/free-photo/smiling-portrait-business-woman-beautiful_1303-2288.jpg?w=740&q=80",
  },
  {
    title: "FILM AND MEDIA PRODUCTION",
    subtitle: "VIDEOGRAPHY AND PHOTOGRAPHY",
    img: "https://img.freepik.com/free-photo/smiling-portrait-business-woman-beautiful_1303-2288.jpg?w=740&q=80",
  },
  {
    title: "ADVERTISING FILM PRODUCTION",
    subtitle: "TELLING A STORY",
    img: "https://img.freepik.com/free-photo/smiling-portrait-business-woman-beautiful_1303-2288.jpg?w=740&q=80",
  },
];

export default function Cards() {
  return (
    <main className="min-h-full py-12 bg-black flex items-center overflow-hidden relative px-5">
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <motion.div
            key={index}
            className="relative bg-[#111] border border-gray-700 rounded-lg overflow-hidden group cursor-pointer min-w-[220px] sm:min-w-[260px] md:min-w-[300px] lg:min-w-[340px] flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
          >
            {/* Image */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[340px] sm:h-[400px] md:h-[420px] lg:h-[450px] object-cover grayscale group-hover:grayscale-0 transition"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

            {/* Text & Icon */}
            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center justify-between">
              <div>
                <h2 className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                  {card.title}
                </h2>
                <p className="font-medium text-xs sm:text-sm text-gray-300">
                  {card.subtitle}
                </p>
              </div>
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 border border-white flex items-center justify-center group-hover:bg-white transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-white group-hover:text-black transition"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
