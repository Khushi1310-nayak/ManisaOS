"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Zap, RefreshCw } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function MyApproach() {
  const steps = [
    {
      icon: Search,
      title: "Understand deeply",
      desc: "I start by understanding the problem from every angle.",
    },
    {
      icon: PenTool,
      title: "Design thoughtfully",
      desc: "I design solutions that are scalable, clean and user-first.",
    },
    {
      icon: Zap,
      title: "Build efficiently",
      desc: "I write clean code and build with performance in mind.",
    },
    {
      icon: RefreshCw,
      title: "Improve continuously",
      desc: "I iterate, learn from feedback and make it better every time.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col p-8 border-[#decba4]/20">
        <h3 className="text-xl font-bold text-white mb-8">My Approach</h3>

        <div className="flex flex-col gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4 group cursor-default">
              <div className="mt-1 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:border-[#decba4]/50 group-hover:bg-[#decba4]/10 transition-colors duration-500">
                <step.icon className="w-4 h-4 text-[#decba4]" />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1 group-hover:text-[#decba4] transition-colors">
                  {step.title}
                </h4>
                <p className="text-white/50 text-sm leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
