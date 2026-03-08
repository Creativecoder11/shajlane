import Container from "@/components/sections/container"
import FadeIn from "@/components/sections/fade-in"
import { Button } from "@/components/ui/button"
import { Smartphone } from "lucide-react"
import Image from "next/image";


/* ─── Google Play Badge ──────────────────────────── */
function GooglePlayBadge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white text-black hover:-translate-y-0.5 hover:shadow-xl hover:shadow-gray-900/20 transition-all duration-200 group"
    >
      {/* Simplified Play icon */}
      <Image
        src={"/assets/icon/play store icon.svg"}
        alt="Google Play"
        width={24}
        height={24}
      />
      <span className="flex flex-col leading-tight">
        <span className="text-[9px] text-black uppercase tracking-widest">
          Get it on
        </span>
        <span className="text-sm font-semibold">Google Play</span>
      </span>
    </a>
  );
}

export default function CTA() {
  return (
    <section className="section-y ">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="py-12 rounded-2xl"
          style={{
          backgroundImage: "url('/assets/CTA.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
            <div className="flex flex-col justify-center items-center text-center text-white">
              <div className="space-y-3">
                <p className="text-xl font-medium">
                  Download Our App Today!
                </p>
                <h2 className="font-semibold text-6xl leading-tight">
                  Manage Orders Anytime <br/> Anywhere Easily
                </h2>
                <p className="text-xl max-w-4xl">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse at sagittis augue aliquam arcu purus pretium diam. Urna interdum lectus egestas magnis donec. At magna fames eu mattis sapien ut egestas.
                </p>
              </div>

              <div className="flex flex-col mt-7 gap-3 sm:flex-row lg:flex-col lg:items-stretch">
                <GooglePlayBadge/>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

