"use client";
import { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { Instagram, Play, Heart, Eye } from "lucide-react";
import { reels } from "@/data/reels";
import FadeIn from "@/components/animations/FadeIn";

// Smooth spring config — cinematic, no bounce
const SPRING = { stiffness: 120, damping: 28, mass: 0.8 };

function ReelCard({
  reel,
  index,
}: {
  reel: (typeof reels)[number];
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleEnter = useCallback(() => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  }, []);

  const handleLeave = useCallback(() => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, []);

  return (
    <motion.a
      href={reel.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex-shrink-0 rounded-2xl overflow-hidden bg-[#181818] border border-[#292929] cursor-pointer group"
      style={{ width: "calc(25% - 10px)", minWidth: "220px", transitionDelay: `${index * 0.06}s` }}
      animate={{ y: isHovered ? -6 : 0, borderColor: isHovered ? "rgba(198,161,91,0.35)" : "rgba(41,41,41,1)" }}
      transition={SPRING}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
      onTouchEnd={handleLeave}
      aria-label={`Watch ${reel.title} on Instagram`}
    >
      {/* Card media */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "9/16", maxHeight: "72vh" }}
      >
        {/* Gentle scale on hover — GPU only */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.04 : 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {reel.videoUrl ? (
            <video
              ref={videoRef}
              src={reel.videoUrl}
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={reel.thumbnail}
              alt={reel.title}
              fill
              className="object-cover"
              sizes="25vw"
            />
          )}
        </motion.div>

        {/* Cinematic gradient — always present */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

        {/* Top badges — fade in on hover */}
        <motion.div
          className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between"
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        >
          <span className="section-label bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full text-[9px] sm:text-[10px]">
            {reel.category}
          </span>
          <span className="text-white/60 text-[9px] sm:text-[10px] font-medium bg-black/70 backdrop-blur-sm px-2 py-1 rounded-full">
            {reel.duration}
          </span>
        </motion.div>

        {/* Play button — soft reveal */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center"
            animate={{
              backgroundColor: isHovered ? "rgba(198,161,91,0.25)" : "rgba(255,255,255,0.12)",
              borderColor: isHovered ? "rgba(198,161,91,0.5)" : "rgba(255,255,255,0.2)",
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Play size={14} className="text-white fill-white ml-0.5" />
          </motion.div>
        </div>

        {/* Bottom info — slides up on hover */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-3"
          animate={{ y: isHovered ? 0 : 4, opacity: isHovered ? 1 : 0.85 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="font-heading text-white text-2xl sm:text-3xl font-medium leading-tight mb-2 line-clamp-2">
            {reel.title}
          </h3>
          <div className="flex items-center gap-2.5 text-white/60 text-[10px] sm:text-xs">
            <span className="flex items-center gap-1">
              <Eye size={9} className="text-[#C6A15B]" />{reel.views}
            </span>
            <span className="flex items-center gap-1">
              <Heart size={9} className="text-[#C6A15B]" />{reel.likes}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.a>
  );
}

export default function InstagramReels() {
  // Smooth momentum scroll using spring
  const x = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 20, mass: 0.6 });

  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Native smooth scroll for touch — better than Motion drag on mobile
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const walk = (e.pageX - trackRef.current.offsetLeft - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section id="reels" className="py-8 sm:py-12 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5 sm:mb-7">
          <div>
            <FadeIn>
              <p className="section-label mb-2 sm:mb-3">Most Popular</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-heading text-[#F5F5F0]"
                style={{ fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 500, lineHeight: 0.95 }}
              >
                Featured<br />
                <em className="text-[#C6A15B]">Content</em>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <a
              href="https://instagram.com/suthar_krunal_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#C6A15B] hover:text-[#D8B875] transition-colors duration-300 border border-[#292929] rounded-full px-4 py-2 hover:border-[#C6A15B]/40 self-start sm:self-auto min-h-[40px]"
            >
              <Instagram size={12} /> @suthar_krunal_
            </a>
          </FadeIn>
        </div>
      </div>

      {/* Shows 4 cards, 5th peeks to hint scroll */}
      <div
        ref={trackRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 overflow-x-auto scrollbar-hide cursor-grab select-none pb-2"
        style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex gap-3 sm:gap-4">
        {reels.map((reel, i) => (
          <ReelCard key={reel.id} reel={reel} index={i} />
        ))}
          <div className="flex-shrink-0 w-4 sm:w-8" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-3 sm:mt-4">
        <FadeIn delay={0.3}>
          <p className="text-[#A3A3A3] text-[10px] sm:text-xs tracking-wide">
            ← Swipe to explore →
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
