"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

export function ProjectQuote() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative overflow-hidden group"
    >
      <GlassCard className="p-8 border-[#decba4]/20 relative flex flex-col items-start min-h-[350px] justify-between">
        
        <Quote className="w-8 h-8 text-[#decba4]/50 mb-6 rotate-180" />
        
        <div className="relative z-10 flex flex-col gap-4">
          <p className="text-xl leading-relaxed text-white font-light">
            Great code <span className="text-white/50">solves problems.</span>
          </p>
          <p className="text-2xl leading-relaxed text-[#decba4] font-medium drop-shadow-[0_0_10px_rgba(222,203,164,0.3)]">
            Good code creates impact.
          </p>
        </div>

        {/* Abstract / Wireframe Silhouette Background */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity duration-700">
          <div className="absolute bottom-0 right-0 w-full h-full">
            {/* Simple CSS-based geometric structure resembling a human/robot figure */}
            <div className="absolute bottom-0 right-8 w-24 h-48 border-r-2 border-t-2 border-[#decba4]/20 rounded-tr-full transform rotate-12 blur-[1px]" />
            <div className="absolute bottom-10 right-4 w-16 h-32 border-l-2 border-[#decba4]/30 transform -rotate-6" />
            <div className="absolute bottom-20 right-16 w-8 h-8 border border-white/20 rounded-full blur-[2px]" />
            <div className="absolute bottom-32 right-12 w-4 h-4 bg-[#decba4] rounded-full shadow-[0_0_15px_#decba4]" />
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <line x1="80%" y1="60%" x2="60%" y2="80%" stroke="rgba(222,203,164,0.2)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="60%" y1="80%" x2="40%" y2="100%" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </svg>
          </div>
        </div>

      </GlassCard>
    </motion.div>
  );
}
