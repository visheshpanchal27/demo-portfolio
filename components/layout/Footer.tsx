"use client";
import { Instagram, ArrowUp, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#292929] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main row */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6 mb-6">

          {/* Name + tagline */}
          <div className="text-center sm:text-left">
            <p className="font-heading text-[#F5F5F0] text-xl font-medium leading-tight">{profile.name}</p>
            <p className="text-[#A3A3A3] text-xs mt-1">{profile.tagline}</p>
          </div>

          {/* Social links — always one line */}
          <div className="flex items-center gap-3">
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#292929] flex items-center justify-center text-[#A3A3A3] hover:text-[#C6A15B] hover:border-[#C6A15B]/40 transition-all duration-200 flex-shrink-0">
              <Instagram size={16} />
            </a>
            <a href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-[#F5F5F0] transition-colors duration-200 whitespace-nowrap">
              <Mail size={14} className="flex-shrink-0" />
              {profile.email}
            </a>
          </div>

          {/* Back to top */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
            className="w-9 h-9 rounded-full border border-[#292929] flex items-center justify-center text-[#A3A3A3] hover:text-[#F5F5F0] hover:border-[#C6A15B]/40 transition-all duration-200 flex-shrink-0">
            <ArrowUp size={15} />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-[#292929] pt-5 text-center">
          <p className="text-[#A3A3A3] text-xs">&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
