"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Rocket, Brain } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function JourneyCard() {
  const timelinePreview = [
    {
      date: "2024",
      title: "The Beginning",
      desc: "Started my journey in tech with curiosity and a dream to build impactful solutions.",
      icon: <Rocket className="w-3.5 h-3.5 text-[#decba4]" />,
      color: "text-[#decba4]",
      bg: "bg-[#decba4]/10",
      border: "border-[#decba4]/30",
      glow: "group-hover/item:shadow-[0_0_15px_#decba4]"
    },
    {
      date: "DEC 2025",
      title: "Startup School & AI Agents",
      desc: "Completed Google Startup School and Kaggle × Google AI Agents.",
      icon: <Brain className="w-3.5 h-3.5 text-emerald-400" />,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/30",
      glow: "group-hover/item:shadow-[0_0_15px_#34d399]"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col p-8 border-[#decba4]/20 relative overflow-hidden group">
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-center gap-2 mb-6">
            <h3 className="text-2xl font-bold text-white">My Journey So Far</h3>
            <Sparkles className="w-5 h-5 text-[#decba4]" />
          </div>
          
          <p className="text-white/70 leading-relaxed font-light mb-8">
            Every line of code I write, every project I build, and every problem I solve is a step towards creating a better, smarter, and kinder future through technology.
          </p>

          <div className="relative flex flex-col gap-6 mb-auto pl-2">
            {/* Vertical Line */}
            <div className="absolute left-[1.35rem] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#decba4]/50 via-white/10 to-transparent" />
            
            {timelinePreview.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative flex gap-4 group/item"
              >
                {/* Node */}
                <div className={`relative z-10 w-8 h-8 rounded-full border ${item.border} ${item.bg} backdrop-blur-sm flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(0,0,0,0.5)] ${item.glow} transition-shadow duration-300`}>
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className="flex flex-col pt-1">
                  <span className={`text-[9px] font-mono font-bold tracking-widest uppercase mb-1 ${item.color}`}>
                    {item.date}
                  </span>
                  <span className="text-sm font-semibold text-white/90 mb-0.5">
                    {item.title}
                  </span>
                  <span className="text-xs text-white/50 leading-relaxed max-w-[90%]">
                    {item.desc}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a 
            href="#experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center gap-2 text-sm text-[#decba4] hover:text-[#decba4]/80 transition-colors group/btn inline-flex w-fit font-semibold tracking-wide uppercase relative z-20 cursor-pointer"
          >
            View full timeline 
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Artistic Illustration/Background */}
        <div className="absolute bottom-0 left-0 right-0 h-48 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
          <div className="absolute bottom-0 w-full h-[1px] bg-[#decba4]/30 shadow-[0_0_20px_#decba4]" />
          <div className="absolute bottom-0 left-[20%] w-[1px] h-32 bg-gradient-to-t from-[#decba4]/40 to-transparent" />
          <div className="absolute bottom-0 left-[40%] w-[1px] h-20 bg-gradient-to-t from-[#decba4]/30 to-transparent" />
          <div className="absolute bottom-0 left-[70%] w-[1px] h-40 bg-gradient-to-t from-[#decba4]/50 to-transparent" />
          <div className="absolute bottom-0 right-[10%] w-[1px] h-24 bg-gradient-to-t from-[#decba4]/30 to-transparent" />
          
          <div className="absolute bottom-0 w-full h-24 bg-[linear-gradient(to_top,rgba(222,203,164,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(222,203,164,0.05)_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] origin-bottom" />
        </div>
      </GlassCard>
    </motion.div>
  );
}
