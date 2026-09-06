"use client";
import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

// Strong ease-out per Emil Kowalski standards
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
  className = "",
  direction = "up",
}: FadeInProps) {
  const reduce = useReducedMotion();

  // Reduced motion: keep opacity fade, drop transform movement
  const directionMap = reduce
    ? { up: {}, down: {}, left: {}, right: {}, none: {} }
    : {
        up: { y: 20 },
        down: { y: -20 },
        left: { x: 20 },
        right: { x: -20 },
        none: {},
      };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduce ? 0.2 : duration,
        delay: reduce ? 0 : delay,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
