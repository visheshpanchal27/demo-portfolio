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

      {/* PASAKAKA identity pill */}
      <motion.div {...fadeUp(0.2)}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E85D26]/30 bg-[#E85D26]/8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E85D26] animate-pulse" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#E85D26]">
            {profile.identity}
          </span>
        </div>
      </motion.div>

      {/* Name */}
      <div className="overflow-hidden w-full">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight font-bold"
          style={{ fontFamily: "var(--font-space), Space Grotesk, system-ui" }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}
        >
          {profile.name.split(" ").map((word, i) => (
            <span
              key={i}
              className={
                i === 1
                  ? "block bg-gradient-to-r from-[#C9A84C] to-[#E85D26] bg-clip-text text-transparent"
                  : "block"
              }
            >
              {word}
            </span>
          ))}
        </motion.h1>
      </div>

      {/* Tagline — static, confident, no typewriter */}
      <motion.p {...fadeUp(0.6)} className="text-[#71717A] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
        {profile.tagline}
      </motion.p>

      {/* Short punchy bio */}
      <motion.p {...fadeUp(0.75)} className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-sm">
        {profile.bio}
      </motion.p>

      {/* 3 category tags max */}
      <motion.div {...fadeUp(0.9)} className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {profile.categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 rounded-md text-xs font-semibold tracking-wide border border-white/10 bg-white/[0.04] text-[#A1A1AA]"
          >
            {cat}
          </span>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div {...fadeUp(1.05)} className="flex flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start w-full">
        <Button size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
          Work With Me
          <ArrowUpRight size={16} />
        </Button>
        <Button variant="outline" size="lg" href={profile.instagram}>
          <Instagram size={16} />
          @suthar_krunal_
        </Button>
      </motion.div>

      {/* Follower strip */}
      <motion.div {...fadeUp(1.15)} className="flex items-center gap-3 justify-center lg:justify-start">
        <span className="text-white font-bold text-lg tabular-nums" style={{ fontFamily: "var(--font-space)" }}>
          121K
        </span>
        <span className="text-[#71717A] text-xs">Instagram Followers</span>
        <span className="w-px h-4 bg-white/10" />
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[#71717A] text-xs">Verified</span>
        </span>
      </motion.div>
    </div>
  );
}
