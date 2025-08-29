"use client";
import { motion } from "framer-motion";

const blogs = [
  {
    title: "The Future of AI in Healthcare",
    desc: "Exploring how artificial intelligence is transforming the medical field with smarter diagnostics and automation.",
    date: "Aug 25, 2025",
    author: "Dr. Sarah Johnson",
    img: "https://images.pexels.com/photos/586338/pexels-photo-586338.jpeg",
  },
  {
    title: "Web3: Beyond Cryptocurrency",
    desc: "A deep dive into how blockchain is reshaping industries like supply chain, identity, and the creator economy.",
    date: "Aug 20, 2025",
    author: "Alex Carter",
    img: "https://images.pexels.com/photos/6770772/pexels-photo-6770772.jpeg",
  },
  {
    title: "Green Tech Revolution",
    desc: "How renewable energy and sustainable technologies are paving the way for a cleaner planet.",
    date: "Aug 15, 2025",
    author: "Priya Sharma",
    img: "https://images.pexels.com/photos/987544/pexels-photo-987544.jpeg",
  },
];

export default function BlogsPage() {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-6 sm:px-12">
      {/* Heading */}
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-16 text-green-400"
      >
        Latest Blogs
      </motion.h1>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogs.map((blog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34,197,94,0.6)" }}
            className="rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900/80 to-black/80 border border-green-500/40 backdrop-blur-xl cursor-pointer transition-all duration-300"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-green-400 mb-3">
                {blog.title}
              </h2>
              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                {blog.desc}
              </p>
              <div className="flex items-center justify-between text-gray-400 text-xs border-t border-gray-700 pt-4">
                <span>{blog.date}</span>
                <span className="italic">By {blog.author}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
