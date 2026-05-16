"use client";

import { motion } from "framer-motion";

export function TechStrip() {
  const techs = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "N" },
    { name: "TypeScript", icon: "TS" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Python", icon: "🐍" },
    { name: "Tailwind CSS", icon: "🌊" },
    { name: "Git", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "Firebase", icon: "🔥" },
    { name: "Google Cloud", icon: "☁️" },
  ];

  return (
    <div className="flex flex-col gap-12 mt-8 pb-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 text-white/50 mb-6 uppercase tracking-widest text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 bg-[#decba4] rounded-sm" />
          <span>Technologies I work with every day</span>
        </div>

        <div className="relative w-full overflow-hidden py-6">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050a0a] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050a0a] to-transparent z-10 pointer-events-none" />
          
          {/* Orbit Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/30 to-transparent -translate-y-1/2" />

          {/* Scrolling Content */}
          <div className="flex items-center gap-8 md:gap-12 w-max animate-[scroll_40s_linear_infinite]">
            {/* Double the array for infinite scroll effect */}
            {[...techs, ...techs].map((tech, idx) => (
              <div 
                key={idx} 
                className="relative group flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-full border border-[#decba4]/20 bg-black/60 backdrop-blur-sm flex items-center justify-center text-xl shadow-[0_0_15px_rgba(222,203,164,0.1)] group-hover:border-[#decba4]/60 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(222,203,164,0.3)] transition-all duration-300 z-10">
                  {tech.icon}
                </div>
                <span className="text-[10px] text-white/40 absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {tech.name}
                </span>
                
                {/* Connection Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#decba4]/0 group-hover:bg-[#decba4] blur-[2px] transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Footer Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center pt-10 border-t border-white/5 relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/20 to-transparent" />
        
        <h3 className="text-xl md:text-2xl text-white/80 font-light tracking-wide flex items-center justify-center gap-4">
          <span className="text-[#decba4]/40 text-4xl leading-none">&quot;</span>
          <span>Skills are the tools. Creativity is the power. <span className="text-[#decba4]">Impact is the goal.</span></span>
        </h3>
        <p className="mt-4 font-signature text-3xl text-[#3e5151] glowing-signature drop-shadow-[0_0_10px_rgba(62,81,81,0.5)]">
          - Manisa Nayak
        </p>
      </motion.div>
    </div>
  );
}
