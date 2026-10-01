"use client";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";
import { collaborations } from "@/data/collaborations";

export default function Collaborations() {
  return (
    <section id="collaborations" className="py-14 sm:py-20 md:py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
          <div>
            <FadeIn><p className="section-label mb-3 sm:mb-4">Brand Work</p></FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-heading text-[#F5F5F0]"
                style={{ fontSize: "clamp(36px, 5vw, 76px)", fontWeight: 500, lineHeight: 0.95 }}>
                Let&apos;s Create<br /><em className="text-[#C6A15B]">Together</em>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <button onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#C6A15B] hover:bg-[#D8B875] text-[#0A0A0A] font-semibold text-xs sm:text-sm transition-colors duration-200 self-start sm:self-auto min-h-[44px]">
              Work With Me →
            </button>
          </FadeIn>
        </div>

        {collaborations.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {collaborations.map((collab) => (
              <motion.div key={collab.id} variants={staggerItem}
                className="group bg-[#181818] border border-[#292929] rounded-2xl overflow-hidden hover:border-[#C6A15B]/30 transition-colors duration-300">
                <div className="relative h-44 sm:h-52 lg:h-60 overflow-hidden">
                  <Image src={collab.image} alt={collab.campaign} fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-black/20 to-transparent" />
                  <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-5">
                    <span className="section-label">{collab.type}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    {collab.verified && <BadgeCheck size={13} className="text-[#C6A15B]" />}
                    <span className="text-[#A3A3A3] text-xs">{collab.verified ? "Verified campaign" : "Campaign"} · {collab.year}</span>
                  </div>
                  <h3 className="font-heading text-[#F5F5F0] text-xl sm:text-2xl lg:text-3xl font-medium leading-tight mb-1">{collab.campaign}</h3>
                  <p className="text-[#C6A15B] text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2">{collab.brand}</p>
                  <p className="text-[#A3A3A3] text-xs sm:text-sm">{collab.result}</p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        ) : (
          <div className="text-center py-16 sm:py-20">
            <p className="text-[#A3A3A3] text-sm sm:text-base">Brand collaboration details coming soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
