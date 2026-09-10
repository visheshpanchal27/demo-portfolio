"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionMap = {
  up:    { y: 20 },
  down:  { y: -20 },
  left:  { x: 20 },
  right: { x: -20 },
  none:  {},
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
  className = "",
  direction = "up",
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}
