"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const menuItems = ["Home", "Projects", "Services", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer variants
  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 300, damping: 15 },
    }),
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-lg bg-black/70 shadow-lg shadow-green-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img
              src="./Images/new.png"
              alt="Logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-8 text-white font-medium relative">
              {menuItems.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative group cursor-pointer"
                >
                  {item}
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"
                  />
                </motion.li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 ml-6">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61564623054234",
                  icon: <FaFacebookF size={16} />,
                },
                {
                  href: "https://www.instagram.com/organic___media?igsh=ODl1aTIzZG54N2hl",
                  icon: <FaInstagram size={16} />,
                },
                {
                  href: "https://wa.me/918547968302", // change number to your WhatsApp
                  icon: <FaWhatsapp size={16} />,
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={i}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    backgroundColor: "#22c55e",
                    color: "#000",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 text-white transition"
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>

            {/* Desktop CTA */}
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 12px rgba(34,197,94,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="ml-6 px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold shadow-md"
            >
              Contact now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-4/5 h-screen bg-black/95 backdrop-blur-lg z-40 md:hidden shadow-xl shadow-green-500/20"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-white font-medium text-xl">
              {menuItems.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  onClick={() => setMenuOpen(false)}
                  className="list-none cursor-pointer hover:text-green-400 transition-colors"
                >
                  {item}
                </motion.li>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex gap-4 mt-6">
                {[
                  {
                    href: "https://www.facebook.com/profile.php?id=61564623054234",
                    icon: <FaFacebookF size={18} />,
                  },
                  {
                    href: "https://www.instagram.com/organic___media?igsh=ODl1aTIzZG54N2hl",
                    icon: <FaInstagram size={18} />,
                  },
                  {
                    href: "https://wa.me/918547968302",
                    icon: <FaWhatsapp size={18} />,
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={i}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{
                      scale: 1.3,
                      rotate: -10,
                      backgroundColor: "#22c55e",
                      color: "#000",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white transition"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 text-black font-semibold shadow-md"
              >
                Contact now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
