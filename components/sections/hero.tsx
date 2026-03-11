"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  cubicBezier,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
    y.set(Math.sin(elapsed * 1.2 + delay) * 9);
    rotate.set(
      (Math.sin(elapsed * 0.6 + delay) * (rotateRange[1] - rotateRange[0])) / 2
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
        border-r-2 border-b-2
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
      <Image
        src={"/assets/icon/play_store_icon.svg"}
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

/* ─── Animated Arrow SVGs ────────────────────────── */

// Arrow below "Authentic Products" — curves down toward the phone
function ArrowAuthenticProducts() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="116"
      height="100"
      viewBox="0 0 116 100"
      fill="none"
      className="absolute top-[148px] left-[40px] w-[116px] h-[100px] pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.3 }}
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.6624 55.9647C30.5875 58.1184 27.8217 59.4247 24.2729 59.4613C13.2948 59.5741 6.75281 52.8524 3.26961 43.5706C-1.81601 30.0174 -0.276327 10.94 3.19226 0.626947C3.35601 0.138298 3.88287 -0.117865 4.36626 0.0529C4.85189 0.22297 5.11286 0.756813 4.9492 1.24544C1.58195 11.2549 0.0681286 29.7697 5.00294 42.9236C8.20147 51.4461 14.1535 57.693 24.2366 57.5881C27.2376 57.5589 29.5678 56.4486 31.3269 54.6323C30.1577 53.4417 29.0369 52.2339 27.9675 51.0102C25.0161 47.6316 19.0476 37.5665 17.5362 29.2804C16.4536 23.3361 17.6593 18.3124 23.2232 16.7646C26.316 15.905 29.1353 17.1575 31.4482 19.8188C34.6302 23.4756 36.8527 29.8939 37.4666 36.5098C37.9785 42.018 37.3804 47.652 35.3769 51.9257C34.9347 52.8639 34.429 53.7401 33.8523 54.5366C49.2998 69.6855 72.2695 81.3137 93.4917 83.9947C84.6284 78.2373 75.9081 69.8521 71.3312 60.8062C71.0978 60.3456 71.2776 59.7826 71.7337 59.5507C72.1876 59.3194 72.7469 59.5065 72.9804 59.967C77.9777 69.8454 88.0931 78.8818 97.7386 84.412C97.791 84.4156 97.8435 84.4192 97.8959 84.4227C98.4059 84.4591 98.7984 84.9036 98.7673 85.4201C98.742 85.8959 98.3675 86.2638 97.911 86.2926C97.8768 86.3044 97.8419 86.3141 97.8066 86.3218C97.6058 86.452 97.3547 86.5033 97.1019 86.4445C96.3322 86.2678 95.5413 86.1282 94.7336 86.0235C94.4469 85.9925 94.1599 85.9598 93.8725 85.9256C85.4052 85.096 75.3042 87.9303 68.3742 92.2272C67.9396 92.4969 67.3662 92.3592 67.0966 91.9164C66.8253 91.4754 66.9572 90.9001 67.3918 90.6303C72.2527 87.616 78.6058 85.3055 84.937 84.3712C65.8765 80.0474 46.3825 69.372 32.6624 55.9647ZM32.5073 53.1896C31.411 52.0683 30.3586 50.931 29.3531 49.7793C26.526 46.5407 20.8085 36.8986 19.3608 28.9594C18.4717 24.0872 19.1722 19.838 23.7322 18.5693C26.1275 17.9044 28.268 18.9868 30.0612 21.0452C32.0314 23.3116 33.5759 26.7268 34.5661 30.5699C36.0695 36.4046 36.2876 43.2264 34.6517 48.6052C34.1343 50.3095 33.4269 51.8667 32.5073 53.1896Z"
        fill="#0D0C1D"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.75 }}
        transition={{ duration: 1.6, delay: 1.2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

// Arrow above "Verified Suppliers" — curves from right side
function ArrowVerifiedSuppliers() {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="130"
      height="72"
      viewBox="0 0 130 72"
      fill="none"
      className="absolute -right-2 top-[155px] w-[130px] h-[72px] md:right-8 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3, duration: 0.3 }}
    >
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.3729 23.6421C61.6922 21.4672 63.7433 19.8662 66.6814 19.1727C75.7704 17.0275 82.4555 21.3828 87.0806 28.4343C93.8337 38.731 96.1213 54.85 95.1702 64.0564C95.1256 64.4925 94.7363 64.8036 94.3032 64.7522C93.8685 64.7018 93.5521 64.3076 93.5966 63.8715C94.5203 54.9359 92.3165 39.2886 85.7631 29.2951C81.5161 22.8206 75.4094 18.7489 67.0616 20.7204C64.5767 21.3054 62.8505 22.6623 61.7301 24.4982C62.9229 25.2677 64.0788 26.0606 65.1949 26.8762C68.2754 29.1284 75.1094 36.3654 77.9122 42.9592C79.9214 47.6897 79.8597 52.0839 75.5318 54.4082C73.1259 55.6995 70.5522 55.1869 68.1355 53.4107C64.8116 50.9708 61.7678 46.0599 60.022 40.6845C58.5677 36.2092 58.0112 31.4221 58.8751 27.5012C59.0668 26.6399 59.3226 25.8184 59.6523 25.0496C44.0022 15.3652 22.7679 10.0083 4.65571 11.7496C13.0868 14.8709 21.8903 20.1997 27.379 26.851C27.6588 27.1896 27.6148 27.6904 27.2796 27.9681C26.9461 28.2448 26.4471 28.1941 26.1672 27.8556C20.1742 20.592 10.0912 14.9836 1.05346 12.197C1.00925 12.2037 0.965057 12.2106 0.920888 12.2174C0.490884 12.2825 0.0820686 11.987 0.011421 11.5526C-0.056544 11.153 0.185458 10.7777 0.558933 10.6686C0.585096 10.6524 0.612196 10.6378 0.640083 10.6248C0.782377 10.4792 0.981142 10.3897 1.202 10.3913C1.87374 10.394 2.55614 10.3621 3.24595 10.2981C3.48967 10.2702 3.73397 10.2436 3.97886 10.2184C11.1604 9.32444 19.013 5.08469 23.9608 0.223836C24.271 -0.081211 24.7726 -0.0740841 25.0791 0.242951C25.3867 0.558274 25.3847 1.06029 25.0745 1.36537C21.604 4.7752 16.7637 7.87988 11.6844 9.83842C28.3097 9.86435 46.4817 15.0803 60.3729 23.6421ZM61.0202 25.9161C62.1395 26.6417 63.2254 27.3888 64.2751 28.1567C67.2263 30.3158 73.7729 37.2487 76.458 43.5665C78.1064 47.4435 78.3192 51.1006 74.7721 53.0056C72.9087 54.005 70.9301 53.5068 69.0574 52.1338C66.9988 50.6212 65.0789 48.0758 63.539 45.0716C61.201 40.5108 59.7451 34.8905 60.0974 30.1211C60.2083 28.6101 60.5043 27.1857 61.0202 25.9161Z"
        fill="#0D0C1D"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.75 }}
        transition={{ duration: 1.6, delay: 1.4, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

/* ─── Hero ───────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative w-full bg-white">
      <div
        className="max-w-8xl min-h-[90vh] m-10 rounded-2xl overflow-hidden relative"
        style={{
          backgroundImage: "url('/assets/herobg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 opacity-[0.04]" />
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
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 0.3 }}
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

            <motion.p
              variants={fadeUp}
              className="text-gray-500 text-base sm:text-[1.05rem] leading-relaxed"
            >
              Shajlane helps retailers, salons, pharmacies, and online sellers
              source authentic beauty and cosmetic products through strong
              sourcing, efficient logistics, and technology-driven operations.
            </motion.p>

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
            className="relative bottom-0 top-18 flex justify-center lg:justify-end items-center lg:pr-8"
          >
            <div className="relative">
              <Image
                src="/Mobile Screen1.svg"
                width={600}
                height={580}
                alt="Hero phone mockup"
                className="relative mx-auto"
              />

              {/* Spark SVG top-right of phone */}
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
                <motion.path d="M16 31L34.5 24" stroke="#FF80B1" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1 }} />
                <motion.path d="M13.0558 20.4271L25.4354 4.9999" stroke="#FF80B1" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.15 }} />
                <motion.path d="M2 21V2" stroke="#FF80B1" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.6, delay: 1.3 }} />
              </motion.svg>

              {/* Authentic Products badge */}
              <FloatingBadge
                label="Authentic Products"
                color="yellow"
                className="top-[80px] -rotate-20"
                delay={0}
                rotateRange={[-2, 4]}
              />

              {/* Curved arrow below Authentic Products */}
              <ArrowAuthenticProducts />

              {/* Curved arrow above Verified Suppliers */}
              <ArrowVerifiedSuppliers />

              {/* Verified Suppliers badge */}
              <FloatingBadge
                label="Verified Suppliers"
                color="green"
                className="-right-12 top-[260px] lg:-right-0"
                delay={1}
                rotateRange={[-12, 4]}
              />

              <FloatingBadge
                label="Best Price Guaranteed"
                color="blue"
                className="left-16 bottom-[80px] rotate-20"
                delay={2}
                rotateRange={[8, -6]}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}