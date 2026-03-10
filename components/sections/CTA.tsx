
import FadeIn from "@/components/sections/fade-in"
import Image from "next/image";




export default function CTA() {
  return (
    <section className="section-y ">
      <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
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
                  Manage Orders Anytime <br /> Anywhere Easily
                </h2>
                <p className="text-xl max-w-4xl">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse at sagittis augue aliquam arcu purus pretium diam. Urna interdum lectus egestas magnis donec. At magna fames eu mattis sapien ut egestas.
                </p>

                <Image
                  src="/assets/icon/googlePlay.svg"
                  alt="googlePlay"
                  width={24}
                  height={24}
                  className="mt-8 mx-auto w-25 h-8 md:w-50 md:h-16 object-contain"
                />
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

