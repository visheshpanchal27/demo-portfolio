"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);

    const addLabel = (el: Element) => {
      const cursor = el.getAttribute("data-cursor");
      if (cursor) setLabel(cursor);
    };
    const removeLabel = () => setLabel("");

    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", () => addLabel(el));
      el.addEventListener("mouseleave", removeLabel);
    });

    const observer = new MutationObserver(() => {
      document.querySelectorAll("[data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", () => addLabel(el));
        el.addEventListener("mouseleave", removeLabel);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      observer.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:flex items-center justify-center"
          animate={{ x: pos.x - (label ? 32 : 6), y: pos.y - (label ? 16 : 6) }}
          transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
        >
          {label ? (
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-white text-black text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap"
            >
              {label}
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-3 h-3 rounded-full bg-white/80"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
