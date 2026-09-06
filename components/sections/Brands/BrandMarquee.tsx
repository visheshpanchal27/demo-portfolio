"use client";
import { useReducedMotion } from "motion/react";
import { brands } from "@/data/brands";

export default function BrandMarquee() {
  const reduce = useReducedMotion();
  const doubled = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* CSS animation — runs off main thread, correct for constant/predetermined motion */}
      <div
        className="flex gap-8 sm:gap-12 w-max"
        style={{
          animation: reduce ? "none" : "marquee 22s linear infinite",
        }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.id}-${i}`}
            className="flex items-center justify-center px-6 sm:px-8 py-4 rounded-xl border border-white/[0.06] bg-[#111111] min-w-[120px] sm:min-w-[140px] opacity-40 transition-opacity duration-300"
            style={{
              // Hover gated on pointer:fine per Emil Kowalski accessibility rule
            }}
          >
            <span className="text-white font-medium text-sm tracking-wide whitespace-nowrap">
              {brand.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        /* Pause on hover — gated on pointer:fine so touch doesn't trigger */
        @media (hover: hover) and (pointer: fine) {
          .marquee-wrapper:hover > div {
            animation-play-state: paused;
          }
          div[style*="marquee"]:hover {
            animation-play-state: paused;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          div[style*="marquee"] {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
