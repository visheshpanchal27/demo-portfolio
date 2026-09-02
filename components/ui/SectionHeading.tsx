import FadeIn from "@/components/animations/FadeIn";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {label && (
        <FadeIn>
          <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A84C]">
            {label}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className="text-[#A1A1AA] text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
      )}
      <FadeIn delay={0.25}>
        <div className="h-px w-12 bg-gradient-to-r from-[#C9A84C] to-[#8a6f2e] mt-1" />
      </FadeIn>
    </div>
  );
}
