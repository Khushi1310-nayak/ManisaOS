"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

export function CurrentlyLearning() {
  const topics = [
    { name: "Machine Learning", progress: 85 },
    { name: "System Design", progress: 70 },
    { name: "Advanced DevOps", progress: 60 },
    { name: "LLM & Agents", progress: 80 },
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
            <div key={i} className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-white/80">{topic.name}</span>
                <span className="text-white/50">{topic.progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${topic.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.8 + i * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#3e5151] to-[#decba4] relative"
                >
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                </motion.div>
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
