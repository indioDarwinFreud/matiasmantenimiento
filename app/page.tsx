"use client"


import HeroStatic from "@/components/sections/HeroStatic";
import AboutPreview from "@/components/sections/AboutPreview";


import BestSellers from "@/components/sections/BestSellers";
import CategoryBanners from "@/components/sections/CategoryBanners";
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

      <CategoryBanners />

      <BestSellers />

      <Testimonials />

    </main>
  );
}
