"use client";

import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const focusNodes = [
  { title: "AI Systems", radius: 45, angle: 0, duration: 35, reverse: false },
  { title: "Full Stack\nDevelopment", radius: 33, angle: 72, duration: 35, reverse: false },
  { title: "Product\nBuilding", radius: 45, angle: 144, duration: 35, reverse: false },
  { title: "UI/UX &\nDesign", radius: 33, angle: 216, duration: 35, reverse: false },
  { title: "Advanced\nComputing", radius: 45, angle: 288, duration: 35, reverse: false },
];

export function CurrentFocus() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col p-8 border-[#decba4]/20 relative overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-4 relative z-20">Current Focus</h3>

        <div className="flex-1 relative flex items-center justify-center w-full min-h-[250px]">
          {/* Ensure the orbit container is a perfect circle by setting aspect-square and a max width/height */}
          <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
            
            {/* Orbit UI - The rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[90%] h-[90%] rounded-full border border-white/5" />
              <div className="absolute w-[66%] h-[66%] rounded-full border border-[#decba4]/10" />
            </div>

            {/* Center Node */}
            <div className="relative z-10 w-16 h-16 rounded-full bg-[#decba4]/10 border border-[#decba4]/30 flex items-center justify-center shadow-[0_0_30px_rgba(222,203,164,0.2)]">
              <Brain className="w-8 h-8 text-[#decba4]" />
            </div>

            {/* Animated Orbiting Nodes */}
            <div className="absolute inset-0 pointer-events-none">
              {focusNodes.map((node, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ rotate: node.angle }}
                  animate={{ rotate: node.angle + (node.reverse ? -360 : 360) }}
                  transition={{ repeat: Infinity, duration: node.duration, ease: "linear" }}
                >
                  <div
                    className="absolute"
                    style={{
                      top: `${50 - node.radius}%`,
                      left: "50%",
                    }}
                  >
                    <motion.div
                      className="flex items-center gap-2 whitespace-nowrap absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-default group"
                      initial={{ rotate: -node.angle }}
                      animate={{ rotate: -(node.angle + (node.reverse ? -360 : 360)) }}
                      transition={{ repeat: Infinity, duration: node.duration, ease: "linear" }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#decba4] shadow-[0_0_10px_#decba4] group-hover:scale-150 transition-transform" />
                      <span className="text-[11px] text-white/70 font-medium leading-tight bg-black/40 px-2 py-1 rounded-md backdrop-blur-md border border-white/10 group-hover:text-white transition-colors text-center">
                        {node.title.split('\n').map((line, idx) => (
                          <span key={idx} className="block">{line}</span>
                        ))}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
