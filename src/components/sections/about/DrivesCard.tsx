"use client";

import { motion } from "framer-motion";
import { Sparkles, Cpu, Globe, TrendingUp, Lightbulb } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function DrivesCard() {
  const drives = [
    {
      icon: Cpu,
      title: "Curiosity",
      desc: "I love exploring new technologies and understanding how things work.",
    },
    {
      icon: Globe,
      title: "Impact",
      desc: "Building solutions that solve real problems and create real value.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      desc: "Constantly learning, evolving and becoming a better version of myself.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      desc: "I believe the best solutions blend logic with imagination.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col p-8 border-[#decba4]/20">
        <div className="flex items-center gap-2 mb-8">
          <h3 className="text-2xl font-bold text-white">What Drives Me</h3>
          <Sparkles className="w-5 h-5 text-[#decba4]" />
        </div>

        <div className="flex flex-col gap-6">
          {drives.map((drive, i) => (
            <div key={i} className="flex gap-4 group cursor-default">
              <div className="mt-1 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#decba4]/50 group-hover:bg-[#decba4]/10 transition-colors duration-500">
                <drive.icon className="w-4 h-4 text-[#decba4]" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1 group-hover:text-[#decba4] transition-colors">{drive.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {drive.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
