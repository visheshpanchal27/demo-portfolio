"use client";
import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

// Strong ease-in-out for on-screen movement per Emil Kowalski standards
const EASE_IN_OUT = [0.77, 0, 0.175, 1] as const;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2, delay: 0 }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay, ease: EASE_IN_OUT }}
      >
        {children}
      </motion.div>
    </div>
  );
}
