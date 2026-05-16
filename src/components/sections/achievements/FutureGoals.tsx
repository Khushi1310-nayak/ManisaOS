"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2 } from "lucide-react";

export function FutureGoals() {
  const goals = [
    "Build more AI-powered products",
    "Contribute to more open source",
    "Explore Advanced AI & Systems",
    "Intern at impactful tech companies",
    "Keep learning, growing, and inspiring"
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8 mt-10">
      
      {/* Left: Cinematic Quote */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative h-full min-h-[300px]"
      >
        <GlassCard className="p-8 md:p-12 border-[#decba4]/10 bg-gradient-to-br from-black/80 to-[#3e5151]/20 h-full relative overflow-hidden flex flex-col justify-center">
          {/* Skyline sketch background */}
          <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10 pointer-events-none">
             <svg viewBox="0 0 400 100" className="w-full h-full stroke-[#decba4]" fill="none" strokeWidth="0.5" preserveAspectRatio="none">
               <path d="M 0 100 L 0 50 L 20 50 L 20 70 L 40 70 L 40 40 L 60 40 L 60 80 L 90 80 L 90 30 L 120 30 L 120 60 L 150 60 L 150 10 L 180 10 L 180 50 L 220 50 L 220 20 L 250 20 L 250 70 L 280 70 L 280 40 L 310 40 L 310 80 L 340 80 L 340 50 L 370 50 L 370 100" />
             </svg>
          </div>
          
          <div className="relative z-10 flex flex-col gap-6">
            <span className="text-4xl md:text-5xl lg:text-6xl text-[#decba4]/20 font-serif leading-none absolute -top-8 -left-4">
              &quot;
            </span>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-tight">
              The future belongs to those <br className="hidden md:block" />
              who build it today.
            </h3>
            <div className="text-4xl md:text-5xl lg:text-6xl font-signature text-[#decba4] glowing-signature -rotate-2 mt-2">
              I&apos;m just getting started.
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Right: What's Next Checklist */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-full"
      >
        <GlassCard className="p-8 border-[#decba4]/10 bg-gradient-to-br from-black/40 to-black/20 h-full flex flex-col">
          <h3 className="text-sm font-semibold tracking-widest text-white/80 uppercase mb-8">What&apos;s Next?</h3>
          
          <div className="flex flex-col gap-4 flex-grow z-10 relative">
            {goals.map((goal, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-0.5 relative flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-[#decba4]/50 group-hover:text-[#decba4] transition-colors relative z-10" />
                  <div className="absolute inset-0 bg-[#decba4] rounded-full blur-[4px] opacity-0 group-hover:opacity-40 transition-opacity" />
                </div>
                <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors font-light">
                  {goal}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Abstract Target Hologram */}
          <div className="absolute bottom-4 right-4 w-32 h-32 opacity-20 pointer-events-none mix-blend-screen overflow-hidden">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-[#decba4]/40 border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-[#decba4]/60"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#decba4] rounded-full blur-[2px]" />
          </div>
        </GlassCard>
      </motion.div>

    </div>
  );
}
