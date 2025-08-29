"use client";

import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-10 px-6 md:px-16 lg:px-24">
      <div className="text-center mb-20 bg-white/10 rounded-2xl max-w-7xl mx-auto py-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-green-400">Boost</span> Your Business{" "}
          <span className="text-white">Now</span>
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-sm md:text-base">
          Upgrade your business workflow, unlock deep insights, and boost efficiency
          through our tailored analytics and automation services — empowering you to
          make smarter decisions, save valuable time, and achieve sustainable growth.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-400 text-black font-semibold rounded-full flex items-center justify-center mx-auto gap-2 hover:bg-green-300 transition shadow-lg shadow-green-500/30">
          <span>Book a free consultation</span>
          <span className="text-xl">→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-gray-800 pt-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-green-400 text-2xl">⌘</span>
            <h3 className="text-white font-semibold text-lg">TrustData</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            TrustData — we specialize in automating your business processes,
            optimizing workflows, and making operations more efficient.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-400 hover:text-black transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-400 hover:text-black transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-400 hover:text-black transition"
            >
              <FaXTwitter size={16} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Menu</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Why We</a></li>
            <li><a href="#" className="hover:text-green-400">About Us</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
            <li><a href="#" className="hover:text-green-400">How it works</a></li>
            <li><a href="#" className="hover:text-green-400">Join Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-400">Business Automation</a></li>
            <li><a href="#" className="hover:text-green-400">Process Optimization</a></li>
            <li><a href="#" className="hover:text-green-400">Data Analytics & AI Integration</a></li>
            <li><a href="#" className="hover:text-green-400">Development & Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" /> +49 30 1234 7632
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-400" /> contact@trustdata.eu
            </li>
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-green-400 mt-1" /> 
              123 Innovation Street, Suite 45 <br /> Berlin, 10115
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-gray-800 pt-6">
        <p>@TrustData 2025. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-green-400">Privacy Policy</a>
          <a href="#" className="hover:text-green-400">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
