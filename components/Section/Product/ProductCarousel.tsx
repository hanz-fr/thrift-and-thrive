"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductCarousel() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="w-full h-fit"
    >
      <SwiperSlide>
        <div className="relative w-72 h-72 mx-auto">
          <img
            className="object-fill w-full rounded-lg"
            src="/img/hoodie.jpg"
            alt="hoodiejpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-72 h-72 mx-auto rounded-lg">
          <img
            className="object-fill w-full rounded-lg"
            src="/img/hoodie.jpg"
            alt="hoodiejpg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-72 h-72 mx-auto rounded-lg">
          <img
            className="object-fill w-full rounded-lg"
            src="/img/hoodie.jpg"
            alt="hoodiejpg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
