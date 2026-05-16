"use client";

import { motion } from "framer-motion";

export function ProjectsHero() {
  return (
    <div className="text-center relative z-10 max-w-4xl mx-auto">
      {/* Small Badge-like label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-2 text-[#decba4]/70 mb-8 uppercase tracking-[0.3em] text-[10px] font-bold"
      >
        <div className="w-1.5 h-1.5 bg-[#decba4] rounded-full animate-pulse" />
        EXPLORE MY WORK
        <div className="w-1.5 h-1.5 bg-[#decba4] rounded-full animate-pulse" />
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8"
      >
        Projects. Solutions.<br />
        <span className="font-signature text-7xl md:text-9xl text-[#decba4] glowing-signature inline-block mt-4">
          Impact.
        </span>
      </motion.h2>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto"
      >
        Real-world solutions crafted with creativity, code, and a passion for meaningful impact.
      </motion.p>
      
      {/* Ambient particles background element */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full h-[300px] pointer-events-none opacity-20">
         <div className="absolute inset-0 bg-gradient-to-b from-[#decba4]/20 via-transparent to-transparent blur-[100px]" />
      </div>
    </div>
  );
}
