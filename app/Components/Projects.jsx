"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CODE & CANVAS",
    desc: "Merging art with modern code for futuristic designs.",
    img: "https://img.freepik.com/free-photo/woman-face-close-up-paint-art_23-2149210732.jpg?w=740&q=80",
  },
  {
    title: "HYPERFRAME",
    desc: "Immersive frameworks with creative AI-powered UI.",
    img: "https://img.freepik.com/free-photo/ai-technology-microchip-background-futuristic-innovation_53876-129770.jpg",
  },
  {
    title: "RENDERLAB",
    desc: "3D rendering labs pushing creative visualization limits.",
    img: "https://img.freepik.com/free-photo/abstract-digital-technology-background_34629-885.jpg",
  },
  {
    title: "QUANTUM PIXEL",
    desc: "Next-gen digital pixels for hyperrealistic graphics.",
    img: "https://img.freepik.com/free-photo/abstract-background-with-low-poly-design_1048-8478.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            OUR{" "}
            <span className="text-green-400 drop-shadow-lg">PROJECTS</span>{" "}
            SPEAK LOUDER
          </h2>
          <p className="text-gray-300/90 max-w-lg mx-auto lg:mx-0 text-base leading-relaxed">
            Explore how we blend{" "}
            <span className="text-green-400 font-medium">creativity</span>,{" "}
            <span className="text-green-400 font-medium">design</span>, and{" "}
            <span className="text-green-400 font-medium">technology</span> to
            deliver projects that go beyond expectations.
          </p>
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-black font-semibold shadow-lg hover:scale-105 transition">
            View All Projects
          </button>
        </motion.div>

        {/* RIGHT CONTENT (PROJECT CARDS) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl overflow-hidden bg-white/5 border border-green-500/30 shadow-[0_0_25px_rgba(34,197,94,0.15)] backdrop-blur-md"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-40 md:h-48 object-cover opacity-90 hover:opacity-100 transition"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-400">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{proj.desc}</p>
              </div>
              <span className="absolute top-2 left-2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-md shadow-md">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
