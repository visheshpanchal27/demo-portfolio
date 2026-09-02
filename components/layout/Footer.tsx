"use client";
import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import SocialIcon from "@/components/ui/SocialIcon";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#gallery" },
  { label: "Reels", href: "#reels" },
  { label: "Collabs", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] pt-12 sm:pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-serif text-2xl text-white">{profile.monogram}</span>
            <p className="text-[#71717A] text-sm leading-relaxed max-w-xs">{profile.tagline}</p>
            <p className="text-[#71717A] text-xs">{profile.location}</p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717A]">Navigate</span>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 min-h-[36px] flex items-center"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-[0.15em] uppercase text-[#71717A]">Follow</span>
            <div className="flex gap-3 flex-wrap">
              <SocialIcon platform="instagram" href={profile.instagram} />
              <SocialIcon platform="youtube" href={profile.youtube} />
              <SocialIcon platform="twitter" href={profile.twitter} />
              <SocialIcon platform="linkedin" href={profile.linkedin} />
              <SocialIcon platform="imdb" href={profile.imdb} />
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 mt-1 break-all"
            >
              {profile.email}
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8 border-t border-white/[0.06]">
          <p className="text-[#71717A] text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-[#71717A] text-xs text-center">Available for selected collaborations.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/30 transition-all duration-200 min-h-[44px] min-w-[44px]"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
