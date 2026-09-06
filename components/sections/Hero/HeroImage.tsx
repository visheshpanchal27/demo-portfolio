"use client";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { profile } from "@/data/profile";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function HeroImage() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
      {/* Glow ring — ambient loop, linear is correct for constant motion */}
      {!reduce && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full"
            style={{
              background: "conic-gradient(from 0deg, #C9A84C, #3a2e10, #C9A84C)",
              filter: "blur(2px)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      {/* Photo — scale 1.05→1 + opacity, strong ease-out */}
      <motion.div
        className="relative z-10 w-[240px] h-[300px] sm:w-[280px] sm:h-[360px] md:w-[340px] md:h-[430px] lg:w-[380px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/10"
        initial={{ opacity: 0, scale: reduce ? 1 : 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT }}
      >
        <Image
          src={profile.heroImage}
          alt={`${profile.name} — ${profile.tagline}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Floating stat cards — float is ambient/decorative, disabled on reduced motion */}
      {profile.floatingStats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="absolute z-20 bg-[#111111]/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 hidden sm:block"
          style={{
            top: i === 0 ? "8%" : i === 1 ? "48%" : "78%",
            left: i === 1 ? "-8%" : "auto",
            right: i === 0 ? "-4%" : i === 2 ? "-6%" : "auto",
          }}
          initial={{ opacity: 0 }}
          animate={
            reduce
              ? { opacity: 1 }
              : { opacity: 1, y: [0, -8, 0] }
          }
          transition={
            reduce
              ? { duration: 0.3, delay: 1.2 + i * 0.15 }
              : {
                  opacity: { duration: 0.4, delay: 1.2 + i * 0.15, ease: EASE_OUT },
                  y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
                }
          }
        >
          <p className="text-[#C9A84C] font-semibold text-xs sm:text-sm">{stat.value}</p>
          <p className="text-[#71717A] text-xs">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
