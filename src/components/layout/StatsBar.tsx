"use client";

import { Code2, Trophy, GraduationCap, Brain, Heart } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";

export function StatsBar() {
  const stats = [
    { icon: Code2, value: "15+", label: "Projects" },
    { icon: Trophy, value: "5+", label: "Hackathons" },
    { icon: GraduationCap, value: "9.5", label: "CGPA" },
    { icon: Brain, value: "AI", label: "Expert" },
    { icon: Heart, value: "∞", label: "Passion" },
  ];

  return (
    <div className="absolute bottom-6 md:bottom-12 left-0 right-0 px-4 md:px-6 max-w-7xl mx-auto z-40">
      <GlassCard className="py-4 md:py-6 px-4 md:px-10 border-[#decba4]/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row items-center justify-between gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 md:gap-4 relative group"
            >
              {/* Divider (Desktop Only) */}
              {index !== 0 && (
                <div className="absolute -left-10 h-8 w-px bg-white/10 hidden lg:block" />
              )}
              
              <div className="p-2 rounded-lg bg-[#decba4]/5 group-hover:bg-[#decba4]/10 transition-colors">
                <stat.icon className="w-5 h-5 md:w-7 md:h-7 text-[#decba4]/80 stroke-[1.5]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-2xl font-bold text-white tracking-tight leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[9px] md:text-xs text-white/40 uppercase tracking-widest font-bold">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
