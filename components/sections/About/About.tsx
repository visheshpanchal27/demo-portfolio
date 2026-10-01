import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

          {/* Photo — smaller on mobile */}
          <FadeIn direction="left">
            <div className="relative aspect-[3/4] max-h-[500px] sm:max-h-none rounded-2xl overflow-hidden border border-[#292929]">
              <Image src={profile.aboutImage} alt={`${profile.name} — About`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent" />
            </div>
          </FadeIn>

          {/* Text */}
          <div className="flex flex-col gap-5 sm:gap-7">
            <FadeIn delay={0.1} direction="right">
              <p className="section-label">About Krunal</p>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <h2 className="font-heading text-[#F5F5F0]"
                style={{ fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 500, lineHeight: 0.95 }}>
                More Than<br /><em className="text-[#C6A15B]">Just Content</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.3} direction="right">
              <p className="text-[#A3A3A3] text-sm sm:text-base lg:text-lg leading-relaxed">{profile.bio}</p>
            </FadeIn>
            <FadeIn delay={0.4} direction="right">
              <p className="text-[#A3A3A3] text-sm sm:text-base leading-relaxed">
                From comedy skits to brand campaigns — the PASAKAKA identity is built on genuine connection with a real audience. Every piece of content is crafted to entertain first, promote second.
              </p>
            </FadeIn>
            <FadeIn delay={0.5} direction="right">
              <div className="flex flex-wrap gap-2 sm:gap-3 pt-1">
                {["Artist", "Comedy Creator", "Digital Creator", "Brand Collaborator"].map((tag) => (
                  <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#292929] bg-[#181818] text-[#A3A3A3] text-xs sm:text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.6} direction="right">
              <div className="flex items-center gap-4 sm:gap-6 pt-3 border-t border-[#292929] flex-wrap">
                <div>
                  <p className="text-[#F5F5F0] font-semibold text-xl sm:text-2xl tabular-nums">121K+</p>
                  <p className="text-[#A3A3A3] text-xs mt-0.5">Instagram Followers</p>
                </div>
                <div className="w-px h-8 sm:h-10 bg-[#292929]" />
                <div>
                  <p className="text-[#F5F5F0] font-semibold text-xl sm:text-2xl">Verified</p>
                  <p className="text-[#A3A3A3] text-xs mt-0.5">Instagram Account</p>
                </div>
                <div className="w-px h-8 sm:h-10 bg-[#292929]" />
                <div>
                  <p className="text-[#F5F5F0] font-semibold text-xl sm:text-2xl">Ahmedabad</p>
                  <p className="text-[#A3A3A3] text-xs mt-0.5">Based In</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
