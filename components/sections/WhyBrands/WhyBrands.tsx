"use client";
import { Users, ImageIcon, Sparkles, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";

const cards = [
  {
    icon: Users,
    title: "Authentic Audience",
    description: "A deeply engaged community built on trust, consistency, and genuine connection — not inflated numbers.",
  },
  {
    icon: ImageIcon,
    title: "High-Quality Visuals",
    description: "Professional photography and short-form video that meets premium brand standards every time.",
  },
  {
    icon: Sparkles,
    title: "Brand Storytelling",
    description: "Products integrated naturally into creator content so they feel earned, not forced.",
  },
  {
    icon: Globe,
    title: "Multi-Platform Reach",
    description: "Instagram-first campaigns with cross-platform distribution potential across YouTube, TikTok, and more.",
  },
];

export default function WhyBrands() {
  return (
    <section id="why-brands" className="py-16 sm:py-20 md:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Why Brands Work With Me"
          title="The Creator Advantage"
          subtitle="What makes the difference between content that performs and content that converts."
          className="mb-12 sm:mb-16"
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={staggerItem}
                className="bg-[#111111] border border-white/[0.06] rounded-2xl p-5 sm:p-6 flex flex-col gap-4 hover:-translate-y-1 hover:border-[#C9A84C]/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#C9A84C]" />
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-[#C9A84C] to-[#8a6f2e]" />
                <h3 className="text-white font-medium text-sm sm:text-base">{card.title}</h3>
                <p className="text-[#71717A] text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
