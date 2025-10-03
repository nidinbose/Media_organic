'use client'

import { motion } from "framer-motion"
import { PlayCircle, DollarSign, Search } from "lucide-react"

const services = [
  {
    id: 1,
    title: "YouTube Video Promotion",
    icon: <PlayCircle className="w-10 h-10 text-green-400" />,
    desc: "Boost your reach and grow your audience with strategic video promotions.",
  },
  {
    id: 2,
    title: "YouTube Video Monetization",
    icon: <DollarSign className="w-10 h-10 text-green-400" />,
    desc: "Get closer to monetization by increasing your watch time and engagement.",
  },
  {
    id: 3,
    title: "YouTube Video SEO",
    icon: <Search className="w-10 h-10 text-green-400" />,
    desc: "Optimize your videos for search visibility and rank higher on YouTube.",
  },
]

export default function ServicesPage() {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-black via-green-950 to-black py-20 text-white overflow-hidden">
      
      {/* Animated Background Blobs */}
      <motion.div
        animate={{ x: [0, 50, -50, 0], y: [0, -50, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="absolute top-10 left-20 w-72 h-72 bg-green-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -60, 60, 0], y: [0, 60, -60, 0], scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="absolute bottom-20 right-32 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 40, -40, 0], y: [0, -40, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-green-600/10 rounded-full blur-2xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-400 text-center"
        >
          Our Services
        </motion.h2>
        
        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.08, rotate: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gradient-to-br from-green-900 to-green-700 rounded-2xl shadow-lg p-8 border border-green-500 relative overflow-hidden group"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl" />
              
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
