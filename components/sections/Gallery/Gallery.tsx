"use client";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CategoryFilter from "./CategoryFilter";
import GalleryCard from "./GalleryCard";
import Lightbox from "./Lightbox";
import { galleryItems, galleryCategories } from "@/data/gallery";
import { AnimatePresence, motion } from "motion/react";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Content"
          title="Visual Stories"
          subtitle="A curated selection of lifestyle, travel, fashion, and beauty content."
          className="mb-8 sm:mb-10"
        />
        <CategoryFilter categories={galleryCategories} active={active} onChange={setActive} />

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <GalleryCard
                key={item.id}
                item={item}
                onClick={() => setLightboxIndex(idx)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <Lightbox
        items={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : null))}
        onNext={() => setLightboxIndex((i) => (i !== null ? Math.min(filtered.length - 1, i + 1) : null))}
      />
    </section>
  );
}
