"use client";

import FadeIn from "@/components/sections/fade-in";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import SectionHeader, { GradientText, GradientUnderline } from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Leslie Alexander",
    company: "Jam Beauty",
    image: "/assets/avatar/1.png",
    body: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
  },
  {
    name: "Khalid Hossain",
    company: "Jam Beauty",
    image: "/assets/avatar/2.png",
    body: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
  },
  {
    name: "Ronald Richards",
    company: "Jam Beauty",
    image: "/assets/avatar/3.png",
    body: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
  },
  {
    name: "Jane Cooper",
    company: "Jam Beauty",
    image: "/assets/avatar/4.png",
    body: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
  },
  {
    name: "Devon Lane",
    company: "Jam Beauty",
    image: "/assets/avatar/5.png",
    body: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
  },
  {
    name: "Eleanor Pena",
    company: "Jam Beauty",
    image: "/assets/avatar/6.png",
    body: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
  },
  {
    name: "Eleanor Pena",
    company: "Jam Beauty",
    image: "/assets/avatar/7.png",
    body: "Lorem ipsum dolor sit amet consectetur. In nulla euismod ut et lacus. Viverra lectus lacus aliquet et dignissim quam sed. Sed.",
  },
];

function TestimonialCard({ t }: any) {
  return (
    <div
      className="w-[320px] md:w-105 mx-4 pt-4 overflow-hidden"
      // Force GPU layer on each card — prevents Safari subpixel flicker
      style={{
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
      }}
    >
      <div className="relative">
        {/* dashed outer border */}
        <div className="absolute -inset-1 rounded-[36px] border border-dashed border-[#FFD7FF]" />

        {/* gradient border wrapper */}
        <div
          className="relative rounded-4xl bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)]"
          style={{ padding: "1px 4px 4px 1px" }}
        >
          <div className="relative bg-white rounded-4xl shadow-sm p-4 md:p-6">
            <div className="flex space-between items-end">
              {/* quote */}
              <Image
                src="/assets/icon/quote.svg"
                alt="quote"
                width={40}
                height={40}
                className="w-12 h-12 md:w-15 md:h-15"
              />
              {/* stars */}
              <div className="absolute top-6 right-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>

            {/* user */}
            <div className="flex items-center gap-4 mt-2 md:mt-4">
              <Image
                src={t.image}
                alt={t.name}
                width={56}
                height={56}
                className="w-9 h-9 md:w-14 md:h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-base md:text-xl font-semibold text-[#7E4BA4]">{t.name}</p>
                <p className="text-sm md:text-base font-medium text-[#5B5B68]">{t.company}</p>
              </div>
            </div>

            {/* text */}
            <p className="mt-2 md:mt-4 text-[#5B5B68] text-sm md:text-base leading-relaxed">{t.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction,
  delay = 0,
}: {
  items: typeof testimonials;
  direction: "left" | "right";
  delay?: number;
}) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    // Small delay before starting animation — lets the browser
    // fully paint the layout first, eliminating the initial jump/flash
    const timer = setTimeout(() => setPlay(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    // The outer wrapper uses will-change + GPU compositing to prevent
    // Safari from repainting the marquee strip on every frame
    <div
      style={{
        willChange: "transform",
        WebkitTransform: "translateZ(0)",
        transform: "translateZ(0)",
      }}
    >
      <Marquee
        speed={45}
        gradient={false}
        autoFill
        direction={direction}
        play={play}
        // pauseOnHover is a nice UX bonus
        pauseOnHover
      >
        {items.map((t, i) => (
          <TestimonialCard key={i} t={t} />
        ))}
      </Marquee>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <section className="section-y bg-[#F9F7FC] overflow-hidden" id="testimonials">
      {/* Header */}
      <div className="mx-auto text-center">
        <FadeIn className="space-y-3">
          <SectionHeader
            align="center"
            label="TESTIMONIALS"
            heading={
              <>
                Trusted By Beauty Industry <br className="hidden md:block" />
                <span className="relative inline-block">
                  <GradientText>Professionals</GradientText>
                  <GradientUnderline bottom="-12px" mdBottom="-16px" />
                </span>
              </>
            }
          />
        </FadeIn>
      </div>

      {/* row 1 */}
      <div className="mt-3 md:mt-6">
        <MarqueeRow items={row1} direction="left" delay={100} />
      </div>

      {/* row 2 */}
      <div className="mt-1 md:mt-5">
        <MarqueeRow items={row2} direction="right" delay={150} />
      </div>
    </section>
  );
}