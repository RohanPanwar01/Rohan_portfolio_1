import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Logo1 from "../image/Logo1.jpg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // 🔹 Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔹 Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // 🔹 Navigation handler
  const handleNav = (link) => {
    setMenuOpen(false);

    if (link.label === "Home") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 300);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (link.type === "scroll") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToSection(link.id), 400);
      } else {
        scrollToSection(link.id);
      }
    }

    if (link.type === "route") {
      navigate(link.path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 200);
    }
  };

  const navLinks = [
    { label: "Home", type: "scroll" },
    { label: "About", id: "about", type: "scroll" },
    { label: "Skills", id: "skills", type: "scroll" },
    { label: "Projects", id: "projects", type: "scroll" },
    { label: "Contact", id: "contact", type: "scroll" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg border-b border-blue-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-12 py-4">

        {/* 🔷 Logo */}
        <NavLink to="/" className="flex items-center gap-3 select-none">
          {/* <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            src={Logo1}
            alt="AV CCTV Indore"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover
            border-2 border-blue-500 shadow-lg hover:scale-105 transition"
          /> */}
          <div className="leading-tight">
            <p className="text-white font-bold text-lg sm:text-xl">
              Portfolio
            </p>
            {/* <p className="text-gray-400 text-sm sm:text-base">
              CCTV Installation
            </p> */}
          </div>
        </NavLink>

        {/* 🖥 Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.button
              key={link.label}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleNav(link)}
              className={`font-medium transition ${
                location.pathname === link.path
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {link.label}
            </motion.button>
          ))}

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNav({ id: "contact", type: "scroll" })}
            className="ml-2 px-5 py-2 rounded-full font-semibold
            bg-gradient-to-r from-blue-500 to-cyan-400
            text-white shadow-md hover:shadow-blue-500/40"
          >
            Resume
          </motion.button> */}
        </nav>

        {/* 📱 Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Mobile Floating Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.3 }}
            className="absolute right-4 top-16 z-50
            bg-black/80 backdrop-blur-xl
            border border-blue-500/30
            rounded-2xl shadow-lg px-6 py-4 w-52"
          >
            <div className="flex flex-col text-right gap-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link)}
                  className="text-gray-200 hover:text-blue-400 transition"
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleNav({ id: "contact", type: "scroll" })}
                className="mt-2 px-4 py-2 rounded-full
                bg-gradient-to-r from-blue-500 to-cyan-400
                text-white font-semibold"
              >
                Get Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
