"use client";
import { Users, TrendingUp, Briefcase, Play } from "lucide-react";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";

const proofItems = [
  { icon: Users, value: "121K+", label: "Followers" },
  { icon: TrendingUp, value: "169.6K", label: "Tata Punch Views" },
  { icon: Briefcase, value: "Active", label: "Brand Collabs" },
  { icon: Play, value: "Verified", label: "Instagram Account" },
];

export default function SocialProof() {
  return (
    <section className="py-12 sm:py-16 bg-[#111111] border-y border-[#292929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {proofItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.label} variants={staggerItem} className="flex flex-col items-center gap-2 text-center">
                <Icon size={20} className="text-[#C6A15B]" />
                <p className="text-[#F5F5F0] text-xl sm:text-2xl font-semibold">{item.value}</p>
                <p className="text-[#A3A3A3] text-xs sm:text-sm">{item.label}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
