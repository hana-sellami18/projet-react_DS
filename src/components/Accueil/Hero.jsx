// src/components/Accueil/Hero.jsx
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import hanaPhoto from "../../assets/hana.png"; // Vérifie que ce chemin est correct

const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, -80]);
  const yImage = useTransform(scrollY, [0, 500], [0, 100]);
  const opacityGlow = useTransform(scrollY, [0, 400], [0.6, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-darkBg"
    >
      {/* Glows pastel doux */}
      <motion.div
        style={{ opacity: opacityGlow }}
        className="absolute top-10 left-10 w-96 h-96 bg-pink-300/30 blur-[140px] rounded-full"
      />
      <motion.div
        style={{ opacity: opacityGlow }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300/25 blur-[160px] rounded-full"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-300/10 via-transparent to-pink-300/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10">

        {/* LEFT TEXT */}
        <motion.div
          style={{ y: yText }}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-textPrimary">
            Bonjour, je suis <br />
            <span className="text-pink-300">Hana Sellami</span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-textSecondary max-w-lg leading-relaxed">
            Étudiante en génie logiciel, passionnée par le développement web,
            l’IA, les interfaces modernes et l’expérience utilisateur.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-12">
            <a href="/Cv.pdf" download="CV_Hana_Sellami.pdf">
              <button className="px-8 py-4 rounded-full bg-pink-300/50 backdrop-blur-md text-gray-900 font-semibold text-lg border border-pink-300/70 shadow-lg hover:bg-pink-300/70 hover:shadow-xl hover:scale-105 transition-all">
                Télécharger CV 📄
              </button>
            </a>

            <a href="https://www.linkedin.com/in/hanasellami" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 rounded-full bg-purple-300/40 backdrop-blur-md text-gray-900 font-semibold text-lg border border-purple-300/60 shadow-lg hover:bg-purple-300/60 hover:shadow-xl hover:scale-105 transition-all">
                LinkedIn ↗
              </button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          style={{ y: yImage }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex justify-center"
        >
          <motion.img
            src={hanaPhoto}
            alt="Hana Sellami"
            className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl border-4 border-pink-300/60"
            whileHover={{
              scale: 1.06,
              rotate: 2,
              boxShadow: "0 30px 80px rgba(232, 180, 208, 0.4)",
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>

      {/* Petite flèche vers le bas */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-textSecondary"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
