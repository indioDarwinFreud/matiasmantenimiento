"use client"


import HeroStatic from "@/components/sections/HeroStatic";
import AboutPreview from "@/components/sections/AboutPreview";


import FeaturedServices from "@/components/sections/FeaturedServices";
import Testimonials from "@/components/sections/Testimonials";
import Separador from "@/components/ui/separador";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col pt-16 md:pt-24 bg-transparent">
      {/* Hero Section */}
      <div className="relative z-30 w-full">
        <HeroStatic />
      </div>

      <Separador />

      <div className="relative z-20">
        <AboutPreview />
      </div>

      <Separador />

      <FeaturedServices />

      <Testimonials />

    </main>
  );
}
