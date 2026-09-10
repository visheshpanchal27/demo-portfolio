import { Instagram, Mail, Youtube } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";
import { profile } from "@/data/profile";

const quickContacts = [
  { icon: Instagram, label: "Instagram", value: profile.handle, href: profile.instagram },
  { icon: Youtube, label: "YouTube", value: "Watch on YouTube", href: profile.youtube },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Contact" title="Have a Campaign in Mind?" subtitle="Let's discuss your next campaign, product launch, collaboration, or creative project." className="mb-12 sm:mb-16" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
            {quickContacts.map((contact) => {
              const Icon = contact.icon;
              const external = contact.href.startsWith("http");
              return (
                <FadeIn key={contact.label} direction="left">
                  <a href={contact.href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className="flex items-center gap-4 p-4 sm:p-5 bg-[#111111] border border-white/[0.06] rounded-2xl hover:border-[#C9A84C]/20 transition-colors duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors flex-shrink-0"><Icon size={18} className="text-[#C9A84C]" /></div>
                    <div className="min-w-0"><p className="text-[#71717A] text-xs">{contact.label}</p><p className="text-white text-sm font-medium truncate">{contact.value}</p></div>
                  </a>
                </FadeIn>
              );
            })}
            <p className="text-xs leading-relaxed text-[#71717A] px-1">A media kit and additional verified work samples are available on request.</p>
          </div>
          <div className="lg:col-span-3"><FadeIn direction="right"><ContactForm /></FadeIn></div>
        </div>
      </div>
    </section>
  );
}
