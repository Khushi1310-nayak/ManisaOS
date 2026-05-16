"use client";

import { motion } from "framer-motion";
import { BookOpen, Terminal, Rocket, Users, Brain, LineChart } from "lucide-react";

export function HolographicTrophy() {
  const orbits = [
    { icon: <BookOpen className="w-4 h-4 text-[#decba4]" />, label: "Learning", angle: 270, radius: 140 },
    { icon: <Terminal className="w-4 h-4 text-[#decba4]" />, label: "Code", angle: 330, radius: 140 },
    { icon: <Users className="w-4 h-4 text-[#decba4]" />, label: "Collaborate", angle: 30, radius: 140 },
    { icon: <LineChart className="w-4 h-4 text-[#decba4]" />, label: "Grow", angle: 90, radius: 140 },
    { icon: <Brain className="w-4 h-4 text-[#decba4]" />, label: "Innovate", angle: 150, radius: 140 },
    { icon: <Rocket className="w-4 h-4 text-[#decba4]" />, label: "Impact", angle: 210, radius: 140 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      
      {/* Outer Orbit Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-[#decba4]/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[220px] h-[220px] rounded-full border border-white/10"
      />
      
      {/* Neural Network Lines (Static Background) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-[300px] h-[300px] stroke-[#decba4]" fill="none" strokeWidth="0.5">
           {orbits.map((orbit, i) => {
             const cx = 200 + Math.cos((orbit.angle * Math.PI) / 180) * orbit.radius;
             const cy = 200 + Math.sin((orbit.angle * Math.PI) / 180) * orbit.radius;
             return <line key={i} x1="200" y1="200" x2={cx} y2={cy} strokeDasharray="4 4" />;
           })}
        </svg>
      </div>

      {/* Orbiting Labels */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        {orbits.map((orbit, idx) => {
          const cx = Math.cos((orbit.angle * Math.PI) / 180) * orbit.radius;
          const cy = Math.sin((orbit.angle * Math.PI) / 180) * orbit.radius;
          
          return (
            <div
              key={idx}
              className="absolute"
              style={{ 
                transform: `translate(${cx}px, ${cy}px)`,
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="flex flex-col items-center gap-2"
              >
                <div className="w-8 h-8 rounded-full bg-black/60 border border-[#decba4]/30 flex items-center justify-center shadow-[0_0_15px_rgba(222,203,164,0.2)] backdrop-blur-md pointer-events-auto">
                  {orbit.icon}
                </div>
                <span className="text-[10px] text-white/60 uppercase tracking-widest font-semibold whitespace-nowrap">{orbit.label}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Central Trophy SVG */}
      <motion.div 
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-[#decba4] opacity-10 blur-2xl rounded-full" />
        
        <svg width="120" height="150" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_20px_rgba(222,203,164,0.4)]">
          {/* Base */}
          <path d="M 30 110 L 70 110 L 60 90 L 40 90 Z" fill="rgba(0,0,0,0.6)" stroke="#decba4" strokeWidth="1" />
          <line x1="30" y1="110" x2="70" y2="110" stroke="#decba4" strokeWidth="2" />
          <line x1="40" y1="90" x2="60" y2="90" stroke="#decba4" strokeWidth="1.5" />
          <path d="M 45 90 L 45 70 L 55 70 L 55 90" stroke="#decba4" strokeWidth="1" fill="url(#trophy-gradient)" />
          
          {/* Cup Bowl */}
          <path d="M 20 20 Q 20 70 50 70 Q 80 70 80 20 Z" fill="url(#trophy-gradient)" stroke="#decba4" strokeWidth="1.5" />
          <ellipse cx="50" cy="20" rx="30" ry="10" fill="rgba(0,0,0,0.8)" stroke="#decba4" strokeWidth="1.5" />
          
          {/* Handles */}
          <path d="M 20 30 Q 5 30 5 45 Q 5 60 25 55" fill="none" stroke="#decba4" strokeWidth="1.5" />
          <path d="M 80 30 Q 95 30 95 45 Q 95 60 75 55" fill="none" stroke="#decba4" strokeWidth="1.5" />

          {/* Gradients */}
          <defs>
            <linearGradient id="trophy-gradient" x1="0" y1="0" x2="100" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(222,203,164,0.1)" />
              <stop offset="50%" stopColor="rgba(222,203,164,0.3)" />
              <stop offset="100%" stopColor="rgba(222,203,164,0.05)" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

    </div>
  );
}
