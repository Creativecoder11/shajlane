"use client";

import { Facebook, Instagram, Linkedin, Twitter, ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Why Us?", href: "#why-us" },
  { label: "We Serve", href: "#we-serve" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Network", href: "#network" },
];

type Status = "idle" | "loading" | "success" | "error";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubscribe = async () => {
    const trimmed = email.trim();

    if (!trimmed) {
      setErrorMsg("Please enter your email.");
      setStatus("error");
      return;
    }
    if (!isValidEmail(trimmed)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    await new Promise((res) => setTimeout(res, 1200)); // simulate API

    setStatus("success");
    setEmail("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubscribe();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (status === "error") {
      setStatus("idle");
      setErrorMsg("");
    }
    if (status === "success") setStatus("idle");
  };

  const borderColor =
    status === "error"
      ? "border-red-400"
      : status === "success"
        ? "border-green-400"
        : focused
          ? "border-white/60"
          : "border-white/30";

  return (
    <footer className="relative bg-[#07030F] text-white overflow-hidden" id="footer">
      <div className="py-12 md:py-20 max-w-8xl mx-auto px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
          {/* LEFT */}
          <div className="space-y-6 max-w-md">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Image
                  src="/assets/icon/shajlane-white-logo.svg"
                  alt="Shajlane Logo"
                  width={120}
                  height={60}
                  className="w-32 h-12 md:w-40 md:h-16 object-contain"
                />
              </Link>
            </div>

            <p className="text-white/70 text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dolor semper egestas venenatis euismod donec
              dolor. Aenean imperdiet non.
            </p>

            {/* Newsletter */}
            <div className="mt-5 md:pt-10 space-y-2">
              <div
                className={`relative flex items-center border-b border-dashed pb-2 text-sm transition-colors duration-300 ${borderColor}`}
              >
                {status === "success" ? (
                  <span className="flex items-center gap-2 text-green-400 text-sm w-full">
                    <CheckCircle2 size={15} />
                    You&apos;re subscribed! Thank you.
                  </span>
                ) : (
                  <>
                    <input
                      type="email"
                      value={email}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      placeholder="Subscribe To Our Newsletter"
                      className="bg-transparent w-full pr-9 outline-none placeholder-white/50 text-white text-sm transition-colors duration-300"
                      disabled={status === "loading"}
                    />

                    <button
                      onClick={handleSubscribe}
                      disabled={status === "loading"}
                      aria-label="Subscribe"
                      className={`absolute right-0 top-1/2 -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full transition-all duration-300
                        ${status === "loading"
                          ? "bg-white/10 cursor-not-allowed"
                          : "bg-white/10 hover:bg-white hover:text-black cursor-pointer"
                        } text-white/70 hover:text-black`}
                    >
                      {status === "loading" ? (
                        <Loader2 size={13} className="animate-spin" />
                      ) : (
                        <ArrowUpRight size={13} />
                      )}
                    </button>
                  </>
                )}
              </div>

              {status === "error" && errorMsg && (
                <p className="text-red-400 text-xs pl-0.5 transition-opacity duration-300">{errorMsg}</p>
              )}
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="flex justify-between gap-16 md:gap-40 max-w-md">
            <ul className="space-y-4 text-white/80">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative inline-block transition-colors duration-300 hover:text-white
          after:absolute after:left-0 after:bottom-0 after:h-[2.5px] after:w-0
          after:bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)]
          after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* SOCIAL */}
            <div className="space-y-6">
              <p className="text-white/80 font-medium">Social Media</p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                  <div
                    key={i}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#7E4BA4] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-white/20 mt-20 pt-6 flex flex-col md:flex-row justify-center items-center md:justify-between gap-2 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Shajlane. All rights reserved.</p>
          <div className="flex gap-6">
            <a
              href="#"
              className="relative inline-block text-white/50 hover:text-white/90 transition-colors duration-300
                after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0
                after:bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)]
                after:transition-all after:duration-300 hover:after:w-full"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="relative inline-block text-white/50 hover:text-white/90 transition-colors duration-300
                after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0
                after:bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)]
                after:transition-all after:duration-300 hover:after:w-full"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Decorative shape */}
      <div className="absolute -right-10 -bottom-10 pointer-events-none">
        <Image
          src="/assets/icon/leaf-icon.svg"
          className="w-full h-80 md:h-full object-contain"
          width={100}
          height={200}
          alt="Leaf Icon"
        />
      </div>
    </footer>
  );
}