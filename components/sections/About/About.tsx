import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import FadeIn from "@/components/animations/FadeIn";
import Stats from "./Stats";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
          {/* Text */}
          <div className="flex flex-col gap-5 sm:gap-6">
            <SectionHeading
              label="About"
              title="More Than Content. A Personal Brand."
              align="left"
            />
            <FadeIn delay={0.3} direction="left">
              <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">{profile.bio}</p>
            </FadeIn>
            <FadeIn delay={0.4} direction="left">
              <div className="flex flex-wrap gap-2 mt-1">
                {profile.categories.map((cat) => (
                  <Badge key={cat}>{cat}</Badge>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.5} direction="left">
              <div className="flex flex-col gap-2 mt-1">
                <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717A]">Available for</p>
                <div className="flex flex-wrap gap-2">
                  {profile.availability.map((item) => (
                    <Badge key={item} variant="active">{item}</Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Editorial statement */}
          <FadeIn delay={0.2} direction="right">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A84C]/0 via-[#C9A84C]/40 to-[#C9A84C]/0" />
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-white leading-tight pl-6 sm:pl-8">
                &ldquo;Entertainment that
                <br />
                <span className="bg-gradient-to-r from-[#C9A84C] to-[#e8d5a3] bg-clip-text text-transparent">
                  people remember.
                </span>
                &rdquo;
              </p>
            </div>
          </FadeIn>
        </div>

        <Stats />
      </div>
    </section>
  );
}
