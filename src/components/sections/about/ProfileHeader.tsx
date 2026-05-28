"use client";

import { motion } from "framer-motion";
import { MapPin, Target, Calendar, GraduationCap } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-8">
      {/* Left Content */}
      <div className="flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-white/50 mb-6 uppercase tracking-widest text-xs font-semibold"
        >
          <span className="w-2 h-2 bg-[#decba4] rounded-sm" />
          <span>About Me</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-6"
        >
          More than code, <br />
          I build <span className="font-signature text-6xl md:text-8xl text-[#decba4] glowing-signature font-normal ml-2">Impact.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-lg max-w-xl mb-10 leading-relaxed font-light"
        >
          I&apos;m Manisa, a passionate developer and AI enthusiast who loves turning ideas into intelligent, meaningful, and impactful digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-md"
        >
          <GlassCard className="py-4 px-6 border-[#decba4]/20 font-mono text-sm shadow-[0_0_20px_rgba(222,203,164,0.05)]">
            <span className="text-[#a0a0a0]">const </span>
            <span className="text-[#decba4]">passion</span>
            <span className="text-white"> = [</span>
            <span className="text-[#decba4]">&quot;AI&quot;</span>
            <span className="text-white">, </span>
            <span className="text-[#decba4]">&quot;Code&quot;</span>
            <span className="text-white">, </span>
            <span className="text-[#decba4]">&quot;Design&quot;</span>
            <span className="text-white">, </span>
            <span className="text-[#decba4]">&quot;Problem Solving&quot;</span>
            <span className="text-white">];</span>
          </GlassCard>
        </motion.div>
      </div>

      {/* Right Content - Profile Image Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative h-[600px] flex items-center justify-center"
      >
        {/* Holographic Frame & Glows */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#decba4]/10 to-transparent rounded-[2.5rem] transform rotate-3 scale-95 blur-xl z-0" />
        
        {/* Orbit Lines */}
        <div className="absolute w-[120%] h-[120%] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[100%] h-[100%] rounded-full border border-[#decba4]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse]" />
        
        {/* Main Image Container */}
        <div className="relative z-10 w-[80%] h-[90%] rounded-[2.5rem] p-1 glass-panel border border-[#decba4]/20 shadow-[0_0_40px_rgba(222,203,164,0.15)] overflow-hidden group">
          <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
            {/* 
              Using next/image for optimization. 
              The user provided an image. 
            */}
            <Image 
              src="/Khushi1.jpeg" 
              alt="Manisa Nayak" 
              fill
              className="object-cover rounded-[2.5rem] filter contrast-[1.1] brightness-[0.9] group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050a0a] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 mix-blend-overlay bg-[#3e5151]/20" />
          </div>
          
          {/* Signature on image */}
          <div className="absolute bottom-6 left-8 z-20">
            <span className="font-signature text-6xl text-[#decba4] glowing-signature drop-shadow-2xl">
              Manisa
            </span>
          </div>
        </div>

        {/* Floating Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute -right-4 lg:-right-12 top-[40%] z-30"
        >
          <GlassCard className="py-5 px-6 rounded-3xl border-[#decba4]/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#decba4] mt-1" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-white text-sm font-medium">India 🇮🇳</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Target className="w-5 h-5 text-[#decba4] mt-1" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Current Focus</p>
                <p className="text-white text-sm font-medium">AI Systems & Full Stack</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Calendar className="w-5 h-5 text-[#decba4] mt-1" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Availability</p>
                <p className="text-white text-sm font-medium">Open to Opportunities</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <GraduationCap className="w-5 h-5 text-[#decba4] mt-1" />
              <div>
                <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Study</p>
                <p className="text-white text-sm font-medium">B.Tech CSIT <br/> (2023 - 2027)</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
