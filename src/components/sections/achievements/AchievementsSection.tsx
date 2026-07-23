"use client";

import { AchievementsHero } from "./AchievementsHero";
import { FeaturedAchievements } from "./FeaturedAchievements";
import { CertificatesGallery } from "./CertificatesGallery";
import { FutureGoals } from "./FutureGoals";
import { AchievementsFooterStrip } from "./AchievementsFooterStrip";

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative w-full py-20 px-4 md:px-6 z-10 overflow-hidden bg-[var(--background)]">
      {/* Ambient glows */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#decba4] opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[30%] left-[-10%] w-[60vw] h-[60vw] bg-[#3e5151] opacity-[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-20 md:gap-32 relative z-10">
        {/* Existing Achievement Components */}
        <AchievementsHero />
        <FeaturedAchievements />
        <div className="-mt-10 md:-mt-16">
          <CertificatesGallery />
        </div>
        <FutureGoals />
        <AchievementsFooterStrip />
      </div>
    </section>
  );
}
