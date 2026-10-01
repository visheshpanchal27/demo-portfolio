"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { profile } from "@/data/profile";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export default function HeroImage() {
  return (
    <div className="relative inline-flex justify-center">
      {/* Glow ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] rounded-full"
          style={{
            background: "conic-gradient(from 0deg, #E85D26, #C9A84C, #3a2e10, #E85D26)",
            filter: "blur(2px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Real photo */}
      <motion.div
        className="relative z-10 w-[240px] h-[300px] sm:w-[280px] sm:h-[360px] md:w-[340px] md:h-[430px] lg:w-[380px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/10"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: EASE_OUT }}
      >
        <Image
          src={profile.heroImage}
          alt={profile.name}
          fill
          className="object-cover object-top"
          priority
          sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/50 via-transparent to-transparent" />
      </motion.div>

      {/* Floating stat cards */}
      {profile.floatingStats.map((stat, i) => {
        const positions = [
          { top: "6%", right: "-14%", left: "auto" },
          { top: "44%", left: "-14%", right: "auto" },
        ];
        const pos = positions[i];
        return (
          <motion.div
            key={stat.label}
            className="absolute z-20 bg-[#111111]/90 backdrop-blur-md border border-white/10 rounded-xl px-3 py-2 sm:px-4 sm:py-3 hidden sm:block min-w-[110px]"
            style={pos}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.4, delay: 1.2 + i * 0.15, ease: EASE_OUT },
              y: { duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 },
            }}
          >
            <p className="text-[#C9A84C] font-semibold text-xs sm:text-sm tabular-nums">{stat.value}</p>
            <p className="text-[#71717A] text-xs whitespace-nowrap">{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
