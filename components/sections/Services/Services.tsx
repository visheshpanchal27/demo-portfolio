"use client";
import { Video, Briefcase, Users, Camera, Sparkles, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import StaggerContainer, { staggerItem } from "@/components/animations/StaggerContainer";
import { motion } from "motion/react";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Video, Briefcase, Users, Camera, Sparkles, Globe,
};

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Services"
          title="Let's Create Something Worth Remembering"
          subtitle="From sponsored reels to full campaign production — tailored to your brand goals."
          className="mb-12 sm:mb-16"
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="bg-[#111111] border border-white/[0.06] rounded-2xl p-5 sm:p-6 flex flex-col gap-4 hover:-translate-y-1 hover:border-[#C9A84C]/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                  {Icon && <Icon size={18} className="text-[#C9A84C]" />}
                </div>
                <h3 className="text-white font-medium text-sm sm:text-base">{service.title}</h3>
                <p className="text-[#71717A] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
