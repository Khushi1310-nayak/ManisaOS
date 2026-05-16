import { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <div
      className={cn("glass-panel rounded-2xl p-6", className)}
      {...props}
    >
      {children}
    </div>
  );
}
