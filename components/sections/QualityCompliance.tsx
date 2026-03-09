"use client";
import { motion, cubicBezier } from "framer-motion";
import FadeIn from "@/components/sections/fade-in";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Authentic Brands",
    desc: "We source genuine beauty products directly from trusted global brands.",
    icon: "/assets/icon/authentic.svg",
  },
  {
    title: "Verified Suppliers",
    desc: "Strong partnerships ensure original, certified, and fully traceable inventory.",
    icon: "/assets/icon/suppliers.svg",
  },
  {
    title: "Quality Assurance",
    desc: "Every product checked to guarantee authenticity and premium standards.",
    icon: "/assets/icon/quality.svg",
  },
  {
    title: "Trusted Distribution",
    desc: "Reliable sourcing network delivering compliant and brand-approved beauty products.",
    icon: "/assets/icon/distribution.svg",
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

export default function QualityCompliance() {
  return (
    <section
      className="section-y mx-auto overflow-hidden"
    >
      <div className="flex gap-12">
        {/* Left image */}
        <div className="w-1/2 flex justify-end items-end bg-[#F9FAFB] rounded-[0_24px_24px_0]">
          <Image
            src="/assets/qualityBg.png"
            alt="We Serve"
            width={650}
            height={300}
            className="w-100 h-120 md:w-137 md:h-160 aspect-82/99 object-contain mr-12"
          />
        </div>

        {/* Right content */}
        <div className="w-1/2 text-left">
          <div className="w-172">
            <FadeIn className="space-y-4">
              <div className="flex flex-col items-left justify-center gap-2">
                <span className="flex items-center gap-2 text-xl font-medium text-[#7E4BA4] uppercase">
                  <Image
                    src="/assets/icon/about-icon.svg"
                    alt="About Shajlane"
                    width={24}
                    height={24}
                  />
                  QUALITY & COMPLIANCE
                </span>

                <motion.h1
                  variants={fadeUp}
                  className="text-[2.6rem] sm:text-[3.2rem] lg:text-5xl font-semibold leading-[1.08] tracking-tight text-gray-900"
                >
                  Excellence In <br />
                  <span className="relative inline-block text-5xl font-semibold tracking-tight">
                    <span className="bg-[linear-gradient(96deg,#7E4BA4_0%,#301C3E_100%)] bg-clip-text text-transparent">
                      Quality And Compliance
                    </span>

                    <motion.svg
                      viewBox="0 0 500 40"
                      className="absolute left-0 -bottom-7 w-full"
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
              <p className="text-lg text-[#5B5B68] leading-relaxed mt-6 mb-8">
                We ensure top-quality products by strictly following compliance
                standards, delivering safe, reliable, and trustworthy beauty
                solutions every time.
              </p>
              <div>
                {categories.map((item, idx) => (
                  <FadeIn key={item.title} delay={0.04 * idx}>
                    <div className="flex flex-col md:flex-row gap-4 py-6 border-b border-dashed border-[#E9CFF7]">
                      {/* Left: icon + title */}
                      <div className="flex items-center gap-4 md:w-3/5">
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={40}
                          height={40}
                          className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        />
                        <h3 className="text-base md:text-lg font-semibold text-[#0D0C1D] leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      {/* Right: description */}
                      <p className="text-[#5B5B68] text-sm md:text-base md:w-3/5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </FadeIn>
                ))}
                <motion.div
                  variants={fadeUp}
                  className="flex mt-8 flex-wrap items-center gap-4"
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
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
