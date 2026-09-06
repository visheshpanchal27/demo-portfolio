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
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      // 300ms ease-out for card entrance per standards
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${heightClass}`}
      onClick={onClick}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        // Image zoom gated via CSS — hover:pointer:fine only
        className="object-cover transition-transform duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Always visible gradient on mobile, hover-only on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 [@media(hover:hover)_and_(pointer:fine)]:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 transition-opacity duration-300" />

      {/* Caption — always visible on mobile, slides up on desktop hover */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 translate-y-0 [@media(hover:hover)_and_(pointer:fine)]:translate-y-2 [@media(hover:hover)_and_(pointer:fine)]:opacity-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-y-0 [@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100 transition-all duration-300">
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
