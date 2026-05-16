"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Quote } from "lucide-react";

export function QuoteBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.2 }}
      className="w-full mt-8"
    >
      <GlassCard className="relative overflow-hidden p-10 md:p-16 border-[#decba4]/30 shadow-[0_20px_50px_rgba(222,203,164,0.1)] group">
        
        <Quote className="absolute top-10 left-10 w-12 h-12 text-[#decba4]/20 rotate-180" />
        
        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="text-2xl md:text-3xl text-white/80 font-light tracking-wide mb-6">
            I don&apos;t just code for today.
          </p>
          <p className="font-signature text-5xl md:text-7xl text-[#decba4] glowing-signature drop-shadow-lg">
            I build for a future I believe in.
          </p>
        </div>

        {/* Cinematic landscape illustration simulation at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-40 pointer-events-none overflow-hidden">
          {/* Sun/Moon */}
          <div className="absolute right-[15%] bottom-4 w-20 h-20 rounded-full bg-[#decba4] blur-sm shadow-[0_0_50px_#decba4]" />
          
          {/* Mountains/Landscape */}
          <svg viewBox="0 0 1000 100" className="absolute bottom-0 w-full h-auto text-[#050a0a]" preserveAspectRatio="none">
             <path fill="currentColor" d="M0,100 L0,80 L50,60 L150,90 L250,50 L400,100 L500,40 L650,80 L800,20 L900,60 L1000,10 L1000,100 Z" />
             <path fill="var(--color-primary-dark)" opacity="0.5" d="M0,100 L0,85 L80,50 L180,95 L280,45 L420,100 L520,30 L680,85 L820,10 L920,65 L1000,5 L1000,100 Z" />
          </svg>
          
          {/* Silhouette on peak */}
          <div className="absolute bottom-[40px] right-[48%] w-[2px] h-[10px] bg-[#050a0a]" />
          <div className="absolute bottom-[50px] right-[48%] w-[6px] h-[6px] rounded-full bg-[#050a0a] transform -translate-x-1/2" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#decba4]/5 to-transparent pointer-events-none" />
      </GlassCard>
    </motion.div>
  );
}
