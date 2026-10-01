"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";

const campaignTypes = ["Sponsored Content", "Reels", "UGC", "Product Photography", "Event", "Other"];
const budgets = ["Under $500", "$500–$1,000", "$1,000–$5,000", "$5,000–$10,000", "$10,000+", "Let's Discuss"];

interface FormData { name: string; company: string; email: string; campaignType: string; budget: string; message: string; }
const initial: FormData = { name: "", company: "", email: "", campaignType: "", budget: "", message: "" };

function FloatingInput({ id, label, type = "text", value, onChange, required }: {
  id: keyof FormData; label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div className="relative">
      <input id={id} type={type} value={value} required={required} onChange={(e) => onChange(e.target.value)} placeholder=" "
        className="peer w-full bg-[#181818] border border-[#292929] rounded-xl px-4 pt-6 pb-2 text-[#F5F5F0] text-sm outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]/20 transition-all duration-200 placeholder-transparent min-h-[52px]" />
      <label htmlFor={id} className="absolute left-4 top-4 text-[#A3A3A3] text-sm transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#C6A15B] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs pointer-events-none">
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const set = (key: keyof FormData) => (v: string) => setForm((f) => ({ ...f, [key]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false); setSubmitted(true);
  };

  if (submitted) return (
    <div className="bg-[#181818] border border-[#292929] rounded-2xl p-8 sm:p-10 flex flex-col items-center gap-4 text-center">
      <CheckCircle size={40} className="text-[#C6A15B]" />
      <h3 className="text-[#F5F5F0] font-bold text-xl" style={{ fontFamily: "var(--font-space)" }}>Message Received</h3>
      <p className="text-[#A3A3A3] text-sm">I&apos;ll get back to you within 24–48 hours.</p>
      <button onClick={() => setSubmitted(false)} className="text-[#C6A15B] text-sm hover:text-[#D8B875] transition-colors mt-2 min-h-[44px]">Send another message</button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-[#181818] border border-[#292929] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FloatingInput id="name" label="Your Name" value={form.name} onChange={set("name")} required />
        <FloatingInput id="company" label="Company / Brand" value={form.company} onChange={set("company")} />
      </div>
      <FloatingInput id="email" label="Email Address" type="email" value={form.email} onChange={set("email")} required />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select value={form.campaignType} onChange={(e) => set("campaignType")(e.target.value)}
          className="w-full bg-[#181818] border border-[#292929] rounded-xl px-4 py-4 text-sm text-[#F5F5F0] outline-none focus:border-[#C6A15B] appearance-none cursor-pointer min-h-[52px]" aria-label="Campaign type">
          <option value="" disabled>Campaign Type</option>
          {campaignTypes.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <select value={form.budget} onChange={(e) => set("budget")(e.target.value)}
          className="w-full bg-[#181818] border border-[#292929] rounded-xl px-4 py-4 text-sm text-[#F5F5F0] outline-none focus:border-[#C6A15B] appearance-none cursor-pointer min-h-[52px]" aria-label="Budget range">
          <option value="" disabled>Budget Range</option>
          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div className="relative">
        <textarea id="message" value={form.message} required onChange={(e) => set("message")(e.target.value)} placeholder=" " rows={4}
          className="peer w-full bg-[#181818] border border-[#292929] rounded-xl px-4 pt-6 pb-2 text-[#F5F5F0] text-sm outline-none focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B]/20 transition-all duration-200 resize-none placeholder-transparent" />
        <label htmlFor="message" className="absolute left-4 top-4 text-[#A3A3A3] text-sm transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#C6A15B] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs pointer-events-none">
          Tell me about your campaign
        </label>
      </div>
      <Button type="submit" size="lg" disabled={loading} className="w-full justify-center mt-2 min-h-[52px]">
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
