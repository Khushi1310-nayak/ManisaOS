"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";

export interface ProjectCardProps {
  number: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  children: ReactNode; // Mini UI Preview
  onViewDetails?: () => void;
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const getCategoryColor = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes('ai') || cat.includes('ml')) {
    return { 
      border: 'group-hover:border-rose-500/50', 
      shadow: 'group-hover:shadow-[0_20px_40px_-15px_rgba(244,63,94,0.4)]', 
      text: 'group-hover:text-rose-400', 
      textDefault: 'text-rose-400',
      accent: 'bg-rose-500',
      glow: 'rgba(244,63,94,0.15)'
    };
  } else if (cat.includes('productivity')) {
    return { 
      border: 'group-hover:border-cyan-500/50', 
      shadow: 'group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.4)]', 
      text: 'group-hover:text-cyan-400', 
      textDefault: 'text-cyan-400',
      accent: 'bg-cyan-500',
      glow: 'rgba(6,182,212,0.15)'
    };
  } else if (cat.includes('web development')) {
    return { 
      border: 'group-hover:border-indigo-500/50', 
      shadow: 'group-hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.4)]', 
      text: 'group-hover:text-indigo-400', 
      textDefault: 'text-indigo-400',
      accent: 'bg-indigo-500',
      glow: 'rgba(99,102,241,0.15)'
    };
  } else if (cat.includes('hackathon')) {
    return { 
      border: 'group-hover:border-amber-500/50', 
      shadow: 'group-hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.4)]', 
      text: 'group-hover:text-amber-400', 
      textDefault: 'text-amber-400',
      accent: 'bg-amber-500',
      glow: 'rgba(245,158,11,0.15)'
    };
  } else {
    return { 
      border: 'group-hover:border-[#decba4]/50', 
      shadow: 'group-hover:shadow-[0_20px_40px_-15px_rgba(222,203,164,0.4)]', 
      text: 'group-hover:text-[#decba4]', 
      textDefault: 'text-[#decba4]',
      accent: 'bg-[#decba4]',
      glow: 'rgba(222,203,164,0.15)'
    };
  }
};

export function ProjectCard({
  number,
  title,
  description,
  category,
  techStack,
  liveLink = "#",
  githubLink = "#",
  children,
  onViewDetails,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const colors = getCategoryColor(category);
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, ${colors.glow} 0%, transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;
    x.set(left / rect.width - 0.5);
    y.set(top / rect.height - 0.5);
    mouseX.set(left);
    mouseY.set(top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group relative [perspective:1000px] h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        <GlassCard className={`h-full flex flex-col border-[#decba4]/20 bg-black/40 ${colors.border} ${colors.shadow} transition-all duration-500 overflow-hidden relative`}>
          
          {/* Dynamic Follower Glow */}
          <motion.div 
            className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background }}
          />

          <div className="relative z-10 flex flex-col h-full">
            {/* Holographic Header */}
            <div className="p-5 flex items-center justify-between border-b border-white/5 bg-white/[0.02]">
              <div className="flex items-center gap-4">
                <span className="text-2xl font-light text-white/10 font-mono tracking-tighter">{number}</span>
                <div className="flex flex-col">
                  <span className={`text-[9px] uppercase tracking-[0.2em] font-bold mb-0.5 ${colors.textDefault}`}>{category}</span>
                  <h3 className={`text-lg font-bold text-white tracking-tight ${colors.text} transition-colors`}>{title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${colors.accent} shadow-lg animate-pulse`} />
                <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Live</span>
              </div>
            </div>

            {/* Dashboard Preview Area */}
            <div className="flex-grow bg-[#050a0a]/80 relative overflow-hidden group-hover:bg-[#050a0a]/60 transition-colors duration-500 min-h-[220px]">
              {/* Subtle grid overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:15px_15px] opacity-30 pointer-events-none" />
              
              <div className="relative z-10 p-6 h-full">
                {children}
              </div>
            </div>

            {/* Info & Footer */}
            <div className="p-6 flex flex-col gap-5 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
              <p className="text-[11px] text-white/50 leading-relaxed font-light line-clamp-2 italic">
                {description}
              </p>

              <div className="flex flex-wrap gap-2">
                {techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 rounded-md text-white/40 ${colors.text} transition-colors`}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex gap-4">
                  <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className={`text-white/30 ${colors.text} transition-colors relative z-20`}>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className={`text-white/30 ${colors.text} transition-colors relative z-20`}>
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
                <button 
                  onClick={onViewDetails}
                  className={`text-[10px] uppercase tracking-widest font-bold ${colors.textDefault} hover:brightness-125 transition-all relative z-20`}
                >
                  Details →
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
