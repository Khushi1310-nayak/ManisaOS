"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function AchievementsFooterStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full relative mt-4"
    >
      <div className="w-full flex items-center justify-between gap-4 py-4 px-6 rounded-full border border-[#decba4]/10 bg-black/40 backdrop-blur-sm relative overflow-hidden group">
        
        {/* Animated Glow Line */}
        <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#decba4]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
        
        {/* Left icon */}
        <div className="w-8 h-8 rounded-full bg-[#decba4]/5 border border-[#decba4]/20 flex items-center justify-center shrink-0">
          <span className="text-[#decba4] text-xs">✦</span>
        </div>

        {/* Text */}
        <p className="text-[11px] md:text-sm text-white/70 font-light tracking-wide text-center truncate">
          Grateful for every opportunity. Excited for every challenge. Committed to every impact.
        </p>

        {/* Right icon */}
        <div className="w-8 h-8 flex items-center justify-center shrink-0">
          <Heart className="w-4 h-4 text-[#decba4]/60" />
        </div>
      </div>
    </motion.div>
  );
}
