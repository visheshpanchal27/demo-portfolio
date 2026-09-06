"use client";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import { useRef, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export default function Parallax({ children, speed = 0.3, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Reduced motion: no parallax movement
  const range = reduce ? 0 : speed * 60;
  const y = useTransform(scrollYProgress, [0, 1], [`${-range}px`, `${range}px`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}
