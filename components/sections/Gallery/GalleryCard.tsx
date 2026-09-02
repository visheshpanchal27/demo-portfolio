"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Instagram } from "lucide-react";
import { galleryItems } from "@/data/gallery";

type GalleryItem = (typeof galleryItems)[number];

interface GalleryCardProps {
  item: GalleryItem;
  onClick: () => void;
}

export default function GalleryCard({ item, onClick }: GalleryCardProps) {
  const heightClass =
    item.size === "tall" ? "aspect-[3/4]" : item.size === "wide" ? "aspect-[4/3]" : "aspect-square";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.35 }}
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${heightClass}`}
      onClick={onClick}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Overlay — always visible on touch, hover on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 sm:opacity-0 transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 translate-y-0 sm:translate-y-4 sm:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1 mr-2">
            <p className="text-white text-xs sm:text-sm font-medium truncate">{item.caption}</p>
            <p className="text-[#A1A1AA] text-xs hidden sm:block">{item.category}</p>
          </div>
          <div className="flex items-center gap-1 text-white/80 flex-shrink-0">
            <Instagram size={12} />
            <span className="text-xs">{item.likes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
