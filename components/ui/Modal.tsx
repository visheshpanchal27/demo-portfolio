"use client";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X } from "lucide-react";
import { useEffect, ReactNode, useRef } from "react";

// Strong ease-out per Emil Kowalski standards
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, className = "" }: ModalProps) {
  const reduce = useReducedMotion() ?? false;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) closeButtonRef.current?.focus();
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // Backdrop: 250ms ease-out per modal standard
          transition={{ duration: 0.25, ease: EASE_OUT }}
        >
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            className={`relative z-10 ${className}`}
            role="dialog"
            aria-modal="true"
            aria-label="Reel details"
            // Modal: scale(0.96) → 1, centered, 250ms per Emil Kowalski modal recipe
            initial={{ scale: reduce ? 1 : 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: reduce ? 1 : 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
          >
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close modal"
              className="absolute -top-4 -right-4 z-20 w-9 h-9 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
