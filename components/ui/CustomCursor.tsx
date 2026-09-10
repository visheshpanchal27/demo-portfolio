"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  // Spring for smooth following — fast enough to feel responsive
  const x = useSpring(rawX, { stiffness: 600, damping: 40, mass: 0.2 });
  const y = useSpring(rawY, { stiffness: 600, damping: 40, mass: 0.2 });

  useEffect(() => {
    // Only show on true pointer devices
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;
    setIsTouch(false);

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Use event delegation — works for all elements including dynamically added ones
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest("[data-cursor]");
      if (target) {
        setLabel(target.getAttribute("data-cursor") || "");
        setIsHovering(true);
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as Element).closest("[data-cursor]");
      if (target) {
        setLabel("");
        setIsHovering(false);
      }
    };

    // Also handle links and buttons for pointer change
    const onButtonOver = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest("a, button, [role='button']") &&
        !target.closest("[data-cursor]")
      ) {
        setIsHovering(true);
      }
    };

    const onButtonOut = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
        target.closest("a, button, [role='button']") &&
        !target.closest("[data-cursor]")
      ) {
        setIsHovering(false);
        setLabel("");
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mouseover", onButtonOver);
    document.addEventListener("mouseout", onButtonOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mouseover", onButtonOver);
      document.removeEventListener("mouseout", onButtonOut);
    };
  }, [rawX, rawY]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <AnimatePresence mode="wait">
          {label ? (
            // Label pill — for data-cursor elements
            <motion.div
              key="label"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap shadow-lg"
            >
              {label}
            </motion.div>
          ) : isHovering ? (
            // Expanded ring on hover over links/buttons
            <motion.div
              key="hover"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="w-8 h-8 rounded-full border-2 border-[#C9A84C]/70 bg-[#C9A84C]/10"
            />
          ) : visible ? (
            // Default small dot
            <motion.div
              key="dot"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
              className="w-3 h-3 rounded-full bg-white/70"
            />
          ) : null}
        </AnimatePresence>
      </motion.div>

      {/* Hide default cursor on desktop */}
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
