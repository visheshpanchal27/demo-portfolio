"use client";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useEffect, ReactNode } from "react";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({ isOpen, onClose, children, className = "" }: ModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
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
        <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}>
          <motion.div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose} />
          <motion.div className={`relative z-10 ${className}`}
            initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.25, ease: EASE_OUT }}>
            <button onClick={onClose} aria-label="Close modal"
              className="absolute -top-4 -right-4 z-20 w-9 h-9 rounded-full bg-[#181818] border border-[#292929] flex items-center justify-center text-[#A3A3A3] hover:text-[#F5F5F0] transition-colors">
              <X size={16} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
