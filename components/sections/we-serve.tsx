"use client";
import { motion, cubicBezier } from "framer-motion";
import Container from "@/components/sections/container";
import FadeIn from "@/components/sections/fade-in";
import { cn } from "@/lib/utils";
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

export default function WeServe() {
  return (
    <section
      id="we-serve"
      className="section-y max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto"
    >
      <div className="flex gap-12">
        {/* Left image */}
        <div className="w-1/2 flex items-end bg-[#F9FAFB] rounded-2xl">
          <Image
            src="/Mobile Screen1.svg"
            alt="We Serve"
            width={650}
            height={300}
          />
        </div>

        {/* Right content */}
        <div className="w-1/2 mx-auto text-left">
          <FadeIn className="space-y-3">
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
            <p className="text-lg text-muted-foreground leading-relaxed">
              We ensure top-quality products by strictly following compliance
              standards, delivering safe, reliable, and trustworthy beauty
              solutions every time.
            </p>
            <div>
              {categories.map((item, idx) => (
                <FadeIn key={item.title} delay={0.04 * idx}>
                  <div className="flex items-start gap-5 py-6 border-b border-dashed border-[#E9CFF7]">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={36}
                      height={36}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                      <h3 className="font-heading text-xl tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
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
    </section>
  );
}
