"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { HolographicGlobe3D } from "./HolographicGlobe3D";
import { Send } from "lucide-react";

export function ContactHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
      {/* Left: Typography */}
      <div className="flex flex-col items-start z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-white/50 mb-4 uppercase tracking-widest text-[10px] font-semibold"
        >
          <span className="w-1.5 h-1.5 bg-[#decba4] rounded-sm" />
          <span>Get In Touch</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight mb-8"
        >
          Let&apos;s Build <br />
          Something <br />
          <span className="font-signature text-6xl md:text-8xl lg:text-9xl text-[#decba4] glowing-signature font-normal relative inline-block mt-2">
            Amazing.
            <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#decba4]/50 to-transparent" />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-sm leading-relaxed font-light max-w-md"
        >
          I&apos;m always open to exciting opportunities, meaningful collaborations, and innovative ideas. Whether you have a project, partnership, or just want to say hello, I&apos;d love to connect!
        </motion.p>
        
        {/* Quote Block */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="mt-10"
        >
           <GlassCard className="p-5 border-[#decba4]/20 bg-gradient-to-r from-black/40 to-transparent relative overflow-hidden group w-max">
             <div className="absolute inset-0 bg-gradient-to-r from-[#decba4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="flex items-center gap-4 relative z-10">
               <span className="text-3xl font-serif text-[#decba4]/40 leading-none">&quot;</span>
               <p className="text-white/80 text-sm font-light">
                 Great connections create <br /> great innovations.
               </p>
               <Send className="w-4 h-4 text-[#decba4] opacity-50 ml-6 -rotate-45" />
             </div>
           </GlassCard>
        </motion.div>
      </div>

      {/* Right: Holographic Globe & Skyline */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full h-[500px] flex items-center justify-center z-0"
      >
        <HolographicGlobe3D />
      </motion.div>
    </div>
  );
}
