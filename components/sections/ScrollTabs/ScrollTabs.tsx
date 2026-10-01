"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "motion/react";
import ScrollTabsLeft from "./ScrollTabsLeft";
import ScrollTabsRight from "./ScrollTabsRight";

export const scrollTabsData = [
  {
    id: 1,
    label: "Entertainment",
    heading: "Character-driven content that",
    highlight: "people actually watch",
    description: "PASAKAKA brings a unique personality to every piece of content — comedy, skits, and storytelling that builds genuine connection with a real audience of 121K.",
    image: "https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=900&q=80",
    alt: "Entertainment content creation",
  },
  {
    id: 2,
    label: "Brand Collab",
    heading: "Brand stories that feel",
    highlight: "earned, not forced",
    description: "Products integrated naturally into entertaining content — like the Tata Punch campaign that reached 169.6K views. Your brand becomes part of the story, not an interruption.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80",
    alt: "Brand collaboration content",
  },
  {
    id: 3,
    label: "Artist",
    heading: "Creative work built for",
    highlight: "lasting impact",
    description: "Artist-driven reels and creative content that grows an audience and keeps them coming back for more.",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=80",
    alt: "Artist content",
  },
];

export default function ScrollTabs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const panel1 = useTransform(scrollYProgress, [0, 0.30, 0.34], [1, 1, 0]);
  const panel2 = useTransform(scrollYProgress, [0.34, 0.38, 0.62, 0.66], [0, 1, 1, 0]);
  const panel3 = useTransform(scrollYProgress, [0.66, 0.70, 1], [0, 1, 1]);
  const opacities = [panel1, panel2, panel3];

  return (
    <section id="what-i-create" className="relative bg-[#0A0A0A]">
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C6A15B]/4 blur-[140px]" />
          </div>
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C6A15B]/30 bg-[#C6A15B]/8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C6A15B]">What I Create</span>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1fr] gap-4 sm:gap-6 h-[75vh]">
              <ScrollTabsLeft data={scrollTabsData} opacities={opacities} scrollYProgress={scrollYProgress} />
              <ScrollTabsRight data={scrollTabsData} opacities={opacities} scrollYProgress={scrollYProgress} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
