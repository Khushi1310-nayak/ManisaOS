"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { User, Mail, Tag, PenSquare, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    setErrorMessage("");

    try {

      const result = await emailjs.sendForm(
        "service_zx3woab",
        "template_99b8pxu",
        formRef.current,
        "F2QOgnDZ3MLTP5-7N"
      );

      if (result.text === "OK") {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "System failure. Please try again later.";
      console.error("Email error:", message);
      setStatus("error");
      setErrorMessage("System failure. Please try again later or reach out via LinkedIn.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <GlassCard className="h-full p-8 md:p-10 border-[#decba4]/10 bg-gradient-to-br from-black/40 to-black/20 relative overflow-hidden">

        {/* Status Overlays */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
            >
              <CheckCircle2 className="w-16 h-16 text-[#decba4] mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Transmitted</h3>
              <p className="text-white/60 text-sm">Your signal has been received. I will get back to you shortly.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-xs uppercase tracking-widest font-bold text-[#decba4] hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
            >
              <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Transmission Failed</h3>
              <p className="text-white/60 text-sm">{errorMessage}</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-xs uppercase tracking-widest font-bold text-red-400 hover:underline"
              >
                Try again
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 mb-8">
          <h3 className="text-2xl font-medium text-white/90">Send Me a Message</h3>
          <span className="text-[#decba4] text-xl animate-pulse">✦</span>
        </div>

        <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="w-4 h-4 text-white/40 group-focus-within:text-[#decba4] transition-colors" />
            </div>
            <input
              name="user_name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#decba4]/50 focus:bg-white/5 transition-all"
            />
          </div>

          {/* Email Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="w-4 h-4 text-white/40 group-focus-within:text-[#decba4] transition-colors" />
            </div>
            <input
              name="user_email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#decba4]/50 focus:bg-white/5 transition-all"
            />
          </div>

          {/* Subject Field */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Tag className="w-4 h-4 text-white/40 group-focus-within:text-[#decba4] transition-colors" />
            </div>
            <input
              name="subject"
              type="text"
              required
              placeholder="Subject"
              className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#decba4]/50 focus:bg-white/5 transition-all"
            />
          </div>

          {/* Message Field */}
          <div className="relative group">
            <div className="absolute top-4 left-0 pl-4 pointer-events-none">
              <PenSquare className="w-4 h-4 text-white/40 group-focus-within:text-[#decba4] transition-colors" />
            </div>
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows={5}
              className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#decba4]/50 focus:bg-white/5 transition-all resize-none"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            disabled={status === "sending"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 overflow-hidden w-full md:w-auto mt-2 border border-[#decba4]/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3e5151] to-[#decba4] opacity-20 group-hover:opacity-40 transition-opacity" />
            <span className="relative z-10 text-[#decba4] group-hover:text-white transition-colors">
              {status === "sending" ? "Transmitting..." : "Send Message"}
            </span>
            {status === "sending" ? (
              <Loader2 className="w-4 h-4 relative z-10 text-[#decba4] animate-spin" />
            ) : (
              <Send className="w-4 h-4 relative z-10 text-[#decba4] group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
            )}
          </motion.button>
        </form>
      </GlassCard>
    </motion.div>
  );
}
