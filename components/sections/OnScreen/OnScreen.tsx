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
    <section id="on-screen" className="py-14 sm:py-20 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
          <div>
            <FadeIn><p className="section-label mb-3 sm:mb-4">Filmography</p></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-heading text-[#F5F5F0]"
                style={{ fontSize: "clamp(36px, 5vw, 76px)", fontWeight: 500, lineHeight: 0.95 }}>
                On<br /><em className="text-[#C6A15B]">Screen</em>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <a href={profile.imdb} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C6A15B] hover:text-[#D8B875] transition-colors border border-[#292929] rounded-full px-4 sm:px-5 py-2 sm:py-2.5 hover:border-[#C6A15B]/40 self-start sm:self-auto min-h-[44px]">
              View Full IMDb Profile <ExternalLink size={13} />
            </a>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filmography.map((film) => (
            <motion.div key={film.id} variants={staggerItem}
              className="group bg-[#181818] border border-[#292929] rounded-2xl overflow-hidden hover:border-[#C6A15B]/30 transition-colors duration-300">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image src={film.poster} alt={film.title} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/20 to-transparent" />
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                  <span className="section-label bg-[#0A0A0A]/80 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">{film.year}</span>
                </div>
              </div>
              <div className="p-4 sm:p-5 lg:p-6">
                <p className="section-label mb-1.5 sm:mb-2">{film.type}</p>
                <h3 className="font-heading text-[#F5F5F0] text-xl sm:text-2xl lg:text-3xl font-medium leading-tight mb-1">{film.title}</h3>
                <p className="text-[#A3A3A3] text-xs sm:text-sm mb-3 sm:mb-4">Role: {film.role}</p>
                <div className="h-px bg-[#292929] mb-3 sm:mb-4" />
                <a href={film.imdbUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#C6A15B] hover:text-[#D8B875] transition-colors min-h-[44px]">
                  View on IMDb <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
