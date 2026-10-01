"use client";
import FadeIn from "@/components/animations/FadeIn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ label, title, subtitle, align = "center", className = "" }: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {label && (
        <FadeIn>
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#C6A15B]">{label}</span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#F5F5F0] font-bold leading-tight" style={{ fontFamily: "var(--font-space), Space Grotesk, system-ui" }}>
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className="text-[#A3A3A3] text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        </FadeIn>
      )}
      <FadeIn delay={0.25}>
        <div className="h-px w-12 bg-gradient-to-r from-[#C6A15B] to-[#D8B875] mt-1" />
      </FadeIn>
    </div>
  );
}
