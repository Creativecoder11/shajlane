"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/sections/fade-in";
import Image from "next/image";
import { cubicBezier, motion } from "framer-motion";

const stats = [
  { value: 5000, suffix: "+", label: "Products Available" },
  { value: 100, suffix: "+", label: "Verified Brand Partnerships" },
  { value: 64, suffix: "", label: "Distribution Regions" },
  { value: 99, suffix: "%", label: "Partner Satisfaction Rate" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

function useCounter(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = time - startTime;
      const value = Math.min(Math.floor((progress / duration) * end), end);

      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return count;
}

function Counter({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const count = useCounter(value, 2000, start);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-y max-w-360 mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div>
        <FadeIn className="space-y-3 flex items-end">
          <div className="w-1/2">
            <span className="flex items-center gap-2 text-xl font-medium text-[#7E4BA4] uppercase">
              <Image
                src="/assets/icon/about-icon.svg"
                alt="About Shajlane"
                width={24}
                height={24}
              />
              ABOUT US
            </span>

            <motion.h1
              variants={fadeUp}
              className="text-[2.6rem] sm:text-[3.2rem] lg:text-6xl font-semibold leading-[1.08] tracking-tight text-gray-900"
            >
              Luxury Beauty <br />
              Supply for{" "}
              <span className="relative inline-block text-6xl font-semibold tracking-tight">
                <span className="bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] bg-clip-text text-transparent">
                  Business
                </span>

                <motion.svg
                  viewBox="0 0 500 40"
                  className="absolute left-0 -bottom-4 w-full"
                  fill="none"
                >
                  <motion.path
                    d="M10 25 Q250 5 490 25"
                    stroke="url(#gradient)"
                    strokeWidth="6"
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

          <div className="w-1/2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Shajlane is a dedicated B2B beauty distribution platform built to
              serve professionals. We deliver premium beauty brands at
              competitive wholesale pricing, helping salons, retailers, and
              resellers grow sustainably.
            </p>
          </div>
        </FadeIn>

        {/* STATS */}
        <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <FadeIn key={s.label} delay={0.04 * idx} className="text-left">
              <div>
                <div className="font-heading font-semibold text-5xl text-foreground">
                  <Counter value={s.value} suffix={s.suffix} start={inView} />
                </div>

                <div className="mt-1 text-lg text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}