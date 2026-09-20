"use client";
import { motion, MotionValue, useTransform, useMotionTemplate } from "motion/react";
import Image from "next/image";
import { scrollTabsData } from "./ScrollTabs";

interface ScrollTabsRightProps {
  data: typeof scrollTabsData;
  opacities: MotionValue<number>[];
  scrollYProgress: MotionValue<number>;
}

function PanelImage({
  item,
  index,
  scrollYProgress,
  total,
}: {
  item: (typeof scrollTabsData)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
  total: number;
}) {
  const segStart = index / total;
  const segMid = (index + 0.5) / total;
  const segEnd = (index + 1) / total;

  // First panel starts fully visible
  const clipBottom = useTransform(
    scrollYProgress,
    index === 0 ? [0, segMid] : [segStart, segMid],
    index === 0 ? ["0%", "0%"] : ["100%", "0%"],
    { clamp: true }
  );

  // Last panel never slides out
  const clipTop = useTransform(
    scrollYProgress,
    index === total - 1 ? [segMid, 1] : [segMid, segEnd],
    index === total - 1 ? ["0%", "0%"] : ["0%", "100%"],
    { clamp: true }
  );

  // Use useMotionTemplate instead of array transform — esbuild safe
  const clipPath = useMotionTemplate`inset(${clipTop} 0% ${clipBottom} 0% round 16px)`;

  const scale = useTransform(
    scrollYProgress,
    [segStart, segMid, segEnd],
    [1.06, 1, 0.97],
    { clamp: true }
  );

  return (
    <motion.div className="absolute inset-0" style={{ clipPath }}>
      <motion.div className="absolute inset-0" style={{ scale }}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority={index === 0}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-semibold text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E85D26] animate-pulse" />
          {item.label}
        </span>
        <span className="text-xs font-bold tracking-[0.2em] text-white/40">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

export default function ScrollTabsRight({
  data,
  opacities,
  scrollYProgress,
}: ScrollTabsRightProps) {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#0f0f0f] border border-white/[0.07]">
      {data.map((item, i) => (
        <PanelImage
          key={item.id}
          item={item}
          index={i}
          scrollYProgress={scrollYProgress}
          total={data.length}
        />
      ))}
    </div>
  );
}
