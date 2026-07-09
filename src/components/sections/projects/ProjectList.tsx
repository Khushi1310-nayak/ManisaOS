"use client";

import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { allProjects, Project } from "@/data/projects";

interface ProjectListProps {
  activeFilter: string;
  onViewDetails: (project: Project) => void;
}

export function ProjectList({ activeFilter, onViewDetails }: ProjectListProps) {
  const [pinnedProjects, setPinnedProjects] = useState<string[]>([]);
  
  useEffect(() => {
    const saved = localStorage.getItem("pinnedProjects");
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPinnedProjects(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse pinned projects", e);
      }
    }
  }, []);

  const togglePin = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setPinnedProjects(prev => {
      const newPinned = prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id];
      localStorage.setItem("pinnedProjects", JSON.stringify(newPinned));
      return newPinned;
    });
  };

  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : activeFilter === "Featured"
    ? allProjects.filter(p => p.isFeatured)
    : allProjects.filter(p => p.category === activeFilter || p.subCategories?.includes(activeFilter));

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (activeFilter === "All") {
      const aPinned = pinnedProjects.includes(a.id);
      const bPinned = pinnedProjects.includes(b.id);
      if (aPinned && !bPinned) return -1;
      if (!aPinned && bPinned) return 1;
    }
    return 0;
  });

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {sortedProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard
                number={project.number}
                category={project.title === 'STYLA' ? (activeFilter === 'Hackathon' ? 'Hackathon' : 'AI / ML') : project.category}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                isPinned={pinnedProjects.includes(project.id)}
                onTogglePin={(e) => togglePin(e, project.id)}
                onViewDetails={() => onViewDetails(project)}
              >
                {project.preview}
              </ProjectCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
