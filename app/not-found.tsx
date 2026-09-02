import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#080808] flex flex-col items-center justify-center px-6 text-center">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="text-xs font-medium tracking-[0.25em] uppercase text-violet-400">404</span>
        <h1 className="font-serif text-5xl md:text-6xl text-white">Lost in the feed?</h1>
        <p className="text-[#A1A1AA] text-lg max-w-sm">
          This page doesn&apos;t exist, but great content does.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-white font-medium text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-shadow duration-300"
        >
          Back Home
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
