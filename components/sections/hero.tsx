"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
  cubicBezier,
} from "framer-motion";
import { ArrowUpRight, Check, ShieldCheck, Tag } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

/* ─── Animation Variants ─────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

const phoneVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: cubicBezier(0.22, 1, 0.36, 1),
      delay: 0.3,
    },
  },
};

/* ─── Floating Badge ─────────────────────────────── */
interface BadgeProps {
  label: string;
  color: "yellow" | "green" | "blue";
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
  rotateRange?: [number, number];
}

const colorMap = {
  yellow: "bg-[#FFEE90] border-[#0D0C1D] text-[#0D0C1D] shadow-amber-100",
  green: "bg-[#CCF2AA] border-[#0D0C1D] text-[#0D0C1D] shadow-emerald-100",
  blue: "bg-[#A5E8FF] border-[#0D0C1D] text-[#0D0C1D] shadow-sky-100",
};

function FloatingBadge({
  label,
  color,
  className = "",
  delay = 0,
  rotateRange = [-3, 3],
}: BadgeProps) {
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  useAnimationFrame((t) => {
    const elapsed = t / 1000;

    // Floating movement
    y.set(Math.sin(elapsed * 1.2 + delay) * 9);

    // Independent rotate movement
    rotate.set(
      (Math.sin(elapsed * 0.6 + delay) * (rotateRange[1] - rotateRange[0])) / 2,
    );
  });

  return (
    <motion.div
      style={{ y, rotate }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.6 + delay * 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        absolute flex items-center gap-2
        px-3.5 py-2 rounded-full
        shadow-2xl text-base font-light tracking-wide
        backdrop-blur-sm
        border-t-[0.5px] border-l-[0.5px]
        border-r-[2px] border-b-[2px]
        border-[#0D0C1D]
        ${colorMap[color]} ${className}
      `}
    >
      {label}
    </motion.div>
  );
}

/* ─── Google Play Badge ──────────────────────────── */
function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gray-950 text-white hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-200 group"
    >
      {/* Simplified Play icon */}
      <Image
        src={"/assets/icon/play store icon.svg"}
        alt="Google Play"
        width={24}
        height={24}
      />
      <span className="flex flex-col leading-tight">
        <span className="text-[9px] text-white uppercase tracking-widest">
          Get it on
        </span>
        <span className="text-sm font-semibold">Google Play</span>
      </span>
    </a>
  );
}

/* ─── Hero ───────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative  w-full bg-white ">
      {/* Gradient container */}
      <div
        className="max-w-8xl min-h-[90vh] m-10 rounded-2xl overflow-hidden relative"
        style={{
          backgroundImage: "url('/assets/herobg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]" />

        {/* Decorative blobs */}
        <div className="absolute top-[-80px] right-[10%] w-[360px] h-[360px] rounded-full bg-[#FFFFFF] blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-60px] left-[5%] w-[280px] h-[280px] rounded-full bg-[#FFFFFF] blur-[70px] pointer-events-none" />

        <motion.div
          className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 px-8 sm:px-12 lg:px-16 pt-28 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6 max-w-auto">
            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="text-[2.6rem] sm:text-[3.2rem] lg:text-7xl font-semibold leading-[1.08] tracking-tight text-gray-900"
            >
              Authentic Beauty
              <br />
              Supply{" "}
              <span
                className="relative inline-block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(96deg, #7E4BA4 0%, #301C3E 100%)",
                }}
              >
                Built for
                {/* <span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full  origin-left animate-[scaleX_0.6s_0.9s_ease-out_forwards] scale-x-0" /> */}
              </span>
              <br />
              <span className="relative inline-block text-7xl font-semibold tracking-tight">
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

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-base sm:text-[1.05rem] leading-relaxed"
            >
              Shajlane helps retailers, salons, pharmacies, and online sellers
              source authentic beauty and cosmetic products through strong
              sourcing, efficient logistics, and technology-driven operations.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#explore"
                className="
                  group
                  inline-flex items-center gap-2.5
                  px-7 py-3.5
                  rounded-[100px]
                  border border-[#7E4BA4]
                  bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)]
                  text-white font-semibold text-sm
                  shadow-lg shadow-violet-900/20
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:shadow-xl hover:shadow-violet-900/30
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  active:scale-[0.98]
                "
              >
                Explore More
                <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>

              <GooglePlayBadge />
            </motion.div>
          </div>

          {/* ── RIGHT ── */}
          <motion.div
            variants={phoneVariant}
            className="relative bottom-0 top-13 flex justify-center lg:justify-end items-center lg:pr-8"
          >
            {/* Phone */}
            <div className="relative">
              {/* <PhoneMockup /> */}
              <Image
                src="/Mobile Screen1.svg"
                width={600}
                height={580}
                alt="Hero phone mockup"
                className="relative mx-auto"
              />
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="33"
                viewBox="0 0 37 33"
                fill="none"
                className="absolute -top-6 right-40"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  opacity: { delay: 1, duration: 0.4 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <motion.path
                  d="M16 31L34.5 24"
                  stroke="#FF80B1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                />
                <motion.path
                  d="M13.0558 20.4271L25.4354 4.9999"
                  stroke="#FF80B1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.15 }}
                />
                <motion.path
                  d="M2 21V2"
                  stroke="#FF80B1"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                />
              </motion.svg>

              <FloatingBadge
                label="Authentic Products"
                color="yellow"
                className="top-[80px] -rotate-20"
                delay={0}
                rotateRange={[-2, 4]} // Strong tilt
              />
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="99"
                height="93"
                viewBox="0 0 99 93"
                fill="none"
                className="absolute -bottom-12 right-12"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { delay: 1.3, duration: 0.4 },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32.6624 55.9647C30.5875 58.1184 27.8217 59.4247 24.2729 59.4613C13.2948 59.5741 6.75281 52.8524 3.26961 43.5706..."
                  fill="#0D0C1D"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.4,
                    delay: 1.4,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>

              <FloatingBadge
                label="Verified Suppliers"
                color="green"
                className="-right-12 top-[260px] lg:-right-0"
                delay={1}
                rotateRange={[-12, 4]} // Subtle rotation
              />
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="65"
                viewBox="0 0 96 65"
                fill="none"
                className="absolute right-0"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { delay: 1.5, duration: 0.4 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                <motion.path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60.3729 23.6421C61.6922 21.4672 63.7433 19.8662 66.6814 19.1727..."
                  fill="#0D0C1D"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.4,
                    delay: 1.6,
                    ease: "easeInOut",
                  }}
                />
              </motion.svg>

              <FloatingBadge
                label="Best Price Guaranteed"
                color="blue"
                className="left-16 bottom-[80px] rotate-20 "
                delay={2}
                rotateRange={[8, -6]} // Reverse tilt
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
