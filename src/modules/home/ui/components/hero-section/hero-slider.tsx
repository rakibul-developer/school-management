'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import Image from 'next/image';

const slides = [
  { src: '/slide1.jpg', alt: 'Slide 1' },
  { src: '/slide2.jpg', alt: 'Slide 2' },
  { src: '/slide3.jpg', alt: 'Slide 3' },
];

export default function HeroSlider() {
  return (
    <div className="relative h-screen w-screen">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop
        speed={1200}
        className="h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative h-screen w-screen overflow-hidden">
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"
                objectFit="cover"
                className="zoom-image"
                priority
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
