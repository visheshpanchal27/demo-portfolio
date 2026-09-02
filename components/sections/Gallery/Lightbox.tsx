"use client";
import { ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import { galleryItems } from "@/data/gallery";
import { profile } from "@/data/profile";

type GalleryItem = (typeof galleryItems)[number];

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = index !== null ? items[index] : null;

  return (
    <Modal isOpen={index !== null} onClose={onClose} className="w-full max-w-lg sm:max-w-2xl md:max-w-3xl mx-4">
      {item && (
        <div className="bg-[#111111] rounded-2xl overflow-hidden border border-white/10">
          <div className="relative aspect-[4/3] w-full">
            <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 800px" />
          </div>
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 sm:justify-between">
            <div>
              <p className="text-white font-medium text-sm sm:text-base">{item.caption}</p>
              <p className="text-[#71717A] text-xs sm:text-sm">{item.category}</p>
            </div>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on Instagram"
              className="flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-white transition-colors border border-white/10 rounded-full px-4 py-2 hover:border-white/30 self-start sm:self-auto"
            >
              <Instagram size={14} />
              View Post
            </a>
          </div>
          {/* Prev / Next */}
          <div className="absolute top-1/3 -translate-y-1/2 left-2 sm:left-3">
            <button
              onClick={onPrev}
              disabled={index === 0}
              aria-label="Previous image"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 hover:bg-black/80 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
          </div>
          <div className="absolute top-1/3 -translate-y-1/2 right-2 sm:right-3">
            <button
              onClick={onNext}
              disabled={index === items.length - 1}
              aria-label="Next image"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white disabled:opacity-30 hover:bg-black/80 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
