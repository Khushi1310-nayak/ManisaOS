"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Rocket, Trophy, Award, Briefcase, Code2, BrainCircuit, Cloud } from "lucide-react";

export function StatsPanel() {
  const stats = [
    { icon: <Rocket className="w-5 h-5 text-[#decba4]" />, count: "15+", label: "Projects Built" },
    { icon: <Trophy className="w-5 h-5 text-[#decba4]" />, count: "5+", label: "Hackathons" },
    { icon: <Award className="w-5 h-5 text-[#decba4]" />, count: "11+", label: "Certifications" },
    { icon: <Briefcase className="w-5 h-5 text-[#decba4]" />, count: "3+", label: "Internships" },
    { icon: <Code2 className="w-5 h-5 text-[#decba4]" />, count: "</>", label: "Open Source Contributor", isText: true },
    { icon: <BrainCircuit className="w-5 h-5 text-[#decba4]" />, count: "AI/ML", label: "Developer", isText: true },
    { icon: <Cloud className="w-5 h-5 text-[#decba4]" />, count: "Cloud", label: "Enthusiast", isText: true },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full relative"
    >
      <GlassCard className="p-6 md:p-8 border-[#decba4]/20 bg-gradient-to-r from-black/80 via-[#3e5151]/20 to-black/80 relative overflow-hidden flex items-center justify-between overflow-x-auto hide-scrollbar gap-8 md:gap-12">
        {/* Background glow lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/10 to-transparent" />
        
        {stats.map((stat, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0 group">
            <div className="w-12 h-12 rounded-lg bg-black/60 border border-[#decba4]/10 flex flex-shrink-0 items-center justify-center shadow-[0_0_15px_rgba(222,203,164,0.05)] group-hover:border-[#decba4]/40 group-hover:shadow-[0_0_20px_rgba(222,203,164,0.2)] transition-all duration-300">
              {stat.icon}
            </div>
            <div className="flex flex-col">
              <span className={`text-xl md:text-2xl font-bold text-white/90 group-hover:text-white transition-colors ${stat.isText ? 'text-lg md:text-xl' : ''}`}>
                {stat.count}
              </span>
              <span className="text-[10px] text-white/50 uppercase tracking-widest font-medium mt-0.5 max-w-[100px] leading-tight">
                {stat.label}
              </span>
            </div>
            {idx < stats.length - 1 && (
              <div className="w-[1px] h-10 bg-white/10 ml-8 md:ml-12" />
            )}
          </div>
        ))}
      </GlassCard>
    </motion.div>
  );
}
