import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import WhatWeDo from "@/components/sections/what-we-do";
import WeServe from "@/components/sections/we-serve";
import WhyUs from "@/components/sections/why-us";
import Testimonials from "@/components/sections/testimonials";
import QualityCompliance from "@/components/sections/quality-compliance";
import Faq from "@/components/sections/faq";
import AppDownload from "@/components/sections/app-download";
import Footer from "@/components/sections/footer";
import LogoMarquee from "@/components/sections/logo-marque";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoMarquee />
      <About />
      <WhatWeDo />
      <WeServe />
      <WhyUs />
      <Testimonials />
      <QualityCompliance />
      <Faq />
      <AppDownload />
      <Footer />
    </main>
  );
}
