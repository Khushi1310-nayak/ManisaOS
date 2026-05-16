"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code, BrainCircuit, Settings, User } from "lucide-react";
import { useEffect, useState } from "react";

const CircularProgress = ({ percentage, label, delay = 0, id, colors }: { percentage: number, label: string, delay?: number, id: string, colors: string[] }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = percentage;
      if (start === end) return;

      const duration = 2000;
      const incrementTime = (duration / end);

      const timerInterval = setInterval(() => {
        start += 1;
        setCurrent(start);
        if (start === end) clearInterval(timerInterval);
      }, incrementTime);

      return () => clearInterval(timerInterval);
    }, delay * 1000 + 500); 

    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (current / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4 group">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* SVG Container */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90 scale-110">
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
            className="opacity-80"
          />
        </svg>
        
        {/* Central Counter with Breathing Effect */}
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-white font-mono text-base font-black z-10"
          style={{ textShadow: `0 0 20px ${colors[0]}88` }}
        >
          {current}
          <span className="text-[10px] ml-0.5 text-white/40">%</span>
        </motion.div>

        {/* Atmospheric Glow */}
        <div 
          className="absolute inset-0 w-full h-full opacity-[0.15] blur-2xl rounded-full group-hover:opacity-[0.25] transition-opacity duration-500"
          style={{ backgroundColor: colors[0] }}
        />
      </div>
      
      {/* Label with dynamic color indicator */}
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-[10px] text-white/60 text-center max-w-[90px] uppercase tracking-widest font-black leading-tight group-hover:text-white transition-colors">
          {label}
        </span>
        <div 
          className="w-8 h-[1px] rounded-full"
          style={{ background: `linear-gradient(to right, transparent, ${colors[0]}, transparent)` }}
        />
      </div>
    </div>
  );
};

export function ProficiencyMetrics() {
  const metrics = [
    { id: "frontend", label: "Frontend Development", percentage: 90, colors: ["#06b6d4", "#2dd4bf"] }, // Cyan to Teal
    { id: "backend", label: "Backend Development", percentage: 85, colors: ["#8b5cf6", "#d946ef"] },  // Violet to Fuchsia
    { id: "problem", label: "Problem Solving", percentage: 95, colors: ["#fbbf24", "#f59e0b"] },      // Amber
    { id: "ai", label: "AI / ML", percentage: 80, colors: ["#3b82f6", "#2dd4bf"] },              // Blue to Teal
    { id: "data", label: "Data Structures", percentage: 90, colors: ["#ef4444", "#f97316"] },      // Red to Orange
    { id: "system", label: "System Design", percentage: 75, colors: ["#10b981", "#3b82f6"] },        // Emerald to Blue
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
          {/* Define Gradients once globally for the SVG rings */}
          <svg width="0" height="0" className="absolute">
            <defs>
              {metrics.map((metric) => (
                <linearGradient key={metric.id} id={`gradient-${metric.id}`} x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={metric.colors[0]} />
                  <stop offset="100%" stopColor={metric.colors[1]} />
                </linearGradient>
              ))}
            </defs>
          </svg>

          {metrics.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <CircularProgress 
                id={metric.id}
                percentage={metric.percentage} 
                label={metric.label} 
                delay={idx * 0.1} 
                colors={metric.colors}
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
