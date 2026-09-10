"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

const campaignTypes = ["Sponsored Content", "Reels", "UGC", "Product Photography", "Travel Campaign", "Event", "Other"];
const budgets = ["Under $500", "$500–$1,000", "$1,000–$5,000", "$5,000–$10,000", "$10,000+", "Let's Discuss"];

interface FormData {
  name: string; company: string; email: string;
  campaignType: string; budget: string; message: string;
}

const initial: FormData = { name: "", company: "", email: "", campaignType: "", budget: "", message: "" };

function FloatingInput({ id, label, type = "text", value, onChange, required }: {
  id: keyof FormData; label: string; type?: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div className="relative">
      <input
        id={id} type={type} value={value} required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full bg-[#0D0D0D] border border-white/[0.08] rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all duration-200 placeholder-transparent min-h-[52px]"
      />
      <label htmlFor={id} className="absolute left-4 top-4 text-[#71717A] text-sm transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#C9A84C] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs pointer-events-none">
        {label}
      </label>
    </div>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [submitted, setSubmitted] = useState(false);
  const set = (key: keyof FormData) => (value: string) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = `Collaboration enquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Company / Brand: ${form.company || "Not provided"}`,
      `Email: ${form.email}`,
      `Campaign type: ${form.campaignType || "Not provided"}`,
      `Budget: ${form.budget || "Let's discuss"}`,
      "",
      "Campaign details:",
      form.message,
    ].join("\n");

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#111111] border border-white/[0.06] rounded-2xl p-8 sm:p-10 flex flex-col items-center gap-4 text-center">
        <CheckCircle size={40} className="text-[#C9A84C]" />
        <h3 className="text-white font-serif text-xl">Your email is ready</h3>
        <p className="text-[#A1A1AA] text-sm">Your email app should open with the enquiry filled in. Send it to complete your request.</p>
        <button onClick={() => setSubmitted(false)} className="text-[#C9A84C] text-sm hover:text-[#e8d5a3] transition-colors mt-2 min-h-[44px]">
          Edit your message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#111111] border border-white/[0.06] rounded-2xl p-5 sm:p-6 md:p-8 flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <FloatingInput id="name" label="Your Name" value={form.name} onChange={set("name")} required />
        <FloatingInput id="company" label="Company / Brand" value={form.company} onChange={set("company")} />
      </div>
      <FloatingInput id="email" label="Email Address" type="email" value={form.email} onChange={set("email")} required />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select value={form.campaignType} onChange={(e) => set("campaignType")(e.target.value)} className="w-full bg-[#0D0D0D] border border-white/[0.08] rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-[#C9A84C]/50 appearance-none cursor-pointer min-h-[52px]" aria-label="Campaign type">
          <option value="" disabled>Campaign Type</option>
          {campaignTypes.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>
        <select value={form.budget} onChange={(e) => set("budget")(e.target.value)} className="w-full bg-[#0D0D0D] border border-white/[0.08] rounded-xl px-4 py-4 text-sm text-white outline-none focus:border-[#C9A84C]/50 appearance-none cursor-pointer min-h-[52px]" aria-label="Budget range">
          <option value="" disabled>Budget Range</option>
          {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
        </select>
      </div>
      <div className="relative">
        <textarea id="message" value={form.message} required onChange={(e) => set("message")(e.target.value)} placeholder=" " rows={4} className="peer w-full bg-[#0D0D0D] border border-white/[0.08] rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/20 transition-all duration-200 resize-none placeholder-transparent" />
        <label htmlFor="message" className="absolute left-4 top-4 text-[#71717A] text-sm transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#C9A84C] peer-not-placeholder-shown:top-2 peer-not-placeholder-shown:text-xs pointer-events-none">Tell me about your campaign</label>
      </div>
      <Button type="submit" size="lg" className="w-full justify-center mt-2 min-h-[52px]">Prepare Email</Button>
    </form>
  );
}
