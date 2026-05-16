"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="group"
    >
      <GlassCard className="h-full flex flex-col border-[#decba4]/20 bg-black/40 hover:border-[#decba4]/60 transition-all duration-500 overflow-hidden relative shadow-2xl">
        
        {/* Holographic Header */}
        <div className="p-5 flex items-center justify-between border-b border-white/5 bg-white/[0.02] relative">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-light text-white/10 font-mono tracking-tighter">{number}</span>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#decba4] font-bold mb-0.5">{category}</span>
              <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-[#decba4] transition-colors">{title}</h3>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Live</span>
          </div>
        </div>

        {/* Dashboard Preview Area */}
        <div className="flex-grow bg-[#050a0a]/80 relative overflow-hidden group-hover:bg-[#050a0a]/60 transition-colors duration-500 min-h-[220px]">
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:15px_15px] opacity-30" />
          
          <div className="relative z-10 p-6 h-full">
            {children}
          </div>

          {/* Hover Overlay Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* Info & Footer */}
        <div className="p-6 flex flex-col gap-5 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
          <p className="text-[11px] text-white/50 leading-relaxed font-light line-clamp-2 italic">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, 3).map((tech) => (
              <span key={tech} className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 rounded-md text-white/40 group-hover:text-white/60 transition-colors">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-white/5">
            <div className="flex gap-4">
              <a href={liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-white/30 hover:text-[#decba4] transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-white/30 hover:text-[#decba4] transition-colors">
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
            <button 
              onClick={onViewDetails}
              className="text-[10px] uppercase tracking-widest font-bold text-[#decba4] hover:brightness-125 transition-all"
            >
              Details →
            </button>
          </div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#decba4]/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-[#decba4]/5 to-transparent pointer-events-none" />
      </GlassCard>
    </motion.div>
  );
}
