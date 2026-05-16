"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Database, BrainCircuit, Lock } from "lucide-react";

export function HolographicCore3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-[#decba4]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Orbit Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-[120%] h-[120%] rounded-full border border-[#decba4]/20 border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[90%] h-[90%] rounded-full border border-white/10"
      />

      {/* Floating Tech Icons on Orbits */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-20"
      >
        <div className="absolute top-[10%] left-[20%] w-8 h-8 bg-black/50 border border-[#decba4]/30 rounded-full flex items-center justify-center backdrop-blur-md -rotate-[rotate]">
          <BrainCircuit className="w-4 h-4 text-[#decba4]" />
        </div>
        <div className="absolute bottom-[20%] right-[10%] w-8 h-8 bg-black/50 border border-[#decba4]/30 rounded-full flex items-center justify-center backdrop-blur-md">
          <Database className="w-4 h-4 text-white/70" />
        </div>
      </motion.div>
      
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-20"
      >
        <div className="absolute top-[30%] right-[5%] w-8 h-8 bg-black/50 border border-[#decba4]/30 rounded-full flex items-center justify-center backdrop-blur-md">
          <Globe className="w-4 h-4 text-[#decba4]" />
        </div>
        <div className="absolute bottom-[10%] left-[15%] w-8 h-8 bg-black/50 border border-[#decba4]/30 rounded-full flex items-center justify-center backdrop-blur-md">
          <Lock className="w-4 h-4 text-white/70" />
        </div>
      </motion.div>

      {/* Central Holographic Cube Container */}
      <div className="relative w-32 h-32 md:w-40 md:h-40 z-10 perspective-[1000px]">
        <motion.div
          animate={{ rotateY: [0, 360], rotateX: [10, -10, 10] }}
          transition={{ 
            rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
            rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-full h-full preserve-3d relative"
        >
          {/* Front Face */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#decba4]/20 to-black/80 border border-[#decba4]/40 flex items-center justify-center backdrop-blur-sm transform translate-z-[4rem] md:translate-z-[5rem] shadow-[0_0_30px_rgba(222,203,164,0.2)]">
            <Code2 className="w-10 h-10 text-[#decba4] opacity-80" />
          </div>
          {/* Back Face */}
          <div className="absolute inset-0 bg-black/80 border border-white/10 transform -translate-z-[4rem] md:-translate-z-[5rem] rotate-y-180" />
          {/* Left Face */}
          <div className="absolute inset-0 bg-black/60 border border-[#decba4]/20 transform -translate-x-[4rem] md:-translate-x-[5rem] -rotate-y-90" />
          {/* Right Face */}
          <div className="absolute inset-0 bg-black/60 border border-[#decba4]/20 transform translate-x-[4rem] md:translate-x-[5rem] rotate-y-90" />
          {/* Top Face */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#decba4]/30 border border-[#decba4]/20 transform -translate-y-[4rem] md:-translate-y-[5rem] rotate-x-90" />
          {/* Bottom Face */}
          <div className="absolute inset-0 bg-black/90 border border-white/10 transform translate-y-[4rem] md:translate-y-[5rem] -rotate-x-90" />
        </motion.div>
      </div>

      {/* Neural Network Lines (Static decorative) */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100">
        <line x1="50" y1="50" x2="20" y2="20" stroke="#decba4" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="80" y2="30" stroke="#decba4" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="30" y2="80" stroke="#decba4" strokeWidth="0.5" />
        <line x1="50" y1="50" x2="90" y2="70" stroke="#decba4" strokeWidth="0.5" />
        <circle cx="20" cy="20" r="1" fill="#decba4" />
        <circle cx="80" cy="30" r="1" fill="#decba4" />
        <circle cx="30" cy="80" r="1" fill="#decba4" />
        <circle cx="90" cy="70" r="1" fill="#decba4" />
      </svg>
    </div>
  );
}
