"use client";
import FadeIn from "@/components/sections/fade-in";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";

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
                Lorem ipsum dolor sit amet consectetur. Suspendisse at sagittis augue aliquam arcu purus pretium diam. Urna interdum lectus egestas magnis donec. At magna fames eu mattis sapien ut egestas.
              </motion.p>

              {/* Google Play Button */}
              <motion.div
                variants={fadeSlide}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="mt-4 md:mt-8"
              >
                <Image
                  src="/assets/icon/googlePlay.svg"
                  alt="googlePlay"
                  width={24}
                  height={24}
                  className="mx-auto w-35 h-12 md:w-50 md:h-16 object-contain"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}