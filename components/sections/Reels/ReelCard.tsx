"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Play, Heart, MessageCircle } from "lucide-react";
import { reels } from "@/data/reels";

type Reel = (typeof reels)[number];

interface ReelCardProps {
  reel: Reel;
  onClick: () => void;
}

export default function ReelCard({ reel, onClick }: ReelCardProps) {
  const reduce = useReducedMotion() ?? false;

  return (
    <motion.button
      type="button"
      aria-label={`Open ${reel.title} details`}
      className="relative w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group bg-[#111111] border border-white/[0.06] hover:border-[#C9A84C]/20 transition-colors duration-300"
      whileHover={reduce ? {} : { y: -4 }}
      transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] w-full overflow-hidden">
        <Image
          src={reel.thumbnail}
          alt={reel.title}
          fill
          className="object-cover transition-transform duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-105"
          sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 220px"
        />

        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hover overlay — darkens on hover */}
        <div className="absolute inset-0 bg-black/30 opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 transition-opacity duration-300" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center transition-all duration-200 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-110 [@media(hover:hover)_and_(pointer:fine)]:group-hover:bg-[#C9A84C]/30 [@media(hover:hover)_and_(pointer:fine)]:group-hover:border-[#C9A84C]/50">
            <Play size={16} className="text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Duration badge */}
        <span className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xs text-white bg-black/60 rounded-md px-1.5 py-0.5 font-medium">
          {reel.duration}
        </span>

        {/* Stats — slide up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-y-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 transition-all duration-300">
          <div className="flex items-center justify-between text-white/90 text-xs">
            <span className="flex items-center gap-1">
              <Play size={10} className="fill-white" />
              {reel.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={10} className="fill-white" />
              {reel.likes}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle size={10} />
              {reel.comments}
            </span>
          </div>
        </div>
      </div>

      {/* Info — always visible */}
      <div className="p-3 sm:p-4">
        <p className="text-white text-xs sm:text-sm font-medium truncate leading-snug">
          {reel.title}
        </p>
        <p className="text-[#71717A] text-xs mt-0.5 truncate">{reel.category}</p>

        {/* Stats always visible on mobile, hidden on desktop (shown in overlay) */}
        <div className="flex items-center gap-3 text-[#A1A1AA] text-xs mt-2 [@media(hover:hover)_and_(pointer:fine)]:hidden">
          <span className="flex items-center gap-1"><Play size={10} />{reel.views}</span>
          <span className="flex items-center gap-1"><Heart size={10} />{reel.likes}</span>
        </div>
      </div>
    </motion.button>
  );
}
