interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "active";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantClass =
    variant === "active"
      ? "bg-[#C9A84C]/10 border-[#C9A84C]/30 text-[#C9A84C]"
      : "bg-white/5 border-white/10 text-[#A1A1AA] hover:border-white/20 hover:text-white";

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${variantClass} ${className}`}
    >
      {children}
    </span>
  );
}
