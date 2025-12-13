import { Code, Database, Layout } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-36 bg-gradient-to-b from-[#020617] via-[#08182f] to-[#0b1220] text-white overflow-hidden"
    >
      {/* 🌌 Glow Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-24 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#ffffff0a_1px,transparent_0)] bg-[size:26px_26px]" />
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
          Skills
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Tools & <span className="text-cyan-400">Technologies</span>
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-gray-400">
          Modern technologies I use to craft fast, scalable, and visually
          stunning web applications.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        <SkillCard
          title="Frontend"
          icon={<Layout size={26} />}
          skills={["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"]}
          accent="cyan"
        />

        <SkillCard
          title="Backend"
          icon={<Database size={26} />}
          skills={["Node.js", "Express", "MongoDB", "REST APIs", "Auth"]}
          accent="purple"
        />

        <SkillCard
          title="Tools"
          icon={<Code size={26} />}
          skills={["Git", "Docker", "Postman", "JWT", "VS Code"]}
          accent="green"
        />
      </div>
    </section>
  );
}

function SkillCard({ title, icon, skills, accent }) {
  const accents = {
    cyan: "from-cyan-400/20 to-cyan-600/20 hover:border-cyan-400/40",
    purple: "from-purple-400/20 to-purple-600/20 hover:border-purple-400/40",
    green: "from-green-400/20 to-emerald-600/20 hover:border-green-400/40",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.03 }}
      className={`relative rounded-3xl p-8 bg-gradient-to-br ${accents[accent]}
      border border-white/10 backdrop-blur-xl shadow-lg transition`}
    >
      {/* Glow overlay */}
      <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 hover:opacity-100 transition" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 mb-6 flex items-center justify-center rounded-2xl bg-white/10">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-4">{title}</h3>

        {/* Skills */}
        <ul className="space-y-2 text-gray-300 text-sm">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
