"use client";



export function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-10 px-6 z-10 border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-10 relative z-10">
        
        {/* Left: Branding */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border border-white/10 bg-black/40 flex items-center justify-center font-serif text-sm text-white/80 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            MN
          </div>
          <div>
            <h4 className="text-white/90 font-medium mb-1">Manisa Nayak</h4>
            <p className="text-xs text-white/50 font-light">
              Building intelligent solutions <br /> for a better tomorrow.
            </p>
          </div>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-white/40 font-light flex items-center gap-2">
          &copy; 2026 Manisa Nayak. All rights reserved.
          <span className="w-1.5 h-1.5 bg-[#decba4] rounded-full opacity-50 shadow-[0_0_5px_#decba4]" />
        </div>

      </div>


      
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#decba4]/30 to-transparent blur-[1px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-20 bg-[#decba4] opacity-[0.02] blur-3xl rounded-full" />
    </footer>
  );
}
