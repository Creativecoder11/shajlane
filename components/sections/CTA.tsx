
import FadeIn from "@/components/sections/fade-in"
import Image from "next/image";




export default function CTA() {
  return (
    <section className="section-y">
      <div className="mx-auto max-w-360 px-4 md:px-0">
        <FadeIn>
          <div className="px-4 md:px-0 py-8 md:py-12 rounded-2xl"
            style={{
              backgroundImage: "url('/assets/CTA.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <div className="flex flex-col justify-center items-center text-center text-white">
              <div className="space-y-3">
                <p className="text-lg md:text-xl font-medium">
                  Download Our App Today!
                </p>
                <h2 className="font-semibold text-4xl md:text-6xl leading-tight">
                  Manage Orders Anytime <br /> Anywhere Easily
                </h2>
                <p className="text-lg md:text-xl max-w-4xl">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse at sagittis augue aliquam arcu purus pretium diam. Urna interdum lectus egestas magnis donec. At magna fames eu mattis sapien ut egestas.
                </p>

                <Image
                  src="/assets/icon/googlePlay.svg"
                  alt="googlePlay"
                  width={24}
                  height={24}
                  className="mt-4 md:mt-8 mx-auto w-35 h-12 md:w-50 md:h-16 object-contain"
                />
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

