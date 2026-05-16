"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Phone, Mail, ExternalLink } from "lucide-react";

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

export function ContactCards() {
  const cards = [
    {
      title: "GitHub",
      display: "github.com/Khushi1310-nayak",
      link: "https://github.com/Khushi1310-nayak",
      icon: <GithubIcon className="w-6 h-6" />
    },
    {
      title: "LinkedIn",
      display: "linkedin.com/in/manisa-nayak-185bb5378",
      link: "https://www.linkedin.com/in/manisa-nayak-185bb5378/",
      icon: <LinkedinIcon className="w-6 h-6" />
    },
    {
      title: "Phone",
      display: "+91 7077780027",
      link: "tel:+917077780027",
      icon: <Phone className="w-6 h-6" />
    },
    {
      title: "Email",
      display: "khushinayak127@gmail.com",
      link: "mailto:khushinayak127@gmail.com",
      icon: <Mail className="w-6 h-6" />
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, idx) => (
        <motion.a
          key={card.title}
          href={card.link}
          target={card.title === "Phone" || card.title === "Email" ? "_self" : "_blank"}
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          whileHover={{ y: -5 }}
          className="group block"
        >
          <GlassCard className="h-full p-8 flex flex-col items-center text-center border-[#decba4]/10 hover:border-[#decba4]/40 bg-gradient-to-b from-black/40 to-black/20 hover:bg-[#decba4]/5 transition-all duration-500 relative overflow-hidden group-hover:shadow-[0_15px_30px_rgba(222,203,164,0.1)]">
            
            {/* Hover Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#decba4]/10 blur-[30px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="w-16 h-16 rounded-full bg-black/50 border border-[#decba4]/20 flex items-center justify-center text-white/70 mb-6 group-hover:text-[#decba4] group-hover:scale-110 group-hover:border-[#decba4]/50 transition-all duration-300 relative z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              {card.icon}
            </div>
            
            <h3 className="text-xl font-medium text-white/90 mb-2 group-hover:text-white transition-colors relative z-10">
              {card.title}
            </h3>
            
            <p className="text-xs text-white/50 font-light truncate w-full relative z-10">
              {card.display}
            </p>

            <div className="mt-6 text-[#decba4]/50 group-hover:text-[#decba4] transition-colors relative z-10">
              {card.title === "Phone" ? (
                 <Phone className="w-4 h-4" />
              ) : card.title === "Email" ? (
                 <Mail className="w-4 h-4" />
              ) : (
                <ExternalLink className="w-4 h-4" />
              )}
            </div>
          </GlassCard>
        </motion.a>
      ))}
    </div>
  );
}
