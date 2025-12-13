import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-36 bg-gradient-to-b from-[#020617] via-[#08182f] to-[#0b1220] text-white overflow-hidden"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-24 px-6"
      >
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Projects
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Latest <span className="text-cyan-400">Work</span>
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-gray-400">
          A selection of projects showcasing my skills in frontend, backend,
          and modern UI development.
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -12, scale: 1.03 }}
            className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg transition overflow-hidden"
          >
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition" />

            <div className="relative z-10 p-8">
              <h3 className="text-xl font-semibold mb-3">
                {p.title}
              </h3>

              <p className="text-gray-400 text-sm mb-6">
                {p.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={p.demo}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:underline text-sm"
                >
                  <ExternalLink size={16} /> Live
                </a>
                <a
                  href={p.github}
                  className="inline-flex items-center gap-2 text-purple-400 hover:underline text-sm"
                >
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Excel Analytics Platform",
    desc: "Full-stack MERN analytics platform with charts, uploads and insights.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
    demo: "#",
    github: "#",
  },
  {
    title: "Bus Booking UI",
    desc: "Modern and responsive bus search & booking interface.",
    tech: ["React", "Tailwind CSS", "UX Design"],
    demo: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Animated developer portfolio with modern UI & smooth interactions.",
    tech: ["React", "Framer Motion", "Tailwind"],
    demo: "#",
    github: "#",
  },
];
