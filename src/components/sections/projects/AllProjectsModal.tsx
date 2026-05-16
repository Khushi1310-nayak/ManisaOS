"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  Grid, 
  ExternalLink, 
  ArrowRight,
  Search,
  LayoutGrid,
  AlignJustify
} from "lucide-react";
import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Project } from "@/data/projects";

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onViewDetails: (project: Project) => void;
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export function AllProjectsModal({ isOpen, onClose, projects, onViewDetails }: AllProjectsModalProps) {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6 lg:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            className="relative w-full max-w-6xl h-full max-h-[90vh] bg-black/40 border border-[#decba4]/20 rounded-[2.5rem] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)]"
          >
            {/* Header Area */}
            <div className="p-6 md:p-8 border-b border-white/5 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col items-center md:items-start gap-1">
                 <div className="flex items-center gap-3">
                    <LayoutGrid className="w-5 h-5 text-[#decba4]" />
                    <h2 className="text-2xl font-bold text-white tracking-tight uppercase">Archive Systems</h2>
                 </div>
                 <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Total Directory: {projects.length} Files</p>
              </div>

              {/* Controls */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Search Bar */}
                <div className="relative group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 group-focus-within:text-[#decba4] transition-colors" />
                  <input 
                    type="text" 
                    placeholder="Search systems..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-white placeholder:text-white/20 outline-none focus:border-[#decba4]/50 w-48 md:w-64 transition-all"
                  />
                </div>

                {/* View Toggles */}
                <div className="flex bg-white/5 border border-white/10 rounded-full p-1">
                  <button 
                    onClick={() => setViewType("grid")}
                    aria-label="Grid View"
                    className={`p-2 rounded-full transition-all ${viewType === 'grid' ? 'bg-[#decba4] text-black shadow-lg' : 'text-white/40 hover:text-white'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewType("list")}
                    aria-label="List View"
                    className={`p-2 rounded-full transition-all ${viewType === 'list' ? 'bg-[#decba4] text-black shadow-lg' : 'text-white/40 hover:text-white'}`}
                  >
                    <AlignJustify className="w-4 h-4" />
                  </button>
                </div>

                <button 
                  onClick={onClose}
                  aria-label="Close Modal"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Project Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 lg:p-10">
              {viewType === "grid" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project) => (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group cursor-pointer"
                      onClick={() => onViewDetails(project)}
                    >
                      <GlassCard className="h-full flex flex-col border-white/5 bg-white/[0.02] hover:border-[#decba4]/40 transition-all duration-500 overflow-hidden">
                        <div className="aspect-video bg-black relative overflow-hidden">
                           {project.preview}
                           <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="text-[10px] font-bold text-[#decba4] uppercase tracking-[0.2em] border border-[#decba4]/40 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md">Initialize System</span>
                           </div>
                        </div>
                        <div className="p-5 flex flex-col gap-3">
                           <div className="flex items-center justify-between">
                              <span className="text-[9px] uppercase tracking-widest text-[#decba4] font-bold">{project.category}</span>
                              <span className="text-[9px] font-mono text-white/20">{project.number}</span>
                           </div>
                           <h4 className="text-lg font-bold text-white group-hover:text-[#decba4] transition-colors">{project.title}</h4>
                           <div className="flex flex-wrap gap-1.5 mt-1">
                              {project.techStack.slice(0, 3).map(tech => (
                                <span key={tech} className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[8px] font-bold text-white/40 uppercase tracking-widest">{tech}</span>
                              ))}
                           </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {filteredProjects.map((project) => (
                    <motion.div
                      layout
                      key={project.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="group cursor-pointer"
                      onClick={() => onViewDetails(project)}
                    >
                      <GlassCard className="flex items-center justify-between p-4 border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-[#decba4]/20 transition-all duration-300">
                        <div className="flex items-center gap-6">
                           <span className="text-sm font-mono text-white/10">{project.number}</span>
                           <div className="flex flex-col">
                              <h4 className="text-base font-bold text-white group-hover:text-[#decba4] transition-colors uppercase tracking-tight">{project.title}</h4>
                              <span className="text-[9px] text-[#decba4] font-bold uppercase tracking-widest">{project.category}</span>
                           </div>
                        </div>

                        <div className="hidden md:flex items-center gap-3">
                           {project.techStack.slice(0, 4).map(tech => (
                             <span key={tech} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[8px] font-bold text-white/30 uppercase tracking-widest">{tech}</span>
                           ))}
                        </div>

                        <div className="flex items-center gap-4">
                           <div className="flex gap-2">
                              <a href={project.liveLink} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" title="Live Demo" className="p-2 rounded-full bg-white/5 text-white/30 hover:text-[#decba4] transition-colors">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                              <a href={project.githubLink} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" aria-label="Github Repository" title="Github Repository" className="p-2 rounded-full bg-white/5 text-white/30 hover:text-[#decba4] transition-colors">
                                <GithubIcon className="w-4 h-4" />
                              </a>
                           </div>
                           <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-[#decba4] group-hover:translate-x-1 transition-all" />
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))}
                </div>
              )}

              {filteredProjects.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                   <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/20">
                      <Search className="w-8 h-8" />
                   </div>
                   <div className="text-center">
                      <p className="text-white font-bold text-lg">No systems found</p>
                      <p className="text-white/30 text-sm">Adjust your search query to find the desired directory.</p>
                   </div>
                </div>
              )}
            </div>

            {/* Bottom Glow */}
            <div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#decba4]/5 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
