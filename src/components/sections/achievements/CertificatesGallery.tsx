"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export function CertificatesGallery() {
  const [showAll, setShowAll] = useState(false);

  const certificates = [
    { 
      title: "Dreamflow Buildathon 2025", 
      org: "Dreamflow × FlutterFlow", 
      date: "February 2026", 
      image: "/certificates/images/Dreamflow Buildathon.png",
      pdf: "/certificates/pdf/Dreamflow Buildathon.pdf"
    },
    { 
      title: "Startup School: Prompt to Prototype", 
      org: "Google for Startups", 
      date: "December 2025", 
      image: "/certificates/images/Google For Startups.png",
      pdf: "/certificates/pdf/certificate_Manisa_Nayak.pdf"
    },
    { 
      title: "AI Agents Intensive Course", 
      org: "Kaggle × Google", 
      date: "December 2025", 
      image: "/certificates/images/5-Day AI Agents Intensive Course with Google.png",
      pdf: "/certificates/images/5-Day AI Agents Intensive Course with Google.png"
    },
    { 
      title: "GenAI Powered Data Analytics", 
      org: "Tata × Forage", 
      date: "August 2025", 
      image: "/certificates/images/tata gen ai.png",
      pdf: "/certificates/pdf/Tata - Gen AI.pdf"
    },
    { 
      title: "Software Engineer Intern", 
      org: "HackerRank", 
      date: "May 2026", 
      image: "/certificates/images/HackerRank Intern.png",
      pdf: "/certificates/pdf/software_engineer_intern certificate.pdf"
    },
    { 
      title: "AI Tools Workshop", 
      org: "Be10X", 
      date: "May 2026", 
      image: "/certificates/images/be(10x) certificate.png",
      pdf: "/certificates/pdf/Be(10x) certificate.pdf"
    },
    { 
      title: "India AI Impact Buildathon", 
      org: "HCL GUVI × AI Impact Summit", 
      date: "February 2026", 
      image: "/certificates/images/HCL GUVI Certification.png",
      pdf: "/certificates/images/HCL GUVI Certification.png"
    },
    { 
      title: "AI & ML Internship", 
      org: "Maincrafts Technology", 
      date: "May 2026", 
      image: "/certificates/images/Maincrafts Technology - AIML Internship.png",
      pdf: "/certificates/pdf/Maincrafts Certificate of Internship-165.pdf"
    },
    { 
      title: "Microsoft Azure Internship", 
      org: "Microsoft Elevate × AICTE", 
      date: "Jan – Feb 2026", 
      image: "/certificates/images/Microsoft Azure Internship.png",
      pdf: "/certificates/pdf/Microsoft Internship Certificate.pdf"
    },
    { 
      title: "Legacy Responsive Web Design", 
      org: "freeCodeCamp", 
      date: "July 2025", 
      image: "/certificates/images/freecodecamp.png",
      pdf: "/certificates/images/freecodecamp.png"
    },
    { 
      title: "Bizquest #31 – M&A Deals", 
      org: "Naukri Campus", 
      date: "May 2026", 
      image: "/certificates/images/Naukri Campus.png",
      pdf: "/certificates/pdf/NaukriCampus_Certificate_Participation.pdf"
    },
    { 
      title: "Certified Builder", 
      org: "Airtable", 
      date: "June 2026", 
      image: "/certificates/images/Certified Builder.png",
      pdf: "/certificates/pdf/Airtable Builder.pdf"
    },
    { 
      title: "Open Source Contributor", 
      org: "Apertre 3.0", 
      date: "2026", 
      image: "/certificates/images/Apertre.png",
      pdf: "/certificates/pdf/Apertre Certificate.pdf"
    },
    { 
      title: "Innovate4FinLit Game Challenge", 
      org: "Hack2skill", 
      date: "2026", 
      image: "/certificates/images/Hack2Skill.png",
      pdf: "/certificates/pdf/Hack2Skill.pdf"
    },
    { 
      title: "Forward Program", 
      org: "McKinsey & Company", 
      date: "June 2026", 
      image: "/certificates/images/MCKinsey.png",
      pdf: "/certificates/pdf/McKinseyForward.pdf"
    }
  ];

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 6);

  return (
    <div className="w-full flex flex-col gap-6 relative">
      <div className="flex items-end justify-between px-2 mb-2">
        <div>
          <h3 className="text-sm font-semibold tracking-widest text-white/80 uppercase mb-1">Certificates & Recognitions</h3>
          <p className="text-xs text-white/40 font-light">A collection of my verified milestones</p>
        </div>
      </div>

      <div className="relative">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
          {visibleCertificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="w-full"
            >
              <a 
                href={cert.pdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <GlassCard className="aspect-[4/3] p-0 border-white/10 group-hover:border-[#decba4]/40 bg-black/40 overflow-hidden relative shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  {/* Certificate Image */}
                  <Image 
                    src={cert.image} 
                    alt={cert.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Overlay Info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h4 className="text-white font-bold text-sm mb-1">{cert.title}</h4>
                    <p className="text-[#decba4] text-[10px] uppercase tracking-widest font-medium mb-3">{cert.org}</p>
                    <div className="flex items-center gap-2 text-white/50 text-[10px]">
                      <span>{cert.date}</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      <span className="text-[#decba4]">Click to View PDF</span>
                    </div>
                  </div>

                  {/* Glass Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        {certificates.length > 6 && (
          <div className="flex justify-center mt-8">
            <Button 
              onClick={() => setShowAll(!showAll)} 
              variant="secondary"
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
