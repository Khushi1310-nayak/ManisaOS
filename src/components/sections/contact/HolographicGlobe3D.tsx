"use client";

import { motion } from "framer-motion";
import { Mail, User, Code2, MessageSquare } from "lucide-react";

export function HolographicGlobe3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Skyline Wireframe */}
      <div className="absolute right-[-20%] bottom-0 w-full h-full opacity-20 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#decba4]" fill="none" strokeWidth="0.2">
          {/* Skyscraper shapes */}
          <path d="M 60 100 L 60 40 L 70 40 L 70 100" />
          <path d="M 62 40 L 65 20 L 68 40" />
          <path d="M 75 100 L 75 60 L 85 60 L 85 100" />
          <path d="M 50 100 L 50 70 L 58 70 L 58 100" />
          <path d="M 88 100 L 88 50 L 95 50 L 95 100" />
          
          {/* Horizontal grid lines for windows */}
          <line x1="60" y1="50" x2="70" y2="50" />
          <line x1="60" y1="60" x2="70" y2="60" />
          <line x1="60" y1="70" x2="70" y2="70" />
          <line x1="60" y1="80" x2="70" y2="80" />
          <line x1="60" y1="90" x2="70" y2="90" />
          
          <line x1="75" y1="70" x2="85" y2="70" />
          <line x1="75" y1="80" x2="85" y2="80" />
          <line x1="75" y1="90" x2="85" y2="90" />
        </svg>
      </div>

      {/* Outer Glow */}
      <div className="absolute inset-0 bg-[#decba4]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Orbit Rings */}
      <motion.div
        animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
        transition={{ rotateZ: { duration: 30, repeat: Infinity, ease: "linear" } }}
        className="absolute w-[140%] h-[140%] rounded-full border border-[#decba4]/20 preserve-3d"
      >
        {/* Orbit Particle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#decba4] rounded-full shadow-[0_0_10px_#decba4]" />
      </motion.div>

      <motion.div
        animate={{ rotateX: [70, 70], rotateY: [30, 30], rotateZ: [360, 0] }}
        transition={{ rotateZ: { duration: 40, repeat: Infinity, ease: "linear" } }}
        className="absolute w-[120%] h-[120%] rounded-full border border-white/10 preserve-3d"
      />

      {/* Base Platform Glow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-1/2 h-4 bg-[#decba4] opacity-20 blur-xl rounded-full" />
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/50 to-transparent" />
      <div className="absolute bottom-[-12%] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/30 to-transparent" />

      {/* Central Globe */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 z-10 flex items-center justify-center">
        {/* Globe Base Sphere */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black/80 to-[#3e5151]/40 border border-[#decba4]/30 shadow-[0_0_50px_rgba(222,203,164,0.15)] backdrop-blur-sm overflow-hidden">
          {/* Globe Lat/Lng Grid (Simulated with CSS) */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)] z-10" />
          
          {/* Longitude lines */}
          {[...Array(6)].map((_, i) => (
            <div 
              key={`lng-${i}`}
              className="absolute inset-0 border border-white/10 rounded-full"
              style={{ transform: `rotateY(${i * 30}deg)` }}
            />
          ))}
          {/* Latitude lines */}
          {[...Array(5)].map((_, i) => (
            <div 
              key={`lat-${i}`}
              className="absolute left-1/2 -translate-x-1/2 border border-white/10 rounded-full"
              style={{ 
                width: `${Math.sin((i + 1) * Math.PI / 6) * 100}%`,
                height: `${Math.sin((i + 1) * Math.PI / 6) * 100}%`,
                top: `${50 - (Math.sin((i + 1) * Math.PI / 6) * 50)}%`,
                transform: `rotateX(90deg) translateY(${(i - 2) * 20}px)`
              }}
            />
          ))}
        </div>

        {/* Floating Icons around globe */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-20"
        >
          {/* Top Mail Icon */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-10 h-10 bg-black/60 border border-[#decba4]/40 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(222,203,164,0.2)] -rotate-[rotate]">
            <Mail className="w-5 h-5 text-[#decba4]" />
          </div>
          {/* Bottom Message Icon */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-black/60 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
            <MessageSquare className="w-4 h-4 text-white/70" />
          </div>
        </motion.div>
        
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 z-20"
        >
          {/* Left User Icon */}
          <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-8 h-8 bg-black/60 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
            <User className="w-4 h-4 text-white/70" />
          </div>
          {/* Right Code Icon */}
          <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-10 h-10 bg-black/60 border border-[#decba4]/40 rounded-full flex items-center justify-center backdrop-blur-md shadow-[0_0_15px_rgba(222,203,164,0.2)]">
            <Code2 className="w-5 h-5 text-[#decba4]" />
          </div>
        </motion.div>

        {/* Central Core Glow */}
        <div className="absolute inset-0 bg-radial-gradient from-[#decba4]/20 to-transparent blur-md" />
      </div>
    </div>
  );
}
