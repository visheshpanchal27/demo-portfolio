import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="h-screen max-h-screen flex items-center overflow-hidden bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 items-center">

          {/* Photo */}
          <FadeIn direction="left">
            <div className="relative rounded-2xl overflow-hidden border border-[#292929]"
              style={{ aspectRatio: "3/4", maxHeight: "75vh" }}>
              <Image src={profile.aboutImage} alt={`${profile.name} — About`} fill
                className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/40 to-transparent" />
            </div>
          </FadeIn>

          {/* Text */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <FadeIn delay={0.1} direction="right">
              <p className="section-label">About Krunal</p>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <h2 className="font-heading text-[#F5F5F0]"
                style={{ fontSize: "clamp(32px, 4.5vw, 64px)", fontWeight: 500, lineHeight: 0.95 }}>
                More Than<br /><em className="text-[#C6A15B]">Just Content</em>
              </h2>
            </FadeIn>
            <FadeIn delay={0.3} direction="right">
              <p className="text-[#A3A3A3] text-xs sm:text-sm leading-relaxed">{profile.bio}</p>
            </FadeIn>
            <FadeIn delay={0.4} direction="right">
              <p className="text-[#A3A3A3] text-xs sm:text-sm leading-relaxed">
                From comedy skits to brand campaigns — the PASAKAKA identity is built on genuine connection with a real audience. Every piece of content is crafted to entertain first, promote second.
              </p>
            </FadeIn>
            <FadeIn delay={0.5} direction="right">
              <div className="flex flex-wrap gap-2 pt-1">
                {["Artist", "Comedy Creator", "Digital Creator", "Brand Collaborator"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full border border-[#292929] bg-[#181818] text-[#A3A3A3] text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.6} direction="right">
              <div className="flex items-center gap-4 sm:gap-6 pt-3 border-t border-[#292929] flex-wrap">
                <div>
                  <p className="text-[#F5F5F0] font-semibold text-lg sm:text-xl tabular-nums">121K+</p>
                  <p className="text-[#A3A3A3] text-xs mt-0.5">Instagram Followers</p>
                </div>
                <div className="w-px h-7 bg-[#292929]" />
                <div>
                  <p className="text-[#F5F5F0] font-semibold text-lg sm:text-xl">Verified</p>
                  <p className="text-[#A3A3A3] text-xs mt-0.5">Instagram Account</p>
                </div>
                <div className="w-px h-7 bg-[#292929]" />
                <div>
                  <p className="text-[#F5F5F0] font-semibold text-lg sm:text-xl">Ahmedabad</p>
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
