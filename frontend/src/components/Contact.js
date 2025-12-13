import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
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
        className="text-center mb-20 px-6"
      >
        <p className="text-sm uppercase tracking-widest text-gray-400">
          Contact
        </p>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold">
          Let’s <span className="text-cyan-400">Work Together</span>
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-gray-400">
          Have a project in mind or just want to say hello?  
          Feel free to reach out — I’m always open to new opportunities.
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6"
      >
        <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-lg p-10">
          {/* Glow overlay */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition" />

          <div className="relative z-10 grid sm:grid-cols-3 gap-8 text-center">
            {/* Email */}
            <div className="flex flex-col items-center gap-3">
              <Mail className="text-cyan-400" size={28} />
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-medium">panwarrohan868@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center gap-3">
              <Phone className="text-purple-400" size={28} />
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-medium">+91 7477090022</p>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center gap-3">
              <MapPin className="text-green-400" size={28} />
              <p className="text-sm text-gray-400">Location</p>
              <p className="font-medium">India</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="mailto:panwarrohan868@gmail.com"
              className="inline-flex items-center justify-center px-10 py-4 rounded-lg
              bg-gradient-to-r from-cyan-500 to-purple-600
              hover:opacity-90 transition shadow-lg font-medium"
            >
              Send Email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
