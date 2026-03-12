"use client";
import {
  motion,
  cubicBezier,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import FadeIn from "@/components/sections/fade-in";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionHeader, {
  GradientText,
  GradientUnderline,
} from "../ui/SectionHeader";

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
        px-2 md:px-3.5 py-1 md:py-2 rounded-full
        shadow-2xl text-[12px] md:text-base font-light tracking-wide
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
    <section className="section-y mx-auto overflow-hidden px-4 md:px-0">
      <div className="flex flex-col-reverse md:flex-row gap-8">
        {/* Left image */}
        <div className="relative md:w-1/2 flex justify-end items-end bg-[#F9FAFB] rounded-[0_24px_24px_0] pt-16 md:pt-0">
          {/* Verified Suppliers badge */}
          <FloatingBadge
            label="Verified Suppliers"
            color="yellow"
            className="right-10 md:top-[90px] top-[50px] lg:right-16"
            delay={1}
            rotateRange={[-12, 4]}
          />

          <div>
            {/* Arrow lines */}          
            <svg
              className="absolute top-20 right-24 md:top-35 md:right-35 w-18 h-18 md:w-[126px] md:h-[100px]"
              width="125"
              height="99"
              viewBox="0 0 125 99"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M80.9943 60.884C83.0755 63.6877 86.084 65.6071 90.1897 66.1647C102.891 67.8894 111.476 61.0289 116.901 50.7496C124.822 35.7397 125.895 13.3493 123.421 0.862572C123.304 0.271018 122.732 -0.103115 122.147 0.0251352C121.559 0.152247 121.176 0.734662 121.293 1.32618C123.695 13.4455 122.676 35.1784 114.99 49.7462C110.008 59.1845 102.177 65.5791 90.5123 63.9934C87.04 63.5239 84.5068 61.8955 82.7409 59.5297C84.2737 58.3161 85.753 57.0753 87.1751 55.8087C91.1001 52.3113 99.5216 41.4827 102.513 32.0741C104.658 25.3243 104.013 19.312 97.7992 16.7058C94.345 15.258 90.8914 16.3042 87.8134 19.0607C83.5796 22.8478 80.0439 29.9829 78.342 37.5811C76.9241 43.907 76.7734 50.5402 78.4544 55.7968C78.8263 56.9512 79.2808 58.0427 79.8297 59.0519C59.6658 74.4117 31.3149 84.5886 6.32821 84.623C17.4582 79.2198 28.8159 70.7425 35.4727 60.8961C35.8121 60.3948 35.6881 59.7146 35.1944 59.3789C34.7032 59.0443 34.0273 59.1804 33.6878 59.6817C26.4195 70.4344 13.3479 79.4657 1.34583 84.4913C1.2845 84.4879 1.22322 84.4845 1.16194 84.481C0.565701 84.4492 0.0443975 84.9088 0.0031712 85.5134C-0.0388118 86.0699 0.339908 86.5518 0.864477 86.6515C0.90231 86.6701 0.941235 86.6865 0.981018 86.7006C1.19412 86.881 1.47731 86.9771 1.77909 86.9454C2.6972 86.8519 3.63432 86.8044 4.58567 86.8C4.92244 86.8056 5.25987 86.8094 5.59792 86.8113C15.5312 87.0765 26.8085 91.8362 34.1933 97.8349C34.6563 98.2114 35.3412 98.1346 35.7198 97.6593C36.1002 97.1862 36.0336 96.4986 35.5704 96.1221C30.3907 91.914 23.3768 88.307 16.1822 86.3023C38.9106 84.0453 63.0923 74.4708 80.9943 60.884ZM81.5895 57.682C83.0274 56.5382 84.4169 55.3696 85.7542 54.1773C89.5143 50.8247 97.5817 40.4511 100.448 31.4362C102.207 25.9041 102.032 20.8651 96.9393 18.7289C94.264 17.6086 91.6222 18.5555 89.2366 20.6871C86.6148 23.0345 84.3142 26.7785 82.5916 31.1003C79.9762 37.6616 78.7021 45.5565 79.7917 52.0439C80.136 54.0993 80.7223 56.0114 81.5895 57.682Z"
                fill="#0D0C1D"
              />
            </svg>
          </div>
          <div>
            {/* 3 - lines */}
            <svg
              className="absolute top-10 md:top-20 ml-8 w-8 h-8 md:w-[50px] md:h-[49px]"
              width="50"
              height="49"
              viewBox="0 0 50 49"
              fill="none"
            >
              <path
                d="M32.0005 47L2.00053 35"
                stroke="#FF80B1"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M35.9813 35.3923L16.0005 10"
                stroke="#FF80B1"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M48.0005 32V2"
                stroke="#FF80B1"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <Image
            src="/assets/qualityBg.png"
            alt="We Serve"
            width={650}
            height={300}
            className="w-90 h-86 md:w-137 md:h-160 aspect-82/99 object-contain mr-6 md:mr-12"
          />
        </div>

        {/* Right content */}
        <div className="md:w-1/2 text-left">
          <div className="md:w-175">
            <FadeIn className="space-y-4">
              <div className="flex flex-col items-left justify-center gap-2">
                <SectionHeader
                  size={48}
                  label="QUALITY & COMPLIANCE"
                  heading={
                    <>
                      Excellence In <br />
                      <span className="relative inline-block">
                        <GradientText>Quality And Compliance</GradientText>
                        <GradientUnderline bottom="-16px" mdBottom="-24px" />
                      </span>
                    </>
                  }
                />
              </div>
              <p className="text-base md:text-lg text-[#5B5B68] leading-relaxed mt-3 md:mt-6 mb-4 md:mb-8">
                We ensure top-quality products by strictly following compliance
                standards, delivering safe, reliable, and trustworthy beauty
                solutions every time.
              </p>
              <div>
                {categories.map((item, idx) => (
                  <FadeIn key={item.title} delay={0.04 * idx}>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 py-4 md:py-6 border-b border-dashed border-[#E9CFF7]">
                      {/* Left: icon + title */}
                      <div className="flex items-center gap-2 md:gap-4 md:w-3/5">
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
                      <p className="text-[#5B5B68] text-base md:w-3/5 leading-relaxed">
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
