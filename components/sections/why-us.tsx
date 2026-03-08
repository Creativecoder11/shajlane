"use client";
import FadeIn from "@/components/sections/fade-in";
import { Globe, Boxes, Truck, Sparkles } from "lucide-react";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    id: "01",
    title: "Premium Quality",
    description:
      "We deliver professional-grade beauty products ensuring consistent performance, safety, and trusted results.",
    Icon: Globe,
  },
  {
    id: "02",
    title: "Wholesale Distribution Solutions",
    description:
      "Flexible ordering, competitive pricing, and consistent replenishment built for multi-location businesses.",
    Icon: Boxes,
  },
  {
    id: "03",
    title: "Reliable Supply Chain",
    description:
      "Efficient warehousing and last-mile delivery workflows to keep your shelves stocked and customers happy.",
    Icon: Truck,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export default function WhyUs() {
  return (
    <section className="section-y bg-[#F9FAFB]">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
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
                WHY CHOOSE US
              </span>

              <motion.h1
                variants={fadeUp}
                className="text-[2.6rem] sm:text-[3.2rem] lg:text-6xl font-semibold leading-[1.08] tracking-tight text-gray-900"
              >
                Your Trusted Partner in < br />
                <span className="relative inline-block text-6xl font-semibold tracking-tight">
                  <span className="bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] bg-clip-text text-transparent">
                    Beauty Supply
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

        {/* Cards */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3 ">
          {items.map(({ id, title, description, Icon }, idx) => (
            <FadeIn key={title} delay={0.05 * idx}>
              <div
                className={`relative ${
                  idx === 1 || idx === 3 ? "lg:mt-14" : ""
                }`}
              >
                <div className="absolute -inset-1 rounded-[26px] border border-dashed border-gray-300"></div>
                {/* main card */}
                <div className="relative h-full rounded-[22px] border-t-[1px] border-l-[1px] border-r-[4px] border-b-[4px] border-[#0D0C1D] bg-white hover:bg-[#FCF7FF] p-6 shadow-sm">

                  {/* icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl">
                    <Icon className="h-7 w-7 text-black" />
                  </div>

                  <div className="bg-[#FCF7FF] p-4 rounded-lg border border-[#FFD7FF]">
                    {/* title */}
                  <h3 className="text-2xl font-sans font-semibold text-gray-900 leading-snug mr-5">
                    {title}
                  </h3>

                  {/* description */}
                  <p className="mt-3 text-muted-foreground leading-tight text-lg">
                    {description}
                  </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
