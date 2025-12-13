import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-gray-400 overflow-hidden">
      {/* 🌌 Subtle Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 bottom-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Rohan Panwar
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/RohanPanwar01"
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10
              hover:border-cyan-400/40 hover:text-cyan-400 transition"
            >
              <Github size={18} />
            </a>

            <a
              href=""
              target="_blank"
              className="p-3 rounded-full bg-white/5 border border-white/10
              hover:border-purple-400/40 hover:text-purple-400 transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="mailto:panwarrohan868@gmail.com"
              className="p-3 rounded-full bg-white/5 border border-white/10
              hover:border-green-400/40 hover:text-green-400 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} Rohan Panwar. All rights reserved.
          </p>

          <p className="text-gray-500">
            Built with <span className="text-cyan-400">React</span> &
            <span className="text-purple-400"> Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
