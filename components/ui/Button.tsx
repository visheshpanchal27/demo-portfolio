"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  "aria-label"?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#C9A84C] to-[#8a6f2e] text-black font-semibold shadow-lg shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/40",
    outline:
      "border border-white/20 text-white hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };

  const base = `inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  const content = (
    <motion.span
      className={base}
      whileHover={disabled ? {} : { scale: 1.03 }}
      whileTap={disabled ? {} : { scale: 0.97 }}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} aria-label={ariaLabel} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded-full">
      {content}
    </button>
  );
}
