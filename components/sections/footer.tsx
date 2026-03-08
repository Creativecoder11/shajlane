"use client"

import Container from "@/components/sections/container"
import { Facebook, Instagram, Linkedin, ArrowUp, Twitter } from "lucide-react"
import Image from "next/image"

const links = [
  "Home",
  "About",
  "Why Us?",
  "We Serve",
  "Testimonials",
  "Network",
]

export default function Footer() {
  return (
    <footer className="relative bg-[#07030F] text-white overflow-hidden">
      <div className="py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT */}
          <div className="space-y-6 max-w-md">
            <div className="flex items-center gap-3">
              <Image src="/assets/icon/shajlane-white-logo.svg" width={120} height={60} alt="Shajlane Logo" />
            </div>

            <p className="text-white/70 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Dolor semper
              egestas venenatis euismod donec dolor. Aenean
              imperdiet non.
            </p>

            {/* newsletter line */}
            <div className="pt-10">
              <div className="flex items-center justify-between border-b border-dashed border-white/30 pb-2 text-sm text-white/70">
                <span>Subscribe To Our Newsletter</span>
                <ArrowUp className="h-4 w-4 rotate-45" />
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:pl-20">
            <ul className="space-y-4 text-white/80">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="space-y-6">
            <p className="text-white/80 font-medium">Social Media</p>

            <div className="flex gap-4">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                <Facebook size={18} />
              </div>

              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                <Instagram size={18} />
              </div>

              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                <Twitter size={18} />
              </div>

              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                <Linkedin size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-white/20 mt-20 pt-6 flex flex-col md:flex-row justify-between text-sm text-white/60">
          <p>© 2025 Shajlane. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>

      {/* Decorative shape */}
      <div className="absolute -right-20 -bottom-20  pointer-events-none">
        <Image src="/assets/icon/leaf-icon.svg" className="w-full" width={100} height={200} alt="Leaf Icon" />
      </div>
    </footer>
  )
}