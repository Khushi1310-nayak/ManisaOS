"use client";

import { useState, useEffect } from "react";
import { ProjectsHero } from "./ProjectsHero";
import { ProjectFilters } from "./ProjectFilters";
import { ProjectList } from "./ProjectList";
import { ProjectsCTA } from "./ProjectsCTA";
import { AllProjectsModal } from "./AllProjectsModal";
import { ProjectModal } from "./ProjectModal";
import { allProjects, Project } from "@/data/projects";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isAllModalOpen, setIsAllModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (isAllModalOpen || selectedProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [isAllModalOpen, selectedProject]);

  const handleViewProjectDetails = (project: Project) => {
    setIsAllModalOpen(false);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="relative w-full pt-16 pb-20 z-10 bg-[var(--background)]">
      {/* Dynamic Background Glows */}
      <div className="absolute top-[10%] left-[-20%] w-[70vw] h-[70vw] bg-[#3e5151] opacity-[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[50vw] h-[50vw] bg-[#decba4] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-[-1]" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Top Hero Area */}
        <ProjectsHero />

        {/* Filters */}
        <div className="w-full flex justify-center mt-16 mb-12">
          <ProjectFilters activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
        </div>

        {/* Projects Grid */}
        <ProjectList 
          activeFilter={activeFilter} 
          onViewDetails={handleViewProjectDetails}
        />

        {/* Bottom CTA */}
        <div className="w-full mt-24">
          <ProjectsCTA onViewAll={() => setIsAllModalOpen(true)} />
        </div>
      </div>

      {/* All Projects Archive Modal */}
      <AllProjectsModal 
        isOpen={isAllModalOpen} 
        onClose={() => setIsAllModalOpen(false)} 
        projects={allProjects}
        onViewDetails={handleViewProjectDetails}
      />

      {/* Individual Project Detail Modal */}
      <ProjectModal 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
        project={selectedProject} 
      />
    </section>
  );
}
