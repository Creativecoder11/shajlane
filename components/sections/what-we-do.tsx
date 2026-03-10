"use client";
import FadeIn from "@/components/sections/fade-in";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";

const items = [
  {
    id: "01",
    title: (
      <>
        Global Brand <br /> Sourcing
      </>
    ),
    description:
      "We partner directly with authorized brands and verified suppliers worldwide to ensure genuine, high-quality inventory.",
    img: "/assets/icon/globe.svg",
  },
  {
    id: "02",
    title: (
      <>
        Wholesale <br /> Distribution Solutions
      </>
    ),
    description:
      "Competitive B2B pricing structures designed to maximize your margins and improve profitability.",
    img: "/assets/icon/supply.svg",
  },
  {
    id: "03",
    title: (
      <>
        Reliable <br /> Supply Chain
      </>
    ),
    description:
      "Reliable stock management and fast fulfillment to keep your shelves and online stores consistently supplied.",
    img: "/assets/icon/chain.svg",
  },
  {
    id: "04",
    title: (
      <>
        Technology-Driven <br /> Ordering
      </>
    ),
    description:
      "Efficient order processing and reliable logistics ensure timely delivery for uninterrupted business operations.",
    img: "/assets/icon/technology.svg",
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

export default function WhatWeDo() {
  return (
    <section className="section-y bg-[#F9FAFB]">
      <div className="mx-auto max-w-360 px-4 md:px-0">
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
                WHAT WE DO
              </span>

              <motion.h1
                variants={fadeUp}
                className="text-[2.6rem] sm:text-[3.2rem] lg:text-6xl font-semibold leading-[76.8px] tracking-tight text-gray-900"
              >
                Complete Wholesale <br /> Beauty {" "}
                <span className="relative inline-block text-6xl font-semibold tracking-tight">
                  <span className="bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] bg-clip-text text-transparent">
                    Supply Solutions
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
        <div className="mt-16 grid gap-10 lg:grid-cols-4 ">
          {items.map(({ id, title, description, img }, idx) => (
            <FadeIn key={id} delay={0.05 * idx}>
              <div
                className={`relative ${idx === 1 || idx === 3 ? "lg:mt-14" : ""
                  }`}
              >
                <div className="absolute -inset-1 rounded-[26px] border border-dashed border-[#FFD7FF]"></div>
                {/* main card */}
                <div
                  className="relative bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] rounded-[23px]"
                  style={{ padding: "1px 4px 4px 1px" }}
                >
                  <div className="rounded-[22px] bg-[#FCF7FF] p-8 shadow-sm">

                    <div className="flex items-center justify-between mb-12">
                      {/* icon */}
                      <div className="flex p-4 items-center justify-center rounded-xl bg-linear-to-br from-[#7E4BA4] to-[#301C3E] shadow-lg">
                        <Image
                          src={img}
                          alt={id}
                          width={24}
                          height={24}
                          className="w-6 h-6 md:w-9 md:h-9 object-contain"
                        />
                      </div>
                      {/* number */}
                      <div className="w-12 h-12 flex items-center justify-center rounded-full border border-[#FFD7FF] bg-white text-lg landing-none font-semibold text-[#7E4BA4]">
                        {id}
                      </div>
                    </div>

                    {/* title */}
                    <h3 className="text-2xl font-sans font-semibold text-gray-900 leading-snug">
                      {title}
                    </h3>

                    {/* description */}
                    <p className="mt-3 text-muted-foreground leading-relaxed text-lg">
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
