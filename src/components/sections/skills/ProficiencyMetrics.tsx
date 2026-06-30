"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code, BrainCircuit, Settings, User, Monitor, Server, Lightbulb, Bot, Network, Workflow } from "lucide-react";

const getColorConfig = (id: string) => {
  switch(id) {
    case 'frontend': return { text: 'text-[#06b6d4]', shadow: 'drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]', bg: 'bg-[#06b6d4]', from: 'from-transparent via-[#06b6d4] to-transparent' };
    case 'backend': return { text: 'text-[#8b5cf6]', shadow: 'drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]', bg: 'bg-[#8b5cf6]', from: 'from-transparent via-[#8b5cf6] to-transparent' };
    case 'problem': return { text: 'text-[#fbbf24]', shadow: 'drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]', bg: 'bg-[#fbbf24]', from: 'from-transparent via-[#fbbf24] to-transparent' };
    case 'ai': return { text: 'text-[#3b82f6]', shadow: 'drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]', bg: 'bg-[#3b82f6]', from: 'from-transparent via-[#3b82f6] to-transparent' };
    case 'data': return { text: 'text-[#ef4444]', shadow: 'drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]', bg: 'bg-[#ef4444]', from: 'from-transparent via-[#ef4444] to-transparent' };
    case 'system': return { text: 'text-[#10b981]', shadow: 'drop-shadow-[0_0_15px_rgba(16,185,129,0.8)]', bg: 'bg-[#10b981]', from: 'from-transparent via-[#10b981] to-transparent' };
    default: return { text: 'text-white', shadow: '', bg: 'bg-white', from: 'from-transparent via-white to-transparent' };
  }
};

const CircularProgress = ({ percentage, label, delay = 0, id, colors, icon }: { percentage: number, label: string, delay?: number, id: string, colors: string[], icon: React.ReactNode }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4 group h-full">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* SVG Container */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90 scale-110">
          <defs>
             <linearGradient id={`gradient-${id}`} x1="0%" y1="100%" x2="100%" y2="0%">
               <stop offset="0%" stopColor={colors[0]} />
               <stop offset="100%" stopColor={colors[1] || colors[0]} />
             </linearGradient>
          </defs>
          {/* Background Track */}
          <circle
            cx="48"
            cy="48"
            r={radius}
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="6"
            fill="none"
          />
          
          {/* Main Progress Ring (Liquid Fill) */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke={`url(#gradient-${id})`}
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: strokeDashoffset }}
            transition={{ duration: 1.5, delay: delay + 0.5, ease: "easeOut" }}
            style={{ 
              strokeDasharray: circumference,
            }}
            className="drop-shadow-[0_0_12px_rgba(var(--glow-rgb),0.5)]"
          />

          {/* Orbiting Highlight Tip */}
          <motion.circle
            cx="48"
            cy="48"
            r={radius}
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            initial={{ strokeDashoffset: circumference }}
            animate={{ 
              strokeDashoffset: [circumference, strokeDashoffset],
              rotate: [0, 360]
            }}
            transition={{ 
              strokeDashoffset: { duration: 1.5, delay: delay + 0.5, ease: "easeOut" },
              rotate: { duration: 3, repeat: Infinity, ease: "linear" }
            }}
            style={{ 
              strokeDasharray: `2 ${circumference}`,
              transformOrigin: "center",
              filter: "blur(1px)"
            }}
            className="opacity-80 mix-blend-overlay"
          />
        </svg>
        
        {/* Central Icon with Hover Pop Effect */}
        <motion.div 
          whileHover={{ scale: 1.15 }}
          className={`absolute inset-0 flex items-center justify-center z-10 ${getColorConfig(id).shadow} cursor-pointer`}
        >
          <div className={`w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/30 group-hover:bg-white/10 ${getColorConfig(id).text}`}>
            {icon}
          </div>
        </motion.div>


        {/* Atmospheric Glow */}
        <div 
          className={`absolute inset-0 w-full h-full opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity duration-500 ${getColorConfig(id).bg}`}
        />
      </div>
      
      {/* Label with dynamic color indicator */}
      <div className="flex flex-col items-center gap-1.5 mt-auto">
        <div className="min-h-[28px] flex items-center justify-center">
          <span className="text-[10px] text-white/60 text-center max-w-[90px] uppercase tracking-widest font-black leading-tight group-hover:text-white transition-colors">
            {label}
          </span>
        </div>
        <div 
          className={`w-8 h-[1px] rounded-full bg-gradient-to-r ${getColorConfig(id).from}`}
        />
      </div>
    </div>
  );
};

export function ProficiencyMetrics() {
  const metrics = [
    { id: "frontend", label: "Frontend Development", percentage: 70, icon: <Monitor className="w-5 h-5" />, colors: ["#eab308", "#eab308"] }, 
    { id: "backend", label: "Backend Development", percentage: 70, icon: <Server className="w-5 h-5" />, colors: ["#eab308", "#eab308"] },  
    { id: "problem", label: "Problem Solving", percentage: 50, icon: <Lightbulb className="w-5 h-5" />, colors: ["#22c55e", "#eab308"] }, 
    { id: "ai", label: "AI / ML", percentage: 70, icon: <Bot className="w-5 h-5" />, colors: ["#eab308", "#eab308"] }, 
    { id: "data", label: "Data Structures", percentage: 50, icon: <Network className="w-5 h-5" />, colors: ["#22c55e", "#eab308"] }, 
    { id: "system", label: "System Design", percentage: 30, icon: <Workflow className="w-5 h-5" />, colors: ["#22c55e", "#22c55e"] }, 
  ];

  const features = [
    { icon: <Code className="w-5 h-5" />, title: "Clean Code" },
    { icon: <Settings className="w-5 h-5" />, title: "Scalable Systems" },
    { icon: <BrainCircuit className="w-5 h-5" />, title: "AI Solutions" },
    { icon: <User className="w-5 h-5" />, title: "User-Centric Design" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8">
      {/* Left: Circular Metrics */}
      <GlassCard className="p-8 border-[#decba4]/10 bg-black/40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-white/50 mb-8 uppercase tracking-widest text-xs font-semibold"
        >
          <span className="w-2 h-2 bg-[#decba4] rounded-sm" />
          <span>Proficiency Overview</span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex h-full"
            >
              <CircularProgress 
                id={metric.id}
                percentage={metric.percentage} 
                colors={metric.colors}
                icon={metric.icon}
                label={metric.label} 
                delay={idx * 0.1} 
              />
            </motion.div>
          ))}
        </div>
      </GlassCard>

      {/* Right: I Love Working With */}
      <GlassCard className="p-8 border-[#decba4]/10 bg-black/40 lg:w-[400px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-white/50 mb-8 uppercase tracking-widest text-xs font-semibold"
        >
          <span className="w-2 h-2 bg-[#decba4] rounded-sm animate-pulse" />
          <span>I Love Working With</span>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col items-start gap-3 hover:border-[#decba4]/30 hover:bg-[#decba4]/5 transition-all cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-lg bg-black/50 border border-white/10 flex items-center justify-center text-[#decba4] group-hover:shadow-[0_0_15px_rgba(222,203,164,0.2)] transition-all">
                {feature.icon}
              </div>
              <span className="text-white/80 text-sm font-medium">{feature.title}</span>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
