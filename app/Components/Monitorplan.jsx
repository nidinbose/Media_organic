'use client'

import { motion } from "framer-motion"

const plans = [
  { id: "A", hours: 200, price: 800 },
  { id: "B", hours: 500, price: 1500 },
  { id: "C", hours: 1000, price: 3000 },
  { id: "D", hours: 2000, price: 6000 },
  { id: "E", hours: 3000, price: 9000 },
  { id: "F", hours: 4000, price: 12000 },
]

export default function MonetizationPlans() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-green-950 via-black to-green-950 py-20 text-white relative overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-green-400/30 blur-sm"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
              x: [Math.random() * 100 - 50, Math.random() * 200 - 100],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-lg"
        >
          YouTube Monetization Plans
        </motion.h2>

        {/* Grid */}
        <div className="mt-16 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-gradient-to-b from-green-950 to-black rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border border-green-500/20 overflow-hidden group"
            >
              {/* Glow / Shine */}
              <div className="absolute -inset-16 bg-green-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Plan Title */}
              <h3 className="text-2xl font-bold text-green-300 mb-4 tracking-wide">
                Plan {plan.id}
              </h3>

              {/* Price Section */}
              <p className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-green-300 to-emerald-200 bg-clip-text text-transparent">
                ₹{plan.price}
              </p>
              <p className="text-gray-400 mb-6">for {plan.hours} Watch Hours</p>

              {/* Features */}
              <ul className="text-gray-300 space-y-2 text-sm mb-8">
                <li>✔ Real watch hours</li>
                <li>✔ Safe & secure growth</li>
                <li>✔ Monetization support</li>
              </ul>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-green-400/50 transition"
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
