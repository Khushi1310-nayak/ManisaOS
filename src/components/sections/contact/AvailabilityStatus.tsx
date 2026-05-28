"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { CheckCircle2, Clock, Mail } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export function AvailabilityStatus() {
  return (
    <div className="flex flex-col gap-6">
      {/* 1. Availability Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <GlassCard className="p-8 border-[#decba4]/10 bg-gradient-to-br from-black/40 to-black/20 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8 relative z-10">
            <h3 className="text-xl font-medium text-white/90">I&apos;m Currently</h3>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#27c93f]/10 border border-[#27c93f]/20">
              <span className="w-2 h-2 rounded-full bg-[#27c93f] animate-pulse shadow-[0_0_8px_#27c93f]" />
              <span className="text-[10px] text-[#27c93f] uppercase tracking-wider font-semibold">Available for opportunities</span>
            </div>
          </div>

          <ul className="space-y-4 relative z-10 max-w-[200px]">
            {[
              "Open to Full-time roles",
              "Excited about impactful projects",
              "Love working with amazing teams",
              "Always eager to learn & grow"
            ].map((text, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#decba4] shrink-0 mt-0.5 opacity-80" />
                <span className="text-sm text-white/70 font-light">{text}</span>
              </li>
            ))}
          </ul>

          {/* Decorative Laptop Sketch */}
          <div className="absolute -bottom-4 -right-4 w-40 h-40 opacity-20 pointer-events-none transform rotate-[-10deg]">
             <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#decba4]" fill="none" strokeWidth="0.5">
               {/* Laptop Base */}
               <path d="M 10 70 L 90 70 L 80 80 L 20 80 Z" />
               {/* Laptop Screen */}
               <path d="M 20 70 L 25 30 L 75 30 L 80 70" />
               {/* Screen Content */}
               <path d="M 30 40 L 70 40" />
               <path d="M 30 50 L 60 50" />
               {/* Code Icon inside screen */}
               <path d="M 45 45 L 40 50 L 45 55" />
               <path d="M 55 45 L 60 50 L 55 55" />
               <path d="M 52 42 L 48 58" />
             </svg>
          </div>
        </GlassCard>
      </motion.div>

      {/* 2. Response Time Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <GlassCard className="p-6 border-[#decba4]/10 bg-gradient-to-br from-black/40 to-black/20 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#decba4] opacity-80" />
            <h3 className="text-lg font-medium text-white/90">Response Time</h3>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-white/60">
            <div className="w-1 h-1 bg-[#decba4] rounded-full opacity-50" />
            <span>I usually respond within <span className="text-[#decba4] border border-[#decba4]/20 bg-[#decba4]/5 px-2 py-0.5 rounded-md ml-1">24 Hours</span></span>
          </div>

          <div className="text-[10px] text-white/40 mt-1 pl-3">
            Let&apos;s create something incredible together! ✦
          </div>
        </GlassCard>
      </motion.div>

      {/* 3. Connect With Me Panel */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <GlassCard className="p-6 border-[#decba4]/10 bg-gradient-to-br from-black/40 to-black/20">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 bg-[#decba4] rounded-sm opacity-50" />
            <h3 className="text-lg font-medium text-white/90">Connect With Me</h3>
          </div>
          
          <p className="text-xs text-white/50 mb-6 font-light">
            Let&apos;s connect and build something amazing.
          </p>

          <div className="flex items-center gap-4">
            {[
              { icon: <GithubIcon className="w-4 h-4" />, link: "https://github.com/Khushi1310-nayak" },
              { icon: <LinkedinIcon className="w-4 h-4" />, link: "https://www.linkedin.com/in/manisa-nayak-185bb5378/" },
              { icon: <Mail className="w-4 h-4" />, link: "https://mail.google.com/mail/?view=cm&fs=1&to=khushinayak127@gmail.com" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#decba4] hover:border-[#decba4]/40 hover:bg-[#decba4]/5 transition-all shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_15px_rgba(222,203,164,0.2)]"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
