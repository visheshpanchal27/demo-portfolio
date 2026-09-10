"use client";
import { motion, Variants, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayStart?: number;
}

export default function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.07,
  delayStart = 0,
}: StaggerContainerProps) {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            // 50ms stagger per Emil Kowalski: 30–80ms between items
            staggerChildren: reduce ? 0 : staggerDelay,
            delayChildren: reduce ? 0 : delayStart,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    // spring for alive feel per Emil Kowalski
    transition: { type: "spring", duration: 0.5, bounce: 0.15 },
  },
};
