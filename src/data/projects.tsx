"use client";

import { ReactNode } from "react";
import { 
  Brain, 
  Zap, 
  Layout, 
  Lock, 
  BarChart3, 
  Compass, 
  Rocket, 
  Shield, 
  Cpu, 
  FileText, 
  UserCircle, 
  Wrench, 
  Shirt, 
  Search, 
  Globe, 
  PenTool, 
  Terminal, 
  Cloud, 
  Heart, 
  Activity, 
  GraduationCap, 
  Monitor, 
  Briefcase, 
  Trophy, 
  Utensils, 
  Camera, 
  Sparkles,
  Music,
  ShieldAlert
} from "lucide-react";
import Image from "next/image";

export interface Feature {
  title: string;
  desc: string;
  icon: ReactNode;
}

export interface Metric {
  label: string;
  value: string;
  status?: "live" | "active" | "secured" | "open";
}

export interface Project {
  id: string;
  number: string;
  category: string;
  subCategories?: string[];
  isFeatured?: boolean;
  title: string;
  description: string;
  details: string;
  features: Feature[];
  metrics: Metric[];
  techStack: string[];
  preview: ReactNode;
  githubLink: string;
  liveLink: string;
}

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

export const allProjects: Project[] = [
  {
    id: "contritrack",
    number: "01",
    category: "Productivity",
    subCategories: ["Full Stack", "AI / ML"],
    isFeatured: true,
    title: "ContriTrack",
    description: "AI-powered academic collaboration and telemetry platform for student teams and developers.",
    details: "ContriTrack is an AI-powered academic collaboration and telemetry platform designed for students, developers, engineering teams, and hackathon communities. The platform helps teams manage workspaces, track contributions, monitor collaboration fairness, visualize productivity trends, conduct meetings, manage recruitment pipelines, and receive AI-powered insights through real-time analytics systems. Built with a modern full-stack architecture and enterprise-inspired design system, ContriTrack transforms collaborative workflows into a structured and intelligent productivity ecosystem.",
    features: [
      { title: "Workspace Management", desc: "Dynamic workspace initialization.", icon: <Layout className="w-5 h-5" /> },
      { title: "AI Insights", desc: "Intelligent suggestions using Gemini.", icon: <Brain className="w-5 h-5" /> },
      { title: "Telemetry", desc: "Real-time analytics dashboards.", icon: <BarChart3 className="w-5 h-5" /> },
      { title: "Teams Management", desc: "Collaboration monitoring.", icon: <UserCircle className="w-5 h-5" /> },
      { title: "Reports System", desc: "AI-generated reporting.", icon: <FileText className="w-5 h-5" /> },
      { title: "Security", desc: "Identity synchronization.", icon: <Shield className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "AI Integration", value: "Gemini", status: "active" },
      { label: "Database", value: "Supabase", status: "secured" },
      { label: "Deployment", value: "Vercel", status: "live" }
    ],
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Supabase", "Prisma", "Gemini API"],
    githubLink: "https://github.com/Khushi1310-nayak/ContriTrack",
    liveLink: "https://contri-track.vercel.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-4 bg-[#0d1117] overflow-hidden group/p border border-white/5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
           <div className="flex items-center gap-2">
              <GithubIcon className="w-5 h-5 text-white" />
              <div className="flex flex-col">
                 <span className="text-[10px] font-mono text-white/90">Khushi1310-nayak/ContriTrack</span>
                 <span className="text-[8px] text-emerald-400 font-mono">● Active Telemetry</span>
              </div>
           </div>
           <div className="flex gap-1.5">
              <div className="px-2 py-0.5 rounded-full border border-white/20 text-[7px] text-white/60 font-mono">Public</div>
           </div>
        </div>
        <div className="flex-grow space-y-3">
           <div className="bg-[#010409] border border-white/10 rounded-lg p-2.5 flex flex-col gap-1.5 group-hover:border-emerald-500/30 transition-colors">
              <div className="text-[7px] text-white/50 font-mono uppercase tracking-widest">Contribution Analytics</div>
              <div className="flex gap-1">
                 {[...Array(12)].map((_, i) => (
                    <div key={i} className="flex flex-col gap-1">
                       {[...Array(3)].map((_, j) => {
                          const intensity = [0, 1, 2, 3, 4][(i * 3 + j) % 5];
                          const colors = ['bg-white/5', 'bg-[#0e4429]', 'bg-[#006d32]', 'bg-[#26a641]', 'bg-[#39d353]'];
                          return (
                             <div key={j} className={`w-2 h-2 rounded-[1px] ${colors[intensity]} ${i > 8 && j === 1 ? 'animate-pulse' : ''}`} />
                          );
                       })}
                    </div>
                 ))}
                 <div className="flex flex-col gap-1 w-full justify-end items-end pl-2">
                    <BarChart3 className="w-5 h-5 text-emerald-500/50" />
                 </div>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#010409] border border-white/10 rounded-lg p-2 flex flex-col gap-1">
                 <div className="text-[12px] font-bold text-white font-mono">1,024</div>
                 <div className="text-[7px] text-white/40 uppercase font-bold tracking-widest">Total Commits</div>
              </div>
              <div className="bg-[#010409] border border-white/10 rounded-lg p-2 flex flex-col gap-1">
                 <div className="text-[12px] font-bold text-emerald-400 font-mono">98%</div>
                 <div className="text-[7px] text-white/40 uppercase font-bold tracking-widest">Collab Health</div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "focusync",
    number: "02",
    category: "Productivity",
    subCategories: ["AI / ML", "Full Stack"],
    isFeatured: true,
    title: "FOCUSYNC",
    description: "Privacy-first productivity and burnout-awareness app for developers.",
    details: "FOCUSYNC is a privacy-first productivity and burnout-awareness platform built for developers and students. It combines Pomodoro-based focus tracking, real-time productivity analytics, burnout risk monitoring, GitHub activity insights, and an AI Coach powered by Gemini. The platform emphasizes local-first privacy while delivering intelligent, supportive productivity guidance through a futuristic flow-state interface.",
    features: [
      { title: "AI Coach", desc: "Intelligent guidance powered by Gemini API.", icon: <Brain className="w-5 h-5" /> },
      { title: "Burnout Analytics", desc: "Visualizes focus patterns and stress markers.", icon: <Zap className="w-5 h-5" /> },
      { title: "GitHub Insights", desc: "Syncs with your code activity for context.", icon: <GithubIcon className="w-5 h-5" /> },
      { title: "Pomodoro Tracking", desc: "Advanced focus session management.", icon: <Layout className="w-5 h-5" /> },
      { title: "Local-First Privacy", desc: "Your data never leaves your device.", icon: <Lock className="w-5 h-5" /> },
      { title: "Dynamic Dashboard", desc: "Futuristic interface for flow-state.", icon: <BarChart3 className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "AI Integration", value: "Gemini 1.5", status: "active" },
      { label: "Privacy Level", value: "Military Grade", status: "secured" },
      { label: "Deployment", value: "Cloud Run", status: "live" }
    ],
    techStack: ["Next.js", "Gemini AI", "Tailwind CSS", "LocalStorage"],
    githubLink: "https://github.com/Khushi1310-nayak/focusync",
    liveLink: "https://focusync-140783242216.us-west1.run.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 overflow-hidden group/p">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan-500/30 rounded-full animate-[ping_3s_linear_infinite]" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-cyan-400/20 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-4 w-full px-4">
           <div className="relative w-24 h-24 flex items-center justify-center">
              <svg className="w-full h-full rotate-[-90deg]">
                 <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/5" />
                 <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="251.2" strokeDashoffset="60.3" className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                 <span className="text-xl font-bold text-white font-mono">25:00</span>
                 <span className="text-[7px] text-cyan-400 uppercase font-bold tracking-widest">Flowing</span>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-2 w-full">
              <div className="bg-black/60 border border-white/5 rounded-xl p-2 flex flex-col gap-1 backdrop-blur-sm">
                 <div className="flex justify-between items-center">
                    <span className="text-[7px] text-white/40 uppercase font-bold">Burnout Risk</span>
                    <Activity className="w-2.5 h-2.5 text-cyan-400" />
                 </div>
                 <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-[15%] h-full bg-cyan-500" />
                 </div>
                 <span className="text-[8px] text-cyan-400 font-bold">LOW - Optimal</span>
              </div>
              <div className="bg-black/60 border border-white/5 rounded-xl p-2 flex flex-col gap-1 backdrop-blur-sm">
                 <div className="flex justify-between items-center">
                    <span className="text-[7px] text-white/40 uppercase font-bold">AI Coach</span>
                    <Brain className="w-2.5 h-2.5 text-[#decba4]" />
                 </div>
                 <span className="text-[8px] text-white/80 leading-tight">&quot;Ready for deep work.&quot;</span>
              </div>
           </div>
        </div>
        <div className="absolute top-4 right-4 w-1 h-1 bg-cyan-400 rounded-full animate-bounce shadow-[0_0_10px_cyan]" />
      </div>
    )
  },
  {
    id: "skillverse",
    number: "03",
    category: "Web Development",
    subCategories: ["Full Stack"],
    isFeatured: true,
    title: "SkillVerse",
    description: "Advanced E-learning platform with gamification and career-focused learning.",
    details: "SkillVerse is an advanced E-learning platform focused on career-oriented learning for Programming, DSA, and Design. It combines structured learning paths, gamification systems, certifications, interview preparation, analytics, and immersive UX design to simulate a real-world modern learning SaaS product.",
    features: [
      { title: "Learning Paths", desc: "Structured curriculums for career success.", icon: <Compass className="w-5 h-5" /> },
      { title: "Career Mode", desc: "Industry-aligned skill mapping.", icon: <Rocket className="w-5 h-5" /> },
      { title: "Gamification", desc: "XP, levels, and badges to drive engagement.", icon: <Zap className="w-5 h-5" /> },
      { title: "Certifications", desc: "Blockchain-verified skill proofs.", icon: <Shield className="w-5 h-5" /> },
      { title: "Analytics", desc: "Real-time learning progress tracking.", icon: <BarChart3 className="w-5 h-5" /> },
      { title: "Interview Prep", desc: "AI-assisted technical interview practice.", icon: <Cpu className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Content", value: "100+ Hours", status: "active" },
      { label: "Community", value: "Global", status: "live" },
      { label: "Stack", value: "MERN Full Stack", status: "active" }
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    githubLink: "https://github.com/Khushi1310-nayak/SkillVerse",
    liveLink: "https://skillverse-495231731702.us-west1.run.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-4 overflow-hidden bg-gradient-to-br from-indigo-500/5 to-transparent">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#decba4]/10 border border-[#decba4]/20 flex items-center justify-center">
                 <Trophy className="w-4 h-4 text-[#decba4]" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-white">Mastery Rank</span>
                 <span className="text-[8px] text-[#decba4] uppercase tracking-widest font-bold">Elite Coder</span>
              </div>
           </div>
           <div className="px-2 py-1 rounded bg-indigo-500/20 border border-indigo-500/30 text-[8px] font-bold text-indigo-300">
              XP: 12,450
           </div>
        </div>
        <div className="space-y-3">
           <div className="bg-black/40 border border-white/5 rounded-xl p-3 flex flex-col gap-2 relative overflow-hidden group-hover:border-indigo-500/20 transition-colors">
              <div className="flex justify-between items-center text-[8px] uppercase tracking-widest font-bold text-white/40">
                 <span>Next.js Masterclass</span>
                 <span>85%</span>
              </div>
              <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                 <div className="w-[85%] h-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              </div>
           </div>
           <div className="grid grid-cols-2 gap-2">
              <div className="bg-black/40 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-1">
                 <div className="text-[14px] font-bold text-white">12</div>
                 <div className="text-[7px] text-white/30 uppercase font-bold">Certificates</div>
              </div>
              <div className="bg-black/40 border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-1">
                 <div className="text-[14px] font-bold text-white">320</div>
                 <div className="text-[7px] text-white/30 uppercase font-bold">Skill Points</div>
              </div>
           </div>
        </div>
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-indigo-500/10 rounded-full blur-[30px]" />
      </div>
    )
  },
  {
    id: "buildbuddy",
    number: "04",
    category: "Hackathon",
    subCategories: ["AI / ML", "Full Stack"],
    isFeatured: true,
    title: "BuildBuddy",
    description: "AI-powered hackathon project manager from idea to demo faster.",
    details: "BuildBuddy is an AI-powered hackathon project manager designed to help teams move from idea to demo faster. It assists with ideation, planning, task breakdown, tech stack recommendations, UI guidance, pitch deck creation, and project readiness scoring.",
    features: [
      { title: "AI Idea Gen", desc: "Context-aware hackathon ideation.", icon: <Brain className="w-5 h-5" /> },
      { title: "Team Builder", desc: "Skills-based team matching systems.", icon: <UserCircle className="w-5 h-5" /> },
      { title: "Pitch Assistant", desc: "Automated pitch deck structure generator.", icon: <FileText className="w-5 h-5" /> },
      { title: "Tech Stack", desc: "Smart logic for stack selection.", icon: <Wrench className="w-5 h-5" /> },
      { title: "Planning System", desc: "Kanban for high-pressure sprints.", icon: <Layout className="w-5 h-5" /> },
      { title: "Readiness Score", desc: "Real-time project completion metrics.", icon: <BarChart3 className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "AI Core", value: "OpenAI GPT-4", status: "active" },
      { label: "Built For", value: "Hackathons", status: "live" },
      { label: "Platform", value: "Cross-Platform", status: "live" }
    ],
    techStack: ["Flutter", "OpenAI", "Firebase", "Dart"],
    githubLink: "https://github.com/Khushi1310-nayak/buildbuddy-hackathon-manager",
    liveLink: "https://nq29aunfixe7eo47meyy.share.dreamflow.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-5 bg-[#050a0a]">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Rocket className="w-5 h-5 animate-pulse" />
           </div>
           <div className="flex flex-col">
              <span className="text-[11px] font-bold text-white tracking-tight uppercase">Mission Control</span>
              <span className="text-[8px] text-cyan-400 font-bold uppercase tracking-[0.2em]">Sprints Active</span>
           </div>
        </div>
        <div className="space-y-4">
           <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center text-[8px] text-white/40 uppercase font-bold">
                 <span>Readiness Score</span>
                 <span className="text-cyan-400">92%</span>
              </div>
              <div className="grid grid-cols-10 gap-1 h-2">
                 {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                   <div key={i} className={`rounded-sm ${i <= 9 ? 'bg-cyan-500' : 'bg-white/5 shadow-[0_0_10px_rgba(6,182,212,0.5)]'}`} />
                 ))}
              </div>
           </div>
           <div className="bg-black/60 border border-white/5 rounded-xl p-3 flex flex-col gap-2">
              <div className="text-[8px] text-white/30 uppercase font-bold flex items-center gap-2">
                 <div className="w-1 h-1 rounded-full bg-cyan-400" /> AI Mentor Logic
              </div>
              <div className="text-[9px] text-white/70 font-mono italic">
                 {">"} Scaffolding complete.
                 <br/>
                 {">"} Ready for deployment phase.
              </div>
           </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-cyan-500/5 rounded-full pointer-events-none" />
      </div>
    )
  },
  {
    id: "styla",
    number: "05",
    category: "AI / ML",
    subCategories: ["Hackathon"],
    isFeatured: true,
    title: "STYLA",
    description: "AI-powered multi-agent fashion stylist for personalized outfit recommendations.",
    details: "STYLA is a multi-agent AI fashion concierge that delivers personalized outfit recommendations using wardrobe intelligence, event styling, trend analysis, weather integration, and AI orchestration. Built using a coordinated multi-agent architecture, it demonstrates practical consumer AI.",
    features: [
      { title: "Multi-Agent AI", desc: "Orchestrated AI specialists for styling.", icon: <Cpu className="w-5 h-5" /> },
      { title: "Outfit Recs", desc: "Daily personalized fashion suggestions.", icon: <Shirt className="w-5 h-5" /> },
      { title: "Trend Analysis", desc: "Real-time monitoring of fashion trends.", icon: <Search className="w-5 h-5" /> },
      { title: "Weather-Aware", desc: "Styling logic based on local conditions.", icon: <Globe className="w-5 h-5" /> },
      { title: "Wardrobe Mgmt", desc: "Digital organization of your closet.", icon: <Layout className="w-5 h-5" /> },
      { title: "Event Styling", desc: "Context-aware intelligence for any event.", icon: <PenTool className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Agents", value: "4 Specialized", status: "active" },
      { label: "Logic", value: "Multi-Agent", status: "active" },
      { label: "Platform", value: "Kaggle AI Hub", status: "live" }
    ],
    techStack: ["Python", "Gemini API", "FastAPI", "Agentic Framework"],
    githubLink: "https://kaggle.com/competitions/agents-intensive-capstone-project/writeups/new-writeup-1763869712117",
    liveLink: "https://www.kaggle.com/code/manisanayak/styla-ai-fashion-stylist-daily-outfit-concierg",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-6 overflow-hidden bg-gradient-to-tr from-rose-500/5 to-transparent">
        <div className="flex items-center justify-between relative z-10">
           <div className="flex flex-col">
              <span className="text-[12px] font-bold text-white tracking-tight">AI Concierge</span>
              <span className="text-[8px] text-[#decba4] font-bold uppercase tracking-[0.3em]">Personal Stylist</span>
           </div>
           <div className="w-10 h-10 rounded-full border border-[#decba4]/30 flex items-center justify-center text-[#decba4]">
              <Shirt className="w-5 h-5" />
           </div>
        </div>
        <div className="flex-grow flex items-center justify-center relative z-10">
           <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-700">
              <Image 
                src="/projects/styla-preview.png" 
                alt="Styla Fashion Preview" 
                fill 
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-white/10 text-[8px] text-white/60 font-bold uppercase">
                 Fall Collection 2026
              </div>
           </div>
        </div>
        <div className="flex items-center justify-between bg-black/40 border border-white/5 rounded-2xl p-3 relative z-10">
           <div className="flex items-center gap-2">
              <Cloud className="w-3.5 h-3.5 text-white/40" />
              <div className="flex flex-col">
                 <span className="text-[9px] font-bold text-white">24°C • Sunny</span>
                 <span className="text-[7px] text-white/30 uppercase">Perfect for Linen</span>
              </div>
           </div>
           <div className="px-2 py-1 rounded bg-[#decba4]/10 text-[#decba4] text-[8px] font-bold uppercase">
              98% Match
           </div>
        </div>
      </div>
    )
  },
  {
    id: "gemini-cli",
    number: "06",
    category: "AI / ML",
    subCategories: ["Tools & Utilities", "Open Source"],
    title: "Gemini CLI",
    description: "Open-source AI agent that brings the power of Gemini directly into your terminal.",
    details: "Gemini CLI is an open-source AI command-line assistant that brings Gemini directly into the terminal environment. It enables developers to interact with AI through command-based workflows, making coding and AI-assisted development faster within a native terminal experience.",
    features: [
      { title: "Terminal AI", desc: "Native CLI integration for Gemini.", icon: <Terminal className="w-5 h-5" /> },
      { title: "Command Flow", desc: "Interactive AI-powered terminal commands.", icon: <Zap className="w-5 h-5" /> },
      { title: "Dev Productivity", desc: "Automated terminal tasks with AI.", icon: <Cpu className="w-5 h-5" /> },
      { title: "Open Source", desc: "Community-driven AI tool development.", icon: <GithubIcon className="w-5 h-5" /> },
      { title: "AI Assistance", desc: "Context-aware shell command help.", icon: <Brain className="w-5 h-5" /> },
      { title: "Streaming", desc: "Real-time AI response generation.", icon: <Cloud className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Community", value: "Open Source", status: "open" },
      { label: "AI Model", value: "Gemini Pro", status: "active" },
      { label: "Interface", value: "Command Line", status: "live" }
    ],
    techStack: ["TypeScript", "Node.js", "Gemini API", "Chalk"],
    githubLink: "https://github.com/Khushi1310-nayak/gemini-cli",
    liveLink: "https://geminicli.com/",
    preview: (
      <div className="relative w-full h-full p-6 flex flex-col gap-4 bg-[#0a0f0f] overflow-hidden group-hover:bg-[#050a0a] transition-colors duration-500">
         <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
               <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <span className="text-[9px] font-mono text-white/20">gemini-cli-bash</span>
         </div>
         <div className="flex-grow font-mono text-[10px] space-y-3">
            <div className="flex gap-2">
               <span className="text-[#decba4]">$</span>
               <span className="text-white">gemini &quot;optimize this function&quot;</span>
            </div>
            <div className="text-white/40 italic">... Analyzing system requirements ...</div>
            <div className="bg-white/5 border border-white/10 p-3 rounded-lg flex flex-col gap-2 relative overflow-hidden group/gen">
               <div className="flex justify-between items-center text-[7px] uppercase tracking-widest font-bold text-cyan-400">
                  <span>AI Response Generated</span>
                  <Sparkles className="w-2 h-2" />
               </div>
               <div className="text-white/80 leading-relaxed text-[9px]">
                  Implementing multi-agent logic for 25% faster throughput...
               </div>
               <div className="absolute bottom-0 left-0 h-[1px] bg-cyan-500/50 w-full animate-[shimmer_2s_infinite]" />
            </div>
         </div>
         <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[#decba4]/20 to-transparent" />
      </div>
    )
  },
  {
    id: "orchidvault",
    number: "07",
    category: "Productivity",
    subCategories: ["Web Development", "Full Stack"],
    title: "OrchidVault",
    description: "A personal focus sanctuary to organize thoughts, tasks, and creative ideas.",
    details: "OrchidVault is a calm digital sanctuary designed for students and creators to organize thoughts, notes, tasks, and productivity workflows. The platform blends elegant glassmorphism aesthetics with distraction-free productivity tools to create an immersive focus environment.",
    features: [
      { title: "Smart Notes", desc: "Organized markdown-ready thought vault.", icon: <FileText className="w-5 h-5" /> },
      { title: "Focus Workspace", desc: "Distraction-free environment for deep work.", icon: <Compass className="w-5 h-5" /> },
      { title: "Productivity Mgmt", desc: "Integrated task and goal tracking.", icon: <Layout className="w-5 h-5" /> },
      { title: "Minimal UI", desc: "Clean, elegant aesthetics for focus.", icon: <Zap className="w-5 h-5" /> },
      { title: "Dashboard", desc: "Central hub for your creative journey.", icon: <BarChart3 className="w-5 h-5" /> },
      { title: "Local Store", desc: "Data persistence with local privacy.", icon: <Lock className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Built with", value: "Vite + React", status: "active" },
      { label: "Aesthetic", value: "Glassmorphism", status: "live" },
      { label: "Storage", value: "LocalStorage", status: "secured" }
    ],
    techStack: ["React", "LocalStorage", "Tailwind", "Framer Motion"],
    githubLink: "https://github.com/Khushi1310-nayak/OrchidVault",
    liveLink: "https://orchidvault-52844219986.asia-southeast1.run.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-6 bg-gradient-to-br from-[#decba4]/10 via-transparent to-transparent">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#decba4]">
                 <Heart className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-white">Sanctuary Alpha</span>
                 <span className="text-[8px] text-white/30 uppercase tracking-widest font-bold">Deep Work Active</span>
              </div>
           </div>
           <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
           </div>
        </div>
        <div className="grid grid-cols-2 gap-3 relative z-10">
           <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 group-hover:bg-[#decba4]/5 transition-all">
              <FileText className="w-4 h-4 text-[#decba4]" />
              <span className="text-xl font-bold text-white">42</span>
              <span className="text-[8px] text-white/30 uppercase font-bold">Smart Notes</span>
           </div>
           <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-2 group-hover:bg-[#decba4]/5 transition-all">
              <Activity className="w-4 h-4 text-[#decba4]" />
              <span className="text-xl font-bold text-white">92%</span>
              <span className="text-[8px] text-white/30 uppercase font-bold">Mood Flow</span>
           </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between relative overflow-hidden group-hover:border-[#decba4]/30 transition-all">
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white">Focus Garden</span>
              <span className="text-[8px] text-white/30 font-bold uppercase">Growth session: 2h 45m</span>
           </div>
           <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border border-black bg-[#decba4]/20 backdrop-blur-md" />
              ))}
           </div>
           <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#decba4]/10 blur-xl rounded-full" />
        </div>
      </div>
    )
  },
  {
    id: "edu-tracker",
    number: "08",
    category: "Productivity",
    subCategories: ["Web Development", "Full Stack", "Tools & Utilities"],
    title: "Edu-Tracker",
    description: "Smart attendance and exam tracker for students with insights and analytics.",
    details: "Edu-Tracker is an academic productivity application built to help students monitor attendance, exams, and academic performance efficiently. It simplifies educational planning through analytics and intuitive tracking systems.",
    features: [
      { title: "Attendance", desc: "Smart monitor for your classes.", icon: <GraduationCap className="w-5 h-5" /> },
      { title: "Exam Tracking", desc: "Keep record of scores and dates.", icon: <FileText className="w-5 h-5" /> },
      { title: "Analytics", desc: "Data-driven academic performance insights.", icon: <BarChart3 className="w-5 h-5" /> },
      { title: "Planning", desc: "Calendar-based study scheduling.", icon: <Layout className="w-5 h-5" /> },
      { title: "Dashboard", desc: "Central student command center.", icon: <Monitor className="w-5 h-5" /> },
      { title: "Insights", desc: "AI-powered study recommendations.", icon: <Brain className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Accuracy", value: "Real-time Sync", status: "active" },
      { label: "Deployment", value: "Vercel", status: "live" },
      { label: "Category", value: "EdTech Tool", status: "active" }
    ],
    techStack: ["JS", "Chart.js", "LocalStorage", "HTML/CSS"],
    githubLink: "https://github.com/Khushi1310-nayak/Edu-Tracker",
    liveLink: "https://edu-tracker-ten.vercel.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-6 bg-[#050a0a] overflow-hidden group-hover:bg-gradient-to-br group-hover:from-emerald-500/5 group-hover:to-transparent transition-all duration-500">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                 <GraduationCap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-white tracking-tight">Academic OS</span>
                 <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-[0.2em]">Semester 04</span>
              </div>
           </div>
           <div className="flex flex-col items-end">
              <span className="text-[14px] font-bold text-white">9.2</span>
              <span className="text-[7px] text-white/30 uppercase font-bold tracking-widest">GPA Progress</span>
           </div>
        </div>
        <div className="flex-grow grid grid-cols-5 gap-2 items-end">
           {[40, 70, 95, 60, 85].map((h, i) => (
             <div key={i} className="flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full bg-emerald-500/20 border-t border-emerald-500/40 rounded-t-lg transition-all duration-700 group-hover:bg-emerald-500/30" style={{ height: `${h}%` }} />
                <span className="text-[6px] text-white/20 uppercase font-bold">{['M', 'T', 'W', 'T', 'F'][i]}</span>
             </div>
           ))}
        </div>
        <div className="grid grid-cols-2 gap-3">
           <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
              <div className="text-[8px] text-white/30 uppercase font-bold">Attendance</div>
              <div className="text-sm font-bold text-emerald-400 tracking-tight">94.5%</div>
           </div>
           <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
              <div className="text-[8px] text-white/30 uppercase font-bold">Next Exam</div>
              <div className="text-sm font-bold text-white tracking-tight truncate">DSA - 4d</div>
           </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      </div>
    )
  },
  {
    id: "trackwise",
    number: "09",
    category: "Productivity",
    subCategories: ["Web Development", "Full Stack", "Tools & Utilities"],
    title: "TrackWise",
    description: "Career command center to track hackathons, internships, and projects.",
    details: "TrackWise is a productivity and career management platform that helps students track internships, hackathons, projects, and personal growth. It provides structured organization and visual progress tracking through a clean futuristic dashboard experience.",
    features: [
      { title: "Internship Track", desc: "Monitor applications and pipelines.", icon: <Briefcase className="w-5 h-5" /> },
      { title: "Hackathon Mgmt", desc: "Keep track of deadlines and teams.", icon: <Trophy className="w-5 h-5" /> },
      { title: "Roadmaps", desc: "Visual guides for your career journey.", icon: <Compass className="w-5 h-5" /> },
      { title: "Career Analytics", desc: "Insights into your professional growth.", icon: <BarChart3 className="w-5 h-5" /> },
      { title: "Dashboard", desc: "Futuristic central command hub.", icon: <Layout className="w-5 h-5" /> },
      { title: "Reminders", desc: "Never miss a deadline again.", icon: <Zap className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Target", value: "Students / Devs", status: "active" },
      { label: "Status", value: "Production Ready", status: "live" },
      { label: "Platform", value: "Web / PWA", status: "live" }
    ],
    techStack: ["TypeScript", "Framer Motion", "Tailwind CSS", "React"],
    githubLink: "https://github.com/Khushi1310-nayak/trackwise",
    liveLink: "https://track-wise-540301509904.us-west1.run.app/#/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-6 bg-[#050a0a] overflow-hidden group-hover:bg-gradient-to-tr group-hover:from-blue-500/5 group-hover:to-transparent transition-all duration-500">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                 <Briefcase className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-white tracking-tight">Career Radar</span>
                 <span className="text-[8px] text-blue-400 font-bold uppercase tracking-[0.2em]">Live Pipelines</span>
              </div>
           </div>
           <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Rocket className="w-4 h-4 text-blue-400 animate-bounce" />
           </div>
        </div>
        <div className="space-y-4">
           <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-3 group-hover:border-blue-500/20 transition-all">
              <div className="flex justify-between items-center text-[8px] text-white/40 uppercase font-bold">
                 <span>Pipeline Status</span>
                 <span className="text-blue-400">8 Active</span>
              </div>
              <div className="flex gap-2">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className={`flex-1 h-1.5 rounded-full ${i <= 3 ? 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]' : 'bg-white/5'}`} />
                 ))}
              </div>
           </div>
           <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                 <span className="text-xl font-bold text-white">12</span>
                 <span className="text-[7px] text-white/30 uppercase font-bold">Hackathons</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-1">
                 <span className="text-xl font-bold text-white">4</span>
                 <span className="text-[7px] text-white/30 uppercase font-bold">Offers</span>
              </div>
           </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[50px] rounded-full" />
      </div>
    )
  },
  {
    id: "restaurant",
    number: "10",
    category: "Web Development",
    title: "Restaurant Website",
    description: "A modern restaurant website with elegant UI, menu showcase, and reservation system.",
    details: "Restaurant Website is a modern dining experience website designed with elegant UI, interactive menu systems, and immersive visual presentation to create a premium digital restaurant experience.",
    features: [
      { title: "Menu UI", desc: "Interactive digital dining catalog.", icon: <Utensils className="w-5 h-5" /> },
      { title: "Reservation", desc: "Seamless booking experience design.", icon: <Zap className="w-5 h-5" /> },
      { title: "Modern Design", desc: "Premium luxury restaurant aesthetics.", icon: <Layout className="w-5 h-5" /> },
      { title: "Responsive", desc: "Perfect experience on all devices.", icon: <Monitor className="w-5 h-5" /> },
      { title: "Food Showcase", desc: "Immersive food photography layouts.", icon: <Camera className="w-5 h-5" /> },
      { title: "Analytics", desc: "Engagement tracking for menus.", icon: <BarChart3 className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Status", value: "Production", status: "live" },
      { label: "Type", value: "SaaS Template", status: "active" },
      { label: "Visuals", value: "High Fidelity", status: "active" }
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/Khushi1310-nayak/Restaurant-Website",
    liveLink: "https://restaurant-website-gules-nine.vercel.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-6 bg-[#0a0a0a] overflow-hidden">
        <div className="flex items-center justify-between relative z-10">
           <div className="flex flex-col">
              <span className="text-[14px] font-serif italic text-white">La Maison</span>
              <span className="text-[8px] text-[#decba4] font-bold uppercase tracking-[0.3em]">Fine Dining</span>
           </div>
           <Utensils className="w-5 h-5 text-[#decba4]/50" />
        </div>
        <div className="flex-grow flex items-center justify-center relative z-10">
           <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:scale-105 transition-transform duration-700">
              <Image 
                src="/projects/restaurant-preview.png" 
                alt="Luxury Restaurant Preview" 
                fill 
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur-md rounded-lg border border-white/10">
                 <span className="text-[10px] font-bold text-white uppercase tracking-widest">Seasonal Menu</span>
              </div>
           </div>
        </div>
        <div className="grid grid-cols-2 gap-4 relative z-10">
           <div className="text-center">
              <div className="text-[12px] font-bold text-white mb-0.5">Chef&apos;s Special</div>
              <div className="text-[8px] text-white/30 uppercase font-bold tracking-widest">Daily Menu</div>
           </div>
           <div className="bg-[#decba4]/10 border border-[#decba4]/20 rounded-xl flex items-center justify-center p-2 group-hover:bg-[#decba4]/20 transition-all cursor-pointer">
              <span className="text-[10px] font-bold text-[#decba4] uppercase tracking-widest">Reserve</span>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "photography",
    number: "11",
    category: "Web Development",
    subCategories: ["Creative"],
    title: "Photography Portfolio",
    description: "A visual storytelling portfolio showcasing clicks, blogs, and creative journey.",
    details: "Photography Portfolio is a cinematic visual storytelling platform designed to showcase photography work, blogs, and creative experiences through immersive layouts and editorial-style presentation.",
    features: [
      { title: "Photo Showcase", desc: "Premium image gallery system.", icon: <Camera className="w-5 h-5" /> },
      { title: "Blog System", desc: "Written experiences and stories.", icon: <FileText className="w-5 h-5" /> },
      { title: "Storytelling", desc: "Narrative-driven visual layouts.", icon: <PenTool className="w-5 h-5" /> },
      { title: "Editorial UI", desc: "Magazine-style typography and grid.", icon: <Layout className="w-5 h-5" /> },
      { title: "Galleries", desc: "Responsive high-resolution exhibitions.", icon: <Zap className="w-5 h-5" /> },
      { title: "Analytics", desc: "Engagement and view tracking.", icon: <BarChart3 className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Assets", value: "High-Res", status: "active" },
      { label: "Status", value: "Vercel Live", status: "live" },
      { label: "UI", value: "Editorial", status: "active" }
    ],
    techStack: ["HTML", "GSAP", "Lightbox", "JS"],
    githubLink: "https://github.com/Khushi1310-nayak/Photography-Portfolio",
    liveLink: "https://photography-portfolio-o0x8yc3nq.vercel.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-6 bg-black overflow-hidden group-hover:bg-gradient-to-br group-hover:from-white/5 transition-all duration-700">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
           <span className="text-[12px] font-bold text-white uppercase tracking-widest">The Gallery</span>
           <Camera className="w-5 h-5 text-white/40" />
        </div>
        <div className="flex-grow relative z-10 rounded-2xl overflow-hidden border border-white/10">
           <Image 
             src="/projects/photography-preview.png" 
             alt="Photography Gallery Preview" 
             fill 
             className="object-cover opacity-70 group-hover:scale-110 transition-transform duration-[2s]"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
           <div className="absolute bottom-4 left-4 flex flex-col gap-1">
              <span className="text-[10px] font-bold text-white tracking-widest uppercase">Cinematic Frames</span>
              <div className="flex gap-1">
                 {[1, 2, 3, 4, 5].map(i => (
                   <div key={i} className="w-1 h-1 rounded-full bg-white/20" />
                 ))}
              </div>
           </div>
        </div>
        <div className="flex items-center justify-between text-[8px] text-white/40 font-bold uppercase tracking-widest relative z-10">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span>Visual Stories</span>
           </div>
           <span>120+ Clicks</span>
        </div>
      </div>
    )
  },
  {
    id: "personal",
    number: "12",
    category: "Web Development",
    subCategories: ["Creative"],
    title: "Personal Portfolio",
    description: "A futuristic 3D personal portfolio built to represent skills and journey.",
    details: "Personal Portfolio is a futuristic 3D developer portfolio built to showcase projects, skills, and creative identity through immersive animations and cinematic visual storytelling.",
    features: [
      { title: "3D Experience", desc: "Immersive depth and spatial UI.", icon: <Cpu className="w-5 h-5" /> },
      { title: "Interactive UI", desc: "Physically believable interactions.", icon: <Zap className="w-5 h-5" /> },
      { title: "Animated", desc: "Fluid transitions and flow-states.", icon: <Compass className="w-5 h-5" /> },
      { title: "Cinematic", desc: "Award-winning portfolio aesthetics.", icon: <Layout className="w-5 h-5" /> },
      { title: "Responsive", desc: "Seamless experience on all screen sizes.", icon: <Monitor className="w-5 h-5" /> },
      { title: "Showcase", desc: "Detailed project highlight system.", icon: <Briefcase className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Status", value: "Production", status: "live" },
      { label: "Built with", value: "Next.js 14", status: "active" },
      { label: "Visuals", value: "Three.js / R3F", status: "active" }
    ],
    techStack: ["Next.js", "Three.js", "Tailwind", "Framer Motion"],
    githubLink: "https://github.com/Khushi1310-nayak/Personal-Portfolio",
    liveLink: "https://personal-portfolio-xi-three-93.vercel.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-6 bg-[#050a0a] overflow-hidden group-hover:bg-[#0a0a0a] transition-all duration-700">
        <div className="flex items-center justify-between relative z-10">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#decba4]/30 flex items-center justify-center text-[#decba4]">
                 <UserCircle className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-white tracking-tight uppercase">Identity System</span>
                 <span className="text-[8px] text-[#decba4] font-bold uppercase tracking-[0.2em]">User Profile Alpha</span>
              </div>
           </div>
           <Sparkles className="w-4 h-4 text-[#decba4] animate-pulse" />
        </div>
        <div className="flex-grow flex items-center justify-center relative z-10">
           <div className="relative w-40 h-40 group-hover:scale-110 transition-transform duration-700">
              <Image 
                src="/projects/personal-preview.png" 
                alt="3D Holographic Globe" 
                fill 
                className="object-contain opacity-90 drop-shadow-[0_0_30px_rgba(222,203,164,0.3)]"
              />
           </div>
        </div>
        <div className="flex justify-between items-center bg-white/5 border border-white/10 rounded-2xl p-3 relative z-10">
           <span className="text-[8px] text-white/30 uppercase font-bold tracking-widest">Skill Galaxy</span>
           <div className="flex gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#decba4]/40" />
              ))}
           </div>
        </div>
      </div>
    )
  },
  {
    id: "midnight-echoes",
    number: "13",
    category: "Web Development",
    subCategories: ["Creative"],
    title: "Midnight Echoes",
    description: "A playlist hub for original songs and late-night emotional soundscapes.",
    details: "Midnight Echoes is a creative music experience platform featuring original songs, curated playlists, and immersive late-night audio aesthetics. The project focuses on emotional design and cinematic presentation.",
    features: [
      { title: "Playlist System", desc: "Curated audio journeys.", icon: <Music className="w-5 h-5" /> },
      { title: "Experience Design", desc: "Immersive atmospheric music exploration.", icon: <Zap className="w-5 h-5" /> },
      { title: "Emotional UI", desc: "Late-night aesthetics for audio.", icon: <Layout className="w-5 h-5" /> },
      { title: "Showcase", desc: "Gallery of original compositions.", icon: <Camera className="w-5 h-5" /> },
      { title: "Audio Interface", desc: "Custom-built music player UI.", icon: <Cpu className="w-5 h-5" /> },
      { title: "Dynamics", desc: "Responsive audio visualizers.", icon: <BarChart3 className="w-5 h-5" /> }
    ],
    metrics: [
      { label: "Experience", value: "Audio-Visual", status: "active" },
      { label: "Status", value: "Creative Hub", status: "live" },
      { label: "Stack", value: "Vanilla JS + Howler", status: "active" }
    ],
    techStack: ["HTML", "Howler.js", "JavaScript", "CSS"],
    githubLink: "https://github.com/Khushi1310-nayak/Midnight-Echoes",
    liveLink: "https://midnight-echoes.vercel.app/",
    preview: (
      <div className="relative w-full h-full flex flex-col p-6 gap-6 bg-gradient-to-b from-purple-900/20 to-black overflow-hidden group-hover:from-purple-900/30 transition-all duration-700">
        <div className="flex items-center justify-between relative z-10">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                 <Music className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                 <span className="text-[12px] font-bold text-white tracking-tight">Audio OS</span>
                 <span className="text-[8px] text-purple-400 font-bold uppercase tracking-[0.2em]">Emotional Hub</span>
              </div>
           </div>
           <div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center">
              <Activity className="w-4 h-4 text-purple-500 animate-pulse" />
           </div>
        </div>
        <div className="flex-grow flex flex-col justify-center gap-4 relative z-10">
           <div className="flex items-end gap-1.5 h-16 justify-center">
              {[40, 70, 95, 60, 85, 50, 90, 75, 45, 65].map((h, i) => (
                <div key={i} className="flex-1 bg-gradient-to-t from-purple-500 to-indigo-500 rounded-full animate-[pulse_2s_infinite]" style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }} />
              ))}
           </div>
           <div className="flex justify-between items-center text-[10px] font-mono text-white/80">
              <span>04:32</span>
              <span className="text-purple-400">Midnight Echoes</span>
              <span>05:12</span>
           </div>
        </div>
        <div className="flex items-center justify-between bg-black/60 border border-white/5 rounded-2xl p-3 relative z-10">
           <div className="flex gap-4 items-center">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
              <span className="text-[8px] text-white/40 uppercase font-bold tracking-widest">Late Night Dreamscape</span>
           </div>
           <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full border border-white/10 flex items-center justify-center">
                 <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              </div>
           </div>
        </div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />
      </div>
    )
  }
];
