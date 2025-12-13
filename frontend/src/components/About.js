import { motion } from "framer-motion";
import { Code, Layout, Zap } from "lucide-react";
import Img1 from "../image/38.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 bg-gradient-to-b from-[#020617] via-[#08182f] to-[#0b1220] text-white overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* 📝 TEXT CONTENT (FIRST ON MOBILE) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="order-1 md:order-2"
        >
          <p className="text-sm uppercase tracking-widest text-gray-400">
            About Me
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
            Building <span className="text-cyan-400">modern</span> &{" "}
            <span className="text-purple-400">scalable</span> web experiences
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
            I specialize in crafting high-quality interfaces and scalable web
            applications using modern frontend technologies. My focus is smooth
            animations, clean architecture, and performance-driven UX.
          </p>

          {/* ✨ Feature Cards */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
            >
              <Code className="text-cyan-400 mb-4" size={22} />
              <p className="text-gray-300 text-sm">Clean & scalable code</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition"
            >
              <Layout className="text-purple-400 mb-4" size={22} />
              <p className="text-gray-300 text-sm">Responsive UI & UX</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-400/40 transition"
            >
              <Zap className="text-green-400 mb-4" size={22} />
              <p className="text-gray-300 text-sm">Fast & SEO-friendly apps</p>
            </motion.div>
          </div>

          {/* 📄 CTA */}
          <div className="mt-12">
            <a
              href="/resume.pdf"
              className="inline-flex items-center px-8 py-3 rounded-lg
              bg-gradient-to-r from-cyan-500 to-purple-600
              hover:opacity-90 transition shadow-lg"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* 👤 IMAGE (BELOW TEXT ON MOBILE, LEFT ON DESKTOP) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center order-2 md:order-1 mt-16 md:mt-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 blur-2xl opacity-70" />
            <div className="relative w-72 h-72 rounded-full p-1 bg-gradient-to-r from-cyan-400 to-purple-500">
              <img
                src={Img1}
                alt="Rohan – Full Stack Developer"
                className="w-full h-full rounded-full object-cover bg-[#020617]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
