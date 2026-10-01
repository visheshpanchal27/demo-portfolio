"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { Instagram, Play, Heart, Eye, ArrowUpRight } from "lucide-react";
import { reels } from "@/data/reels";
import FadeIn from "@/components/animations/FadeIn";

function ReelCard({ reel }: { reel: (typeof reels)[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleMouseEnter = () => videoRef.current?.play().catch(() => {});
  const handleMouseLeave = () => {
    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
  };

  return (
    <motion.a
      href={reel.instagramUrl} target="_blank" rel="noopener noreferrer"
      className="relative flex-shrink-0 w-[160px] sm:w-[200px] md:w-[230px] lg:w-[250px] rounded-2xl overflow-hidden cursor-pointer group bg-[#181818] border border-[#292929] hover:border-[#C6A15B]/40 transition-colors duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`Watch ${reel.title} on Instagram`}
    >
      <div className="relative aspect-[9/16] w-full overflow-hidden">
        {reel.videoUrl ? (
          <video ref={videoRef} src={reel.videoUrl} muted loop playsInline
            className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <Image src={reel.thumbnail} alt={reel.title} fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, (max-width: 1024px) 230px, 250px" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

        {/* Top badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
          <span className="section-label bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-[10px]">{reel.category}</span>
          <span className="text-white/70 text-[10px] font-medium bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">{reel.duration}</span>
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:bg-[#C6A15B]/30 group-hover:border-[#C6A15B]/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}>
            <Play size={16} className="text-white fill-white ml-0.5" />
          </motion.div>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <h3 className="font-heading text-white text-lg sm:text-xl font-medium leading-tight mb-1.5">{reel.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 text-white/70 text-xs">
              <span className="flex items-center gap-1"><Eye size={10} className="text-[#C6A15B]" />{reel.views}</span>
              <span className="flex items-center gap-1"><Heart size={10} className="text-[#C6A15B]" />{reel.likes}</span>
            </div>
            <div className="w-6 h-6 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight size={11} className="text-[#C6A15B]" />
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function InstagramReels() {
  return (
    <section id="reels" className="py-14 sm:py-20 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4 mb-8 sm:mb-12">
          <div>
            <FadeIn><p className="section-label mb-3 sm:mb-4">Latest From Instagram</p></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-heading text-[#F5F5F0]"
                style={{ fontSize: "clamp(36px, 5vw, 76px)", fontWeight: 500, lineHeight: 0.95 }}>
                Featured<br /><em className="text-[#C6A15B]">Content</em>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <a href="https://instagram.com/suthar_krunal_" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C6A15B] hover:text-[#D8B875] transition-colors border border-[#292929] rounded-full px-4 sm:px-5 py-2 sm:py-2.5 hover:border-[#C6A15B]/40 self-start sm:self-auto min-h-[44px]">
              <Instagram size={13} /> @suthar_krunal_
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Drag scroll */}
      <motion.div
        className="flex gap-3 sm:gap-4 px-4 sm:px-6 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing pb-2"
        drag="x"
        dragConstraints={{ right: 0, left: -(reels.length * 270) }}
        dragElastic={0.08}
        whileTap={{ cursor: "grabbing" }}>
        {reels.map((reel) => <ReelCard key={reel.id} reel={reel} />)}
        <div className="flex-shrink-0 w-4 sm:w-6" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4 sm:mt-6">
        <FadeIn delay={0.3}>
          <p className="text-[#A3A3A3] text-xs">← Drag to explore →</p>
        </FadeIn>
      </div>
    </section>
  );
}
