"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Globe, 
  Lightbulb, 
  Shield, 
  Blocks, 
  Users, 
  Activity, 
  Network,
  Lock,
  Radar,
  Sparkles,
  Trophy,
  ArrowUpRight
} from "lucide-react";
import { ReactNode } from "react";

interface Achievement {
  badge: string;
  title: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  color: string;
  borderColor: string;
  visual: ReactNode;
}

export function FeaturedAchievements() {
  const achievements: Achievement[] = [
    {
      badge: "OPEN SOURCE",
      title: "GSSoC 2026 Contributor / Mentee",
      description: "Selected for GirlScript Summer of Code 2026. Collaborating on real-world open-source projects while enhancing development and collaboration skills.",
      tags: ["Open Source Galaxy", "GitHub Network", "Contribution Graph"],
      icon: <Globe className="w-5 h-5 text-[#a855f7]" />,
      color: "from-[#a855f7]/20 to-transparent",
      borderColor: "border-[#a855f7]/30",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Contribution Graph Pattern */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className={`w-full h-full rounded-[1px] ${(i * 13) % 7 === 0 ? 'bg-[#a855f7]' : 'bg-white/5'}`} />
            ))}
          </div>
          {/* Floating Nodes */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 w-20 h-20 rounded-full border border-[#a855f7]/30 bg-black/60 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          >
            <Network className="w-10 h-10 text-[#a855f7]" />
            {/* Orbiting fragments */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] pointer-events-none"
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" 
                  style={{ transform: `rotate(${angle}deg) translate(40px)` }}
                />
              </motion.div>
            ))}
          </motion.div>
          {/* Network pulses */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_70%)] animate-pulse" />
        </div>
      )
    },
    {
      badge: "PROFESSIONAL GROWTH",
      title: "McKinsey.org Forward Program",
      description: "Strategic leadership and problem-solving command center. Developing excellence in communication and adaptability alongside a global community.",
      tags: ["Intelligence Core", "Strategic Planning", "Leadership Growth"],
      icon: <Lightbulb className="w-5 h-5 text-[#3b82f6]" />,
      color: "from-[#3b82f6]/20 to-transparent",
      borderColor: "border-[#3b82f6]/30",
      visual: (
        <div className="relative w-full h-full flex flex-col p-4 gap-3 bg-black/40 overflow-hidden">
          {/* Strategic Dashboards */}
          <div className="grid grid-cols-2 gap-2 relative z-10">
            <div className="h-12 rounded-lg bg-white/5 border border-white/10 p-2 flex flex-col justify-between">
              <span className="text-[6px] uppercase tracking-widest text-white/40">Adaptability</span>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "92%" }}
                   className="h-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" 
                 />
              </div>
            </div>
            <div className="h-12 rounded-lg bg-white/5 border border-white/10 p-2 flex items-center justify-center">
              <Radar className="w-6 h-6 text-blue-400 opacity-40 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
          </div>
          {/* Decision Radar */}
          <div className="flex-grow flex items-center justify-center relative z-10">
            <div className="relative w-24 h-24 border border-blue-500/20 rounded-full flex items-center justify-center">
              <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-ping" />
              <Activity className="w-10 h-10 text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              {/* Metric nodes */}
              {[1, 2, 3, 4].map(i => {
                const top = (50 + Math.sin(i * 1.5) * 40).toFixed(2);
                const left = (50 + Math.cos(i * 1.5) * 40).toFixed(2);
                return (
                  <div 
                    key={i} 
                    className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_blue]" 
                    style={{ 
                      top: `${top}%`, 
                      left: `${left}%` 
                    }} 
                  />
                );
              })}
            </div>
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />
        </div>
      )
    },
    {
      badge: "AI & INNOVATION",
      title: "India AI Impact Buildathon 2026",
      description: "Cyber Defense AI Laboratory. Developed an AI Agent Honeypot to analyze malicious behavior and secure digital ecosystems.",
      tags: ["Attack Radar", "Threat Map", "Defense AI"],
      icon: <Shield className="w-5 h-5 text-[#10b981]" />,
      color: "from-[#10b981]/20 to-transparent",
      borderColor: "border-[#10b981]/30",
      visual: (
        <div className="relative w-full h-full p-4 bg-[#050a0a] overflow-hidden flex flex-col gap-3">
          {/* Cyber attack radar */}
          <div className="relative flex-grow flex items-center justify-center">
             <div className="absolute inset-0 border border-emerald-500/20 rounded-full scale-110" />
             <div className="absolute inset-0 border border-emerald-500/10 rounded-full scale-75" />
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-full"
             />
             <div className="relative z-10 flex flex-col items-center">
                <Lock className="w-8 h-8 text-emerald-500 mb-1" />
                <span className="text-[8px] font-mono text-emerald-400 animate-pulse">THREAT_SCAN: OK</span>
             </div>
          </div>
          {/* Live Intrusion Logs */}
          <div className="h-16 bg-black/60 border border-emerald-500/10 rounded-lg p-2 font-mono text-[7px] text-emerald-500/60 overflow-hidden relative">
             <div className="flex flex-col animate-in slide-in-from-bottom duration-500 repeat-infinite">
                <div>{">"} SCANNING SECTOR 04...</div>
                <div>{">"} NO INTRUSION DETECTED</div>
                <div>{">"} AI AGENTS DEPLOYED</div>
                <div>{">"} DEFENSE_LAYER: 100%</div>
             </div>
             <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full bg-emerald-500/40 animate-ping" />
          </div>
        </div>
      )
    },
    {
      badge: "SCHOLAR",
      title: "SheFi Scholar Season 16",
      description: "Luxury Web3 Innovation Sphere. Exploring the elegant fusion of Blockchain, Crypto, and AI technology.",
      tags: ["Web3 Sphere", "Blockchain Nodes", "DeFi Innovation"],
      icon: <Blocks className="w-5 h-5 text-[#ec4899]" />,
      color: "from-[#ec4899]/20 to-transparent",
      borderColor: "border-[#ec4899]/30",
      visual: (
        <div className="relative w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#ec4899]/10 to-transparent overflow-hidden">
          {/* Elegant Blockchain Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-40 h-40 border border-[#ec4899]/20 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 border border-[#ec4899]/10 rounded-full"
          />
          {/* Floating Nodes */}
          <div className="relative z-10 flex items-center justify-center">
             <motion.div 
               animate={{ scale: [1, 1.1, 1], y: [-5, 5, -5] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="w-16 h-16 rounded-2xl bg-black/60 border border-[#ec4899]/30 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(236,72,153,0.3)]"
             >
                <Blocks className="w-8 h-8 text-[#ec4899]" />
             </motion.div>
             {/* Small satellites */}
             {[0, 90, 180, 270].map(angle => (
               <motion.div
                 key={angle}
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 pointer-events-none"
               >
                 <div 
                   className="w-2 h-2 rounded-full bg-white/20 border border-[#ec4899]/40" 
                   style={{ transform: `rotate(${angle}deg) translate(35px)` }} 
                 />
               </motion.div>
             ))}
          </div>
          <Sparkles className="absolute top-4 right-4 w-4 h-4 text-[#ec4899]/40 animate-pulse" />
        </div>
      )
    },
    {
      badge: "OPEN SOURCE",
      title: "SSOC Season 5 Contributor",
      description: "Developer Collaboration Nexus. Building impactful open-source projects alongside mentors and global developers.",
      tags: ["Collab Nexus", "Community Growth", "Nexus Pulse"],
      icon: <Users className="w-5 h-5 text-[#6366f1]" />,
      color: "from-[#6366f1]/20 to-transparent",
      borderColor: "border-[#6366f1]/30",
      visual: (
        <div className="relative w-full h-full p-4 bg-[#0a0a1f] overflow-hidden flex flex-col gap-4">
          {/* Collaboration Network */}
          <div className="relative h-24 flex items-center justify-center">
             <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%">
                   <line x1="20%" y1="20%" x2="80%" y2="80%" stroke="#6366f1" strokeWidth="1" />
                   <line x1="80%" y1="20%" x2="20%" y2="80%" stroke="#6366f1" strokeWidth="1" />
                   <circle cx="50%" cy="50%" r="30" stroke="#6366f1" strokeWidth="1" fill="none" />
                </svg>
             </div>
             <motion.div 
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-12 h-12 rounded-full bg-[#6366f1]/20 border border-[#6366f1]/50 flex items-center justify-center"
             >
                <Users className="w-6 h-6 text-[#6366f1]" />
             </motion.div>
          </div>
          {/* Leaderboard Hologram snippet */}
          <div className="space-y-2 relative z-10">
             {[1, 2, 3].map(i => (
               <div key={i} className="h-6 rounded bg-white/5 border border-white/10 flex items-center justify-between px-3">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#6366f1]/40" />
                     <div className="w-12 h-1.5 bg-white/10 rounded-full" />
                  </div>
                  <div className="w-6 h-1.5 bg-indigo-500/40 rounded-full" />
               </div>
             ))}
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0%,transparent_80%)]" />
        </div>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex items-center gap-3 px-2">
        <div className="w-10 h-10 rounded-xl bg-black/40 border border-[#decba4]/20 flex items-center justify-center shadow-[0_0_15px_rgba(222,203,164,0.1)]">
          <Trophy className="w-5 h-5 text-[#decba4]" />
        </div>
        <div className="flex flex-col">
          <h3 className="text-sm font-bold tracking-[0.3em] text-white uppercase">Featured Archive</h3>
          <span className="text-[9px] text-[#decba4] font-bold uppercase tracking-widest opacity-60">Verified Milestones</span>
        </div>
      </div>

      <div className="w-full overflow-x-auto pb-10 hide-scrollbar snap-x snap-mandatory touch-pan-x">
        <div className="flex gap-6 w-max px-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="w-[85vw] sm:w-[320px] md:w-[380px] shrink-0 snap-center h-full"
            >
              <GlassCard className={`p-0 border ${item.borderColor} bg-gradient-to-br from-black to-[#050a0a] h-[480px] md:h-[520px] flex flex-col relative overflow-hidden group hover:shadow-[0_0_40px_rgba(222,203,164,0.05)] transition-all duration-500`}>

                
                {/* Visual Header Area */}
                <div className="h-64 relative border-b border-white/5 overflow-hidden">
                  {item.visual}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
                  
                  {/* Category Badge on Visual */}
                  <div className="absolute top-6 left-6 z-20">
                    <span className={`px-3 py-1 text-[9px] font-black tracking-widest uppercase text-white rounded-md border ${item.borderColor} bg-black/60 backdrop-blur-xl shadow-lg`}>
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col gap-4 relative z-10 flex-grow bg-gradient-to-b from-black/20 to-transparent">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-white group-hover:text-[#decba4] transition-colors leading-tight">{item.title}</h4>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#decba4]/30 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  
                  <p className="text-xs text-white/50 font-light leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-3 mt-auto">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[9px] text-white/40 font-bold uppercase tracking-wider group-hover:border-[#decba4]/20 group-hover:text-white/60 transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-1 h-20 bg-gradient-to-b from-[#decba4]/20 to-transparent" />
                <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-l from-[#decba4]/20 to-transparent" />
                
                <motion.div 
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-[#decba4]" />
                </motion.div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
