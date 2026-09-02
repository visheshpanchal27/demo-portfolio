import { Instagram, Mail, MessageCircle, Download, Linkedin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "./ContactForm";
import { profile } from "@/data/profile";

function ImdbIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.177.062-.117.095-.405.095-.862V10.78c0-.43-.017-.712-.05-.843a.38.38 0 0 0-.125-.35zM3.72 10.46H3.1v3.08h.62c.19 0 .33-.028.41-.084.08-.056.138-.153.172-.29.033-.138.05-.375.05-.712v-1.04c0-.35-.014-.583-.043-.7a.44.44 0 0 0-.17-.29c-.08-.056-.22-.084-.42-.084z" />
      <path d="M0 7.5v9A1.5 1.5 0 0 0 1.5 18h21a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 22.5 6h-21A1.5 1.5 0 0 0 0 7.5zm5.46.57v7.86H3.96v-7.86zm3.57 0l.82 3.51.78-3.51h2.17v7.86h-1.4V10.4l-1.02 5.53H9.2L8.2 10.4v5.53H6.8V8.07zm6.54 1.35c-.22-.52-.63-.78-1.22-.78h-.5V8.07h.5c.6 0 1.04.1 1.33.3.29.2.5.5.62.9.12.4.18.97.18 1.72v1.5c0 .78-.05 1.36-.14 1.74-.1.38-.27.66-.52.84-.25.18-.62.27-1.1.27h-.87V8.07h.87c.5 0 .87.1 1.1.3z" />
    </svg>
  );
}

const quickContacts = [
  { icon: Instagram, label: "Instagram", value: profile.handle, href: profile.instagram },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Available for collaborations", href: "#" },
  { icon: Linkedin, label: "LinkedIn", value: "Alex Rivera", href: profile.linkedin },
  { icon: null, label: "IMDb", value: "View IMDb Profile", href: profile.imdb },
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
              return (
                <FadeIn key={c.label} direction="left">
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 sm:p-5 bg-[#111111] border border-white/[0.06] rounded-2xl hover:border-[#C9A84C]/20 transition-colors duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors flex-shrink-0">
                      {c.icon ? <c.icon size={18} className="text-[#C9A84C]" /> : <ImdbIcon />}
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
