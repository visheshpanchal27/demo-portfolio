"use client";
import { Users, Camera, TrendingUp, Globe, Briefcase } from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";
import { profile } from "@/data/profile";

const iconMap: Record<string, React.ElementType> = {
  Users, Camera, TrendingUp, Globe, Briefcase,
};

export default function Stats() {
  return (
    <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
      {profile.stats.map((stat) => {
        const Icon = iconMap[stat.icon];
        return (
          <motion.div
            key={stat.label}
            variants={staggerItem}
            className="bg-[#111111] border border-white/[0.06] rounded-2xl p-4 sm:p-6 flex flex-col gap-2 sm:gap-3 hover:border-[#C9A84C]/20 transition-colors duration-300 group"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
              {Icon && <Icon size={14} className="text-[#C9A84C]" />}
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-white">
              <AnimatedCounter
                value={stat.value}
                display={stat.display}
                suffix={stat.suffix}
              />
            </p>
            <p className="text-[#71717A] text-xs">{stat.label}</p>
          </motion.div>
        );
      })}
    </StaggerContainer>
  );
}
