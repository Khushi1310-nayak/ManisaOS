"use client";

import { motion } from "framer-motion";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { OpenSourceContributions } from "./OpenSourceContributions";
import { ProjectAdminCard } from "./ProjectAdminCard";
import { LiveGithubStats } from "../achievements/LiveGithubStats";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative w-full py-20 px-4 md:px-6 z-10 bg-[var(--background)] overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-[#3e5151] opacity-[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#decba4] opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 text-white/50 mb-4 uppercase tracking-widest text-xs font-semibold">
            <span className="w-2 h-2 bg-[#decba4] rounded-sm" />
            <span>Professional Journey</span>
            <span className="w-2 h-2 bg-[#decba4] rounded-sm" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Work <span className="font-signature text-5xl md:text-6xl text-[#decba4] glowing-signature font-normal">Experience</span>
          </h2>
          
          <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
            A track record of building production-ready features, leveraging modern cloud architectures, and integrating AI into practical applications.
          </p>
        </motion.div>

        <ExperienceTimeline />
        
        {/* Project Admin Section */}
        <ProjectAdminCard />
        
        {/* New Live Open Source Contributions Section */}
        <OpenSourceContributions />
        
        {/* Live GitHub Stats widget */}
        <LiveGithubStats />
      </div>
    </section>
  );
}
