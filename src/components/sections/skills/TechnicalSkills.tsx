"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Monitor, 
  Server, 
  Cloud, 
  BrainCircuit, 
  Wrench,
  Code2,
  Database,
  Globe,
  Lock,
  GitBranch,
  Terminal
} from "lucide-react";

export function TechnicalSkills() {
  const categories = [
    {
      title: "Frontend",
      icon: <Monitor className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "N" },
        { name: "TypeScript", icon: "TS" },
        { name: "JavaScript", icon: "JS" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "HTML5 / CSS3", icon: "🌐" }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "EX" },
        { name: "REST APIs", icon: <Globe className="w-3.5 h-3.5" /> },
        { name: "MongoDB", icon: <Database className="w-3.5 h-3.5" /> },
        { name: "Firebase", icon: "🔥" },
        { name: "JWT / Auth", icon: <Lock className="w-3.5 h-3.5" /> }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Cloud className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "MongoDB", icon: <Database className="w-3.5 h-3.5" /> },
        { name: "Firebase", icon: "🔥" },
        { name: "Google Cloud Run", icon: "☁️" },
        { name: "MySQL", icon: "🐬" },
        { name: "Docker", icon: "🐳" }
      ]
    },
    {
      title: "AI / Machine Learning",
      icon: <BrainCircuit className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Machine Learning", icon: "🤖" },
        { name: "Scikit-learn", icon: "📊" },
        { name: "Gemini API", icon: "✨" },
        { name: "LLM Integration", icon: "🧠" },
        { name: "AI Agents", icon: "🕵️" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Wrench className="w-5 h-5 text-[#decba4]" />,
      skills: [
        { name: "Git & GitHub", icon: <GitBranch className="w-3.5 h-3.5" /> },
        { name: "VS Code", icon: <Code2 className="w-3.5 h-3.5" /> },
        { name: "Postman", icon: "🚀" },
        { name: "Figma", icon: "🎨" },
        { name: "Chart.js / Recharts", icon: "📈" },
        { name: "Linux / CLI", icon: <Terminal className="w-3.5 h-3.5" /> }
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
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            <GlassCard className="h-full p-6 border-[#decba4]/10 hover:border-[#decba4]/30 transition-all duration-500 bg-gradient-to-b from-black/40 to-black/20 hover:shadow-[0_10px_30px_rgba(222,203,164,0.1)] relative overflow-hidden">
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#decba4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                {category.icon}
                <h3 className="text-white font-medium text-sm tracking-wide">{category.title}</h3>
              </div>
              
              <ul className="space-y-4 relative z-10">
                {category.skills.map((skill, sIdx) => (
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
        ))}
      </div>
    </div>
  );
}
