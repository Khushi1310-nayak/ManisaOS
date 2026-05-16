"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Rocket, Brain, Terminal, Trophy, Globe } from "lucide-react";

export function ProjectsStatsBar() {
  const stats = [
    { icon: <Rocket className="w-5 h-5" />, value: "15+", label: "Total Projects" },
    { icon: <Brain className="w-5 h-5" />, value: "5+", label: "AI / ML Projects" },
    { icon: <Terminal className="w-5 h-5" />, value: "6+", label: "Full Stack Apps" },
    { icon: <Trophy className="w-5 h-5" />, value: "3+", label: "Hackathon Projects" },
    { icon: <Globe className="w-5 h-5" />, value: "2+", label: "Open Source" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full"
    >
      <GlassCard className="flex flex-wrap items-center justify-around gap-8 p-6 md:p-8 border-[#decba4]/20 bg-black/40 backdrop-blur-xl relative overflow-hidden group">
        {/* Animated holographic line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/40 to-transparent animate-pulse" />
        
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-4 group/stat relative">
            <div className="w-12 h-12 rounded-xl bg-[#decba4]/5 border border-[#decba4]/20 flex items-center justify-center text-[#decba4] group-hover/stat:border-[#decba4]/50 group-hover/stat:shadow-[0_0_15px_rgba(222,203,164,0.3)] transition-all duration-300">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white group-hover/stat:text-[#decba4] transition-colors">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">{stat.label}</span>
            </div>
            {idx < stats.length - 1 && (
              <div className="hidden lg:block w-[1px] h-10 bg-white/5 absolute -right-12" />
            )}
          </div>
        ))}
      </GlassCard>
    </motion.div>
  );
}
