"use client";

import { AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { allProjects, Project } from "@/data/projects";

interface ProjectListProps {
  activeFilter: string;
  onViewDetails: (project: Project) => void;
}

export function ProjectList({ activeFilter, onViewDetails }: ProjectListProps) {
  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : activeFilter === "Featured"
    ? allProjects.filter(p => p.isFeatured)
    : allProjects.filter(p => p.category === activeFilter || p.subCategories?.includes(activeFilter));

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              number={project.number}
              category={project.category}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              onViewDetails={() => onViewDetails(project)}
            >
              {project.preview}
            </ProjectCard>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
