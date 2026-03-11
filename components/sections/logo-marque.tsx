"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function LogoMarquee() {
  const images = [
    "/assets/icon/4 1.svg",
    "/assets/icon/beauty_of_joseon-logo 1.svg",
    "/assets/icon/cerave-logo-top 1.svg",
    "/assets/icon/Company Logo-1.svg",
    "/assets/icon/cosrx-logo_brandlogos.net_lcd7a 1.svg",
    "/assets/icon/madagascar-centella-seeklogo 1.svg",
    "/assets/icon/mceclip0-63 1.svg",
  ];

  return (
    <div className="bg-white pb-7 flex flex-col items-center gap-4 md:gap-6">
      <p className="text-[#5B5B68] text-lg md:text-2xl font-semibold text-center">
        Trusted by Leading Beauty Brands
      </p>

      <Marquee speed={50} gradient={false} autoFill>
        {images.map((src, index) => (
          <div key={index} className="mx-10">
            <Image
              src={src}
              alt={`brand-${index}`}
              width={120}
              height={60}
              className="object-contain h-8 md:h-15 grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}