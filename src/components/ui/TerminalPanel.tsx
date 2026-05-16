"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function TerminalPanel() {
  const [loadingStates, setLoadingStates] = useState([
    { label: "Loading Creativity", progress: 0 },
    { label: "Building Solutions", progress: 0 },
    { label: "Designing Impact", progress: 0 },
    { label: "Compiling Success", progress: 0 },
  ]);

  const [currentTask, setCurrentTask] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [typedText, setTypedText] = useState("");
  const finalText = "Hello, World! Let's build the future.";

  useEffect(() => {
    let taskIdx = 0;
    
    const interval = setInterval(() => {
      setLoadingStates((prev) => {
        const next = [...prev];
        if (taskIdx < next.length) {
          if (next[taskIdx].progress < 100) {
            next[taskIdx].progress += Math.floor(Math.random() * 20) + 10;
            if (next[taskIdx].progress > 100) next[taskIdx].progress = 100;
          } else {
            taskIdx++;
            setCurrentTask(taskIdx);
          }
        } else {
          setIsReady(true);
          clearInterval(interval);
        }
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for final text
  useEffect(() => {
    if (isReady) {
      let i = 0;
      const typeInterval = setInterval(() => {
        setTypedText(finalText.substring(0, i + 1));
        i++;
        if (i >= finalText.length) clearInterval(typeInterval);
      }, 50);
      return () => clearInterval(typeInterval);
    }
  }, [isReady, finalText]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="absolute top-1/4 right-0 md:right-1/4 z-20 hidden lg:block"
    >
      <div className="rounded-2xl p-6 w-80 md:w-96 font-mono text-sm border border-[#decba4]/20 shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-black/5 backdrop-blur-[2px] relative z-20">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        
        <div className="text-[#a0a0a0] mb-4 flex items-center">
          <span className="text-[#3e5151]">Initializing Portfolio</span>
          <span className="animate-[pulse_1s_infinite]">...</span>
        </div>

        <div className="space-y-3 mb-6 min-h-[120px]">
          {loadingStates.map((state, i) => (
            i <= currentTask && (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex justify-between items-center text-white/80"
              >
                <div className="flex items-center gap-2">
                  <span className={state.progress === 100 ? "text-[#decba4]" : "text-[#3e5151] animate-spin"}>
                    {state.progress === 100 ? "✓" : "⟳"}
                  </span>
                  <span>{state.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  {/* ASCII Progress Bar */}
                  <span className="hidden md:inline-block text-[#3e5151] text-xs">
                    [{'█'.repeat(Math.floor(state.progress / 10))}{'.'.repeat(10 - Math.floor(state.progress / 10))}]
                  </span>
                  <span className={state.progress === 100 ? "text-[#decba4]" : "text-[#3e5151]"}>
                    {state.progress}%
                  </span>
                </div>
              </motion.div>
            )
          ))}
        </div>

        <div className="border-t border-white/10 pt-4 mt-4">
           {isReady ? (
             <>
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="text-[#a0a0a0] mb-3"
                >
                  Status: <span className="text-[#decba4] drop-shadow-[0_0_8px_rgba(222,203,164,0.5)]">Ready to Innovate ✦</span>
                </motion.div>
                <div className="text-[#decba4] opacity-90 h-10">
                  <span className="text-white/50 mr-2">{">"}</span>
                  {typedText}
                  <span className="animate-pulse ml-1 inline-block w-2 h-4 bg-[#decba4] align-middle" />
                </div>
             </>
           ) : (
              <div className="text-[#a0a0a0] flex items-center h-10">
                Status: <span className="text-[#3e5151] ml-2">Processing</span>
                <span className="animate-[pulse_1s_infinite]">...</span>
              </div>
           )}
        </div>
      </div>
    </motion.div>
  );
}
