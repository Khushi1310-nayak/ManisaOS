"use client";

import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProjectsCTA({ onViewAll }: { onViewAll: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-12 relative overflow-hidden rounded-[2rem] border border-[#decba4]/20 bg-black/40 backdrop-blur-xl"
    >
      {/* Background Decorative Element */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#decba4]/10 rounded-full flex items-center justify-center border border-[#decba4]/20">
        <Rocket className="w-6 h-6 text-[#decba4]" />
      </div>

      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-2 md:pl-16">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          Every project is a step forward.
        </h3>
        <p className="text-white/40 text-sm md:text-base font-light">
          Turning ideas into impact, one line of code at a time.
        </p>
      </div>

      <div className="relative z-10">
        <Button 
          onClick={onViewAll}
          variant="primary" 
          className="px-10 py-4 text-sm font-bold uppercase tracking-widest bg-black/60 border-[#decba4]/30 hover:border-[#decba4]/60 transition-all shadow-[0_0_20px_rgba(222,203,164,0.1)] hover:shadow-[0_0_30px_rgba(222,203,164,0.3)]"
        >
          View All Projects
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      
      {/* Subtle glowing lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/10 to-transparent" />
    </motion.div>
  );
}
