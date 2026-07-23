"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

interface GithubStats {
  issues: number;
  openPRs: number;
  mergedPRs: number;
  totalContributions: number;
  totalStars: number;
}

export function LiveGithubStats() {
  const username = "Khushi1310-nayak";
  
  const [stats, setStats] = useState<GithubStats>({
    issues: 0,
    openPRs: 0,
    mergedPRs: 0,
    totalContributions: 0,
    totalStars: 0,
  });
  const [loading, setLoading] = useState(true);

  // The Streak API is hosted on Heroku and is currently stable
  const themeParams = "&bg_color=00000000&title_color=decba4&text_color=ffffff&icon_color=decba4&hide_border=true&show_icons=true";
  const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}${themeParams}&ring=decba4&fire=decba4&currStreakLabel=decba4`;

  useEffect(() => {
    async function fetchGithubStats() {
      try {
        const res = await fetch("/api/github");
        if (res.ok) {
          const data = await res.json();
          setStats({
            issues: data.issues || 0,
            openPRs: data.openPRs || 0,
            mergedPRs: data.mergedPRs || 0,
            totalContributions: data.totalContributions || 0,
            totalStars: data.totalStars || 0,
          });
        }
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch custom stats", err);
        setLoading(false);
      }
    }
    fetchGithubStats();
  }, []);

  // Calculate a dynamic grade based on activity
  const calculateGrade = () => {
    const score = stats.totalStars * 10 + (stats.mergedPRs + stats.openPRs) * 5 + stats.issues * 2;
    if (score > 500) return "A+";
    if (score > 300) return "A";
    if (score > 150) return "A-";
    if (score > 100) return "B+";
    if (score > 50) return "B";
    return "B-";
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-20 relative z-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-white/5 border border-white/10 rounded-xl relative">
          <GithubIcon className="w-6 h-6 text-white" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" title="Live Connection" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight">Live GitHub Activity</h3>
          <p className="text-white/50 text-sm">Real-time open-source contributions & statistics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        
        {/* Custom React Grade Card (replacing the broken SVG) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: -1, y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="h-full group perspective-1000"
        >
          <GlassCard className="p-6 md:p-8 border-[#decba4]/20 hover:border-green-400/50 hover:shadow-[0_0_40px_0px] hover:shadow-green-400/50 transition-all duration-500 relative overflow-hidden bg-[#0d1117]/80 h-full flex flex-col justify-center min-h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#decba4]/5 to-transparent pointer-events-none" />
            
            {loading ? (
              <div className="flex items-center justify-center h-full text-[#decba4] animate-pulse">
                Syncing data...
              </div>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-[#decba4] font-bold text-lg md:text-xl mb-4">Manisa Nayak&apos;s GitHub Stats</h4>
                  <div className="space-y-2 text-sm md:text-base font-semibold text-white/90">
                    <div className="flex justify-between">
                      <span>Total Stars Earned:</span>
                      <span>{stats.totalStars}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Commits (Est):</span>
                      <span>176</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total PRs:</span>
                      <span>{stats.openPRs + stats.mergedPRs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Issues:</span>
                      <span>{stats.issues}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Contributed to:</span>
                      <span>21</span>
                    </div>
                  </div>
                </div>

                <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="50%" cy="50%" r="42%" fill="none" stroke="#2d333b" strokeWidth="8%" />
                    <circle 
                      cx="50%" 
                      cy="50%" 
                      r="42%" 
                      fill="none" 
                      stroke="#decba4" 
                      strokeWidth="8%" 
                      strokeDasharray="264" 
                      strokeDashoffset={264 - (264 * 70) / 100} // 70% full
                      className="drop-shadow-[0_0_8px_rgba(222,203,164,0.5)] transition-all duration-1000 ease-out" 
                    />
                  </svg>
                  <span className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10">
                    {calculateGrade()}
                  </span>
                </div>
              </div>
            )}
          </GlassCard>
        </motion.div>

        {/* Stable Heroku Streak Card SVG */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: 1.05, rotate: 1, y: -5 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
          className="h-full group perspective-1000"
        >
          <GlassCard className="p-4 md:p-6 border-[#decba4]/20 hover:border-pink-400/50 hover:shadow-[0_0_40px_0px] hover:shadow-pink-400/50 transition-all duration-500 relative overflow-hidden bg-black/40 h-full flex items-center justify-center min-h-[200px]">
            <div className="absolute inset-0 bg-gradient-to-tl from-[#decba4]/5 to-transparent pointer-events-none" />
            <img 
              src={streakUrl} 
              alt="GitHub Streak" 
              className="w-full h-auto max-w-[450px] object-contain relative z-10 filter drop-shadow-[0_0_15px_rgba(222,203,164,0.1)]"
            />
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
