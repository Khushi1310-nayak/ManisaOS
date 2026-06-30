"use client";

import { ProfileHeader } from "./ProfileHeader";
import { JourneyCard } from "./JourneyCard";
import { DrivesCard } from "./DrivesCard";
import { TechStack } from "./TechStack";
import { CurrentFocus } from "./CurrentFocus";
import { CurrentlyLearning } from "./CurrentlyLearning";
import { MyApproach } from "./MyApproach";

export function AboutSection() {
  return (
    <section id="about" className="relative w-full pt-32 pb-10 px-6 z-10">
      {/* Background Glows for the section */}
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-[#decba4] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[60vw] h-[60vw] bg-[#3e5151] opacity-[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top Section */}
        <ProfileHeader />

        {/* Middle Grid - Journey, Drives */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <JourneyCard />
          <DrivesCard />
        </div>

        {/* Tech Stack full width */}
        <TechStack />

        {/* Bottom Grid - Focus, Learning, Approach */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CurrentFocus />
          <CurrentlyLearning />
          <MyApproach />
        </div>
      </div>
    </section>
  );
}
