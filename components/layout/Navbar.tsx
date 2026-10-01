"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Home", short: "Home", href: "#hero" },
  { label: "Reels", short: "Reels", href: "#reels" },
  { label: "About", short: "About", href: "#about" },
  { label: "On Screen", short: "On Screen", href: "#on-screen" },
  { label: "Collaborations", short: "Collabs", href: "#collaborations" },
  { label: "Gallery", short: "Gallery", href: "#gallery" },
  { label: "Contact", short: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  return (
    <>
      {/* Scroll progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C6A15B] to-[#D8B875] z-[60] origin-left"
        style={{ scaleX: scrollYProgress }} />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#292929] py-3" : "bg-transparent py-5"}`}
        initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => handleNav("#hero")} aria-label="Go to top"
            className="font-heading text-[#F5F5F0] text-xl font-medium tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded min-h-[44px] flex items-center">
            {profile.name}
          </button>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button onClick={() => handleNav(link.href)}
                  className="text-[11px] font-semibold tracking-[0.08em] text-[#A3A3A3] hover:text-[#F5F5F0] transition-colors duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded py-1 uppercase whitespace-nowrap">
                  {link.short}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C6A15B] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button onClick={() => handleNav("#contact")}
              className="px-5 py-2.5 rounded-full bg-[#C6A15B] hover:bg-[#D8B875] text-[#0A0A0A] font-semibold text-xs transition-colors duration-200 min-h-[44px]">
              Work With Me
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="lg:hidden text-[#F5F5F0] p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}>
            <ul className="flex flex-col items-center gap-5 w-full">
              {navLinks.map((link, i) => (
                <motion.li key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }} className="w-full text-center">
                  <button onClick={() => handleNav(link.href)}
                    className="font-heading text-[#F5F5F0] hover:text-[#C6A15B] transition-colors font-medium w-full min-h-[44px]"
                    style={{ fontSize: "clamp(28px, 5vw, 40px)" }}>
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}>
                <button onClick={() => handleNav("#contact")}
                  className="px-8 py-3 rounded-full bg-[#C6A15B] hover:bg-[#D8B875] text-[#0A0A0A] font-semibold text-sm transition-colors duration-200 mt-4">
                  Work With Me
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
