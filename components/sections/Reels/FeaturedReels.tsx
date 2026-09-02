"use client";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ReelCard from "./ReelCard";
import ReelModal from "./ReelModal";
import { reels } from "@/data/reels";

export default function FeaturedReels() {
  const [activeReel, setActiveReel] = useState<(typeof reels)[number] | null>(null);

  return (
    <section id="reels" className="py-16 sm:py-20 md:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Featured Reels"
          title="Content That Performs"
          subtitle="Short-form video content that drives real engagement and brand results."
          className="mb-10 sm:mb-12"
        />
      </div>

      {/* Horizontal scroll — touch-friendly */}
      <div className="overflow-x-auto scrollbar-hide px-4 sm:px-6 -webkit-overflow-scrolling-touch">
        <div className="flex gap-4 sm:gap-5 w-max pb-4">
          {reels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} onClick={() => setActiveReel(reel)} />
          ))}
        </div>
      </div>

      <ReelModal reel={activeReel} onClose={() => setActiveReel(null)} />
    </section>
  );
}
