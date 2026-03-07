"use client"

import Container from "@/components/sections/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Instagram, Linkedin, Youtube } from "lucide-react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us?" },
  { href: "#we-serve", label: "We Serve" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Network" },
]

export default function Footer() {
  return (
    <footer id="contact" className="mt-8 bg-[#0b0712] text-white">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr,1fr]">
          <div className="space-y-3">
            <p className="font-heading text-2xl">Shajlane</p>
            <p className="text-sm text-white/70 max-w-md">
              Modern B2B beauty distribution with authenticity, verified suppliers,
              and efficient fulfillment for professionals.
            </p>
            <div className="flex items-center gap-3 pt-2 text-white/70">
              <a aria-label="Instagram" href="#" className="hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a aria-label="LinkedIn" href="#" className="hover:text-white transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a aria-label="YouTube" href="#" className="hover:text-white transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Social Media
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/70">
              Newsletter
            </p>
            <p className="text-sm text-white/70">
              Subscribe for updates on new brands and B2B distribution insights.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/15 text-white placeholder:text-white/40 rounded-full"
              />
              <Button className="rounded-full px-6">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-white/60">
          <p>© 2025 Shajlane. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms and Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

