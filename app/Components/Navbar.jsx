// Next.js Responsive Navbar with Routing
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/Projects" },
  { name: "Services", path: "/Services" },
  { name: "About", path: "/About" },
  { name: "Contact", path: "/Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.4 } }),
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "backdrop-blur-lg bg-black/70 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-5 flex items-center justify-between py-4">
          <Link href="/">
            <img src="/Images/new.png" alt="Logo" className="h-14 w-auto object-contain cursor-pointer" />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8 text-white font-medium">
              {menuItems.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="cursor-pointer hover:text-green-400 transition"
                >
                  <Link href={item.path}>{item.name}</Link>
                </motion.li>
              ))}
            </ul>

            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold">
              <Link href="/contact">Contact now</Link>
            </motion.button>
          </div>

          {/* Mobile Button */}
          <motion.button whileTap={{ scale: 0.8 }} onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white text-3xl">
            {menuOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.5 }} className="fixed top-0 right-0 w-4/5 h-screen bg-black/95 z-40 md:hidden flex flex-col items-center justify-center space-y-10 text-white text-2xl">
            {menuItems.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
                onClick={() => setMenuOpen(false)}
                className="list-none cursor-pointer hover:text-green-400"
              >
                <Link href={item.path}>{item.name}</Link>
              </motion.li>
            ))}

            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold">
              <Link href="/contact">Contact now</Link>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
