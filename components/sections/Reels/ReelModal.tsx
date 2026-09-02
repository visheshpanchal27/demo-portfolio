import Image from "next/image";
import { Play, Heart, MessageCircle, Share2, Instagram } from "lucide-react";
import Modal from "@/components/ui/Modal";
import { reels } from "@/data/reels";
import { profile } from "@/data/profile";

type Reel = (typeof reels)[number];

interface ReelModalProps {
  reel: Reel | null;
  onClose: () => void;
}

export default function ReelModal({ reel, onClose }: ReelModalProps) {
  return (
    <Modal isOpen={!!reel} onClose={onClose} className="w-full max-w-xs sm:max-w-sm mx-4">
      {reel && (
        <div className="bg-[#111111] rounded-2xl overflow-hidden border border-white/10">
          <div className="relative w-full" style={{ aspectRatio: "9/16", maxHeight: "65vh" }}>
            <Image src={reel.thumbnail} alt={reel.title} fill className="object-cover" sizes="400px" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                <Play size={22} className="text-white fill-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
              <p className="text-white font-semibold text-base sm:text-lg">{reel.title}</p>
              <p className="text-[#A1A1AA] text-xs sm:text-sm mb-3 sm:mb-4">{reel.category}</p>
              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center mb-3 sm:mb-4">
                {[
                  { icon: Play, value: reel.views, label: "Views" },
                  { icon: Heart, value: reel.likes, label: "Likes" },
                  { icon: MessageCircle, value: reel.comments, label: "Comments" },
                  { icon: Share2, value: reel.shares, label: "Shares" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label}>
                    <Icon size={12} className="text-[#C9A84C] mx-auto mb-1" />
                    <p className="text-white text-xs sm:text-sm font-medium">{value}</p>
                    <p className="text-[#71717A] text-xs hidden sm:block">{label}</p>
                  </div>
                ))}
              </div>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#8a6f2e] text-black text-sm font-semibold"
              >
                <Instagram size={14} />
                Watch on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}
