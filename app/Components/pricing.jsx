"use client";

import { motion } from "framer-motion";

const plans = [
  {
    title: "Get Plan",
    desc: "5K+ Views, Subscribers, Likes, Comments, Shares @just Rs. 600",
    price: "Rs. 800",
  },
  {
    title: "Set Plan",
    desc: "10K+ Views, Subscribers, Likes, Comments, Shares @just Rs. 1200",
    price: "Rs. 1600",
    popular: true, // highlight this one
  },
  {
    title: "Go Plan",
    desc: "20K+ Views, Subscribers, Likes, Comments, Shares @just Rs. 2200",
    price: "Rs. 3000",
  },
  {
    title: "Walk Plan",
    desc: "150K+ Views, Subscribers, Likes, Comments, Shares @just Rs. 5000",
    price: "Rs. 7000",
  },
  {
    title: "Run Plan",
    desc: "1 Lakh+ Views, Subscribers, Likes, Comments, Shares @just Rs. 9500",
    price: "Rs. 13000",
  },
  {
    title: "Fly Plan",
    desc: "10 Lakhs+ Views, Subscribers, Likes, Comments, Shares @just Rs. 85000",
    price: "Rs. 110000",
  },
];

export default function Pricing() {
  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">

      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-green-600 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-green-400 rounded-full opacity-20 blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16">
          Youtube Video Promotion
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10, 
                scale: 1.07,
                boxShadow: "0px 0px 50px rgba(16, 185, 129, 0.8)",
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className={`relative p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 group ${
                plan.popular ? "bg-green-600" : "bg-white/10"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <span className="absolute -top-4 px-4 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-gray-300 mb-6 text-sm">{plan.desc}</p>
              <p className="text-3xl font-extrabold mb-8">{plan.price}</p>

              <button
                className={`px-6 py-3 rounded-lg font-semibold w-full transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg ${
                  plan.popular
                    ? "bg-white text-green-600 hover:bg-gray-100"
                    : "bg-green-600 text-white hover:bg-green-500"
                }`}
              >
                Buy Now →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
