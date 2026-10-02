"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import { motion, useMotionValue, animate, useMotionValueEvent } from "motion/react";
import Image from "next/image";
import { Play, Eye, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { reels } from "@/data/reels";
import FadeIn from "@/components/animations/FadeIn";

const CARD_WIDTH = 260;
const CARD_HEIGHT = 460;
const STEP = 120;
const DRAG_THRESHOLD = 50;

export default function InstagramReels() {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const total = reels.length;
  
  const trackPosition = useMotionValue(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartTrack = useRef(0);

  // Stop video when scrolling away
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useMotionValueEvent(trackPosition, "change", (latest) => {
    let idx = Math.round(latest) % total;
    if (idx < 0) idx += total;
    
    if (idx !== playingIndex) {
      setPlayingIndex(idx);
      setDisplayIndex(idx);
    }
  });

  const goNext = useCallback(() => {
    const current = trackPosition.get();
    animate(trackPosition, current + 1, {
      type: "spring",
      stiffness: 400,
      damping: 35,
    });
  }, [trackPosition]);

  const goPrev = useCallback(() => {
    const current = trackPosition.get();
    animate(trackPosition, current - 1, {
      type: "spring",
      stiffness: 400,
      damping: 35,
    });
  }, [trackPosition]);

  const goToIndex = useCallback((targetIndex: number) => {
    const current = trackPosition.get();
    const currentIdx = Math.round(current) % total;
    const normalizedCurrent = currentIdx < 0 ? currentIdx + total : currentIdx;
    
    let diff = targetIndex - normalizedCurrent;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    
    animate(trackPosition, current + diff, {
      type: "spring",
      stiffness: 400,
      damping: 35,
    });
  }, [trackPosition, total]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartTrack.current = trackPosition.get();
    trackPosition.stop();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [trackPosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - dragStartX.current;
    trackPosition.set(dragStartTrack.current - deltaX / STEP);
  }, [trackPosition]);

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);

    const current = trackPosition.get();
    const deltaX = e.clientX - dragStartX.current;
    
    let target = Math.round(current);
    if (Math.abs(deltaX) > DRAG_THRESHOLD) {
      target = deltaX < 0 ? Math.ceil(current) : Math.floor(current);
    }
    
    animate(trackPosition, target, {
      type: "spring",
      stiffness: 400,
      damping: 35,
    });
  }, [trackPosition]);

  const prevReel = reels[(displayIndex - 1 + total) % total];
  const nextReel = reels[(displayIndex + 1) % total];

  return (
    // Outer wrapper - gives height for sticky to work
    <div className="h-[200vh] relative" id="reels" ref={sectionRef}>
      {/* Sticky section - stays fixed for 100vh of scroll */}
      <div className="sticky top-0 h-screen bg-[#0A0A0A] flex flex-col justify-center pt-16 sm:pt-20 overflow-hidden">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-2 sm:mb-3 w-full">
          <div className="flex items-end justify-between">
            <div>
              <FadeIn>
                <p className="section-label mb-2">Latest From</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="font-heading text-[#F5F5F0] text-4xl sm:text-5xl md:text-6xl font-medium leading-none">
                  Instagram <em className="text-[#C6A15B]">Reels</em>
                </h2>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <a
                href="https://instagram.com/suthar_krunal_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-medium text-[#C6A15B] hover:text-[#D8B875] transition-colors"
              >
                View Instagram <span>↗</span>
              </a>
            </FadeIn>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            
            {/* Left text */}
            <div className="hidden lg:block w-20 text-right select-none">
              <motion.div
                key={displayIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-[8px] tracking-widest text-[#555] uppercase mb-0.5">Previous</p>
                <p className="text-[10px] text-[#777] leading-snug">{prevReel.title}</p>
              </motion.div>
            </div>

            {/* Prev button */}
            <button
              onClick={goPrev}
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-[#141414] border border-[#252525] text-[#555] hover:text-[#C6A15B] hover:border-[#C6A15B]/30 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Viewport */}
            <div 
              className="relative overflow-hidden"
              style={{ width: CARD_WIDTH + 80, height: CARD_HEIGHT }}
            >
              <div
                className="absolute inset-0 select-none cursor-grab active:cursor-grabbing"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{ touchAction: "pan-y" }}
              >
                {reels.map((reel, index) => (
                  <Card
                    key={reel.id}
                    reel={reel}
                    index={index}
                    trackPosition={trackPosition}
                    total={total}
                    step={STEP}
                    cardWidth={CARD_WIDTH}
                    cardHeight={CARD_HEIGHT}
                    isPlaying={index === playingIndex && isInView}
                  />
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={goNext}
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-[#141414] border border-[#252525] text-[#555] hover:text-[#C6A15B] hover:border-[#C6A15B]/30 transition-all"
            >
              <ChevronRight size={18} />
            </button>

            {/* Right text */}
            <div className="hidden lg:block w-20 text-left select-none">
              <motion.div
                key={displayIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-[8px] tracking-widest text-[#555] uppercase mb-0.5">Next</p>
                <p className="text-[10px] text-[#777] leading-snug">{nextReel.title}</p>
              </motion.div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1 mt-4">
            {reels.map((_, i) => (
              <span
                key={i}
                onClick={() => goToIndex(i)}
                className={`block w-[10px] h-[10px] rounded-full cursor-pointer transition-all duration-300 ${
                  i === displayIndex
                    ? "bg-[#C6A15B]"
                    : "bg-[#292929] hover:bg-[#444]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ 
  reel, 
  index,
  trackPosition,
  total,
  step,
  cardWidth,
  cardHeight,
  isPlaying,
}: { 
  reel: (typeof reels)[number];
  index: number;
  trackPosition: ReturnType<typeof useMotionValue<number>>;
  total: number;
  step: number;
  cardWidth: number;
  cardHeight: number;
  isPlaying: boolean;
}) {
  const x = useMotionValue(index * step);
  const scale = useMotionValue(index === 0 ? 1 : Math.max(0.7, 1 - index * 0.15));
  const opacity = useMotionValue(index === 0 ? 1 : Math.max(0.3, 1 - index * 0.4));
  const zIndex = useMotionValue(index === 0 ? 10 : Math.round(10 - index * 3));

  useMotionValueEvent(trackPosition, "change", (track) => {
    const trackMod = ((track % total) + total) % total;
    
    const directDist = index - trackMod;
    const wrapDistPos = directDist + total;
    const wrapDistNeg = directDist - total;
    
    let relPos = directDist;
    if (Math.abs(wrapDistPos) < Math.abs(directDist) && Math.abs(wrapDistPos) < Math.abs(wrapDistNeg)) {
      relPos = wrapDistPos;
    } else if (Math.abs(wrapDistNeg) < Math.abs(directDist)) {
      relPos = wrapDistNeg;
    }
    
    x.set(relPos * step);
    
    const dist = Math.abs(relPos);
    scale.set(Math.max(0.7, 1 - dist * 0.15));
    opacity.set(Math.max(0.3, 1 - dist * 0.4));
    zIndex.set(Math.round(10 - dist * 3));
  });

  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{ 
        width: cardWidth, 
        height: cardHeight,
        x,
        y: "-50%",
        marginLeft: -cardWidth / 2,
        scale,
        opacity,
        zIndex,
      }}
    >
      <div className={`relative w-full h-full rounded-2xl overflow-hidden bg-[#111] transition-shadow duration-200 ${
        isPlaying ? "ring-1 ring-[#C6A15B]/25 shadow-xl shadow-black/50" : ""
      }`}>
        <div className="absolute inset-0">
          {reel.youtubeId && isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${reel.youtubeId}?autoplay=1&mute=0&loop=1&playlist=${reel.youtubeId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
              className="w-full h-full scale-110"
              allow="autoplay; encrypted-media"
              style={{ border: 0, pointerEvents: "none" }}
            />
          ) : (
            <Image
              src={reel.youtubeId ? `https://img.youtube.com/vi/${reel.youtubeId}/maxresdefault.jpg` : reel.thumbnail}
              alt={reel.title}
              fill
              className="object-cover"
              draggable={false}
              sizes="350px"
            />
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

        <div className="absolute top-3 left-3 right-3 flex justify-between pointer-events-none">
          <span className="text-[#C6A15B] text-[8px] font-bold tracking-wider uppercase bg-black/50 backdrop-blur px-2 py-0.5 rounded">
            {reel.category}
          </span>
          <span className="text-white/60 text-[8px] bg-black/50 backdrop-blur px-2 py-0.5 rounded">
            {reel.duration}
          </span>
        </div>

        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-black/30 backdrop-blur border border-white/10 flex items-center justify-center">
              <Play size={18} className="text-white fill-white ml-0.5" />
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
          <h3 className="text-white text-base font-semibold mb-1.5 leading-tight">{reel.title}</h3>
          <div className="flex gap-3 text-white/50 text-[11px]">
            <span className="flex items-center gap-1">
              <Eye size={11} className="text-[#C6A15B]" />{reel.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={11} className="text-[#C6A15B]" />{reel.likes}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
