"use client";
import { motion } from "motion/react";
import { ArrowUpRight, Instagram } from "lucide-react";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] as const },
});

export default function HeroContent() {
  return (
    <div className="flex flex-col gap-5 lg:gap-6 text-center lg:text-left items-center lg:items-start">

      {/* Identity pill */}
      <motion.div {...fadeUp(0.2)}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C6A15B]">{profile.identity}</span>
        </div>
      </motion.div>

      {/* Name */}
      <div className="overflow-hidden w-full">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F5F5F0] leading-[0.95] tracking-tight font-bold"
          style={{ fontFamily: "var(--font-space), Space Grotesk, system-ui" }}
          initial={{ y: "100%" }} animate={{ y: "0%" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
        >
          {profile.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "block bg-gradient-to-r from-[#C6A15B] to-[#D8B875] bg-clip-text text-transparent" : "block"}>
              {word}
            </span>
          ))}
        </motion.h1>
      </div>

      {/* Tagline */}
      <motion.p {...fadeUp(0.6)} className="text-[#A3A3A3] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
        {profile.tagline}
      </motion.p>

      {/* Bio */}
      <motion.p {...fadeUp(0.75)} className="text-[#A3A3A3] text-base sm:text-lg leading-relaxed max-w-sm">
        {profile.bio}
      </motion.p>

      {/* Category tags */}
      <motion.div {...fadeUp(0.9)} className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {profile.categories.map((cat) => (
          <span key={cat} className="px-3 py-1 rounded-md text-xs font-semibold tracking-wide border border-[#292929] bg-[#181818] text-[#A3A3A3]">
            {cat}
          </span>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div {...fadeUp(1.05)} className="flex flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start w-full">
        <Button size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
          Work With Me <ArrowUpRight size={16} />
        </Button>
        <Button variant="outline" size="lg" href={profile.instagram}>
          <Instagram size={16} /> @suthar_krunal_
        </Button>
      </motion.div>

      {/* Follower strip */}
      <motion.div {...fadeUp(1.15)} className="flex items-center gap-3 justify-center lg:justify-start">
        <span className="text-[#F5F5F0] font-bold text-lg tabular-nums" style={{ fontFamily: "var(--font-space)" }}>121K</span>
        <span className="text-[#A3A3A3] text-xs">Instagram Followers</span>
        <span className="w-px h-4 bg-[#292929]" />
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[#A3A3A3] text-xs">Verified</span>
        </span>
      </motion.div>
    </div>
  );
}
