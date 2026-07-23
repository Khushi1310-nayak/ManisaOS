"use client";

import { useEffect, useState } from "react";
import { GitCommit, Rocket } from "lucide-react";

interface ProjectLiveStatsProps {
  githubLink: string;
}

export function ProjectLiveStats({ githubLink }: ProjectLiveStatsProps) {
  const [stats, setStats] = useState<{ commits: number; deployments: number } | null>(null);
  const [loading, setLoading] = useState(!!githubLink && githubLink !== "#");

  useEffect(() => {
    if (!githubLink || githubLink === "#") {
      return;
    }

    async function fetchStats() {
      try {
        const res = await fetch(`/api/github/project-stats?url=${encodeURIComponent(githubLink)}`);
        if (res.ok) {
          const data = await res.json();
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to fetch live project stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, [githubLink]);

  if (loading) {
    return (
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5 animate-pulse">
        <div className="w-1.5 h-1.5 rounded-full bg-[#decba4]/50" />
        <div className="h-3 w-24 bg-white/5 rounded-full" />
      </div>
    );
  }

  if (!stats) return null;

  return (
    <div className="flex flex-wrap items-center gap-3 mt-4 pt-4 border-t border-white/5">
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#decba4]/5 border border-[#decba4]/10 text-sm">
        <div className="w-1.5 h-1.5 rounded-full bg-[#decba4] shadow-[0_0_8px_#decba4] animate-pulse" />
        <span className="text-[#decba4]/70 font-mono text-[10px] uppercase tracking-widest font-bold">Live Data</span>
      </div>
      
      {stats.commits > 0 && (
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-sm">
          <GitCommit className="w-3.5 h-3.5 text-white/40" />
          <span className="text-white/70 font-medium text-[11px]">{stats.commits.toLocaleString()} Commits</span>
        </div>
      )}

      {stats.deployments > 0 && (
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-sm">
          <Rocket className="w-3.5 h-3.5 text-green-400" />
          <span className="text-green-300 font-medium text-[11px]">{stats.deployments} Deployments</span>
        </div>
      )}
    </div>
  );
}
