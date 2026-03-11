"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/sections/fade-in";
import Image from "next/image";
import { cubicBezier, motion } from "framer-motion";
import SectionHeader, { GradientText, GradientUnderline } from "../ui/SectionHeader";

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
      className="section-y max-w-360 mx-auto px-4 md:px-0"
    >
      <div>
        <FadeIn className="space-y-3 flex flex-col md:flex-row md:items-end">
          <div className="md:w-1/2">
            <SectionHeader
              label="ABOUT US"
              heading={
                <>
                  Luxury Beauty <br />
                  Supply for{" "}
                  <span className="relative inline-block">
                    <GradientText>Business</GradientText>
                    <GradientUnderline bottom="-4px" mdBottom="-8px" />
                  </span>
                </>
              }
            />
          </div>

          <div className="md:w-1/2">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Shajlane is a dedicated B2B beauty distribution platform built to
              serve professionals. We deliver premium beauty brands at
              competitive wholesale pricing, helping salons, retailers, and
              resellers grow sustainably.
            </p>
          </div>
        </FadeIn>

        {/* STATS */}
        <div className="mt-6 md:mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <FadeIn key={s.label} delay={0.04 * idx} className="text-left">
              <div>
                <div className="font-heading font-semibold text-4xl md:text-5xl text-foreground">
                  <Counter value={s.value} suffix={s.suffix} start={inView} />
                </div>

                <div className="mt-1 md:mt-2 text-sm md:text-lg text-muted-foreground">
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