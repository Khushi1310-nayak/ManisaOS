/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Award, Mail, Sparkles, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", icon: Home, id: "home" },
  { name: "About", icon: User, id: "about" },
  { name: "Projects", icon: Briefcase, id: "projects" },
  { name: "Skills", icon: Award, id: "skills" },
  { name: "Achievements", icon: Award, id: "achievements" },
  { name: "Contact", icon: Mail, id: "contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkModal = () => {
      setIsModalOpen(document.body.classList.contains("modal-open"));
    };
    checkModal();
    const observer = new MutationObserver(checkModal);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
      isModalOpen ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0",
      scrolled ? "py-3 bg-black/60 backdrop-blur-xl border-b border-white/5" : "py-6 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 relative z-[110]">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-sm font-light text-white/80 bg-black/40">
            MN
          </div>
          <span className="font-medium text-lg tracking-wide text-white/90 hidden sm:block">
            Manisa Nayak
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1 glass-panel rounded-full px-2 py-1.5 border-white/10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-xs transition-all duration-300",
                activeSection === item.id
                  ? "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-3.5 h-3.5" />
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Right Actions & Mobile Toggle */}
        <div className="flex items-center gap-4 relative z-[110]">
          <a href="#contact" className="hidden sm:block">
            <button className="glass-panel px-6 py-2 rounded-full flex items-center gap-2 text-white/90 hover:bg-white/10 transition-colors border border-white/10 group text-sm">
              <span>Talk With Me</span>
              <Sparkles className="w-4 h-4 text-[#decba4] group-hover:animate-pulse" />
            </button>
          </a>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 bg-black/40 hover:bg-white/5 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-xl text-sm transition-all",
                    activeSection === item.id
                      ? "bg-[#decba4]/10 text-[#decba4] border border-[#decba4]/20"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              ))}
              <motion.a 
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-[#3e5151] to-[#decba4] text-black font-bold text-center text-sm shadow-[0_0_20px_rgba(222,203,164,0.2)]"
              >
                Let&apos;s Talk Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
