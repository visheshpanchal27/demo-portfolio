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
        <button key={cat} onClick={() => onChange(cat)}
          className="relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] min-h-[44px]"
          style={{ color: active === cat ? "#C6A15B" : "#A3A3A3" }}>
          {active === cat ? (
            <motion.span layoutId="activeFilter"
              className="absolute inset-0 rounded-full border border-[#C6A15B]/50 bg-[#C6A15B]/10"
              transition={{ type: "spring", stiffness: 400, damping: 30 }} />
          ) : (
            <span className="absolute inset-0 rounded-full border border-[#292929] bg-[#181818]" />
          )}
          <span className="relative z-10">{cat}</span>
        </button>
      ))}
    </div>
  );
}
