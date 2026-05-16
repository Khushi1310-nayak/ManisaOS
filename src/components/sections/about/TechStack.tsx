/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

// We'll use lucide icons as placeholders for technology logos since we don't have SVGs,
// but in a real scenario we'd use simple SVGs or images. Let's use simple text/styled nodes.
export function TechStack() {
  const techs = [
    { name: "React", short: "Re" },
    { name: "Next.js", short: "Nx" },
    { name: "TypeScript", short: "TS" },
    { name: "Node.js", short: "No" },
    { name: "MongoDB", short: "Mo" },
    { name: "Python", short: "Py" },
    { name: "Tailwind CSS", short: "Tw" },
    { name: "Firebase", short: "Fb" },
    { name: "Git", short: "Gt" },
    { name: "Docker", short: "Dk" },
    { name: "Google Cloud", short: "Gc" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="w-full"
    >
      <GlassCard className="p-8 border-[#decba4]/20 overflow-hidden relative">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-white">Technologies I Work With</h3>
            <Sparkles className="w-5 h-5 text-[#decba4]" />
          </div>
          <button className="text-sm text-white/50 hover:text-white border border-white/10 px-4 py-1.5 rounded-full transition-colors">
            View All
          </button>
        </div>

        <div className="flex flex-wrap gap-8 justify-between items-center relative z-10">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#decba4]/50 group-hover:bg-[#decba4]/10 transition-all duration-300 group-hover:scale-110 shadow-[0_0_15px_transparent] group-hover:shadow-[0_0_20px_rgba(222,203,164,0.2)]">
                {/* Simulated Icon */}
                <span className="text-xl font-bold text-white/70 group-hover:text-[#decba4] font-mono">
                  {tech.short}
                </span>
              </div>
              <span className="text-xs text-white/50 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
