"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Posters() {
  // Top row: 1–10
  const postersTop = Array.from({ length: 10 }, (_, i) => `/Images/${i + 1}.jpg`);
  // Bottom row: 11–21
  const postersBottom = Array.from({ length: 11 }, (_, i) => `/Images/${i + 11}.jpg`);

  const [duration, setDuration] = useState(40);

  useEffect(() => {
    function calcDuration() {
      // Match Tailwind breakpoints
      let posterWidth = 160; // default (w-40)
      if (window.innerWidth >= 1024) posterWidth = 240; // lg: w-60
      else if (window.innerWidth >= 768) posterWidth = 200; // md: w-50

      const gap = 24; // gap-6
      const totalWidth = postersTop.length * (posterWidth + gap);
      const speed = 100; // pixels/sec
      setDuration(totalWidth / speed);
    }

    calcDuration();
    window.addEventListener("resize", calcDuration);
    return () => window.removeEventListener("resize", calcDuration);
  }, [postersTop.length]);

  return (
    <div className="relative w-full overflow-hidden bg-black py-8">
      {/* Left overlay */}
      <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none"></div>
      {/* Right overlay */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none"></div>

      {/* Infinite Scrolling Row (top: 1–10) */}
      <motion.div
        className="flex gap-6"
        initial={{ x: 0 }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {[...postersTop, ...postersTop].map((src, index) => (
          <div
            key={index}
            className="relative w-40 h-60 md:w-50 md:h-72 lg:w-60 lg:h-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Poster ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px,
                     (max-width: 1024px) 200px,
                     240px"
            />
          </div>
        ))}
      </motion.div>

      {/* Reverse Infinite Row (bottom: 11–21) */}
      <motion.div
        className="flex gap-6 mt-6"
        initial={{ x: "-100%" }}
        animate={{ x: ["-100%", "0%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: duration,
        }}
      >
        {[...postersBottom, ...postersBottom].map((src, index) => (
          <div
            key={index}
            className="relative w-40 h-60 md:w-50 md:h-72 lg:w-60 lg:h-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Poster ${index + 11}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 160px,
                     (max-width: 1024px) 200px,
                     240px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
