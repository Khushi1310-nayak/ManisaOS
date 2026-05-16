"use client";

import { ContactHero } from "./ContactHero";
import { ContactCards } from "./ContactCards";
import { ContactForm } from "./ContactForm";
import { AvailabilityStatus } from "./AvailabilityStatus";
import { CollaborationBanner } from "./CollaborationBanner";

export function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-20 px-6 z-10 overflow-hidden">
      {/* Background Glows for the section */}
      <div className="absolute top-[30%] left-[-10%] w-[50vw] h-[50vw] bg-[#decba4] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[60vw] h-[60vw] bg-[#3e5151] opacity-[0.05] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-24 relative z-10">
        <ContactHero />
        <ContactCards />
        
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
          <ContactForm />
          <AvailabilityStatus />
        </div>
        
        <CollaborationBanner />
      </div>
    </section>
  );
}
