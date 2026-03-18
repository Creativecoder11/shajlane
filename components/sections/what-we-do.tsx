"use client";
import FadeIn from "@/components/sections/fade-in";
import { cubicBezier, motion } from "framer-motion";
import Image from "next/image";
import SectionHeader, { GradientText, GradientUnderline } from "../ui/SectionHeader";

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

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

export default function WhatWeDo() {
  return (
    <section className="section-y bg-[#F9FAFB]">
      <div className="mx-auto md:max-w-360 px-4 md:px-0">

        {/* Header */}
        <div className="mx-auto text-center">
          <FadeIn className="space-y-3">
            <div className="flex flex-col items-center justify-center gap-2">
              <SectionHeader
                align="center"
                label="WHAT WE DO"
                heading={
                  <>
                    Complete Wholesale <br />
                    Beauty{" "}
                    <span className="relative inline-block">
                      <GradientText>Supply Solutions</GradientText>
                      <GradientUnderline bottom="-12px" mdBottom="-24px" />
                    </span>
                  </>
                }
              />
            </div>
          </FadeIn>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 d:mt-16 grid gap-6 md:gap-10 lg:grid-cols-4"
        >
          {items.map(({ id, title, description, img }, idx) => (
            <motion.div
              key={id}
              variants={card}
              initial="rest"
              animate="rest"
              whileHover="hover"
              transition={{ duration: 0.35 }}
              className={`relative ${idx === 1 || idx === 3 ? "lg:mt-14" : ""}`}
            >
              <div className="absolute -inset-1 rounded-[26px] border border-dashed border-[#FFD7FF]"></div>

              {/* main card */}
              <div
                className="relative bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] rounded-[23px]"
                style={{ padding: "1px 4px 4px 1px" }}
              >
                <div className="rounded-[22px] bg-[#FCF7FF] p-5 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl">

                  <div className="flex items-center justify-between mb-8 md:mb-12">

                    {/* icon */}
                    <motion.div
                      variants={{
                        rest: { rotate: 0, scale: 1 },
                        hover: { rotate: 15, scale: 1.08 },
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 18 }}
                      className="flex p-3 md:p-4 items-center justify-center rounded-md md:rounded-xl bg-linear-to-br from-[#7E4BA4] to-[#301C3E] shadow-lg"
                    >
                      <Image
                        src={img}
                        alt={id}
                        width={24}
                        height={24}
                        className="w-7 h-7 md:w-9 md:h-9 object-contain"
                      />
                    </motion.div>

                    {/* number */}
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full border border-[#FFD7FF] bg-white text-base md:text-lg font-semibold text-[#7E4BA4]">
                      {id}
                    </div>
                  </div>

                  {/* title */}
                  <h3 className="text-xl md:text-2xl font-sans font-semibold text-gray-900 leading-snug">
                    {title}
                  </h3>

                  {/* description */}
                  <p className="mt-3 text-muted-foreground leading-relaxed text-base md:text-lg">
                    {description}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}