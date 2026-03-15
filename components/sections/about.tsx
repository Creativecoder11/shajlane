"use client";

import { useEffect, useRef, useState } from "react";
import { motion, cubicBezier } from "framer-motion";
import FadeIn from "@/components/sections/fade-in";
import SectionHeader, { GradientText, GradientUnderline } from "../ui/SectionHeader";

const stats = [
  { value: 5000, suffix: "+", label: "Products Available" },
  { value: 100, suffix: "+", label: "Verified Brand Partnerships" },
  { value: 64, suffix: "", label: "Distribution Regions" },
  { value: 99, suffix: "%", label: "Partner Satisfaction Rate" },
];

const ease = cubicBezier(0.22, 1, 0.36, 1);

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
      if (progress < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return count;
}

function Counter({ value, suffix, start }: { value: number; suffix: string; start: boolean }) {
  const count = useCounter(value, 2000, start);
  return <>{count.toLocaleString()}{suffix}</>;
}

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-y max-w-360 mx-auto px-4 md:px-0"
    >
      <div>
        {/* ── Header row ── */}
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

          {/* Paragraph — slides in from right */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72, ease, delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Shajlane is a dedicated B2B beauty distribution platform built to
              serve professionals. We deliver premium beauty brands at
              competitive wholesale pricing, helping salons, retailers, and
              resellers grow sustainably.
            </p>
          </motion.div>
        </FadeIn>

        {/* ── Divider ── */}
        <motion.div
          className="mt-8 md:mt-12 h-px bg-gradient-to-r from-transparent via-[#7E4BA4]/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.1 }}
          style={{ transformOrigin: "center" }}
        />

        {/* ── Stats grid ── */}
        <div className="mt-8 md:mt-10 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.1 + idx * 0.1 }}
              className="relative group text-left"
            >
              {/* Hover glow card */}
              <div className="relative rounded-lg p-4 md:p-5 transition-colors duration-300 group-hover:bg-[#7E4BA4]/5">
                {/* Counter */}
                <div className="font-heading font-semibold text-4xl md:text-5xl text-foreground transition-colors duration-300 group-hover:text-[#7E4BA4]">
                  {inView
                    ? <Counter value={s.value} suffix={s.suffix} start={inView} />
                    : <>0{s.suffix}</>
                  }
                </div>

                {/* Label */}
                <div className="mt-1 md:mt-2 text-sm md:text-lg text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}