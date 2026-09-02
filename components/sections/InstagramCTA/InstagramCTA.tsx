import { Instagram, ArrowUpRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { profile } from "@/data/profile";

export default function InstagramCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#080808]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center mx-auto mb-5 sm:mb-6">
            <Instagram size={22} className="text-[#C9A84C]" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#C9A84C] mb-3 sm:mb-4">
            Follow the Journey
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 break-words">{profile.handle}</h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-[#A1A1AA] text-sm sm:text-base mb-6 sm:mb-8">
            Daily lifestyle, travel diaries, and behind-the-scenes content.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#8a6f2e] text-black font-semibold text-sm hover:shadow-lg hover:shadow-[#C9A84C]/20 transition-shadow duration-300 min-h-[48px]"
          >
            <Instagram size={16} />
            View Instagram
            <ArrowUpRight size={16} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
