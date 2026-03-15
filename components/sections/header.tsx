"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Why Us?", href: "#why-us" },
  { label: "We Serve", href: "#we-serve" },
  { label: "Testimonials", href: "#testimonials" },
];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 md:mx-0 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(109,40,217,0.08)]"
          : "bg-transparent mt-4 md:mt-14"
          }`}
      >
        <div className="w-full md:max-w-8xl mx-auto md:px-16">
          <nav className="flex items-center justify-between h-17">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <Image src={"/assets/icon/shajlane - logo.svg"} alt="Shajlane Logo" width={120} height={32} />
            </a>

            {/* Center Nav Links */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`relative px-4 py-2 text-lg rounded-lg transition-colors duration-200 group ${scrolled
                      ? "text-[#5B5B68] hover:text-violet-700"
                      : "text-gray-700 hover:text-violet-700"
                      }`}
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-4 right-4 h-[2.5px] rounded-full bg-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:block">
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="#explore"
                  className="
                  group
                  inline-flex items-center gap-2.5
                  px-7 py-3.5
                  rounded-[100px]
                  border border-[#7E4BA4]
                  bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)]
                  text-white font-semibold text-sm
                  shadow-lg shadow-violet-900/20
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:shadow-xl hover:shadow-violet-900/30
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  active:scale-[0.98]
                "
                >
                  Contact us
                </a>
              </motion.div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:text-violet-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-white/98 backdrop-blur-md border-t rounded-2xl border-gray-100 overflow-hidden"
            >
              <div className="max-w-[1280px] mx-auto px py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 rounded-xl text-gray-700 text-sm font-medium hover:bg-violet-50 hover:text-violet-700 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 m-4 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-700 to-purple-600 text-white text-sm font-semibold text-center"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}