import { ArrowUpRight, BadgeCheck } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";
import { campaigns } from "@/data/campaigns";

export default function Campaigns() {
  return (
    <section id="campaigns" className="py-16 sm:py-20 md:py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Campaign Case Study" title="Verified Work" subtitle="Publicly documented campaign performance. More work samples are available through Instagram or on request." className="mb-12 sm:mb-16" />
        <StaggerContainer className="grid grid-cols-1 max-w-3xl mx-auto">
          {campaigns.map((campaign) => (
            <motion.article key={campaign.id} variants={staggerItem} className="relative overflow-hidden bg-[#111111] border border-white/[0.08] rounded-2xl p-6 sm:p-8">
              <div className="absolute inset-0 stage-texture opacity-30 pointer-events-none" />
              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/10 text-xs font-semibold tracking-wide uppercase text-[#C9A84C]"><BadgeCheck size={14} /> Public campaign data</div>
                  <span className="text-sm text-[#71717A]">Published {campaign.published}</span>
                </div>
                <p className="text-sm font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-3">{campaign.brand}</p>
                <h3 className="font-serif text-3xl sm:text-4xl text-white mb-3">{campaign.name}</h3>
                <p className="text-[#A1A1AA] text-sm mb-8">{campaign.type}</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/[0.08]">
                  {campaign.results.map((result) => <div key={result.label}><p className="text-white text-xl font-semibold">{result.value}</p><p className="text-[#71717A] text-xs mt-1">{result.label}</p></div>)}
                </div>
                <a href={campaign.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C] hover:text-[#e8d5a3] transition-colors">View public campaign listing <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
