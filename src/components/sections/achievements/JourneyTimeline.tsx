"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Rocket, GraduationCap, Server, Cloud, Code, Building2, BrainCircuit, ChevronDown, ChevronUp } from "lucide-react";

export function JourneyTimeline() {
  const [isExpanded, setIsExpanded] = useState(false);

  const allEvents = [
    {
      date: "2024",
      title: "The Beginning",
      desc: "Started my journey in tech with curiosity and a dream to build impactful solutions.",
      icon: <Rocket className="w-5 h-5 text-[#f97316]" />,
      color: "text-[#f97316]",
      bg: "bg-[#f97316]",
      border: "border-[#f97316]/30",
      glow: "from-[#f97316]/20"
    },
    {
      date: "JAN 2025",
      title: "GSSoC Contributor / Mentee",
      desc: "Joined GSSoC, began contributing to open source and learned from amazing mentors.",
      icon: <GraduationCap className="w-5 h-5 text-[#ec4899]" />,
      color: "text-[#ec4899]",
      bg: "bg-[#ec4899]",
      border: "border-[#ec4899]/30",
      glow: "from-[#ec4899]/20"
    },
    {
      date: "FEB 2025",
      title: "Dreamflow Buildathon",
      desc: "Participated in Dreamflow Buildathon by FlutterFlow and built a functional project.",
      icon: <Code className="w-5 h-5 text-[#eab308]" />,
      color: "text-[#eab308]",
      bg: "bg-[#eab308]",
      border: "border-[#eab308]/30",
      glow: "from-[#eab308]/20"
    },
    {
      date: "AUG 2025",
      title: "Tata GenAI Simulation",
      desc: "Completed the GenAI Powered Data Analytics job simulation with Tata × Forage.",
      icon: <BrainCircuit className="w-5 h-5 text-[#a855f7]" />,
      color: "text-[#a855f7]",
      bg: "bg-[#a855f7]",
      border: "border-[#a855f7]/30",
      glow: "from-[#a855f7]/20"
    },
    {
      date: "DEC 2025",
      title: "Startup School & AI Agents",
      desc: "Completed Google Startup School and the 5-Day AI Agents Intensive by Kaggle × Google.",
      icon: <Building2 className="w-5 h-5 text-[#60a5fa]" />,
      color: "text-[#60a5fa]",
      bg: "bg-[#60a5fa]",
      border: "border-[#60a5fa]/30",
      glow: "from-[#60a5fa]/20"
    },
    {
      date: "JAN - FEB 2026",
      title: "Microsoft Azure Internship",
      desc: "Completion of Microsoft Elevate × AICTE Internship. Exploring cloud ecosystems.",
      icon: <Cloud className="w-5 h-5 text-[#3b82f6]" />,
      color: "text-[#3b82f6]",
      bg: "bg-[#3b82f6]",
      border: "border-[#3b82f6]/30",
      glow: "from-[#3b82f6]/20"
    },
    {
      date: "FEB 2026",
      title: "India AI Impact Buildathon",
      desc: "Participated in the AI Impact Summit India 2026 by HCL GUVI.",
      icon: <Rocket className="w-5 h-5 text-[#4ade80]" />,
      color: "text-[#4ade80]",
      bg: "bg-[#4ade80]",
      border: "border-[#4ade80]/30",
      glow: "from-[#4ade80]/20"
    },
    {
      date: "MAY 2026",
      title: "HackerRank Intern / Maincrafts",
      desc: "Completing Software Engineering and AI/ML Internships. Turning theory into impact.",
      icon: <Server className="w-5 h-5 text-[#06b6d4]" />,
      isFuture: true,
      color: "text-[#06b6d4]",
      bg: "bg-[#06b6d4]",
      border: "border-[#06b6d4]/50",
      glow: "from-[#06b6d4]/20"
    }
  ];

  const INITIAL_COUNT = 4;
  const visibleEvents = isExpanded ? allEvents : allEvents.slice(0, INITIAL_COUNT);

  return (
    <div className="w-full flex flex-col gap-6 relative mt-10 z-10">
      <div className="flex items-center gap-2 px-2 mb-4">
        <h3 className="text-sm font-semibold tracking-widest text-white/80 uppercase">My Journey Timeline</h3>
      </div>

      <GlassCard className="p-4 py-12 md:p-12 border-[#decba4]/10 bg-gradient-to-b from-black/60 to-black/20 relative overflow-hidden flex flex-col items-center">
        {/* Central snake line for desktop */}
        <div className="hidden md:block absolute top-12 bottom-24 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#decba4]/50 via-white/10 to-transparent" />
        
        {/* Left line for mobile */}
        <div className="md:hidden absolute top-8 bottom-24 left-[3.25rem] w-[2px] bg-gradient-to-b from-[#decba4]/50 via-white/10 to-transparent" />

        <div className="w-full max-w-4xl flex flex-col gap-12 relative z-10 mt-4">
          <AnimatePresence mode="popLayout">
            {visibleEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`flex items-center w-full relative ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Node */}
                  <div 
                    className={`absolute left-[3.25rem] md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/20 bg-black flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.8)] z-20 ${event.isFuture ? `${event.border} shadow-[0_0_20px_rgba(59,130,246,0.3)]` : ''}`}
                  >
                    {event.icon}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full blur-md z-[-1] ${event.bg}`} />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full pl-24 pr-4 md:px-0 md:w-[45%] flex ${isEven ? "md:pr-12 md:justify-end text-left md:text-right" : "md:pl-12 md:justify-start text-left"}`}>
                    <motion.div 
                      whileHover={{ scale: 1.02, rotate: isEven ? -1 : 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`w-full bg-white/[0.02] border ${event.border} rounded-2xl p-6 backdrop-blur-sm shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/[0.04] transition-colors relative group`}
                    >
                      {/* Connection line from card to center node (Desktop only) */}
                      <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-12 h-[1px] bg-white/20 z-0 ${isEven ? "-right-12" : "-left-12"}`} />
                      
                      {/* Inner glow effect */}
                      <div className={`absolute inset-0 bg-gradient-to-tr ${event.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none`} />

                      <div className={`text-[10px] uppercase tracking-widest font-mono mb-3 ${event.color}`}>
                        {event.date}
                      </div>
                      <h4 className={`text-base font-bold mb-2 ${event.isFuture ? 'text-white' : 'text-white/90'}`}>
                        {event.title}
                      </h4>
                      <p className="text-xs text-white/50 leading-relaxed font-light">
                        {event.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Show More Button */}
        {allEvents.length > INITIAL_COUNT && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 z-20"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#decba4]/30 bg-black/50 text-[#decba4] hover:bg-[#decba4]/10 hover:shadow-[0_0_15px_rgba(222,203,164,0.2)] transition-all group cursor-pointer"
            >
              <span className="text-xs font-bold tracking-widest uppercase">
                {isExpanded ? "Show Less" : "Show More"}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </motion.div>
        )}
      </GlassCard>
    </div>
  );
}


