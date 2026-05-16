"use client";

import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Code2, Trophy, Infinity, Brain } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function QuickGlanceCard() {
  const stats = [
    { icon: GraduationCap, value: "9.5", label: "CGPA" },
    { icon: Code2, value: "15+", label: "Projects Built" },
    { icon: Trophy, value: "5+", label: "Hackathons" },
    { icon: Infinity, value: "∞", label: "Hours of Code" },
    { icon: Brain, value: "AI", label: "Enthusiast" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="h-full relative"
    >
      <GlassCard className="h-full flex flex-col p-8 border-[#decba4]/20 relative overflow-hidden group">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-8">
            <h3 className="text-2xl font-bold text-white">Quick Glance</h3>
            <Sparkles className="w-5 h-5 text-[#decba4]" />
          </div>

          <div className="flex flex-col gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <stat.icon className="w-6 h-6 text-[#decba4]/80 stroke-[1.5]" />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white tracking-wide">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/50 uppercase tracking-wider font-medium">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Wireframe Face Illustration */}
        <div className="absolute right-[-20%] bottom-0 h-[120%] w-[80%] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700">
           {/* Decorative elements representing AI/mind */}
           <div className="absolute right-[20%] top-[30%] w-[200px] h-[300px] border border-[#decba4]/30 rounded-[50%] blur-[1px] transform rotate-12" />
           <div className="absolute right-[10%] top-[20%] w-[150px] h-[250px] border border-white/20 rounded-[50%] blur-[1px] transform -rotate-12" />
           <div className="absolute right-[30%] top-[40%] w-[100px] h-[150px] border border-[#3e5151]/50 rounded-[50%] blur-[2px]" />
           
           {/* Glowing neural nodes */}
           <div className="absolute right-[40%] top-[40%] w-1 h-1 bg-[#decba4] rounded-full shadow-[0_0_10px_#decba4]" />
           <div className="absolute right-[25%] top-[60%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_15px_white]" />
           <div className="absolute right-[45%] top-[70%] w-1 h-1 bg-[#decba4] rounded-full shadow-[0_0_10px_#decba4]" />
        </div>
      </GlassCard>
    </motion.div>
  );
}
