"use client"

import Container from "@/components/sections/container"
import FadeIn from "@/components/sections/fade-in"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cubicBezier, motion } from "framer-motion"
import Image from "next/image"

const faqs = [
  {
    q: "Do you supply only to large businesses?",
    a: "We serve growing retailers, salons, pharmacies, and online sellers. Our wholesale model supports both single-location and multi-location partners.",
  },
  {
    q: "How do you ensure authenticity?",
    a: "We work with verified suppliers and apply sourcing checks and documentation processes designed for B2B distribution.",
  },
  {
    q: "What categories do you carry?",
    a: "Our catalog includes cleansers, serums & moisturizers, sun protection, body care, and more—curated for professional demand.",
  },
  {
    q: "How does fulfillment work?",
    a: "We coordinate ordering and logistics through technology-driven operations to improve predictability and speed for partners.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export default function Faq() {
  return (
    <section className="section-y bg-secondary/20">
      <div>
        {/* Header */}
        <div className="mx-auto text-center">
          <FadeIn className="space-y-3">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="flex items-center gap-2 text-xl font-medium text-[#7E4BA4] uppercase">
                <Image
                  src="/assets/icon/about-icon.svg"
                  alt="About Shajlane"
                  width={24}
                  height={24}
                />
                FAQ
              </span>

              <motion.h1
                variants={fadeUp}
                className="text-[2.6rem] sm:text-[3.2rem] lg:text-6xl font-semibold leading-[1.08] tracking-tight text-gray-900"
              >
                Everything You Need To
                <span className="relative inline-block text-6xl font-semibold tracking-tight">
                  <span className="bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] bg-clip-text text-transparent">
                    Know
                  </span>

                  <motion.svg
                    viewBox="0 0 500 40"
                    className="absolute left-0 -bottom-4 w-full"
                    fill="none"
                  >
                    <motion.path
                      d="M10 25 Q250 5 490 25"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                        delay: 0.3,
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#7E4BA4" />
                        <stop offset="100%" stopColor="#301C3E" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </motion.h1>
            </div>
          </FadeIn>
        </div>

        {/* FAQ List */}
        <div className="mx-auto mt-10 max-w-[1440px] px-4 sm:px-6 lg:px-8 space-y-6">
          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-8">
            {faqs.map((item, idx) => (
              <div key={item.q} className="relative">

                {/* dashed outer border */}
                <div className="absolute -inset-1 rounded-[8px] border border-dashed border-[#EACCF6]" />

                <AccordionItem
                  value={`item-${idx}`}
                  className="relative rounded-[8px] border border-[#0D0C1D] border-r-[4px] border-b-[4px] bg-white px-6 py-2"
                >

                  <AccordionTrigger className="text-left text-lg font-semibold">
                    <span className="flex items-center gap-4">
                      <span className="text-gray-700">
                        {String(idx + 1).padStart(2, "0")}.
                      </span>
                      {item.q}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="pt-4 text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>

                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  )
}