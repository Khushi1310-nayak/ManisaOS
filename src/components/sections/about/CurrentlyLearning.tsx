"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const levels = ["Beginner", "Intermediate", "Advanced"];

const activeNodeClasses = [
  "bg-emerald-400 border-transparent shadow-[0_0_10px_rgba(52,211,153,0.8)]",
  "bg-amber-400 border-transparent shadow-[0_0_10px_rgba(251,191,36,0.8)]",
  "bg-rose-400 border-transparent shadow-[0_0_10px_rgba(251,113,133,0.8)]",
];

const lineColors = [
  "bg-gradient-to-r from-emerald-400 to-amber-400",
  "bg-gradient-to-r from-amber-400 to-rose-400",
];

export function CurrentlyLearning() {
  const topics = [
    { name: "Machine Learning", level: 1, progress: 0 },
    { name: "System Design", level: 0, progress: 0.75 },
    { name: "Advanced DevOps", level: 0, progress: 0.75 },
    { name: "LLM & Agents", level: 1, progress: 0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col p-8 border-[#decba4]/20">
        <h3 className="text-xl font-bold text-white mb-8">Currently Learning</h3>

        <div className="flex flex-col gap-6 flex-1">
          {topics.map((topic, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/80">{topic.name}</span>
                <span 
                  className={`text-xs font-medium uppercase tracking-wider ${
                    topic.level === 0 ? "text-emerald-400/90" :
                    topic.level === 1 ? "text-amber-400/90" :
                    "text-rose-400/90"
                  }`}
                >
                  {levels[topic.level]}
                </span>
              </div>
              
              <div className="flex items-center w-full h-3 mt-1">
                {levels.map((lvl, idx) => {
                  const isActive = idx <= topic.level;
                  const isPast = idx < topic.level;
                  
                  return (
                    <React.Fragment key={idx}>
                      {/* Node */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 + idx * 0.2 }}
                        className={`shrink-0 w-3 h-3 rounded-full border-2 ${
                          isActive 
                            ? activeNodeClasses[idx]
                            : "bg-black/50 border-white/20"
                        }`}
                      />
                      
                      {/* Connecting Line */}
                      {idx < levels.length - 1 && (
                        <div className="flex-1 h-[2px] mx-2 relative bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: isPast ? 1 : (idx === topic.level ? (topic.progress || 0) : 0) }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 + i * 0.1 + idx * 0.2 }}
                            className={`absolute inset-0 origin-left ${lineColors[idx]}`}
                          />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm italic">
            Always a student. Forever learning. <span className="text-[#decba4]">✦</span>
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
