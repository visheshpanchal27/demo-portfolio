interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "active";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantClass = variant === "active"
    ? "bg-[#C6A15B]/10 border-[#C6A15B]/30 text-[#C6A15B]"
    : "bg-[#181818] border-[#292929] text-[#A3A3A3] hover:border-[#C6A15B]/30 hover:text-[#F5F5F0]";
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 ${variantClass} ${className}`}>
      {children}
    </span>
  );
}
