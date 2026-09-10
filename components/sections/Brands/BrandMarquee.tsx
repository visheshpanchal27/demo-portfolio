"use client";
import { brands } from "@/data/brands";

export default function BrandMarquee() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex items-center justify-center px-8 py-5 rounded-xl border border-white/[0.12] bg-[#111111] min-w-[180px]"
          >
            <span className="text-white font-medium text-sm tracking-wide whitespace-nowrap">
              {brand.name}
            </span>
          </div>
        ))}
    </div>
  );
}
