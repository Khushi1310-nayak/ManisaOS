"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase, Calendar, MapPin, ChevronRight, Code2, Cloud } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  date: string;
  location: string;
  icon: React.ReactNode;
  highlights: string[];
  techStack: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Front-end AI Engineering Intern",
    company: "Build Club", 
    type: "Internship",
    date: "July 2026 – Present",
    location: "Remote",
    icon: <Code2 className="w-5 h-5 text-rose-400" />,
    highlights: [
      "Building practical, responsive websites with AI in the loop using modern frontend frameworks like Next.js and Tailwind CSS.",
      "Developing e-commerce storefronts and client-style projects with a focus on pixel-perfect execution and mobile optimization.",
      "Documenting AI prompts, implementation decisions, and comprehensive browser QA to accelerate development cycles.",
      "Focusing on visual fidelity, responsive layouts, and robust code structure while utilizing AI coding assistants effectively."
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Shopify", "AI Prompting"]
  },
  {
    id: "exp-2",
    role: "Microsoft Azure Intern",
    company: "Microsoft Elevate Initiative (AICTE)",
    type: "Internship",
    date: "Jan 2026 – Feb 2026",
    location: "Remote",
    icon: <Cloud className="w-5 h-5 text-cyan-400" />,
    highlights: [
      "Completed an intensive 4-week internship on Azure cloud computing, Artificial Intelligence, and data-driven application development.",
      "Engineered an AI Music Remix & Mood Generator, integrating complex AI models to analyze and manipulate audio based on user moods.",
      "Gained deep hands-on experience with Azure cloud services, deployment workflows, and Microsoft Copilot integrations."
    ],
    techStack: ["Microsoft Azure", "AI Integration", "Cloud Deployment", "Copilot"]
  }
];

export function ExperienceTimeline() {
  return (
    <div className="relative max-w-4xl mx-auto w-full mt-12">
      {/* Vertical Timeline Line */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#decba4]/0 via-[#decba4]/20 to-[#decba4]/0" />

      <div className="flex flex-col gap-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            className="relative pl-12 md:pl-24 group"
          >
            {/* Timeline Node */}
            <div className="absolute left-0 md:left-4 top-6 w-8 h-8 -translate-x-1/2 flex items-center justify-center transition-transform duration-300 group-hover:scale-125">
              <div className="w-full h-full rounded-full bg-black border border-[#decba4]/30 group-hover:border-[#decba4]/80 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(222,203,164,0.15)] group-hover:shadow-[0_0_25px_rgba(222,203,164,0.4)] transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-[#decba4] animate-pulse" />
              </div>
              <div className="absolute inset-0 rounded-full bg-[#decba4]/20 animate-ping opacity-20 group-hover:opacity-40" />
            </div>

            <GlassCard className="p-6 md:p-8 border-white/5 hover:border-[#decba4]/30 hover:shadow-[0_0_30px_rgba(222,203,164,0.1)] transition-all duration-500 relative overflow-hidden bg-black/40">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#decba4]/30 group-hover:bg-[#decba4]/5 transition-colors duration-300">
                        {exp.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-white/70 group-hover:from-[#decba4] group-hover:to-white bg-clip-text text-transparent transition-all duration-300 tracking-tight">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-[#decba4] font-medium text-sm md:text-base ml-1">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                      <span className="text-white/20 px-2">•</span>
                      <span className="text-white/60 font-light">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 text-sm text-white/50 font-mono items-start md:items-end bg-black/20 p-3 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#decba4]/70" />
                      {exp.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#decba4]/70" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <ChevronRight className="w-4 h-4 text-[#decba4] mt-1 shrink-0 transition-transform duration-300 group-hover/item:translate-x-1" />
                      <p className="text-white/70 group-hover/item:text-white/90 transition-colors duration-300 text-sm md:text-base leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 text-xs font-medium text-white/80 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#decba4]/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
