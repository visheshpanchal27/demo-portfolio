import { Instagram, Youtube, Twitter } from "lucide-react";

interface SocialIconProps {
  platform: "instagram" | "youtube" | "tiktok" | "twitter";
  href: string;
  size?: number;
  className?: string;
}

const icons = {
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Twitter,
  twitter: Twitter,
};

export default function SocialIcon({ platform, href, size = 20, className = "" }: SocialIconProps) {
  const Icon = icons[platform];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${platform} profile`}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-[#A1A1AA] hover:text-[#C9A84C] hover:border-[#C9A84C]/40 hover:bg-[#C9A84C]/5 transition-all duration-200 ${className}`}
    >
      <Icon size={size} />
    </a>
  );
}
