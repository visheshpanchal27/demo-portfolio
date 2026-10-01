"use client";
import { motion, MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { scrollTabsData } from "./ScrollTabs";

interface ScrollTabsLeftProps {
  data: typeof scrollTabsData;
  opacities: MotionValue<number>[];
  scrollYProgress: MotionValue<number>;
}

export default function ScrollTabsLeft({ data, opacities }: ScrollTabsLeftProps) {
  return (
    <div className="bg-[#111111] border border-[#292929] rounded-2xl p-6 sm:p-8 flex flex-col stage-texture relative overflow-hidden">
      <div className="relative flex-1 min-h-0">
        {data.map((item, i) => (
          <motion.div key={item.id} className="absolute inset-0 flex flex-col justify-center gap-4 sm:gap-5"
            style={{ opacity: opacities[i] }} aria-hidden={i !== 0}>
            <div className="absolute inset-0 bg-[#111111] rounded-xl" />
            <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C6A15B]">{item.label}</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#F5F5F0] font-bold leading-tight"
                style={{ fontFamily: "var(--font-space), Space Grotesk, system-ui" }}>
                {item.heading}<br />
                <span className="bg-gradient-to-r from-[#C6A15B] to-[#D8B875] bg-clip-text text-transparent">{item.highlight}</span>
              </h2>
              <div className="w-12 h-px bg-gradient-to-r from-[#C6A15B] to-[#D8B875]" />
              <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed max-w-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex-shrink-0 mt-6 relative z-10">
        <a href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C6A15B] hover:bg-[#D8B875] text-black font-bold text-sm transition-colors duration-200">
          Work With Me <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
