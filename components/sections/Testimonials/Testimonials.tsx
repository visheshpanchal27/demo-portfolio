"use client";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  // Hide section if no testimonials yet
  if (testimonials.length === 0) return null;

  const go = (next: number) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="What Brands Say"
          className="mb-14"
        />

        <div className="relative overflow-hidden min-h-[220px]">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <TestimonialCard testimonial={testimonials[index]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => go(Math.max(0, index - 1))}
            disabled={index === 0}
            aria-label="Previous testimonial"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/30 disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-gradient-to-r from-[#C9A84C] to-[#8a6f2e]" : "w-1.5 bg-white/20"}`}
              />
            ))}
          </div>
          <button
            onClick={() => go(Math.min(testimonials.length - 1, index + 1))}
            disabled={index === testimonials.length - 1}
            aria-label="Next testimonial"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-white/30 disabled:opacity-30 transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
