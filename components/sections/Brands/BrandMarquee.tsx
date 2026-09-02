"use client";
import { motion } from "motion/react";
import { brands } from "@/data/brands";

export default function BrandMarquee() {
  const doubled = [...brands, ...brands];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        whileHover={{ animationPlayState: "paused" }}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand.id}-${i}`}
            className="flex items-center justify-center px-8 py-4 rounded-xl border border-white/[0.06] bg-[#111111] min-w-[140px] opacity-40 hover:opacity-80 transition-opacity duration-300"
          >
            <span className="text-white font-medium text-sm tracking-wide whitespace-nowrap">
              {brand.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
