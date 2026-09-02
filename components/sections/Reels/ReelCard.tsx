"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Play, Heart, MessageCircle } from "lucide-react";
import { reels } from "@/data/reels";

type Reel = (typeof reels)[number];

interface ReelCardProps {
  reel: Reel;
  onClick: () => void;
}

export default function ReelCard({ reel, onClick }: ReelCardProps) {
  return (
    <motion.div
      className="relative w-[160px] sm:w-[200px] md:w-[220px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer group bg-[#111111] border border-white/[0.06]"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[9/16] w-full">
        <Image
          src={reel.thumbnail}
          alt={reel.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 160px, (max-width: 768px) 200px, 220px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
            <Play size={16} className="text-white fill-white ml-0.5" />
          </div>
        </div>

        {/* Duration */}
        <span className="absolute top-2 right-2 sm:top-3 sm:right-3 text-xs text-white bg-black/50 rounded px-1.5 py-0.5">
          {reel.duration}
        </span>
      </div>

      {/* Info */}
      <div className="p-3 sm:p-4">
        <p className="text-white text-xs sm:text-sm font-medium truncate">{reel.title}</p>
        <p className="text-[#71717A] text-xs mb-2 sm:mb-3 truncate">{reel.category}</p>
        <div className="flex items-center gap-2 sm:gap-3 text-[#A1A1AA] text-xs">
          <span className="flex items-center gap-1"><Play size={10} />{reel.views}</span>
          <span className="flex items-center gap-1"><Heart size={10} />{reel.likes}</span>
          <span className="flex items-center gap-1 hidden sm:flex"><MessageCircle size={10} />{reel.comments}</span>
        </div>
      </div>
    </motion.div>
  );
}
