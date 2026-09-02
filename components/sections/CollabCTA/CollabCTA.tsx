"use client";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function CollabCTA() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 bg-[#0D0D0D] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] sm:w-[600px] sm:h-[300px] rounded-full bg-[#C9A84C]/6 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.25em] uppercase text-[#C9A84C] mb-4 sm:mb-6">
            Collaboration
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 sm:mb-6">
            Content that
            <br />
            <span className="bg-gradient-to-r from-[#C9A84C] to-[#e8d5a3] bg-clip-text text-transparent">
              feels human.
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Let&apos;s discuss your next campaign, product launch, collaboration, or creative project.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#8a6f2e] text-black font-semibold text-sm sm:text-base hover:shadow-xl hover:shadow-[#C9A84C]/20 transition-shadow duration-300 min-h-[52px]"
          >
            Have a Campaign in Mind?
            <ArrowUpRight size={18} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
