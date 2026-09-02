import { Instagram, Mail, MessageCircle, Download } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";
import { profile } from "@/data/profile";

const quickContacts = [
  { icon: Instagram, label: "Instagram", value: profile.handle, href: profile.instagram },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Available for collaborations", href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          label="Contact"
          title="Have a Campaign in Mind?"
          subtitle="Let's discuss your next campaign, product launch, collaboration, or creative project."
          className="mb-12 sm:mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Quick contacts */}
          <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
            {quickContacts.map((c) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.label} direction="left">
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 sm:p-5 bg-[#111111] border border-white/[0.06] rounded-2xl hover:border-[#C9A84C]/20 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors flex-shrink-0">
                      <Icon size={18} className="text-[#C9A84C]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#71717A] text-xs">{c.label}</p>
                      <p className="text-white text-sm font-medium truncate">{c.value}</p>
                    </div>
                  </a>
                </FadeIn>
              );
            })}

            <FadeIn direction="left" delay={0.3}>
              <button
                className="flex items-center gap-3 px-5 py-4 bg-[#C9A84C]/5 border border-[#C9A84C]/20 rounded-2xl text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C]/10 transition-all duration-300 w-full min-h-[44px]"
                aria-label="Download media kit"
              >
                <Download size={16} />
                Download Media Kit
              </button>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
