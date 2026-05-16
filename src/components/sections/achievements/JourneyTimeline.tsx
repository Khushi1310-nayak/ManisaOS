"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Rocket, GraduationCap, Server, Cloud, Code, Building2, BrainCircuit } from "lucide-react";

export function JourneyTimeline() {
  const events = [
    {
      date: "2024",
      title: "The Beginning",
      desc: "Started my journey in tech with curiosity and a dream to build impactful solutions.",
      icon: <Rocket className="w-5 h-5 text-white/70" />
    },
    {
      date: "JAN 2025",
      title: "GSSoC Contributor / Mentee",
      desc: "Joined GSSoC, began contributing to open source and learned from amazing mentors.",
      icon: <GraduationCap className="w-5 h-5 text-white/70" />,
      color: "text-[#ec4899]",
      bg: "bg-[#ec4899]"
    },
    {
      date: "FEB 2025",
      title: "Dreamflow Buildathon",
      desc: "Participated in Dreamflow Buildathon by FlutterFlow and built a functional project.",
      icon: <Code className="w-5 h-5 text-white/70" />
    },
    {
      date: "AUG 2025",
      title: "Tata GenAI Simulation",
      desc: "Completed the GenAI Powered Data Analytics job simulation with Tata × Forage.",
      icon: <BrainCircuit className="w-5 h-5 text-white/70" />
    },
    {
      date: "DEC 2025",
      title: "Startup School & AI Agents",
      desc: "Completed Google Startup School and the 5-Day AI Agents Intensive by Kaggle × Google.",
      icon: <Building2 className="w-5 h-5 text-white/70" />,
      color: "text-blue-400",
      bg: "bg-blue-400"
    },
    {
      date: "JAN - FEB 2026",
      title: "Microsoft Azure Internship",
      desc: "Completion of Microsoft Elevate × AICTE Internship. Exploring cloud ecosystems.",
      icon: <Cloud className="w-5 h-5 text-[#3b82f6]" />,
      color: "text-[#3b82f6]",
      bg: "bg-[#3b82f6]"
    },
    {
      date: "FEB 2026",
      title: "India AI Impact Buildathon",
      desc: "Participated in the AI Impact Summit India 2026 by HCL GUVI.",
      icon: <Rocket className="w-5 h-5 text-green-400" />,
      color: "text-green-400",
      bg: "bg-green-400"
    },
    {
      date: "MAY 2026",
      title: "HackerRank Intern / Maincrafts",
      desc: "Completing Software Engineering and AI/ML Internships. Turning theory into impact.",
      icon: <Server className="w-5 h-5 text-white/70" />,
      isFuture: true
    }
  ];

  return (
    <div className="w-full flex flex-col gap-6 relative mt-10">
      <div className="flex items-center gap-2 px-2 mb-4">
        <h3 className="text-sm font-semibold tracking-widest text-white/80 uppercase">My Journey Timeline</h3>
      </div>

      <GlassCard className="p-8 md:p-12 border-[#decba4]/10 bg-gradient-to-r from-black/40 via-black/20 to-black/40 relative overflow-hidden overflow-x-auto hide-scrollbar">
        {/* Horizontal Line Connector */}
        <div className="absolute top-[100px] left-0 w-max min-w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
        
        <div className="flex gap-12 w-max min-w-full px-4">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col relative z-10 w-[200px] ${event.isFuture ? 'opacity-90' : 'opacity-70'} hover:opacity-100 transition-opacity`}
            >
              {/* Top Text (Date) */}
              <div className={`text-[10px] uppercase tracking-widest font-mono mb-6 ${event.color || 'text-white/40'}`}>
                {event.date}
              </div>

              {/* Node / Icon */}
              <div className="relative mb-8">
                <div className={`w-12 h-12 rounded-full border border-white/20 bg-black/80 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${event.isFuture ? 'border-[#3b82f6]/50 shadow-[0_0_20px_rgba(59,130,246,0.2)]' : ''}`}>
                  {event.icon}
                </div>
                {/* Glowing dot underneath */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full blur-md z-0 ${event.bg || 'bg-white/20'}`} />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h4 className={`text-sm font-semibold ${event.isFuture ? 'text-white' : 'text-white/90'}`}>
                  {event.title}
                </h4>
                <p className="text-[11px] text-white/50 leading-relaxed font-light">
                  {event.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}


