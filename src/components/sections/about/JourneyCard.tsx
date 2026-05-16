"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function JourneyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col p-8 border-[#decba4]/20 relative overflow-hidden group">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-2xl font-bold text-white">My Journey So Far</h3>
            <Sparkles className="w-5 h-5 text-[#decba4]" />
          </div>
          
          <p className="text-white/70 leading-relaxed font-light mb-12 relative z-10">
            Every line of code I write, every project I build, and every problem I solve is a step towards creating a better, smarter, and kinder future through technology.
          </p>
        </div>

        {/* Artistic Illustration/Background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
          {/* We'll simulate the architectural lines using a CSS gradient/SVG trick or just soft glows if no image is present. 
              Let's create a beautiful abstract horizon glow to match the vibe. */}
          <div className="absolute bottom-0 w-full h-[1px] bg-[#decba4]/30 shadow-[0_0_20px_#decba4]" />
          <div className="absolute bottom-0 left-[20%] w-[1px] h-32 bg-gradient-to-t from-[#decba4]/40 to-transparent" />
          <div className="absolute bottom-0 left-[40%] w-[1px] h-20 bg-gradient-to-t from-[#decba4]/30 to-transparent" />
          <div className="absolute bottom-0 left-[70%] w-[1px] h-40 bg-gradient-to-t from-[#decba4]/50 to-transparent" />
          <div className="absolute bottom-0 right-[10%] w-[1px] h-24 bg-gradient-to-t from-[#decba4]/30 to-transparent" />
          
          {/* Subtle grid base */}
          <div className="absolute bottom-0 w-full h-24 bg-[linear-gradient(to_top,rgba(222,203,164,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(222,203,164,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom" />
        </div>
      </GlassCard>
    </motion.div>
  );
}
