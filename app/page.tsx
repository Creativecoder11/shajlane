import Header from "@/components/sections/header";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import WhatWeDo from "@/components/sections/what-we-do";
import ChooseUs from "@/components/sections/ChooseUs";
import Testimonials from "@/components/sections/testimonials";
import QualityCompliance from "@/components/sections/QualityCompliance";
import Faq from "@/components/sections/faq";
import Footer from "@/components/sections/footer";
import LogoMarquee from "@/components/sections/logo-marque";
import CTA from "@/components/sections/CTA";
import Products from "@/components/sections/Products";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LogoMarquee />
      <About />
      <WhatWeDo />
      <QualityCompliance />
      <ChooseUs />
      <Products />
      <Testimonials />
      <Faq />
      <CTA />
      <Footer />
    </main>
  );
}
