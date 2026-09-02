"use client";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";
import { campaigns } from "@/data/campaigns";

export default function Campaigns() {
  return (
    <section id="campaigns" className="py-16 sm:py-20 md:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Campaign Case Studies"
          title="Results That Speak"
          subtitle="Real campaigns, real deliverables, real performance metrics."
          className="mb-12 sm:mb-16"
        />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {campaigns.map((campaign) => (
            <motion.div
              key={campaign.id}
              variants={staggerItem}
              className="bg-[#111111] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-[#C9A84C]/20 transition-colors duration-300 group"
            >
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <Image
                  src={campaign.image}
                  alt={campaign.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-5">
                  <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#C9A84C]">
                    {campaign.type}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-white font-serif text-lg sm:text-xl mb-1">{campaign.name}</h3>
                <p className="text-[#71717A] text-sm mb-4 sm:mb-5">{campaign.brand}</p>

                <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                  {campaign.deliverables.map((d) => (
                    <span key={d} className="text-xs text-[#A1A1AA] bg-white/5 border border-white/10 rounded-full px-3 py-1">
                      {d}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-white/[0.06]">
                  {campaign.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <p className="text-white font-semibold text-base sm:text-lg">{r.value}</p>
                      <p className="text-[#71717A] text-xs">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
