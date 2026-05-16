"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TerminalPanel } from "@/components/ui/TerminalPanel";
import { Centerpiece3D } from "@/components/effects/Centerpiece3D";
import { StatsBar } from "@/components/layout/StatsBar";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-40 overflow-hidden">
      {/* 3D Background Element */}
      <Centerpiece3D />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start pt-10 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-2 text-white/70 mb-4"
          >
            <span className="w-px h-4 bg-[#decba4]" />
            <span className="tracking-widest uppercase text-sm flex items-center gap-2">
              Welcome to my world 
              <motion.span
                animate={{ rotate: [0, 20, -10, 20, -10, 20, 0] }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: "70% 70%" }}
                className="inline-block text-lg"
              >
                👋
              </motion.span>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-baseline gap-4 mb-4 flex-wrap"
          >
            <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white">
              Hi, I&apos;m
            </h1>
            <span className="font-signature text-5xl md:text-8xl text-[#decba4] glowing-signature leading-[0.5]">
              Manisa
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl font-medium text-white/90 mb-6"
          >
            AI Builder <span className="text-[#decba4] mx-2">•</span> Full Stack Developer <span className="text-[#decba4] mx-2">•</span> Problem Solver
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed"
          >
            I build intelligent, beautiful, and impactful digital experiences using modern technologies and AI. Passionate about solving real-world problems and creating meaningful solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects">
              <Button variant="primary">
                Explore My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>
            <a 
              href="/resume/Manisa_Nayak_Resume1.pdf" 
              download="Manisa_Nayak_Resume.pdf"
            >
              <Button variant="secondary">
                Download Resume
                <Download className="w-4 h-4 ml-2" />
              </Button>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex items-center gap-3 text-white/40 mt-16"
          >
            <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1 h-2 bg-white/60 rounded-full"
              />
            </div>
            <span className="text-sm font-light uppercase tracking-widest">Scroll Down</span>
          </motion.div>
        </div>

        {/* Right Content / Floating Elements */}
        <div className="relative h-full hidden lg:block">
          <TerminalPanel />
        </div>
      </div>
      <StatsBar />
    </section>
  );
}
