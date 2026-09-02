"use client";
import { Users, TrendingUp, Briefcase, Play } from "lucide-react";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";

const proofItems = [
  { icon: Users, value: "121K+", label: "Community" },
  { icon: TrendingUp, value: "4.2%", label: "Engagement" },
  { icon: Briefcase, value: "50+", label: "Campaigns" },
  { icon: Play, value: "12M+", label: "Total Views" },
];

export default function SocialProof() {
  return (
    <section className="py-12 sm:py-16 bg-[#0D0D0D] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {proofItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="flex flex-col items-center gap-2 text-center"
              >
                <Icon size={20} className="text-[#C9A84C]" />
                <p className="text-white text-xl sm:text-2xl font-semibold">{item.value}</p>
                <p className="text-[#71717A] text-xs sm:text-sm">{item.label}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
