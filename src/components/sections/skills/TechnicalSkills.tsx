"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Monitor, Server, Cloud, BrainCircuit, Wrench, Code2, Database, Globe, Lock, GitBranch, Terminal,
  Network, Flame, Triangle, Box, Zap, Sparkles, Brain, Bot, Puzzle, Send, Palette, FlaskConical, Bug, LineChart
} from "lucide-react";

export function TechnicalSkills() {
  const categories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "React", icon: <Code2 className="w-3.5 h-3.5" /> },
        { name: "Next.js", icon: <Globe className="w-3.5 h-3.5" /> },
        { name: "TypeScript", icon: <Code2 className="w-3.5 h-3.5" /> },
        { name: "JavaScript", icon: <Code2 className="w-3.5 h-3.5" /> },
        { name: "Tailwind CSS", icon: <Monitor className="w-3.5 h-3.5" /> },
        { name: "HTML5 / CSS3", icon: <Globe className="w-3.5 h-3.5" /> }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "Node.js", icon: <Terminal className="w-3.5 h-3.5" /> },
        { name: "Express.js", icon: <Server className="w-3.5 h-3.5" /> },
        { name: "REST APIs", icon: <Network className="w-3.5 h-3.5" /> },
        { name: "Firebase Authentication", icon: <Lock className="w-3.5 h-3.5" /> },
        { name: "Firebase", icon: <Flame className="w-3.5 h-3.5 text-orange-500" /> },
        { name: "Prisma ORM", icon: <Database className="w-3.5 h-3.5" /> }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Cloud className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "Supabase PostgreSQL", icon: <Database className="w-3.5 h-3.5" /> },
        { name: "Firebase", icon: <Flame className="w-3.5 h-3.5 text-orange-500" /> },
        { name: "Google Cloud Run", icon: <Cloud className="w-3.5 h-3.5" /> },
        { name: "Vercel", icon: <Triangle className="w-3.5 h-3.5 fill-current" /> },
        { name: "Docker", icon: <Box className="w-3.5 h-3.5" /> },
        { name: "Supabase Realtime", icon: <Zap className="w-3.5 h-3.5 text-yellow-400" /> }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <BrainCircuit className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "Python", icon: <Code2 className="w-3.5 h-3.5" /> },
        { name: "Gemini API", icon: <Sparkles className="w-3.5 h-3.5 text-blue-400" /> },
        { name: "LLM Integration", icon: <Brain className="w-3.5 h-3.5" /> },
        { name: "AI Agents", icon: <Bot className="w-3.5 h-3.5" /> },
        { name: "Prompt Engineering", icon: <Puzzle className="w-3.5 h-3.5" /> }
      ]
    },
    {
      title: "Developer Tools",
      icon: <Wrench className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "Git & GitHub", icon: <GitBranch className="w-3.5 h-3.5" /> },
        { name: "VS Code", icon: <Code2 className="w-3.5 h-3.5 text-blue-500" /> },
        { name: "Postman", icon: <Send className="w-3.5 h-3.5 text-orange-400" /> },
        { name: "Figma", icon: <Palette className="w-3.5 h-3.5 text-purple-400" /> },
        { name: "Playwright", icon: <FlaskConical className="w-3.5 h-3.5 text-green-400" /> },
        { name: "Sentry", icon: <Bug className="w-3.5 h-3.5 text-red-400" /> },
        { name: "Chart.js / Recharts", icon: <LineChart className="w-3.5 h-3.5" /> }
      ]
    }
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-2 text-white/50 mb-6 uppercase tracking-widest text-xs font-semibold"
      >
        <span className="w-2 h-2 bg-[#decba4] rounded-sm" />
        <span>Technical Skills</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {categories.map((category, idx) => (
          <SkillCategoryCard key={category.title} category={category} idx={idx} />
        ))}
      </div>
    </div>
  );
}

const getCategoryGlow = (title: string) => {
  if (title.includes('Frontend')) return 'rgba(6, 182, 212, 0.15)'; // cyan
  if (title.includes('Backend')) return 'rgba(217, 70, 239, 0.15)'; // fuchsia
  if (title.includes('Database')) return 'rgba(249, 115, 22, 0.15)'; // orange
  if (title.includes('AI')) return 'rgba(16, 185, 129, 0.15)'; // emerald
  return 'rgba(168, 85, 247, 0.15)'; // purple
};

const getCategoryBorder = (title: string) => {
  if (title.includes('Frontend')) return 'group-hover:border-cyan-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.3)]';
  if (title.includes('Backend')) return 'group-hover:border-fuchsia-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(217,70,239,0.3)]';
  if (title.includes('Database')) return 'group-hover:border-orange-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)]';
  if (title.includes('AI')) return 'group-hover:border-emerald-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.3)]';
  return 'group-hover:border-purple-500/30 group-hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)]';
};

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
}

export interface CategoryData {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

function SkillCategoryCard({ category, idx }: { category: CategoryData, idx: number }) {
  const cardRef = React.useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const glowColor = getCategoryGlow(category.title);
  const background = useMotionTemplate`radial-gradient(circle at ${mouseX}px ${mouseY}px, ${glowColor} 0%, transparent 80%)`;
  const dynamicBorder = getCategoryBorder(category.title);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const left = e.clientX - rect.left;
    const top = e.clientY - rect.top;
    x.set(left / rect.width - 0.5);
    y.set(top / rect.height - 0.5);
    mouseX.set(left);
    mouseY.set(top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative [perspective:1000px] h-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        <GlassCard className={`h-full p-6 border-[#decba4]/10 transition-all duration-500 bg-gradient-to-b from-black/40 to-black/20 relative overflow-hidden ${dynamicBorder}`}>
          
          {/* Dynamic Follower Glow */}
          <motion.div 
            className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background }}
          />
          
          <div className="flex items-center gap-3 mb-6 relative z-10">
            {category.icon}
            <h3 className="text-white font-medium text-sm tracking-wide">{category.title}</h3>
          </div>
          
          <ul className="space-y-4 relative z-10">
            {category.skills.map((skill: SkillItem, sIdx: number) => (
              <li key={sIdx} className="flex items-center gap-3 text-white/60 hover:text-white/90 transition-colors group/item">
                <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-[#decba4] group-hover/item:border-[#decba4]/50 group-hover/item:bg-[#decba4]/10 transition-all">
                  {skill.icon}
                </div>
                <span className="text-xs">{skill.name}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
