"use client";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.15,
      },
    },
  };

  const fadeSlide = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <section className="section-y">
      <div className="mx-auto max-w-360 px-4 md:px-0">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div
            className="px-4 md:px-0 py-8 md:py-12 rounded-2xl"
            style={{
              backgroundImage: "url('/assets/CTA.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col justify-center items-center text-center text-white space-y-3">
              {/* Subtitle */}
              <motion.p variants={fadeSlide} className="text-lg md:text-xl font-medium">
                Download Our App Today!
              </motion.p>

              {/* Heading */}
              <motion.h2
                variants={fadeSlide}
                className="font-semibold text-4xl md:text-6xl leading-tight"
              >
                Manage Orders Anytime <br /> Anywhere Easily
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={fadeSlide}
                className="text-lg md:text-xl max-w-4xl"
              >
                Place orders, track shipments, and reorder bestsellers from your phone — wholesale pricing,
                live stock visibility, and authenticity verification on every SKU you carry.
              </motion.p>

              {/* Google Play Button */}
              <motion.div
                variants={fadeSlide}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="mt-4 md:mt-8"
              >
                {/* <Image
                  src="/assets/icon/googlePlay.svg"
                  alt="googlePlay"
                  width={24}
                  height={24}
                  className="mx-auto w-35 h-12 md:w-50 md:h-16 object-contain"
                /> */}
                <a
                  href="https://store.shajlane.com/login"
                  className="
                  group
                  inline-flex items-center gap-2.5
                  px-4 py-2.5
                  md:px-7 md:py-3.5
                  rounded-full
                  border border-white
                  bg-white
                  text-black font-semibold text-sm md:text-base
                  shadow-lg shadow-violet-900/20
                  transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                  hover:shadow-xl hover:shadow-violet-900/30
                  hover:-translate-y-1
                  hover:scale-[1.03]
                  active:scale-[0.98]
                "
                >
                  Login Now
                  <ArrowUpRight className="w-4 md:w-5 h-4 md:h-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}