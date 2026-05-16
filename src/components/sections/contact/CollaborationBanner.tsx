"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users } from "lucide-react";

export function CollaborationBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full relative group mt-10"
    >
      <GlassCard className="p-8 md:p-12 border-[#decba4]/20 bg-gradient-to-r from-black/60 via-[#3e5151]/10 to-black/60 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-center md:text-left">
        
        {/* Background Visuals */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#decba4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/20 to-transparent pointer-events-none" />
        
        {/* Central Energy Core Animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] pointer-events-none opacity-30 mix-blend-screen flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-[#decba4]/20 border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[60%] h-[60%] rounded-full border border-white/10"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#decba4] rounded-full blur-[2px]" />
          </motion.div>
          <div className="w-4 h-4 bg-[#decba4] rounded-full shadow-[0_0_20px_#decba4]" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-start gap-6 max-w-xl">
          <div className="w-12 h-12 rounded-full bg-black/50 border border-white/10 flex flex-shrink-0 items-center justify-center text-white/70 shadow-[0_0_15px_rgba(0,0,0,0.5)] mt-1 hidden sm:flex">
            <Users className="w-5 h-5 text-[#decba4]" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-white/90 mb-3 tracking-tight">Let&apos;s Collaborate</h3>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              Great ideas start with a conversation.<br className="hidden md:block" /> I&apos;m excited to hear about yours!
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative z-10 w-full md:w-auto">
          <motion.a
            href="#contact-form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group/btn relative px-8 py-4 rounded-full font-medium text-sm flex items-center justify-center gap-2 overflow-hidden border border-[#decba4]/30 shadow-[0_0_20px_rgba(222,203,164,0.1)] hover:shadow-[0_0_30px_rgba(222,203,164,0.3)] transition-all bg-black/40 backdrop-blur-md w-full md:w-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3e5151] to-[#decba4] opacity-20 group-hover/btn:opacity-40 transition-opacity duration-300" />
            <span className="relative z-10 text-white group-hover/btn:text-[#decba4] transition-colors">Let&apos;s Talk</span>
            <span className="relative z-10 text-[#decba4] animate-pulse">✦</span>
          </motion.a>
        </div>

      </GlassCard>
    </motion.div>
  );
}
