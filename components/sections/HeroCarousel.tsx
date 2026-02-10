"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import BannerCard from "@/components/cards/BannerCard";
import { carouselImages } from "@/data";

const HeroCarousel = () => {


  return (
    <div className="w-full flex items-center justify-center bg-black">
      <div className="w-full max-w-7xl aspect-[5/4] md:aspect-[21/9]">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={120}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false
          }}
          allowTouchMove={false}
          className="w-full h-full"
        >
          {carouselImages.map((img, i) => (
            <SwiperSlide key={i} className="relative w-full h-full">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />

              <BannerCard
                title={img.title}
                description={img.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroCarousel;
