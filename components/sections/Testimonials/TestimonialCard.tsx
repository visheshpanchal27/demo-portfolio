import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

type Testimonial = (typeof testimonials)[number];

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-8 md:p-10">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-white text-lg md:text-xl font-serif leading-relaxed mb-8">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
            sizes="44px"
          />
        </div>
        <div>
          <p className="text-white font-medium text-sm">{testimonial.name}</p>
          <p className="text-[#71717A] text-xs">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
}
