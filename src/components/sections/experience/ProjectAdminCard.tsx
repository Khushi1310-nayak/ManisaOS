"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Users, GitPullRequest, GitMerge, AlertCircle, CheckCircle, XCircle, Shield, X, Activity, Terminal, ExternalLink, Calendar } from "lucide-react";

interface GithubItem {
  title: string;
  html_url: string;
  state: string;
  user: { login: string; avatar_url: string };
  created_at: string;
}

interface AdminStats {
  contributors: { login: string; avatar_url: string; contributions: number; html_url: string }[];
  prs: { 
    total: number; 
    merged: number; 
    items: GithubItem[];
  };
  issues: { 
    open: number; 
    closed: number;
    items: GithubItem[];
  };
  ci: { passed: number; failed: number };
}

export function ProjectAdminCard() {
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "prs" | "issues">("overview");

  useEffect(() => {
    async function fetchAdminStats() {
      try {
        const res = await fetch("/api/github/admin-stats?owner=Khushi1310-nayak&repo=SkillVerse");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setStats(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(true);
        setLoading(false);
      }
    }
    fetchAdminStats();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      setTimeout(() => setActiveTab("overview"), 300);
    }
    return () => document.body.classList.remove("modal-open");
  }, [isModalOpen]);

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-24 mb-12">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="flex items-center gap-2 text-white/50 mb-4 uppercase tracking-widest text-xs font-semibold">
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-indigo-400 rounded-sm animate-pulse" />
          <span>Project Leadership</span>
          <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-indigo-400 rounded-sm animate-pulse" />
        </div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Open Source <span className="font-signature text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 font-normal glowing-signature">Maintainer</span>
        </h3>
      </div>

      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer max-w-lg mx-auto"
      >
        <GlassCard className="p-6 border-indigo-500/30 hover:border-indigo-400/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all duration-500 group relative overflow-hidden bg-black/60">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] to-transparent pointer-events-none" />
          
          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">SkillVerse</h4>
                <p className="text-[10px] uppercase tracking-widest text-indigo-400/80 font-bold">Project Admin</p>
              </div>
            </div>
            <div className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full">
              <span className="text-[10px] text-indigo-300 uppercase tracking-widest font-bold">Live Stats</span>
            </div>
          </div>

          <p className="text-sm text-white/60 mb-6 font-light leading-relaxed relative z-10">
            Managing global contributors, reviewing pull requests, and maintaining the CI/CD pipeline for the SkillVerse E-learning platform.
          </p>

          <div className="flex items-center justify-between border-t border-white/10 pt-4 relative z-10">
            {loading ? (
              <span className="text-xs text-white/40 animate-pulse">Loading telemetry...</span>
            ) : error ? (
              <span className="text-xs text-red-400">Offline</span>
            ) : stats ? (
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-bold text-white">{stats.contributors.length} <span className="text-xs font-normal text-white/40">Devs</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <GitMerge className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-bold text-white">{stats.prs.merged} <span className="text-xs font-normal text-white/40">Merged</span></span>
                </div>
              </div>
            ) : null}
            <span className="text-xs text-indigo-400 font-bold group-hover:translate-x-1 transition-transform">Expand →</span>
          </div>
        </GlassCard>
      </motion.div>

      {/* Animated Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              layoutId="admin-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col rounded-2xl bg-[#0a0a0a] border border-indigo-500/20 shadow-2xl z-10"
            >
              {/* Modal Header */}
              <div className="shrink-0 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10 p-4 md:px-6 md:pt-6 md:pb-0 z-20">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                      <Activity className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white leading-tight">SkillVerse Telemetry</h3>
                      <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold">Admin Dashboard</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors border border-white/10"
                  >
                    <X className="w-4 h-4 text-white/70" />
                  </button>
                </div>

                {/* Tabs */}
                {!loading && !error && stats && (
                  <div className="flex items-center gap-6 border-b border-transparent">
                    {(["overview", "prs", "issues"] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`pb-3 text-xs md:text-sm font-bold uppercase tracking-widest transition-colors relative ${
                          activeTab === tab ? "text-indigo-400" : "text-white/40 hover:text-white/70"
                        }`}
                      >
                        {tab === "overview" && "Overview"}
                        {tab === "prs" && "Pull Requests"}
                        {tab === "issues" && "Issues"}
                        {activeTab === tab && (
                          <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-400 rounded-t-full" />
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Body */}
              <div className="p-4 md:p-6 overflow-y-auto hidden-scrollbar flex-1">
                {loading ? (
                  <div className="h-40 flex items-center justify-center">
                    <span className="text-indigo-400 animate-pulse text-sm uppercase tracking-widest font-bold">Connecting to Data Stream...</span>
                  </div>
                ) : error || !stats ? (
                  <div className="h-40 flex items-center justify-center text-red-400">Error loading data.</div>
                ) : (
                  <>
                    {/* OVERVIEW TAB */}
                    {activeTab === "overview" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-indigo-500/30 transition-colors">
                            <GitPullRequest className="w-5 h-5 text-white/40" />
                            <div className="text-2xl font-bold text-white font-mono">{stats.prs.total}</div>
                            <div className="text-[9px] uppercase tracking-widest text-white/40 font-bold">Total PRs</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-emerald-500/30 transition-colors">
                            <GitMerge className="w-5 h-5 text-emerald-400" />
                            <div className="text-2xl font-bold text-emerald-400 font-mono">{stats.prs.merged}</div>
                            <div className="text-[9px] uppercase tracking-widest text-emerald-400/60 font-bold">Merged PRs</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-amber-500/30 transition-colors">
                            <AlertCircle className="w-5 h-5 text-amber-400" />
                            <div className="text-2xl font-bold text-amber-400 font-mono">{stats.issues.open}</div>
                            <div className="text-[9px] uppercase tracking-widest text-amber-400/60 font-bold">Open Issues</div>
                          </div>
                          <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center gap-2 hover:border-blue-500/30 transition-colors">
                            <CheckCircle className="w-5 h-5 text-blue-400" />
                            <div className="text-2xl font-bold text-blue-400 font-mono">{stats.issues.closed}</div>
                            <div className="text-[9px] uppercase tracking-widest text-blue-400/60 font-bold">Closed Issues</div>
                          </div>
                        </div>

                        <div className="bg-[#050505] border border-white/5 rounded-xl p-5 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[50px]" />
                          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2">
                            <Terminal className="w-4 h-4 text-white/40" /> CI/CD Pipeline Health
                          </h4>
                          <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                <CheckCircle className="w-4 h-4 text-emerald-400" />
                              </div>
                              <div>
                                <div className="text-xl font-bold text-emerald-400 font-mono">{stats.ci.passed}</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Tests Passed</div>
                              </div>
                            </div>
                            <div className="w-[1px] h-10 bg-white/10" />
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                <XCircle className="w-4 h-4 text-red-400" />
                              </div>
                              <div>
                                <div className="text-xl font-bold text-red-400 font-mono">{stats.ci.failed}</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Tests Failed</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-widest flex items-center gap-2">
                            <Users className="w-4 h-4 text-white/40" /> Open Source Contributors ({stats.contributors.length})
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {stats.contributors.map((c) => (
                              <a 
                                key={c.login}
                                href={c.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white/5 border border-white/10 rounded-full pl-1 pr-3 py-1 flex items-center gap-2 hover:bg-white/10 transition-colors group/contributor"
                              >
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={c.avatar_url} alt={c.login} className="w-6 h-6 rounded-full bg-black/50" />
                                <div className="flex flex-col">
                                  <span className="text-[10px] font-bold text-white group-hover/contributor:text-indigo-300">{c.login}</span>
                                  <span className="text-[8px] text-white/40 uppercase tracking-widest">{c.contributions} commits</span>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* PRs TAB */}
                    {activeTab === "prs" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-3">
                        {stats.prs.items.length === 0 ? (
                          <div className="text-center text-white/40 py-10">No recent Pull Requests found.</div>
                        ) : (
                          stats.prs.items.map((pr, i) => (
                            <a 
                              key={i} 
                              href={pr.html_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-indigo-500/40 hover:bg-white/10 transition-colors group"
                            >
                              <div className="flex items-start gap-4">
                                <div className="mt-1 shrink-0">
                                  {pr.state === 'merged' ? (
                                    <GitMerge className="w-5 h-5 text-emerald-400" />
                                  ) : pr.state === 'closed' ? (
                                    <XCircle className="w-5 h-5 text-red-400" />
                                  ) : (
                                    <GitPullRequest className="w-5 h-5 text-amber-400" />
                                  )}
                                </div>
                                <div className="flex flex-col gap-1">
                                  <h4 className="text-white font-medium group-hover:text-indigo-300 transition-colors line-clamp-1">{pr.title}</h4>
                                  <div className="flex items-center gap-3 text-xs text-white/50">
                                    <div className="flex items-center gap-1">
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img src={pr.user?.avatar_url} alt={pr.user?.login} className="w-4 h-4 rounded-full" />
                                      <span>{pr.user?.login}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-3 h-3" />
                                      <span>{formatDate(pr.created_at)}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/60 hidden md:block shrink-0" />
                            </a>
                          ))
                        )}
                      </motion.div>
                    )}

                    {/* ISSUES TAB */}
                    {activeTab === "issues" && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-3">
                        {stats.issues.items.length === 0 ? (
                          <div className="text-center text-white/40 py-10">No recent Issues found.</div>
                        ) : (
                          stats.issues.items.map((issue, i) => (
                            <a 
                              key={i} 
                              href={issue.html_url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-indigo-500/40 hover:bg-white/10 transition-colors group"
                            >
                              <div className="flex items-start gap-4">
                                <div className="mt-1 shrink-0">
                                  {issue.state === 'closed' ? (
                                    <CheckCircle className="w-5 h-5 text-blue-400" />
                                  ) : (
                                    <AlertCircle className="w-5 h-5 text-amber-400" />
                                  )}
                                </div>
                                <div className="flex flex-col gap-1">
                                  <h4 className="text-white font-medium group-hover:text-indigo-300 transition-colors line-clamp-1">{issue.title}</h4>
                                  <div className="flex items-center gap-3 text-xs text-white/50">
                                    <div className="flex items-center gap-1">
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img src={issue.user?.avatar_url} alt={issue.user?.login} className="w-4 h-4 rounded-full" />
                                      <span>{issue.user?.login}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Calendar className="w-3 h-3" />
                                      <span>{formatDate(issue.created_at)}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-white/60 hidden md:block shrink-0" />
                            </a>
                          ))
                        )}
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
