"use client";

import { motion } from "framer-motion";

export function TechStrip() {
  return (
    <div className="flex flex-col -mt-8 md:-mt-12 pb-10">
      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center pt-10 border-t border-white/5 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/20 to-transparent" />
        
        <h3 className="text-xl md:text-2xl text-white/80 font-light tracking-wide flex items-center justify-center gap-4">
          <span className="text-[#decba4]/40 text-4xl leading-none">&quot;</span>
          <span>Skills are the tools. Creativity is the power. <span className="text-[#decba4]">Impact is the goal.</span></span>
          <span className="text-[#decba4]/40 text-4xl leading-none">&quot;</span>
        </h3>
        <p className="mt-4 font-signature text-3xl text-[#3e5151] glowing-signature drop-shadow-[0_0_10px_rgba(62,81,81,0.5)]">
          - Manisa Nayak
        </p>
      </motion.div>
    </div>
  );
}
