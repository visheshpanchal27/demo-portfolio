import { Instagram, Youtube, Twitter, Linkedin } from "lucide-react";

interface SocialIconProps {
  platform: "instagram" | "youtube" | "tiktok" | "twitter" | "linkedin" | "imdb";
  href: string;
  size?: number;
  className?: string;
}

function ImdbIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.177.062-.117.095-.405.095-.862V10.78c0-.43-.017-.712-.05-.843a.38.38 0 0 0-.125-.35zM3.72 10.46H3.1v3.08h.62c.19 0 .33-.028.41-.084.08-.056.138-.153.172-.29.033-.138.05-.375.05-.712v-1.04c0-.35-.014-.583-.043-.7a.44.44 0 0 0-.17-.29c-.08-.056-.22-.084-.42-.084z" />
      <path d="M0 7.5v9A1.5 1.5 0 0 0 1.5 18h21a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 22.5 6h-21A1.5 1.5 0 0 0 0 7.5zm5.46.57v7.86H3.96v-7.86zm3.57 0l.82 3.51.78-3.51h2.17v7.86h-1.4V10.4l-1.02 5.53H9.2L8.2 10.4v5.53H6.8V8.07zm6.54 1.35c-.22-.52-.63-.78-1.22-.78h-.5V8.07h.5c.6 0 1.04.1 1.33.3.29.2.5.5.62.9.12.4.18.97.18 1.72v1.5c0 .78-.05 1.36-.14 1.74-.1.38-.27.66-.52.84-.25.18-.62.27-1.1.27h-.87V8.07h.87c.5 0 .87.1 1.1.3.23.2.4.5.5.9.1.4.15.97.15 1.72v1.5c0 .78-.05 1.36-.15 1.74-.1.38-.27.66-.5.84-.23.18-.6.27-1.1.27h-.87v-7.86h.87c.5 0 .87.1 1.1.3zm3.57 5.1c0 .4-.04.7-.12.9-.08.2-.22.36-.42.47-.2.11-.46.17-.78.17-.3 0-.55-.05-.75-.16-.2-.1-.35-.26-.44-.47-.09-.2-.14-.5-.14-.9v-4.5c0-.38.05-.67.14-.87.1-.2.25-.35.45-.45.2-.1.45-.15.74-.15.32 0 .58.06.78.17.2.11.34.27.42.47.08.2.12.5.12.88v4.44z" />
    </svg>
  );
}

const icons = {
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Twitter,
  twitter: Twitter,
  linkedin: Linkedin,
  imdb: null,
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
      {platform === "imdb" ? (
        <ImdbIcon size={size} />
      ) : Icon ? (
        <Icon size={size} />
      ) : null}
    </a>
  );
}
