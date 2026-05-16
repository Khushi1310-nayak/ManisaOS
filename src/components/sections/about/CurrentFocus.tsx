"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function CurrentFocus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col p-8 border-[#decba4]/20 relative overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-8">Current Focus</h3>

        <div className="flex-1 relative flex items-center justify-center min-h-[250px]">
          {/* Orbit UI */}
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-[80%] h-[80%] rounded-full border border-white/5 animate-[spin_40s_linear_infinite]" />
             <div className="absolute w-[60%] h-[60%] rounded-full border border-[#decba4]/10 animate-[spin_20s_linear_infinite_reverse]" />
          </div>

          {/* Center Node */}
          <div className="relative z-10 w-16 h-16 rounded-full bg-[#decba4]/10 border border-[#decba4]/30 flex items-center justify-center shadow-[0_0_30px_rgba(222,203,164,0.2)]">
             <Brain className="w-8 h-8 text-[#decba4]" />
          </div>

          {/* Orbiting Nodes (Simulated with absolute positioning for visual matching) */}
          <div className="absolute top-[10%] left-[50%] -translate-x-1/2 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#decba4] shadow-[0_0_10px_#decba4]" />
            <span className="text-xs text-white/70">AI Systems</span>
          </div>
          
          <div className="absolute top-[40%] right-[10%] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#decba4] shadow-[0_0_10px_#decba4]" />
            <span className="text-xs text-white/70">Full Stack<br/>Development</span>
          </div>

          <div className="absolute bottom-[20%] right-[20%] flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#decba4] shadow-[0_0_10px_#decba4]" />
            <span className="text-xs text-white/70">Product<br/>Building</span>
          </div>

          <div className="absolute bottom-[10%] left-[20%] flex items-center gap-2 flex-row-reverse">
            <div className="w-2 h-2 rounded-full bg-[#decba4] shadow-[0_0_10px_#decba4]" />
            <span className="text-xs text-white/70">UI/UX & Design</span>
          </div>

          <div className="absolute top-[40%] left-[10%] flex items-center gap-2 flex-row-reverse">
            <div className="w-2 h-2 rounded-full bg-[#decba4] shadow-[0_0_10px_#decba4]" />
            <span className="text-xs text-white/70 text-right">Advanced<br/>Computing</span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
