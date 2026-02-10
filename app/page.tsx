"use client"


import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroCarousel from "@/components/sections/HeroCarousel";

import FadeIn from "@/components/ui/FadeIn"; // Import the component
import FeatureSection from "@/components/sections/FeatureSection";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
import { testimonialsData } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 z-0">

      </div>

      {/* Carousel Section */}
      <FadeIn delay={0.2} className="relative z-30 w-full max-w-7xl aspect-[5/4] md:aspect-[21/9] mx-auto mt-32 md:mt-40 shadow-2xl bg-white flex items-center justify-center rounded-lg overflow-hidden">
        <HeroCarousel />
      </FadeIn>


      <FeatureSection />

      <FeaturedWorks />


      {/* Testimonials Preview Section */}
      <div className="mt-32 mb-20">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary">
            Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 drop-shadow-sm">Clientes</span>
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={0.2 * (index + 1)} direction={index % 2 === 0 ? "left" : "right"}>
              <Card className="p-8 bg-white/60 backdrop-blur-md border-primary/10 hover:bg-white hover:border-primary/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.2)] transition-all duration-500 shadow-lg h-full">
                <p className="text-gray-700 italic mb-6 drop-shadow-sm">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold shadow-inner">{testimonial.initials}</div>
                  <div>
                    <h4 className="text-primary font-bold drop-shadow-md font-sans">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm drop-shadow-sm">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>

    </main>
  );
}
