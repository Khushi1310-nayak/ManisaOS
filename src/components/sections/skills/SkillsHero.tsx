"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { HolographicCore3D } from "./HolographicCore3D";

export function SkillsHero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center pt-10">
      {/* Left: Typography */}
      <div className="flex flex-col items-start z-10 max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-white/50 mb-4 uppercase tracking-widest text-xs font-semibold"
        >
          <span className="w-2 h-2 bg-[#decba4] rounded-sm" />
          <span>My Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
        >
          Skills That <br />
          Build <span className="font-signature text-6xl md:text-8xl text-[#decba4] glowing-signature font-normal ml-2">Impact.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-base leading-relaxed font-light"
        >
          A blend of engineering, creativity, and problem-solving. I build intelligent systems and beautiful digital experiences that create real-world value.
        </motion.p>
        
        {/* Quote Block */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="mt-8 border-l-2 border-[#decba4]/50 pl-4 py-1"
        >
           <p className="text-[#decba4] font-medium text-sm flex items-center gap-2">
             <span className="text-2xl opacity-50">&quot;</span>
             Continuous learner. Problem solver. Future builder.
           </p>
        </motion.div>
      </div>

      {/* Center: Holographic Core */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative w-full max-w-[300px] h-[300px] md:w-[400px] md:h-[400px] mx-auto z-0 flex items-center justify-center"
      >
        <HolographicCore3D />
      </motion.div>

      {/* Right: Developer Code Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full z-10 lg:ml-auto max-w-sm"
      >
        <GlassCard className="p-5 border-[#decba4]/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-[#050a0a]/60 backdrop-blur-xl font-mono text-[11px] md:text-xs">
          {/* Mac window dots */}
          <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>
          </div>
          
          <div className="text-white/40 mb-3">
            <span className="text-[#3e5151]">{'// Manisa\'s Core'}</span>
          </div>
          
          <div className="space-y-1.5 text-white/80">
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">1</span><span><span className="text-[#a0a0a0]">const</span> <span className="text-[#decba4]">developer</span> = {'{'}</span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">2</span><span className="ml-4">name: <span className="text-[#decba4]">&quot;Manisa Nayak&quot;</span>,</span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">3</span><span className="ml-4">passion: [<span className="text-[#decba4]">&quot;AI&quot;</span>, <span className="text-[#decba4]">&quot;Web&quot;</span>, <span className="text-[#decba4]">&quot;Productivity&quot;</span>],</span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">4</span><span className="ml-4">focus: <span className="text-[#decba4]">&quot;Building impactful solutions&quot;</span>,</span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">5</span><span className="ml-4">skills: <span className="text-[#decba4]">&quot;Full Stack + AI/ML&quot;</span>,</span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">6</span><span className="ml-4">goal: <span className="text-[#decba4]">&quot;Microsoft&quot;</span>,</span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">7</span><span className="ml-4">motto: <span className="text-[#decba4]">&quot;Code. Create. Impact.&quot;</span></span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">8</span><span>{'};'}</span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">9</span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">10</span><span>developer.<span className="text-[#decba4]">buildTheFuture</span>();</span></div>
            <div className="flex mt-3 mb-1"><span className="text-[#decba4] w-4 opacity-50">11</span><span className="text-[#3e5151]">{'// Let\'s create something extraordinary ✦'}</span></div>
            <div className="flex"><span className="text-[#decba4] w-4 opacity-50">12</span><span className="text-[#decba4] animate-pulse">L</span></div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
