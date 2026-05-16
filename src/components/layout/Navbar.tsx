/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Award, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", icon: Home, id: "home" },
  { name: "About", icon: User, id: "about" },
  { name: "Projects", icon: Briefcase, id: "projects" },
  { name: "Skills", icon: Award, id: "skills" },
  { name: "Achievements", icon: Award, id: "achievements" },
  { name: "Contact", icon: Mail, id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Focus on the upper-middle of the viewport
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections that have IDs matching our nav items
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []); // Dependencies removed as navItems is now stable outside the component

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkModal = () => {
      setIsModalOpen(document.body.classList.contains("modal-open"));
    };

    // Initial check
    checkModal();

    // Observe body class changes
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto w-full transition-all duration-500",
      isModalOpen ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
    )}>
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-light text-white/80">
          MN
        </div>
        <span className="font-medium text-lg tracking-wide text-white/90">
          Manisa Nayak
        </span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center justify-center gap-2 glass-panel rounded-full px-2 py-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.id}`}
            onClick={(e) => {
              // Smooth scroll fallback if needed
              setActiveSection(item.id);
            }}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300",
              activeSection === item.id
                ? "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
          </a>
        ))}
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <a href="#contact">
          <button className="glass-panel px-6 py-2 rounded-full flex items-center gap-2 text-white/90 hover:bg-white/10 transition-colors border border-[var(--color-glass-border)] group">
            <span>Talk With Me</span>
            <Sparkles className="w-4 h-4 text-[#decba4] group-hover:animate-pulse" />
          </button>
        </a>
      </div>
    </header>
  );
}

