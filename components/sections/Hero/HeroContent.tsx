"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram } from "lucide-react";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

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
    <div className="flex flex-col gap-5 lg:gap-7 text-center lg:text-left items-center lg:items-start">
      {/* Label */}
      <motion.div {...fadeUp(0.3)}>
        <span className="text-xs font-medium tracking-[0.25em] uppercase text-[#C9A84C]">
          Digital Creator
        </span>
      </motion.div>

      {/* Name */}
      <div className="overflow-hidden w-full">
        <motion.h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
        >
          {profile.name}
        </motion.h1>
      </div>

      {/* Typewriter role */}
      <motion.div {...fadeUp(0.7)} className="h-7 w-full">
        <span className="text-base sm:text-lg text-[#A1A1AA] font-light">
          {displayed}
          <span className="inline-block w-0.5 h-5 bg-[#C9A84C] ml-0.5 animate-pulse" />
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.p {...fadeUp(0.85)} className="text-[#71717A] text-xs sm:text-sm tracking-[0.15em] uppercase">
        {profile.tagline}
      </motion.p>

      {/* Bio */}
      <motion.p {...fadeUp(1.0)} className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-md">
        {profile.bio}
      </motion.p>

      {/* Category badges */}
      <motion.div {...fadeUp(1.1)} className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {profile.categories.map((cat) => (
          <Badge key={cat}>{cat}</Badge>
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
          View Instagram
        </Button>
      </motion.div>

      {/* Location */}
      <motion.p {...fadeUp(1.3)} className="text-[#71717A] text-xs tracking-wide">
        {profile.location}
      </motion.p>
    </div>
  );
}
