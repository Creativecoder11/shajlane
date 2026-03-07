"use client";
import { motion, cubicBezier } from "framer-motion";
import Container from "@/components/sections/container";
import FadeIn from "@/components/sections/fade-in";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = [
  "Facial Cleansers",
  "Serums & Moisturizers",
  "Sun Protection",
  "Body Care",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export default function WeServe() {
  return (
    <section
      id="we-serve"
      className="section-y max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto"
    >
      <div className="flex ">
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((name, idx) => (
            <FadeIn key={name} delay={0.04 * idx}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all",
                  "hover:-translate-y-0.5 hover:shadow-soft",
                )}
              >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,oklch(var(--soft-pink)),transparent_60%),radial-gradient(circle_at_bottom_right,oklch(var(--soft-beige)),transparent_55%)] opacity-70" />
                <p className="font-heading text-xl tracking-tight">{name}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Premium wholesale assortment curated for B2B demand.
                </p>
                <div className="mt-6 h-10 w-full rounded-xl bg-white/65 border border-border/60" />
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mx-auto text-left">
          <FadeIn className="space-y-3">
            <div className="flex flex-col items-left justify-center gap-2">
              <span className="flex items-center gap-2 text-xl font-medium text-[#7E4BA4] uppercase">
                <Image
                  src="/assets/icon/about-icon.svg"
                  alt="About Shajlane"
                  width={24}
                  height={24}
                />
                QUALITY & COMPLIANCE
              </span>

              <motion.h1
                variants={fadeUp}
                className="text-[2.6rem] sm:text-[3.2rem] lg:text-6xl font-semibold leading-[1.08] tracking-tight text-gray-900"
              >
                Excellence In <br />
                <span className="relative inline-block text-6xl font-semibold tracking-tight">
                  <span className="bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] bg-clip-text text-transparent">
                    Quality And Compliance
                  </span>

                  <motion.svg
                    viewBox="0 0 500 40"
                    className="absolute left-0 -bottom-7 w-full"
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shajlane is a dedicated B2B beauty distribution platform built to
              serve professionals. We deliver premium beauty brands at
              competitive wholesale pricing, helping salons, retailers, and
              resellers grow sustainably.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
