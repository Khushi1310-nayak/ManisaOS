"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  X, 
  ExternalLink
} from "lucide-react";

import { Project } from "@/data/projects";



export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-black/80 border border-[#decba4]/20 rounded-[2rem] shadow-[0_0_80px_rgba(222,203,164,0.1)] flex flex-col max-h-[85vh]"
          >
            {/* Header / Top Bar */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/[0.02] backdrop-blur-md sticky top-0 z-50">
              <div className="flex items-center gap-4">
                 <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-[#decba4] font-bold">{project.category}</span>
                    <h2 className="text-xl font-bold text-white tracking-tight uppercase">{project.title}</h2>
                 </div>
              </div>
              <button 
                onClick={onClose}
                title="Close modal"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#decba4] hover:border-[#decba4]/40 transition-all group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10">
              <div className="flex flex-col gap-10">
                
                {/* Project Brief */}
                <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                      <div className="w-1.5 h-[1px] bg-[#decba4]" />
                      Mission Brief
                   </div>
                   <p className="text-white/70 text-base md:text-lg font-light leading-relaxed">
                     {project.details}
                   </p>
                </div>

                {/* Core Capabilities */}
                <div className="flex flex-col gap-5">
                   <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                      <div className="w-1.5 h-[1px] bg-[#decba4]" />
                      Core Capabilities
                   </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     {project.features.map((feature, idx) => (
                       <GlassCard key={idx} className="p-4 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group/feat">
                         <div className="flex items-start gap-4">
                            <div className="text-[#decba4] opacity-50 group-hover/feat:opacity-100 transition-opacity">
                              {feature.icon}
                            </div>
                            <div className="flex flex-col">
                               <span className="text-xs font-bold text-white mb-1 tracking-wide">{feature.title}</span>
                               <span className="text-[10px] text-white/40 leading-relaxed font-light">{feature.desc}</span>
                            </div>
                         </div>
                       </GlassCard>
                     ))}
                   </div>
                </div>

                {/* Impact Metrics */}
                {project.impactMetrics && project.impactMetrics.length > 0 && (
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                      <div className="w-1.5 h-[1px] bg-[#decba4]" />
                      Impact & Results
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      {project.impactMetrics.map((metric, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-colors">
                           <span className="text-[14px]">✨</span>
                           <span className="text-sm font-medium text-white/80 leading-snug">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engineering Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                      <div className="w-1.5 h-[1px] bg-[#decba4]" />
                      Engineering Challenges
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.challenges.map((challenge, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition-colors">
                           <div className="w-4 h-4 mt-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                           </div>
                           <span className="text-sm font-medium text-white/80 leading-snug">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* System Metrics */}
                <div className="flex flex-col gap-5">
                   <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                      <div className="w-1.5 h-[1px] bg-[#decba4]" />
                      System Metrics
                   </div>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                     {project.metrics.map((metric, idx) => (
                       <div key={idx} className="bg-black/40 border border-white/5 p-3 rounded-xl flex flex-col gap-1">
                          <span className="text-[8px] uppercase tracking-widest text-white/30 font-bold">{metric.label}</span>
                          <span className="text-xs font-bold text-white tracking-tight flex items-center gap-2">
                             {metric.value}
                             {metric.status && (
                               <div className={`w-1 h-1 rounded-full ${metric.status === 'live' || metric.status === 'active' ? 'bg-emerald-400' : 'bg-[#decba4]'} animate-pulse`} />
                             )}
                          </span>
                       </div>
                     ))}
                   </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-col gap-5">
                   <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest font-bold">
                      <div className="w-1.5 h-[1px] bg-[#decba4]" />
                      Technology Stack
                   </div>
                   <div className="flex flex-wrap gap-2">
                     {project.techStack.map((tech, idx) => (
                       <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-[#decba4] transition-colors">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>

              </div>
            </div>

            {/* Sticky Footer Actions */}
            <div className="p-6 border-t border-white/5 bg-black/60 backdrop-blur-xl flex flex-col sm:flex-row gap-3">
               <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                 <button className="w-full h-12 bg-[#decba4] text-black font-bold uppercase tracking-widest text-[10px] rounded-xl hover:brightness-110 transition-all flex items-center justify-center gap-2">
                   Live System <ExternalLink className="w-4 h-4" />
                 </button>
               </a>
               <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                 <button className="w-full h-12 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-[10px] rounded-xl hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                   Repository <GithubIcon className="w-4 h-4" />
                 </button>
               </a>
            </div>

            {/* Ambient background glow */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#decba4]/10 rounded-full blur-[80px] pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
