"use client";
import { motion, MotionValue, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { scrollTabsData } from "./ScrollTabs";

interface ScrollTabsLeftProps {
  data: typeof scrollTabsData;
  opacities: MotionValue<number>[];
  scrollYProgress: MotionValue<number>;
}

function PanelIndicator({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / 3;
  const end = (index + 1) / 3;
  const scaleX = useTransform(scrollYProgress, [start, end], [0, 1], { clamp: true });

  return (
    <div className="relative h-[2px] bg-white/10 overflow-hidden rounded-full">
      <motion.div
        className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-[#E85D26] to-[#C9A84C]"
        style={{ scaleX, transformOrigin: "left" }}
      />
    </div>
  );
}

export default function ScrollTabsLeft({
  data,
  opacities,
  scrollYProgress,
}: ScrollTabsLeftProps) {
  return (
    <div className="bg-[#111111] border border-white/[0.07] rounded-2xl p-6 sm:p-8 flex flex-col stage-texture relative overflow-hidden">

      {/* Text panels — only ONE visible at a time */}
      <div className="relative flex-1 min-h-0">
        {data.map((item, i) => (
          <motion.div
            key={item.id}
            className="absolute inset-0 flex flex-col justify-center gap-4 sm:gap-5"
            style={{ opacity: opacities[i] }}
            // Prevent invisible panels from being interactive or affecting layout
            aria-hidden={i !== 0}
          >
            {/* Solid background blocks text bleed-through */}
            <div className="absolute inset-0 bg-[#111111] rounded-xl" />

            {/* Content — above the background */}
            <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#E85D26]">
                {item.label}
              </span>

              <h2
                className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight"
                style={{ fontFamily: "var(--font-space), Space Grotesk, system-ui" }}
              >
                {item.heading}
                <br />
                <span className="bg-gradient-to-r from-[#E85D26] to-[#C9A84C] bg-clip-text text-transparent">
                  {item.highlight}
                </span>
              </h2>

              <div className="w-12 h-px bg-gradient-to-r from-[#E85D26] to-[#C9A84C]" />

              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-sm">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA — always visible at bottom */}
      <div className="flex-shrink-0 mt-6 relative z-10">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#E85D26] to-[#C9A84C] text-black font-bold text-sm hover:shadow-lg hover:shadow-[#E85D26]/20 transition-shadow duration-300"
        >
          Work With Me
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
