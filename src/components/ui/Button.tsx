"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  const baseStyles = "relative px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group";
  
  const variants = {
    primary: "bg-transparent text-white border border-[#decba4]/30 hover:border-[#decba4]/60 shadow-[0_0_15px_rgba(222,203,164,0.1)] hover:shadow-[0_0_30px_rgba(222,203,164,0.3)]",
    secondary: "bg-transparent text-white border border-white/10 hover:bg-white/5",
    ghost: "bg-transparent text-white/70 hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {/* Subtle background glow effect for primary button */}
      {variant === "primary" && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#decba4]/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
