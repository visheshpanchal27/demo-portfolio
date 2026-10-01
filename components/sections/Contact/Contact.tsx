"use client";
import { useState } from "react";
import { Instagram, Mail, CheckCircle } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import { profile } from "@/data/profile";

const inquiryTypes = ["Brand Collaboration", "Acting / Film Project", "Event Appearance", "Creative Project", "Other"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (k: string) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false); setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-[#111111]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <FadeIn><p className="section-label mb-3 sm:mb-4">Get In Touch</p></FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-heading text-[#F5F5F0]"
              style={{ fontSize: "clamp(36px, 5vw, 76px)", fontWeight: 500, lineHeight: 0.95 }}>
              Have a Project<br /><em className="text-[#C6A15B]">In Mind?</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#A3A3A3] text-sm sm:text-base lg:text-lg mt-3 sm:mt-4 max-w-lg mx-auto leading-relaxed">
              For brand collaborations, acting opportunities, events and creative projects.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">

          {/* Quick contact */}
          <div className="lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            <FadeIn direction="left">
              <a href={profile.instagram} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-[#181818] border border-[#292929] rounded-2xl hover:border-[#C6A15B]/30 transition-colors group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C6A15B]/10 flex items-center justify-center group-hover:bg-[#C6A15B]/20 transition-colors flex-shrink-0">
                  <Instagram size={16} className="text-[#C6A15B]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#A3A3A3] text-xs">Instagram</p>
                  <p className="text-[#F5F5F0] text-sm font-semibold truncate">{profile.handle}</p>
                </div>
              </a>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <a href={`mailto:${profile.email}`}
                className="flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-[#181818] border border-[#292929] rounded-2xl hover:border-[#C6A15B]/30 transition-colors group">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#C6A15B]/10 flex items-center justify-center group-hover:bg-[#C6A15B]/20 transition-colors flex-shrink-0">
                  <Mail size={16} className="text-[#C6A15B]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[#A3A3A3] text-xs">Email</p>
                  <p className="text-[#F5F5F0] text-sm font-semibold truncate">{profile.email}</p>
                </div>
              </a>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="p-4 sm:p-5 bg-[#181818] border border-[#292929] rounded-2xl">
                <p className="section-label mb-2 sm:mb-3">Available For</p>
                <div className="flex flex-col gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                  {profile.availability.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#C6A15B] flex-shrink-0" />
                      <span className="text-[#A3A3A3] text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <FadeIn direction="right">
              {submitted ? (
                <div className="bg-[#181818] border border-[#292929] rounded-2xl p-8 sm:p-10 flex flex-col items-center gap-4 text-center">
                  <CheckCircle size={36} className="text-[#C6A15B]" />
                  <h3 className="font-heading text-[#F5F5F0] text-2xl sm:text-3xl font-medium">Message Received</h3>
                  <p className="text-[#A3A3A3] text-sm">I&apos;ll get back to you within 24–48 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-[#C6A15B] text-sm hover:text-[#D8B875] transition-colors mt-1 min-h-[44px]">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#181818] border border-[#292929] rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="relative">
                      <input value={form.name} onChange={(e) => set("name")(e.target.value)} required placeholder=" "
                        className="peer w-full bg-[#111111] border border-[#292929] rounded-xl px-4 pt-6 pb-2 text-[#F5F5F0] text-sm outline-none focus:border-[#C6A15B] transition-all placeholder-transparent min-h-[52px]" />
                      <label className="absolute left-4 top-4 text-[#A3A3A3] text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#C6A15B] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs pointer-events-none">Your Name</label>
                    </div>
                    <div className="relative">
                      <input type="email" value={form.email} onChange={(e) => set("email")(e.target.value)} required placeholder=" "
                        className="peer w-full bg-[#111111] border border-[#292929] rounded-xl px-4 pt-6 pb-2 text-[#F5F5F0] text-sm outline-none focus:border-[#C6A15B] transition-all placeholder-transparent min-h-[52px]" />
                      <label className="absolute left-4 top-4 text-[#A3A3A3] text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#C6A15B] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs pointer-events-none">Email Address</label>
                    </div>
                  </div>
                  <select value={form.type} onChange={(e) => set("type")(e.target.value)}
                    className="w-full bg-[#111111] border border-[#292929] rounded-xl px-4 py-4 text-sm text-[#F5F5F0] outline-none focus:border-[#C6A15B] appearance-none cursor-pointer min-h-[52px]">
                    <option value="" disabled>Type of Inquiry</option>
                    {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <div className="relative">
                    <textarea value={form.message} onChange={(e) => set("message")(e.target.value)} required placeholder=" " rows={4}
                      className="peer w-full bg-[#111111] border border-[#292929] rounded-xl px-4 pt-6 pb-2 text-[#F5F5F0] text-sm outline-none focus:border-[#C6A15B] transition-all resize-none placeholder-transparent" />
                    <label className="absolute left-4 top-4 text-[#A3A3A3] text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#C6A15B] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs pointer-events-none">Tell me about your project</label>
                  </div>
                  <button type="submit" disabled={loading}
                    className="w-full py-3.5 sm:py-4 rounded-full bg-[#C6A15B] hover:bg-[#D8B875] text-[#0A0A0A] font-semibold text-sm transition-colors duration-200 disabled:opacity-50 min-h-[52px]">
                    {loading ? "Sending..." : "Let's Work Together →"}
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
