"use client";
import Image from "next/image";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";
import { campaigns } from "@/data/campaigns";

export default function Campaigns() {
  return (
    <section id="campaigns" className="py-16 sm:py-20 md:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Campaign Case Study" title="Verified Work" subtitle="Publicly documented campaign performance." className="mb-12 sm:mb-16" />
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {campaigns.map((campaign) => (
            <motion.div key={campaign.id} variants={staggerItem}
              className="bg-[#181818] border border-[#292929] rounded-2xl overflow-hidden hover:border-[#C6A15B]/30 transition-colors duration-300 group">
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <Image src={campaign.image} alt={campaign.name} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/30 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#C6A15B]">{campaign.type}</span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 mb-2">
                  <BadgeCheck size={14} className="text-[#C6A15B]" />
                  <span className="text-xs text-[#A3A3A3]">Verified public data</span>
                </div>
                <h3 className="text-[#F5F5F0] font-bold text-lg sm:text-xl mb-1" style={{ fontFamily: "var(--font-space)" }}>{campaign.name}</h3>
                <p className="text-[#A3A3A3] text-sm mb-4">{campaign.brand}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {campaign.deliverables.map((d) => (
                    <span key={d} className="text-xs text-[#A3A3A3] bg-[#111111] border border-[#292929] rounded-full px-3 py-1">{d}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#292929]">
                  {campaign.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <p className="text-[#F5F5F0] font-semibold text-base sm:text-lg">{r.value}</p>
                      <p className="text-[#A3A3A3] text-xs">{r.label}</p>
                    </div>
                  ))}
                </div>
                {"sourceUrl" in campaign && (
                  <a href={(campaign as { sourceUrl: string }).sourceUrl} target="_blank" rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C6A15B] hover:text-[#D8B875] transition-colors">
                    View public listing <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
