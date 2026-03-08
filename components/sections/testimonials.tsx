"use client";

import Container from "@/components/sections/container";
import FadeIn from "@/components/sections/fade-in";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion, cubicBezier } from "framer-motion";

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
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

function TestimonialCard({ t }: any) {
  return (
    <div className="w-[420px] mx-6 bg-white rounded-[20px] border border-[#0D0C1D] border-r-[4px] border-b-[4px] shadow-sm relative p-6">
      {/* stars */}
      <div className="absolute top-6 right-6 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* user */}
      <div className="flex items-center gap-4 mt-6">
        <Image
          src={t.image}
          alt={t.name}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />

        <div>
          <p className="text-lg font-semibold text-[#7E4BA4]">{t.name}</p>
          <p className="text-sm text-gray-500">{t.company}</p>
        </div>
      </div>

      {/* text */}
      <p className="mt-4 text-gray-600 text-sm leading-relaxed">{t.body}</p>
    </div>
  );
}

export default function Testimonials() {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(3);

  return (
    <section className="py-20 bg-[#F9F7FC] overflow-hidden">
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

      {/* row 1 */}
      <div className="mt-10">
        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover
          autoFill
          direction="left"
        >
          {row1.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </Marquee>
      </div>

      {/* row 2 */}
      <div className="mt-10">
        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover
          autoFill
          direction="right"
        >
          {row2.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
