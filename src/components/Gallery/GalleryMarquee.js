const words = [
  "First Option Millwork",
  "·",
  "Custom Cabinetry",
  "·",
  "Toronto",
  "·",
  "Premium Craftsmanship",
  "·",
  "Built to Last",
  "·",
  "Custom Kitchens",
  "·",
  "Closets & Wardrobes",
  "·",
  "GTA's Finest Millwork",
  "·",
];

export default function GalleryMarquee() {
  const repeated = [...words, ...words];

  return (
    <div className="w-full bg-[#1c1917] overflow-hidden py-5 border-t border-white/5">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marqueeScroll 28s linear infinite" }}
      >
        {repeated.map((word, i) => (
          <span
            key={i}
            className={`text-[11px] tracking-[4px] uppercase mx-5 flex-shrink-0 ${
              word === "·"
                ? "text-[#88734C]"
                : "text-white/40 hover:text-[#e2be96] transition-colors duration-300"
            }`}
          >
            {word}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
