"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#campaigns" },
  { label: "Collaborations", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#E85D26] to-[#C9A84C] z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#080808]/90 backdrop-blur-md border-b border-white/[0.06] py-3" : "bg-transparent py-4 sm:py-5"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#hero")}
            className="font-serif text-xl text-white tracking-wide focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded min-h-[44px] min-w-[44px] flex items-center"
            aria-label="Go to top"
          >
            {profile.monogram}
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-sm text-[#A1A1AA] hover:text-white transition-colors duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded py-1"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-[#E85D26] to-[#C9A84C] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button onClick={() => handleNav("#contact")} size="sm">
              Work With Me
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080808] flex flex-col items-center justify-center px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-6 sm:gap-8 w-full">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-serif text-2xl sm:text-3xl text-white hover:text-[#C9A84C] transition-colors min-h-[44px] w-full"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="w-full flex justify-center">
                <Button onClick={() => handleNav("#contact")} size="lg">Work With Me</Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
