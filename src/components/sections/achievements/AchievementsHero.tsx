"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { HolographicTrophy } from "./HolographicTrophy";
import { Lightbulb, Wrench, Rocket, Compass, X } from "lucide-react";

export function AchievementsHero() {
  const statusItems = [
    { icon: <Lightbulb className="w-4 h-4 text-[#decba4]" />, title: "Curious Mind", desc: "Always Learning" },
    { icon: <Wrench className="w-4 h-4 text-[#decba4]" />, title: "Problem Solver", desc: "Turning Ideas into Solutions" },
    { icon: <Rocket className="w-4 h-4 text-[#decba4]" />, title: "Impact Builder", desc: "Creating Meaningful Tech" },
    { icon: <Compass className="w-4 h-4 text-[#decba4]" />, title: "Future Focused", desc: "Dreaming Big, Building Bigger" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-24 items-center pt-10">
      
      {/* Left: Typography */}
      <div className="flex flex-col items-start z-10 max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-white/50 mb-6 uppercase tracking-widest text-[10px] font-semibold"
        >
          <span className="w-1.5 h-1.5 bg-[#decba4] rounded-sm" />
          <span>My Journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-8"
        >
          Milestones.<br />
          Growth.<br />
          <span className="font-signature text-6xl md:text-7xl lg:text-8xl text-[#decba4] glowing-signature font-normal relative inline-block mt-2">
            Impact.
            <div className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/50 to-transparent" />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-sm leading-relaxed font-light mb-10"
        >
          Every achievement is a step forward.<br/>
          Every challenge is a lesson.<br/>
          Every milestone fuels my purpose.
        </motion.p>
        
        {/* Quote Block */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.3 }}
        >
           <div className="flex items-start gap-4 border-l-2 border-[#decba4]/30 pl-4">
             <span className="text-2xl font-serif text-[#decba4]/40 leading-none mt-1">&quot;</span>
             <p className="text-white/60 text-sm font-light leading-relaxed">
               I don&apos;t just chase success.<br />
               <span className="text-[#decba4]/90">I build it, learn it, and grow with it.</span>
             </p>
           </div>
        </motion.div>
      </div>

      {/* Center: Holographic Trophy */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full max-w-[400px] h-[500px] flex items-center justify-center z-0 mx-auto"
      >
        <HolographicTrophy />
      </motion.div>

      {/* Right: Achievement Status Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full lg:w-[350px] z-10 lg:justify-self-end"
      >
        <GlassCard className="p-6 md:p-8 border-[#decba4]/20 bg-gradient-to-br from-black/60 to-[#3e5151]/10 flex flex-col h-full relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <h3 className="text-[11px] uppercase tracking-widest font-semibold text-white/70">Achievement Status</h3>
            <X className="w-3 h-3 text-white/30" />
          </div>

          {/* List */}
          <div className="flex flex-col gap-6 flex-grow mb-8">
            {statusItems.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group cursor-default">
                <div className="w-8 h-8 rounded-full bg-black/50 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#decba4]/40 group-hover:shadow-[0_0_10px_rgba(222,203,164,0.2)] transition-all">
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">{item.title}</span>
                  <span className="text-xs text-white/40 font-light mt-0.5">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Status Footer */}
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2">
            <span className="text-[10px] text-white/40 font-mono tracking-widest">STATUS:</span>
            <span className="text-[10px] text-[#27c93f] font-mono tracking-widest">ALL SYSTEMS OPERATIONAL</span>
            <div className="w-1.5 h-1.5 bg-[#27c93f] rounded-full animate-pulse ml-auto shadow-[0_0_8px_#27c93f]" />
          </div>
        </GlassCard>
      </motion.div>

    </div>
  );
}
