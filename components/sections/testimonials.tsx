"use client";

import FadeIn from "@/components/sections/fade-in";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import SectionHeader, { GradientText, GradientUnderline } from "../ui/SectionHeader";

const testimonials = [
  {
    name: "Tasnim Ahmed",
    company: "Buyer, Shomriddho Pharmacy, Dhanmondi",
    image: "/assets/avatar/1.png",
    body: "Reordering through Shajlane cut our restock cycle from ten days to three. Authenticity paperwork ships with every box, which matters when customers ask whether the imported skincare is genuine.",
  },
  {
    name: "Khalid Hossain",
    company: "Owner, Aroma Salon, Banani",
    image: "/assets/avatar/2.png",
    body: "We used to chase six different suppliers across Old Dhaka and Chittagong for stock. Now it's one platform — pricing is transparent and lead times hold even during Eid rush.",
  },
  {
    name: "Rifat Chowdhury",
    company: "Founder, Mehek Beauty, Gulshan",
    image: "/assets/avatar/3.png",
    body: "Margins improved the day we switched. The catalog carries the K-beauty and French brands clients ask for by name, and back-in-stock alerts stop us losing the sale to whoever's stocked at Bashundhara City.",
  },
  {
    name: "Nusrat Jahan",
    company: "Operations Lead, Roop Skin Studio, Uttara",
    image: "/assets/avatar/4.png",
    body: "Their account team understood our store mix on the first call. The seasonal picks they send for Pohela Boishakh and Eid have replaced the guesswork we used to do every quarter.",
  },
  {
    name: "Mahmudul Hasan",
    company: "Procurement, Sajghor Spa Group",
    image: "/assets/avatar/5.png",
    body: "We service twelve outlets across Dhaka and Chittagong, and every site stays stocked without the spreadsheet chaos we used to live with. Short-shipments and returns get sorted the same week.",
  },
  {
    name: "Sumaiya Akter",
    company: "Founder, Glow Bazaar (F-commerce)",
    image: "/assets/avatar/6.png",
    body: "As a Facebook-based seller I expected wholesale onboarding to take months. Shajlane verified my trade license inside a week and I shipped my first orders before the end of the month.",
  },
  {
    name: "Faisal Karim",
    company: "Director, Bay Cosmetics Distribution, Chittagong",
    image: "/assets/avatar/7.png",
    body: "Counterfeit cosmetics is a real problem in this market — authenticity wasn't something we could compromise on. Every SKU we've sourced through Shajlane has come with batch traceability and the consistency our retailers expect.",
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
                  <GradientUnderline bottom="-12px" mdBottom="-12px" />
                </span>
              </>
            }
          />
        </FadeIn>
      </div>

      {/* row 1 */}
      <div className="mt-3 md:mt-6">
        <Marquee speed={45} gradient={false} pauseOnHover autoFill direction="left">
          {row1.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </Marquee>
      </div>

      {/* row 2 */}
      <div className="mt-1 md:mt-5">
        <MarqueeRow items={row2} direction="right" delay={150} />
      </div>
    </section>
  );
}