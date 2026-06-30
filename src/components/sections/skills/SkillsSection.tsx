"use client";

import { SkillsHero } from "./SkillsHero";
import { TechnicalSkills } from "./TechnicalSkills";
import { ProficiencyMetrics } from "./ProficiencyMetrics";
import { BentoGridBottom } from "./BentoGridBottom";
import { TechStrip } from "./TechStrip";

export function SkillsSection() {
  return (
    <section id="skills" className="relative w-full py-20 px-6 z-10 overflow-hidden">
      {/* Background Glows for the section */}
      <div className="absolute top-[10%] right-[-10%] w-[50vw] h-[50vw] bg-[#decba4] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vw] bg-[#3e5151] opacity-[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24">
        <SkillsHero />
        <TechnicalSkills />
        <ProficiencyMetrics />
        <div className="-mt-8 md:-mt-12">
          <BentoGridBottom />
        </div>
        <TechStrip />
      </div>
    </section>
  );
}
