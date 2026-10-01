import { Instagram, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { profile } from "@/data/profile";

export default function InstagramCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#111111]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#C6A15B]/10 border border-[#C6A15B]/20 flex items-center justify-center mx-auto mb-5 sm:mb-6">
            <Instagram size={22} className="text-[#C6A15B]" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#C6A15B] mb-3 sm:mb-4">Follow the Journey</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="text-4xl md:text-5xl text-[#F5F5F0] font-bold mb-3 sm:mb-4" style={{ fontFamily: "var(--font-space)" }}>{profile.handle}</h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-[#A3A3A3] text-sm sm:text-base mb-6 sm:mb-8">Comedy, characters and chaos — daily.</p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <a href={profile.instagram} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#C6A15B] hover:bg-[#D8B875] text-black font-bold text-sm transition-colors duration-200 min-h-[48px]">
            <Instagram size={16} /> View Instagram <ArrowUpRight size={16} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
