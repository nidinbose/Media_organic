'use client'

import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Users, Target, Award, TrendingUp, Heart, Zap } from 'lucide-react'

const stats = [
  { icon: <Users className="w-8 h-8" />, value: "600+", label: "Happy Clients", color: "text-blue-400" },
  { icon: <Target className="w-8 h-8" />, value: "500+", label: "Projects Completed", color: "text-green-400" },
  { icon: <Award className="w-8 h-8" />, value: "7+", label: "Industry Awards", color: "text-yellow-400" },
  { icon: <TrendingUp className="w-8 h-8" />, value: "95%", label: "Success Rate", color: "text-purple-400" }
]

const values = [
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Passion Driven",
    description: "We're passionate about helping businesses grow and succeed in the digital world."
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Innovation First",
    description: "We stay ahead of trends and use cutting-edge strategies to deliver results."
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: "Results Focused",
    description: "Every campaign is designed with clear goals and measurable outcomes."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Client Centric",
    description: "Your success is our success. We build long-term partnerships, not just projects."
  }
]

const team = [
  {
    name: "Creative Team",
    role: "Content & Design",
    description: "Our creative minds craft compelling stories and visuals that resonate with your audience."
  },
  {
    name: "Strategy Team",
    role: "Marketing & Analytics",
    description: "Data-driven strategists who turn insights into actionable growth plans."
  },
  {
    name: "Tech Team",
    role: "Development & SEO",
    description: "Technical experts ensuring your digital presence is optimized and performing at peak."
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 px-6">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#00ff84_0%,_transparent_50%)] opacity-30"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm bg-black/50 border border-green-500/40 rounded-full backdrop-blur"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Our Story
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About <span className="text-green-500">OrganicMedia</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We are a creative Social Media Marketing Company based in Kerala, dedicated to helping businesses grow their online presence.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all text-center"
            >
              <motion.div
                className={`${stat.color} mb-4 flex justify-center`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-2 text-green-400"
              >
                {stat.value}
              </motion.h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image/Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-96 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-3xl border border-green-500/30 overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 border-2 border-green-500/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-48 h-48 border-2 border-green-500/30 rounded-full"
                  />
                  <div className="absolute text-center z-10">
                    <h3 className="text-4xl font-bold text-green-400 mb-2">OrganicMedia</h3>
                    <p className="text-gray-400">Since 2020</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold"
              >
                Our <span className="text-green-400">Mission</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                We are a creative Social Media Marketing Company based in Kerala, dedicated to helping businesses grow their online presence and connect with the right audience. Our team specializes in strategic content creation, performance-driven campaigns, influencer marketing, and brand storytelling that engage customers and drive results.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-lg leading-relaxed"
              >
                From YouTube promotion to digital marketing, we've empowered creators and businesses to grow organically and reach millions. We believe in building authentic connections and delivering measurable results that matter.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-green-400">Values</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all"
              >
                <motion.div
                  className="text-green-400 mb-4"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-green-400">Expertise</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized teams working together to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: index % 2 === 0 ? -15 : 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-green-500/20 hover:border-green-500/50 transition-all relative overflow-hidden group"
              >
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:bg-green-500/20 transition"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-green-400">{member.name}</h3>
                  <p className="text-gray-400 mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-3xl p-12 border border-green-500/30"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Work <span className="text-green-400">Together?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mb-8"
          >
            Let's discuss how we can help you achieve your goals
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(34,197,94,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}


