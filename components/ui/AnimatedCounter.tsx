"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

interface AnimatedCounterProps {
  value: number;
  display: string;
  suffix: string;
  duration?: number;
}

export default function AnimatedCounter({ value, display, suffix, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);
  const isDecimal = display.includes(".");

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const end = isDecimal ? parseFloat(display) : value;
    const steps = 60;
    const increment = end / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const next = Math.min(start + increment * step, end);
      setCurrent(next);
      if (step >= steps) clearInterval(timer);
    }, (duration * 1000) / steps);

    return () => clearInterval(timer);
  }, [isInView, value, display, duration, isDecimal]);

  const formatted = () => {
    if (display.includes("M")) return `${current.toFixed(1)}M`;
    if (display.includes("K")) return `${Math.round(current / 1000)}K`;
    if (isDecimal) return current.toFixed(1);
    return Math.round(current).toString();
  };

  return (
    <span ref={ref}>
      {isInView ? formatted() : "0"}
      {suffix}
    </span>
  );
}
