"use client";

const panels = [
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585687501004-615dfdfde7f1?q=80&w=900&auto=format&fit=crop",
];

function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function GalleryHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "52vh", minHeight: "340px" }}>

      {/* Triptych panels */}
      <div className="absolute inset-0 flex gap-[3px]">
        {panels.map((src, i) => (
          <div key={i} className="relative flex-1 overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover object-center scale-105" />
            <div className="absolute inset-0 bg-black/55" />
          </div>
        ))}
      </div>

      {/* Frame lines */}
      <div className="absolute top-8 left-8 right-8 h-px bg-white/15 pointer-events-none" />
      <div className="absolute bottom-8 left-8 right-8 h-px bg-white/15 pointer-events-none" />
      <div className="absolute top-8 left-8   w-5 h-5 border-t border-l border-[#e2be96]/50" />
      <div className="absolute top-8 right-8  w-5 h-5 border-t border-r border-[#e2be96]/50" />
      <div className="absolute bottom-8 left-8  w-5 h-5 border-b border-l border-[#e2be96]/50" />
      <div className="absolute bottom-8 right-8 w-5 h-5 border-b border-r border-[#e2be96]/50" />

      {/* Center content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-px bg-[#e2be96]" />
          <p className="text-[9px] tracking-[5px] uppercase text-[#e2be96]">First Option Millwork</p>
          <div className="w-8 h-px bg-[#e2be96]" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
          Our <span className="text-[#e2be96]">Portfolio</span>
        </h1>
        <p className="text-[13px] text-white/45 mb-8 tracking-wide">
          Crafted spaces across Toronto & the GTA
        </p>

        {/* Scroll-to buttons */}
        <div className="flex items-center gap-1 border border-white/20 p-1 rounded-full backdrop-blur-sm bg-white/5">
          {["commercial", "residential"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="px-7 py-2 rounded-full text-[12px] tracking-[2px] uppercase font-medium text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300 capitalize"
            >
              {id}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fafaf8] to-transparent pointer-events-none" />
    </section>
  );
}
