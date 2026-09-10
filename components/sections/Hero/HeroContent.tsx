"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram } from "lucide-react";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export default function HeroContent() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = profile.roles[roleIndex];
    let i = typing ? 0 : role.length;
    const interval = setInterval(() => {
      if (typing) {
        i++;
        setDisplayed(role.slice(0, i));
        if (i >= role.length) { clearInterval(interval); setTimeout(() => setTyping(false), 1800); }
      } else {
        i--;
        setDisplayed(role.slice(0, i));
        if (i <= 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % profile.roles.length);
          setTyping(true);
        }
      }
    }, typing ? 60 : 35);
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

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

      {/* Name — bold, modern, artist style */}
      <div className="overflow-hidden w-full">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] tracking-tight font-bold"
          style={{ fontFamily: "var(--font-space), Space Grotesk, system-ui" }}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.77, 0, 0.175, 1] }}
        >
          {profile.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "block bg-gradient-to-r from-[#C9A84C] to-[#E85D26] bg-clip-text text-transparent" : "block"}>
              {word}
            </span>
          ))}
        </motion.h1>
      </div>

      {/* Typewriter role */}
      <motion.div {...fadeUp(0.7)} className="h-7 w-full">
        <span className="text-base sm:text-lg text-[#A1A1AA] font-light">
          {displayed}
          <span className="inline-block w-0.5 h-5 bg-[#E85D26] ml-0.5 animate-pulse" />
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.p {...fadeUp(0.85)} className="text-[#71717A] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium">
        {profile.tagline}
      </motion.p>

      {/* Bio */}
      <motion.p {...fadeUp(1.0)} className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-md">
        {profile.bio}
      </motion.p>

      {/* Category tags — entertainment style */}
      <motion.div {...fadeUp(1.1)} className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {profile.categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 rounded-md text-xs font-semibold tracking-wide border border-white/10 bg-white/[0.04] text-[#A1A1AA] hover:border-[#E85D26]/30 hover:text-white hover:bg-[#E85D26]/5 transition-all duration-200"
          >
            {cat}
          </span>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div {...fadeUp(1.2)} className="flex flex-wrap gap-3 sm:gap-4 pt-2 justify-center lg:justify-start w-full">
        <Button size="lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
          Work With Me
          <ArrowUpRight size={16} />
        </Button>
        <Button variant="outline" size="lg" href={profile.instagram}>
          <Instagram size={16} />
          @suthar_krunal_
        </Button>
      </motion.div>

      {/* Follower count strip */}
      <motion.div {...fadeUp(1.3)} className="flex items-center gap-3 justify-center lg:justify-start">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold text-lg" style={{ fontFamily: "var(--font-space)" }}>112.6K</span>
          <span className="text-[#71717A] text-xs">Instagram Followers</span>
        </div>
      </motion.div>
    </div>
  );
}
