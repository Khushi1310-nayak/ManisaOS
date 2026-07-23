import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/about/AboutSection";
import { ProjectsSection } from "@/components/sections/projects/ProjectsSection";
import { SkillsSection } from "@/components/sections/skills/SkillsSection";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { AchievementsSection } from "@/components/sections/achievements/AchievementsSection";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { Footer } from "@/components/sections/contact/Footer";
import { BackgroundParticles } from "@/components/effects/BackgroundParticles";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-[var(--background)]">
      {/* Dynamic Background */}
      <BackgroundParticles />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Sections */}
      <div className="flex flex-col">
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
