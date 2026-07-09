"use client";

import { motion } from "framer-motion";

interface ProjectFiltersProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

const categories = [
  "All",
  "Featured",
  "AI / ML",
  "Full Stack",
  "Productivity",
  "Hackathon",
  "Web Development"
];

export function ProjectFilters({ activeFilter, setActiveFilter }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 px-4">
      {categories.map((category) => {
        const isActive = activeFilter === category;
        return (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`relative px-6 py-2 rounded-full text-[11px] uppercase tracking-widest font-bold transition-all duration-300 border ${
              isActive 
                ? "bg-[#decba4]/10 text-white border-[#decba4]/50 shadow-[0_0_15px_rgba(222,203,164,0.2)]" 
                : "text-white/40 hover:text-white hover:bg-white/5 border-white/10"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-[#decba4]/5 rounded-full z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
