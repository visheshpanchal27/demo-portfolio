"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUpRight, Instagram, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

function ImdbIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.177.062-.117.095-.405.095-.862V10.78c0-.43-.017-.712-.05-.843a.38.38 0 0 0-.125-.35zM3.72 10.46H3.1v3.08h.62c.19 0 .33-.028.41-.084.08-.056.138-.153.172-.29.033-.138.05-.375.05-.712v-1.04c0-.35-.014-.583-.043-.7a.44.44 0 0 0-.17-.29c-.08-.056-.22-.084-.42-.084z" />
      <path d="M0 7.5v9A1.5 1.5 0 0 0 1.5 18h21a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 22.5 6h-21A1.5 1.5 0 0 0 0 7.5zm5.46.57v7.86H3.96v-7.86zm3.57 0l.82 3.51.78-3.51h2.17v7.86h-1.4V10.4l-1.02 5.53H9.2L8.2 10.4v5.53H6.8V8.07zm6.54 1.35c-.22-.52-.63-.78-1.22-.78h-.5V8.07h.5c.6 0 1.04.1 1.33.3.29.2.5.5.62.9.12.4.18.97.18 1.72v1.5c0 .78-.05 1.36-.14 1.74-.1.38-.27.66-.52.84-.25.18-.62.27-1.1.27h-.87V8.07h.87c.5 0 .87.1 1.1.3z" />
    </svg>
  );
}

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

      {/* IMDb badge link */}
      <motion.div {...fadeUp(1.3)} className="flex justify-center lg:justify-start">
        <a
          href={profile.imdb}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C9A84C]/8 border border-[#C9A84C]/25 hover:bg-[#C9A84C]/15 hover:border-[#C9A84C]/50 transition-all duration-200 group"
        >
          <div className="flex items-center justify-center w-5 h-5 rounded bg-[#C9A84C] text-black flex-shrink-0">
            <ImdbIcon size={12} />
          </div>
          <span className="text-xs font-medium text-[#A1A1AA] group-hover:text-white transition-colors">
            View IMDb Profile
          </span>
          <ExternalLink size={11} className="text-[#71717A] group-hover:text-[#C9A84C] transition-colors" />
        </a>
      </motion.div>

      {/* Location */}
      <motion.p {...fadeUp(1.4)} className="text-[#71717A] text-xs tracking-wide">
        {profile.location}
      </motion.p>
    </div>
  );
}
