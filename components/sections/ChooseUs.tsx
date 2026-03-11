"use client";

import FadeIn from "@/components/sections/fade-in";
import { cubicBezier, motion, useAnimation, easeOut } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionHeader, { GradientText, GradientUnderline } from "../ui/SectionHeader";

const items = [
  {
    id: "01",
    title: "Premium Quality",
    description:
      "We deliver professional-grade beauty products ensuring consistent performance, safety, and trusted results.",
    img: "/assets/icon/chooseUs1.svg",
  },
  {
    id: "02",
    title: "Wholesale Distribution Solutions",
    description:
      "Competitive B2B pricing designed to increase margins and support sustainable business growth.",
    img: "/assets/icon/chooseUs2.svg",
  },
  {
    id: "03",
    title: "Reliable Supply Chain",
    description:
      "Fast, dependable distribution keeping your inventory stocked and operations running smoothly.",
    img: "/assets/icon/chooseUs3.svg",
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

// Isolated card component so each card manages its own hover + animation state
function ChooseUsCard({
  id,
  title,
  description,
  img,
  idx,
}: {
  id: string;
  title: string;
  description: string;
  img: string;
  idx: number;
}) {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (hovered) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [hovered, controls]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.35, ease: easeOut },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.4, delay: custom * 0.1, ease: easeOut },
    }),
  };

  return (
    <FadeIn delay={0.05 * idx}>
      {/* overflow-visible is critical so the absolutely positioned SVG renders outside card bounds */}
      <div
        className="relative group"
        style={{ overflow: "visible" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Animated spark SVG — positioned OUTSIDE the card (top-right) */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="37"
          height="33"
          viewBox="0 0 37 33"
          fill="none"
          className="absolute pointer-events-none top-[15px] right-[15px] md:-top-[30px] md:-right-[30px]"
          style={{ zIndex: 10 }}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.path
            d="M16 31L34.5 24"
            stroke="#FF80B1"
            strokeWidth="4"
            strokeLinecap="round"
            variants={pathVariants}
            custom={0}
          />
          <motion.path
            d="M13.0558 20.4271L25.4354 4.9999"
            stroke="#FF80B1"
            strokeWidth="4"
            strokeLinecap="round"
            variants={pathVariants}
            custom={1}
          />
          <motion.path
            d="M2 21V2"
            stroke="#FF80B1"
            strokeWidth="4"
            strokeLinecap="round"
            variants={pathVariants}
            custom={2}
          />
        </motion.svg>

        {/* dashed outer border */}
        <div className="absolute -inset-1 rounded-[24px] border border-dashed border-[#FFD7FF]" />

        {/* gradient border wrapper */}
        <div
          className="relative rounded-[22px] bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)]"
          style={{ padding: "1px 4px 4px 1px" }}
        >
          {/* main card */}
          <div className="relative h-full rounded-[22px] bg-white hover:bg-[#FCF7FF] p-4 md:p-6 shadow-sm transition-colors duration-300">
            {/* icon */}
            <div className="mb-8 md:mb-16 flex h-16 w-16 items-center justify-center rounded-xl">
              <Image
                src={img}
                alt={title}
                width={68}
                height={68}
                className="w-12 h-12 md:w-17 md:h-17 object-contain"
              />
            </div>

            <div className="bg-[#FCF7FF] group-hover:bg-white p-3 md:p-5 rounded-lg border border-[#FFD7FF] transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-sans font-semibold text-[#0D0C1D] leading-snug">
                {title}
              </h3>
              <p className="mt-2 md:mt-3 text-[#5B5B68] text-base md:text-lg">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function ChooseUs() {
  return (
    <section className="section-y bg-[#F9FAFB]">
      <div className="mx-auto max-w-360 px-4 md:px-0">
        {/* Header */}
        <div className="mx-auto text-center">
          <FadeIn className="space-y-3">
            <SectionHeader
              align="center"
              label="WHY CHOOSE US"
              heading={
                <>
                  Your Trusted Partner in <br className="hidden md:block" />
                  <span className="relative inline-block">
                    <GradientText>Beauty Supply</GradientText>
                    <GradientUnderline bottom="-12px" mdBottom="-20px" />
                  </span>
                </>
              }
            />
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="mt-8 md:mt-16 grid gap-6 md:gap-10 md:grid-cols-3">
          {items.map(({ id, title, description, img }, idx) => (
            <ChooseUsCard
              key={id}
              id={id}
              title={title}
              description={description}
              img={img}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}