"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Instagram, ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";

const EASE = [0.23, 1, 0.32, 1] as const;

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen max-h-screen flex flex-col justify-end overflow-hidden bg-[#0A0A0A]">
      {/* Full bleed background */}
      <div className="absolute inset-0">
        <Image src={profile.heroImage} alt={profile.name} fill className="object-cover object-top" priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/55 to-[#0A0A0A]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/70 via-transparent to-transparent" />
      </div>

      {/* Content — tight padding so everything fits in viewport */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12 pt-20">
        <div className="max-w-2xl">

          {/* Identity label */}
          <motion.p className="section-label mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}>
            {profile.identity} · {profile.tagline}
          </motion.p>

          {/* Name — smaller clamp so it fits */}
          <div className="overflow-hidden mb-3 sm:mb-4">
            <motion.h1 className="font-heading leading-[0.88] tracking-tight"
              style={{ fontSize: "clamp(44px, 7vw, 110px)", fontWeight: 500 }}
              initial={{ y: "100%" }} animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.77, 0, 0.175, 1] }}>
              <span className="block text-[#F5F5F0]">{profile.firstName}</span>
              <span className="block text-[#C6A15B]">{profile.lastName}</span>
            </motion.h1>
          </div>

          {/* Bio — shorter on mobile */}
          <motion.p className="text-[#A3A3A3] text-xs sm:text-sm lg:text-base leading-relaxed max-w-sm mb-4 sm:mb-5"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}>
            {profile.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: EASE }}>
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#C6A15B] hover:bg-[#D8B875] text-[#0A0A0A] font-semibold text-xs transition-colors duration-200 min-h-[40px]">
              <Instagram size={13} /> Follow on Instagram
            </a>
            <button onClick={() => document.querySelector("#reels")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#292929] text-[#F5F5F0] hover:border-[#C6A15B]/50 font-semibold text-xs transition-colors duration-200 min-h-[40px]">
              View My Work
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div className="flex items-center gap-4 sm:gap-6 flex-wrap"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0, ease: EASE }}>
            {profile.floatingStats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-[#F5F5F0] font-semibold text-sm sm:text-base tabular-nums">{stat.value}</span>
                <span className="text-[#A3A3A3] text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 z-10 hidden sm:flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}>
        <span className="section-label" style={{ writingMode: "vertical-rl" }}>Scroll</span>
        <ArrowDown size={12} className="text-[#C6A15B] animate-bounce" />
      </motion.div>
    </section>
  );
}
