"use client";
import { motion } from "motion/react";

interface CategoryFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] min-h-[44px]"
          style={{ color: active === cat ? "#C9A84C" : "#A1A1AA" }}
        >
          {active === cat ? (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full border border-[#C9A84C]/60 bg-[#C9A84C]/10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          ) : (
            <span className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.03]" />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
}
