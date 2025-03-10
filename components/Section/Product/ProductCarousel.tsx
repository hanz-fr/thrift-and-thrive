"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductCarousel({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-full h-fit"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-[330px] h-[330px] mx-auto">
            <img
              className="object-fill w-full rounded-lg"
              src={img}
              alt={`product-image-${index}`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
