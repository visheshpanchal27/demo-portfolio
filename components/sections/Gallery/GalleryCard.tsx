"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Instagram, Heart } from "lucide-react";
import { galleryItems } from "@/data/gallery";

type GalleryItem = (typeof galleryItems)[number];

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
      onClick={onClick}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />

      {/* Overlay — always on mobile, hover on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 sm:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 transition-opacity duration-300" />

      {/* Caption */}
      <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 translate-y-0 sm:translate-y-2 sm:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-y-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 transition-all duration-300">
        <div className="flex items-end justify-between gap-2">
          <div className="min-w-0">
            <p className="text-white text-xs sm:text-sm font-medium truncate leading-snug">
              {item.caption}
            </p>
            <p className="text-[#A1A1AA] text-xs mt-0.5">{item.category}</p>
          </div>
          <div className="flex items-center gap-1 text-white/80 flex-shrink-0">
            <Heart size={12} className="fill-white/80" />
            <span className="text-xs font-medium">{item.likes}</span>
          </div>
        </div>
      </div>

      {/* Instagram icon top right — visible on hover */}
      <div className="absolute top-3 right-3 opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <Instagram size={13} className="text-white" />
        </div>
      </div>
    </motion.div>
  );
}
