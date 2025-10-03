"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "YOUTUBE BOOST",
    desc: "Helping creators gain organic subscribers and views with real engagement strategies.",
    img: "https://img.freepik.com/free-photo/youtube-logo-social-media-icons-digital-3d-render_125540-3722.jpg?w=740&q=80",
  },
  {
    title: "SEO POWER",
    desc: "Boosting visibility with cutting-edge SEO to rank higher on Google & YouTube searches.",
    img: "https://img.freepik.com/free-photo/seo-concept-with-laptop_23-2149402987.jpg?w=740&q=80",
  },
  {
    title: "BRAND GROWTH",
    desc: "Creating digital marketing campaigns that scale startups into global brands.",
    img: "https://img.freepik.com/free-photo/social-media-icons-background-digital-3d-render_125540-3730.jpg?w=740&q=80",
  },
  {
    title: "CREATOR SUCCESS",
    desc: "From influencers to businesses, we help every story reach the right audience.",
    img: "https://img.freepik.com/free-photo/influencer-recording-vlog-studio_23-2149073443.jpg?w=740&q=80",
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
            <span className="text-green-400 drop-shadow-lg">SUCCESS STORIES</span>
          </h2>
          <p className="text-gray-300/90 max-w-lg mx-auto lg:mx-0 text-base leading-relaxed">
            From{" "}
            <span className="text-green-400 font-medium">YouTube promotion</span> 
            to{" "}
            <span className="text-green-400 font-medium">digital marketing</span>, 
            we’ve empowered creators and businesses to grow organically and reach millions.
          </p>
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-black font-semibold shadow-lg hover:scale-105 transition">
            Explore Our Work
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
