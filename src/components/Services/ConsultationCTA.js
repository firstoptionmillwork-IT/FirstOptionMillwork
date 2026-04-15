"use client";

import { useEffect, useRef, useState } from "react";

export default function ConsultationCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f5f3ef] py-20 px-6">
      {/* Card — centered, constrained width */}
      <div
        ref={ref}
        className="max-w-4xl mx-auto flex overflow-hidden shadow-2xl"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(36px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
      >
        {/* ── Left: dark content panel ── */}
        <div className="relative z-10 bg-[#111] flex flex-col justify-center px-10 py-12 w-[52%] flex-shrink-0">

          {/* Top gold line that draws in */}
          <div
            className="absolute top-0 left-0 h-[2px] bg-[#e2be96]"
            style={{
              width: visible ? "100%" : "0%",
              transition: "width 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s",
            }}
          />

          {/* Eyebrow */}
          <div
            className="flex items-center gap-2 mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-14px)",
              transition: "opacity 0.5s ease 0.5s, transform 0.5s ease 0.5s",
            }}
          >
            <div className="w-5 h-px bg-[#e2be96]" />
            <p className="text-[9px] tracking-[4px] uppercase text-[#e2be96]/80">
              Free Consultation
            </p>
          </div>

          {/* Heading */}
          <h2
            className="text-3xl font-bold text-white leading-snug mb-4"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s",
            }}
          >
            Let's Build
            <br />
            <span className="text-[#e2be96]">Something Lasting.</span>
          </h2>

          {/* Body */}
          <p
            className="text-[12.5px] text-white/45 leading-relaxed mb-9 max-w-[240px]"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.6s ease 0.8s, transform 0.6s ease 0.8s",
            }}
          >
            Walk through every detail with our craftsmen — material, finish, and fit.
          </p>

          {/* Button */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease 0.95s, transform 0.5s ease 0.95s",
            }}
          >
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-3 border border-white/20 hover:border-[#e2be96] text-white text-[10px] tracking-[3px] uppercase px-7 py-3.5 overflow-hidden transition-colors duration-300"
            >
              <span className="absolute inset-0 bg-[#e2be96]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative">Book Now</span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="relative group-hover:translate-x-1.5 transition-transform duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Bottom corner mark */}
          <div className="absolute bottom-5 right-5 w-5 h-5 border-b border-r border-white/10" />
        </div>

        {/* ── Right: image panel with clip-path reveal ── */}
        <div
          className="relative flex-1 overflow-hidden"
          style={{
            clipPath: visible ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
            transition: "clip-path 1s cubic-bezier(0.77, 0, 0.175, 1) 0.25s",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1470&auto=format&fit=crop"
            alt="Custom millwork consultation"
            className="w-full h-full object-cover object-center"
            style={{
              transform: visible ? "scale(1)" : "scale(1.1)",
              transition: "transform 1.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.25s",
            }}
          />
          {/* Subtle left-edge vignette to blend with dark panel */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />

          {/* Floating year tag */}
          <div
            className="absolute bottom-6 right-6 flex flex-col items-end gap-1"
            style={{
              opacity: visible ? 0.6 : 0,
              transition: "opacity 0.6s ease 1.2s",
            }}
          >
            <p className="text-[9px] tracking-[4px] uppercase text-white/80">Est.</p>
            <p className="text-2xl font-bold text-white/80 leading-none">2010</p>
          </div>
        </div>
      </div>
    </section>
  );
}
