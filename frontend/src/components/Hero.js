import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Img from "../image/4.jpg"
import { Helmet } from "react-helmet-async";


export default function Hero() {
  return (
    <>

       <Helmet>
        {/* <title>Rohan Panwar | Frontend Developer Portfolio</title> */}
        <meta
          name="description"
          content="Rohan Panwar | Frontend Developer specializing in React and Tailwind CSS. Explore projects, skills, and portfolio of Rohan Panwar."
        />
        <meta
          name="keywords"
          content="Rohan Panwar, frontend developer, React portfolio, Tailwind CSS, web developer, UI/UX design, personal portfolio"
        />
        <meta name="author" content="Rohan Panwar" />

        {/* Open Graph / Social Sharing */}
        <meta property="og:title" content="Rohan Panwar | Frontend Developer Portfolio" />
        <meta property="og:description" content="Frontend Developer specializing in React and Tailwind CSS. Explore my projects and portfolio." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={Img} />
        <meta property="og:url" content="https://rohaportfolio.com/" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rohan Panwar | Frontend Developer Portfolio" />
        <meta name="twitter:description" content="Frontend Developer specializing in React and Tailwind CSS. Explore my projects and portfolio." />
        <meta name="twitter:image" content={Img} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Rohan Panwar",
            "url": "https://rohaportfolio.com/",
            "sameAs": [
              "https://www.linkedin.com/in/rohan-panwar",
              "https://github.com/RohanPanwar01"
            ],
            "jobTitle": "Frontend Developer",
            "description": "Rohan Panwar is a Frontend Developer specializing in React and Tailwind CSS.",
            "image": "${Img}",
            "email": "mailto:panwarrohan868@gmail.com"
          }
          `}
        </script>
      </Helmet>
    <section
      id="home"
      className="
        relative min-h-screen
        pt-28 md:pt-32
        bg-gradient-to-br from-[#0b1220] via-[#08182f] to-[#020617]
        text-white overflow-hidden
      "
    >
      {/* Hero Content */}
      <div
        className="
          max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2
          items-center
          px-6 md:px-16
          gap-14
        "
      >
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-400 mb-2">Hello, It's Me</p>

          <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Rohan Panwar
          </h1>

          <h2 className="text-xl md:text-2xl mb-5">
            And I'm a{" "}
            <span className="text-cyan-400 font-semibold">
              Frontend Developer
            </span>
          </h2>

          <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
            I'm a web developer with experience in building modern, responsive,
            and animated web applications using React and Tailwind CSS.
          </p>

          {/* Social Icons */}
        <div className="flex gap-4">
  {[
    { Icon: Github, url: "https://github.com/RohanPanwar01" },
    { Icon: Linkedin, url: "" },
    { Icon: Mail, url: "mailto:panwarrohan868@gmaill.com" },
  ].map(({ Icon, url }, i) => (
    <motion.a
      key={i}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-11 h-11
        flex items-center justify-center
        rounded-full
        border border-cyan-400
        text-cyan-400
        hover:bg-cyan-400 hover:text-black
        transition-all
      "
    >
      <Icon size={18} />
    </motion.a>
  ))}
</div>

        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div
              className="
                absolute inset-0
                rounded-full
                bg-gradient-to-r from-cyan-400 to-purple-500
                blur-3xl opacity-60
                animate-pulse
              "
            />

            {/* Image */}
            <div
              className="
                relative
                w-64 h-64
                md:w-72 md:h-72
                rounded-full
                p-1
                bg-gradient-to-r from-cyan-400 to-purple-500
              "
            >
              <img
                src={Img}
                alt="profile"
                className="
                  w-full h-full
                  rounded-full
                  object-cover
                  bg-[#020617]
                "
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
