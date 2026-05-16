import { Code2, Trophy, GraduationCap, Brain, Heart } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

export function StatsBar() {
  const stats = [
    { icon: Code2, value: "15+", label: "Projects Built" },
    { icon: Trophy, value: "5+", label: "Hackathons" },
    { icon: GraduationCap, value: "9.5", label: "CGPA" },
    { icon: Brain, value: "AI", label: "Enthusiast" },
    { icon: Heart, value: "∞", label: "Passion" },
  ];

  return (
    <div className="absolute bottom-6 left-0 right-0 px-6 max-w-7xl mx-auto z-40">
      <GlassCard className="flex flex-wrap items-center justify-between py-6 px-10 border-[#decba4]/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-4 relative">
            {/* Divider */}
            {index !== 0 && (
              <div className="absolute -left-10 h-8 w-px bg-white/10 hidden md:block" />
            )}
            
            <stat.icon className="w-8 h-8 text-[#decba4]/80 stroke-[1.5]" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-wide">
                {stat.value}
              </span>
              <span className="text-xs text-white/50 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </GlassCard>
    </div>
  );
}
