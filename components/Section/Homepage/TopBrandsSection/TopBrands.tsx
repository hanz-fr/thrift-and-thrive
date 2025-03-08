import React from "react";
import Image from "next/image";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import brands from "@/BRANDS_DATA.json";

export default function TopBrands() {
  return (
    <div className="h-96 bg-black flex flex-col justify-center items-center p-6 my-12">
      <h2 className="text-3xl font-bold text-white text-center mb-12">
        Brands
      </h2>

      <div className="w-full">
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 5 },
            320: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 2, spaceBetween: 15 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
            1280: { slidesPerView: 6, spaceBetween: 30 },
            1536: { slidesPerView: 7, spaceBetween: 35 },
          }}
          spaceBetween={30}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 1200 }}
          speed={2000}
          freeMode={{
            enabled: false,
            momentum: false,
            momentumRatio: 0.5,
          }}
          className="mySwiper flex justify-center"
        >
          {brands.map((e: any) => (
            <SwiperSlide key={e.id}>
              <div className="relative h-[120px] w-[120px] bg-white mx-auto rounded-full">
                <Image
                  src={e.image}
                  alt={"brandimg"}
                  fill
                  style={{ objectFit: "contain" }}
                  className="overflow-hidden rounded-full"
                ></Image>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
