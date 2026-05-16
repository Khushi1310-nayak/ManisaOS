"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Puzzle, 
  Lightbulb, 
  MessageSquare, 
  RefreshCw, 
  Users, 
  Clock,
  Trophy,
  Target,
  Zap,
  CloudCog,
  Briefcase
} from "lucide-react";

export function BentoGridBottom() {
  const softSkills = [
    { name: "Problem Solving", icon: <Puzzle className="w-4 h-4" /> },
    { name: "Critical Thinking", icon: <Lightbulb className="w-4 h-4" /> },
    { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "Adaptability", icon: <RefreshCw className="w-4 h-4" /> },
    { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
    { name: "Time Management", icon: <Clock className="w-4 h-4" /> },
  ];

  const learning = [
    { name: "Advanced System Design", progress: 70 },
    { name: "Deep Learning", progress: 60 },
    { name: "MLOps", progress: 50 },
    { name: "Cloud Architecture", progress: 65 },
  ];

  const achievements = [
    { name: "9.5 CGPA", icon: <Trophy className="w-4 h-4" /> },
    { name: "15+ Projects Built", icon: <Briefcase className="w-4 h-4" /> },
    { name: "5+ Hackathons", icon: <Zap className="w-4 h-4" /> },
    { name: "AI & Full Stack Enthusiast", icon: <Target className="w-4 h-4" /> },
    { name: "Cloud Deployed Projects", icon: <CloudCog className="w-4 h-4" /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* 1. Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GlassCard className="h-full p-6 border-[#decba4]/10 bg-gradient-to-b from-black/40 to-black/20">
          <div className="flex items-center gap-2 text-white/50 mb-6 uppercase tracking-widest text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 bg-[#decba4] rounded-sm" />
            <span>Soft Skills</span>
          </div>
          <ul className="space-y-4">
            {softSkills.map((skill, idx) => (
              <li key={idx} className="flex items-center gap-3 text-white/70 group cursor-default">
                <div className="text-[#decba4] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  {skill.icon}
                </div>
                <span className="text-sm font-light group-hover:text-white transition-colors">{skill.name}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>

      {/* 2. Currently Learning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <GlassCard className="h-full p-6 border-[#decba4]/10 bg-gradient-to-b from-black/40 to-black/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-white/50 mb-6 uppercase tracking-widest text-[10px] font-semibold">
              <span className="w-1.5 h-1.5 bg-[#decba4] rounded-sm" />
              <span>Currently Learning</span>
            </div>
            <div className="space-y-5">
              {learning.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/80">{item.name}</span>
                    <span className="text-white/50 font-mono">{item.progress}%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#3e5151] to-[#decba4]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center border border-white/5 bg-white/[0.02] py-2 rounded-lg text-xs text-[#decba4]/80">
            Always learning. Always growing. ✦
          </div>
        </GlassCard>
      </motion.div>

      {/* 3. Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <GlassCard className="h-full p-6 border-[#decba4]/10 bg-gradient-to-b from-black/40 to-black/20">
          <div className="flex items-center gap-2 text-white/50 mb-6 uppercase tracking-widest text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 bg-[#decba4] rounded-sm" />
            <span>Achievements</span>
          </div>
          <ul className="space-y-5">
            {achievements.map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 text-white/80 group">
                <div className="w-8 h-8 rounded-full bg-[#decba4]/10 border border-[#decba4]/20 flex items-center justify-center text-[#decba4] group-hover:bg-[#decba4]/20 transition-colors">
                  {item.icon}
                </div>
                <span className="text-sm font-medium">{item.name}</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </motion.div>

      {/* 4. Goal Panel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <GlassCard className="h-full p-6 border-[#decba4]/20 bg-gradient-to-br from-[#3e5151]/30 to-black/60 relative overflow-hidden group">
          {/* Background Wireframe Sketch pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-[#decba4] via-transparent to-transparent mix-blend-screen pointer-events-none" />
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-white/50 mb-4 uppercase tracking-widest text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 bg-[#decba4] rounded-sm" />
                <span>Goal</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
                Dreaming Big. <br />
                <span className="text-[#decba4]">Building Bigger.</span>
              </h3>
            </div>
            
            <div className="mt-4 mb-4 flex-1">
               {/* Spacer or any other visual can go here if needed, but keeping it empty per request */}
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-light">
              Working towards creating impactful products and solving meaningful problems at scale.
            </p>
          </div>
        </GlassCard>
      </motion.div>

    </div>
  );
}
