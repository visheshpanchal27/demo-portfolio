"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "@/components/animations/FadeIn";
import { galleryItems, galleryCategories } from "@/data/gallery";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <section id="gallery" className="py-14 sm:py-20 md:py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <FadeIn><p className="section-label mb-3 sm:mb-4">Photography</p></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-heading text-[#F5F5F0]"
                style={{ fontSize: "clamp(36px, 5vw, 76px)", fontWeight: 500, lineHeight: 0.95 }}>
                Gallery
              </h2>
            </FadeIn>
          </div>

          {/* Filter tabs — scrollable on mobile */}
          <FadeIn delay={0.2}>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 sm:pb-0 sm:flex-wrap">
              {galleryCategories.map((cat) => (
                <button key={cat} onClick={() => setActive(cat)}
                  className={`flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-semibold transition-all duration-200 border min-h-[36px] ${active === cat ? "bg-[#C6A15B] border-[#C6A15B] text-[#0A0A0A]" : "border-[#292929] bg-[#181818] text-[#A3A3A3] hover:border-[#C6A15B]/40"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Grid — 2 cols mobile, 3 tablet, 4 desktop */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div key={item.id} layout
                initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image src={item.image} alt={item.alt} fill
                  className="object-cover transition-transform duration-500 [@media(hover:hover)_and_(pointer:fine)]:group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="section-label text-[9px] sm:text-[11px]">{item.category}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
