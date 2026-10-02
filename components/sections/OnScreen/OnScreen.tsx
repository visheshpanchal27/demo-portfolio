"use client";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";
import { filmography } from "@/data/filmography";
import { profile } from "@/data/profile";

export default function OnScreen() {
  return (
    <section id="on-screen" className="h-screen max-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">

        {/* Header */}
        <div className="flex items-end justify-between mb-5 sm:mb-7">
          <div>
            <FadeIn><p className="section-label mb-2">Filmography</p></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-heading text-[#F5F5F0]"
                style={{ fontSize: "clamp(28px, 3.5vw, 56px)", fontWeight: 500, lineHeight: 0.95 }}>
                On <em className="text-[#C6A15B]">Screen</em>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <a href={profile.imdb} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#C6A15B] hover:text-[#D8B875] transition-colors border border-[#292929] rounded-full px-4 py-2 hover:border-[#C6A15B]/40 min-h-[40px]">
              IMDb Profile <ExternalLink size={12} />
            </a>
          </FadeIn>
        </div>

        {/* 3 cards — fixed poster height so everything fits in viewport */}
        <StaggerContainer className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {filmography.map((film) => (
            <motion.a
              key={film.id}
              href={film.imdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="group bg-[#181818] border border-[#292929] rounded-xl overflow-hidden hover:border-[#C6A15B]/30 transition-colors duration-300 block"
            >
              {/* Poster */}
              <div className="relative w-full overflow-hidden" style={{ height: "clamp(200px, 50vh, 400px)" }}>
                <Image
                  src={film.poster}
                  alt={film.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="33vw"
                />
                {/* Soft fade into card bg — no hard line */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/20 to-transparent" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="section-label bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-[9px]">{film.year}</span>
                </div>
              </div>

              {/* Info — sits on top of gradient, no visible border */}
              <div className="px-3 pb-3 pt-1 sm:px-4 sm:pb-4">
                <h3 className="font-heading text-[#F5F5F0] text-base sm:text-xl lg:text-2xl font-medium leading-tight mb-1 line-clamp-1">
                  {film.title}
                </h3>
                <p className="text-[#A3A3A3] text-xs mb-1">Role: {film.role}</p>
                {"rating" in film && (
                  <p className="text-[#C6A15B] text-xs font-semibold mb-2">★ {(film as { rating: string }).rating} IMDb</p>
                )}
                <div className="flex items-center gap-1 text-[#C6A15B] text-xs font-semibold">
                  View on IMDb <ArrowUpRight size={10} />
                </div>
              </div>
            </motion.a>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
