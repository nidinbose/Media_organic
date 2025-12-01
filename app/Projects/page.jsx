'use client'

import { motion } from 'framer-motion'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "YouTube Boost Campaign",
    category: "Social Media Marketing",
    description: "Helping creators gain organic subscribers and views with real engagement strategies. Increased client's subscriber base by 300% in 3 months.",
    image: "https://img.freepik.com/free-photo/youtube-logo-social-media-icons-digital-3d-render_125540-3722.jpg?w=740&q=80",
    tags: ["YouTube", "SEO", "Growth"],
    stats: { views: "2M+", subscribers: "50K+", engagement: "95%" }
  },
  {
    id: 2,
    title: "SEO Power Optimization",
    category: "Digital Marketing",
    description: "Boosting visibility with cutting-edge SEO to rank higher on Google & YouTube searches. Achieved #1 ranking for 15+ keywords.",
    image: "https://img.freepik.com/free-photo/seo-concept-with-laptop_23-2149402987.jpg?w=740&q=80",
    tags: ["SEO", "Analytics", "Strategy"],
    stats: { ranking: "Top 3", traffic: "500%+", keywords: "50+" }
  },
  {
    id: 3,
    title: "Brand Growth Campaign",
    category: "Brand Development",
    description: "Creating digital marketing campaigns that scale startups into global brands. Helped startup reach 1M+ followers across platforms.",
    image: "https://img.freepik.com/free-photo/social-media-icons-background-digital-3d-render_125540-3730.jpg?w=740&q=80",
    tags: ["Branding", "Social Media", "Growth"],
    stats: { followers: "1M+", reach: "10M+", engagement: "8.5%" }
  },
  {
    id: 4,
    title: "Creator Success Program",
    category: "Influencer Marketing",
    description: "From influencers to businesses, we help every story reach the right audience. Managed 20+ creator partnerships.",
    image: "https://img.freepik.com/free-photo/influencer-recording-vlog-studio_23-2149073443.jpg?w=740&q=80",
    tags: ["Influencer", "Content", "Partnership"],
    stats: { creators: "20+", campaigns: "50+", reach: "5M+" }
  },
  {
    id: 5,
    title: "E-commerce Social Strategy",
    category: "E-commerce Marketing",
    description: "Complete social media strategy for e-commerce brand resulting in 400% increase in online sales and brand awareness.",
    image: "https://img.freepik.com/free-photo/online-shopping-concept_23-2149402986.jpg?w=740&q=80",
    tags: ["E-commerce", "Sales", "Strategy"],
    stats: { sales: "400%+", roi: "250%", growth: "6x" }
  },
  {
    id: 6,
    title: "Video Content Production",
    category: "Content Creation",
    description: "End-to-end video production and promotion services. Created viral content with 10M+ views across platforms.",
    image: "https://img.freepik.com/free-photo/video-production-studio-setup_23-2149073444.jpg?w=740&q=80",
    tags: ["Video", "Production", "Viral"],
    stats: { views: "10M+", videos: "100+", virality: "15%" }
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 px-6">
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#00ff84_0%,_transparent_50%)] opacity-30"
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
            Our Portfolio
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our <span className="text-green-500">Projects</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Showcasing our success stories and the impact we've created for our clients
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 50 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-green-500/20 hover:border-green-500/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-green-500/20 flex items-center justify-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-green-500 text-black rounded-full font-semibold flex items-center gap-2"
                  >
                    View <ExternalLink size={16} />
                  </motion.button>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-2"
                >
                  <span className="text-xs text-green-400 font-semibold">{project.category}</span>
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="px-3 py-1 text-xs bg-green-500/10 text-green-400 rounded-full border border-green-500/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-gray-800">
                  {Object.entries(project.stats).map(([key, value], i) => (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-green-400 font-bold text-sm">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-all duration-500 pointer-events-none"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>
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
            Ready to Start Your <span className="text-green-400">Project?</span>
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
            className="px-8 py-4 bg-green-500 text-black font-bold rounded-full flex items-center gap-2 mx-auto hover:bg-green-400 transition"
          >
            Get Started <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}


