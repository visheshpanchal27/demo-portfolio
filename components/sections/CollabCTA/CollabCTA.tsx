"use client";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

export default function CollabCTA() {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 bg-[#080808] stage-texture overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[700px] sm:h-[400px] rounded-full bg-[#E85D26]/6 blur-[100px] sm:blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[400px] sm:h-[200px] rounded-full bg-[#C9A84C]/5 blur-[60px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E85D26]/30 bg-[#E85D26]/8 mb-6 sm:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E85D26] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#E85D26]">
              Collaboration
            </span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] font-bold tracking-tight mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-space), Space Grotesk, system-ui" }}
          >
            Content that
            <br />
            <span className="bg-gradient-to-r from-[#E85D26] to-[#C9A84C] bg-clip-text text-transparent">
              entertains.
            </span>
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-[#A1A1AA] text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Let&apos;s build something your audience will actually remember. DM or mail for business collaboration.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-gradient-to-r from-[#E85D26] to-[#C9A84C] text-black font-bold text-sm sm:text-base hover:shadow-xl hover:shadow-[#E85D26]/25 transition-shadow duration-300 min-h-[52px]"
          >
            Start a Collaboration
            <ArrowUpRight size={18} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
