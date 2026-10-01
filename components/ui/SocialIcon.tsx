import { Instagram } from "lucide-react";

interface SocialIconProps {
  platform: "instagram" | "youtube" | "tiktok" | "twitter" | "linkedin" | "imdb";
  href: string;
  size?: number;
  className?: string;
}

export default function SocialIcon({ platform, href, size = 20, className = "" }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${platform} profile`}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#292929] text-[#A3A3A3] hover:text-[#C6A15B] hover:border-[#C6A15B]/40 hover:bg-[#C6A15B]/5 transition-all duration-200 ${className}`}
    >
      <Instagram size={size} />
    </a>
  );
}
