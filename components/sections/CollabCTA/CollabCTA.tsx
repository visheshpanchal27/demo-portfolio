"use client";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function CollabCTA() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 bg-[#0A0A0A] stage-texture overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#C6A15B]/5 blur-[140px]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/8 mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C6A15B]">Collaboration</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5F0] leading-[0.95] font-bold tracking-tight mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-space), Space Grotesk, system-ui" }}>
            Content that<br />
            <span className="bg-gradient-to-r from-[#C6A15B] to-[#D8B875] bg-clip-text text-transparent">entertains.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#A3A3A3] text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Let&apos;s build something your audience will actually remember. DM or mail for business collaboration.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-[#C6A15B] hover:bg-[#D8B875] text-black font-bold text-sm sm:text-base transition-colors duration-200 min-h-[52px]">
            Start a Collaboration <ArrowUpRight size={18} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
