"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { GitPullRequest, GitMerge, ExternalLink } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

interface Contribution {
  repoName: string;
  owner: string;
  htmlUrl: string;
  prs: number;
  merged: number;
  open: number;
  latestPrHtmlUrl: string;
  latestPrTitle: string;
}

export function OpenSourceContributions() {
  const [contributions, setContributions] = useState<Contribution[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [showAll, setShowAll] = useState(false);
  
  const displayCount = 6;
  const visibleContributions = showAll ? contributions : contributions.slice(0, displayCount);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch("/api/github/contributions");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setContributions(data.contributions || []);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchContributions();
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto w-full mt-24">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 text-white/50 mb-4 uppercase tracking-widest text-xs font-semibold">
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-[#decba4] rounded-sm animate-pulse" />
          <span>Open Source</span>
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-[#decba4] rounded-sm animate-pulse" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Open Source <span className="font-signature text-transparent bg-clip-text bg-gradient-to-r from-[#decba4] to-amber-200 font-normal glowing-signature">Contributions</span>
        </h3>
        <p className="text-white/60 text-base font-light max-w-2xl">
          Live tracking of my pull requests and code contributions to external open source repositories.
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center h-40">
          <div className="flex items-center gap-3 text-[#decba4]">
            <div className="w-5 h-5 border-2 border-[#decba4] border-t-transparent rounded-full animate-spin" />
            <span className="animate-pulse">Locating contributions...</span>
          </div>
        </div>
      ) : error ? (
        <div className="text-center text-white/50 py-10">
          <p>Could not load contributions right now.</p>
        </div>
      ) : contributions.length === 0 ? (
        <div className="text-center text-white/50 py-10">
          <p>No external open source contributions found yet. Building things!</p>
        </div>
      ) : (
        <>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence>
              {visibleContributions.map((repo, idx) => (
              <motion.div
                key={repo.repoName}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 6) * 0.1, type: "spring", stiffness: 100 }}
                className="h-full"
              >
              <GlassCard className="p-6 border-white/5 hover:border-[#decba4]/30 hover:shadow-[0_0_30px_rgba(222,203,164,0.1)] transition-all duration-500 group h-full flex flex-col justify-between relative overflow-hidden bg-black/40">
                <div className="absolute inset-0 bg-gradient-to-br from-[#decba4]/[0.02] to-transparent pointer-events-none" />
                
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={`https://github.com/${repo.owner}.png?size=40`} 
                        alt={repo.owner} 
                        className="w-10 h-10 rounded-full border border-white/10"
                      />
                      <div>
                        <a href={repo.htmlUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-white hover:text-[#decba4] transition-colors line-clamp-1">
                          {repo.repoName.split("/")[1]}
                        </a>
                        <p className="text-sm text-white/50 flex items-center gap-1">
                          <GithubIcon className="w-3 h-3" /> {repo.owner}
                        </p>
                      </div>
                    </div>
                    <a href={repo.htmlUrl} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="bg-black/40 rounded-xl p-3 border border-white/5 mb-4 group-hover:border-[#decba4]/20 transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#decba4] to-transparent opacity-50" />
                    <p className="text-xs text-white/50 mb-1 ml-2 font-mono uppercase tracking-wider">Latest PR:</p>
                    <a href={repo.latestPrHtmlUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-white/90 hover:text-[#decba4] transition-colors line-clamp-2 ml-2">
                      {repo.latestPrTitle}
                    </a>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-auto pt-2 border-t border-white/5">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-sm border border-white/5">
                    <GitPullRequest className="w-3.5 h-3.5 text-[#decba4]" />
                    <span className="text-white/70 font-medium">{repo.prs} <span className="hidden sm:inline">Total</span></span>
                  </div>
                  {repo.merged > 0 && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm">
                      <GitMerge className="w-3.5 h-3.5 text-purple-400" />
                      <span className="text-purple-300 font-medium">{repo.merged} <span className="hidden sm:inline">Merged</span></span>
                    </div>
                  )}
                  {repo.open > 0 && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-sm">
                      <GitPullRequest className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-300 font-medium">{repo.open} <span className="hidden sm:inline">Open</span></span>
                    </div>
                  )}
                </div>
              </GlassCard>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>

        {contributions.length > displayCount && (
          <motion.div layout className="mt-10 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full bg-black/40 border border-[#decba4]/20 hover:border-[#decba4]/60 hover:bg-[#decba4]/10 hover:shadow-[0_0_20px_rgba(222,203,164,0.15)] text-[#decba4] transition-colors duration-300 text-sm font-bold tracking-wide shadow-lg flex items-center gap-2 group backdrop-blur-sm"
            >
              {showAll ? "Show Less" : `View ${contributions.length - displayCount} More Projects`}
            </motion.button>
          </motion.div>
        )}
        </>
      )}
    </div>
  );
}
