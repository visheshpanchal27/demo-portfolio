"use client";
import { Users, ImageIcon, Sparkles, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";

const cards = [
  { icon: Users, title: "121K Real Followers", description: "Built through comedy and characters — not paid growth. The audience shows up because they actually like the content." },
  { icon: Sparkles, title: "PASAKAKA Works", description: "The Tata Punch reel hit 169.6K views. When a brand fits the story, the audience responds." },
  { icon: ImageIcon, title: "No Forced Ads", description: "Products go inside the content, not on top of it. Viewers watch till the end because it doesn't feel like an ad." },
  { icon: Globe, title: "Instagram First", description: "121K followers on Instagram. That's where the audience lives and where the content performs." },
];

export default function WhyBrands() {
  return (
    <section id="why-brands" className="py-16 sm:py-20 md:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Why Brands Work With Me" title="Why it works." subtitle="Real numbers. Real content. Real audience." className="mb-12 sm:mb-16" />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.title} variants={staggerItem}
                className="bg-[#181818] border border-[#292929] rounded-2xl p-5 sm:p-6 flex flex-col gap-4 hover:-translate-y-1 hover:border-[#C6A15B]/30 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-xl bg-[#C6A15B]/10 border border-[#C6A15B]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#C6A15B]" />
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-[#C6A15B] to-[#D8B875]" />
                <h3 className="text-[#F5F5F0] font-semibold text-sm sm:text-base">{card.title}</h3>
                <p className="text-[#A3A3A3] text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
