"use client";
import { brands } from "@/data/brands";

export default function BrandMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
      <div className="flex gap-8 sm:gap-12 w-max marquee-track">
        {doubled.map((brand, i) => (
          <div key={`${brand.id}-${i}`}
            className="flex items-center justify-center px-6 sm:px-8 py-4 rounded-xl border border-[#292929] bg-[#181818] min-w-[120px] sm:min-w-[140px] opacity-50 hover:opacity-90 transition-opacity duration-300">
            <span className="text-[#F5F5F0] font-medium text-sm tracking-wide whitespace-nowrap">{brand.name}</span>
          </div>
        ))}
      </div>
      <style>{`
        .marquee-track { animation: marquee 22s linear infinite; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (hover: hover) and (pointer: fine) { .marquee-track:hover { animation-play-state: paused; } }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
      `}</style>
    </div>
  );
}
