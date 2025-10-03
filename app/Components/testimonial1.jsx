"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Wade Warren",
      role: "Content Creator, Travel Vlogs",
      avatar: "/wade.jpg",
      review:
        "Thanks to Organic Media’s YouTube promotion, my channel skyrocketed from 10k to 100k subscribers in just 6 months. Their strategies are real and organic.",
    },
    {
      name: "Esther Howard",
      role: "CEO, FinovaTech",
      avatar: "/esther.jpg",
      review:
        "The digital marketing campaigns boosted our brand awareness and tripled our engagement. We now rank on the first page of Google for our industry keywords.",
    },
    {
      name: "Brooklyn Simmons",
      role: "Lifestyle Influencer",
      avatar: "/brooklyn.jpg",
      review:
        "I was struggling to grow on YouTube, but their promotion and SEO tips helped me gain loyal followers. My videos now reach the right audience organically.",
    },
  ];

  return (
    <main className="bg-black text-white">
      {/* Hero / Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug max-w-lg">
              We’ve helped{" "}
              <span className="text-green-500 font-bold">creators, startups, and businesses</span>{" "}
              grow through organic media, YouTube promotions, and impactful
              digital marketing strategies.
            </h2>

            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-md font-medium shadow-md hover:scale-105 hover:shadow-green-500/40 transition">
              See Our Success Stories
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-8 text-center lg:text-left"
          >
            <div>
              <h3 className="text-4xl font-bold text-green-400">500+</h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                YouTube channels promoted successfully
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-400">3x ROI</h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                Average return on digital ad campaigns
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-400">1M+</h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                Organic subscribers gained for clients
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-green-400">95%</h3>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                Client retention rate for long-term success
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-green-500/20 transition"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">“{t.review}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to grow your channel and brand organically?
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Whether you’re a creator, influencer, or business, our organic media
          and YouTube marketing solutions will help you reach the right audience
          and achieve lasting growth.
        </p>
        <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 hover:shadow-green-500/40 transition">
          Get Started Today
        </button>
      </section>
    </main>
  );
}
