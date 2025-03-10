"use client";

import React, { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import Image from "next/image";
import ReviewStar from "./ReviewStar";

// Import from Heroui
import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";

// Import Swiper React components, Styles, and Modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./styles.module.css";

import reviews from "@/REVIEWS_DATA.json";

export default function ReviewCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden my-20 sm:my-44">
      <div className="font-medium text-xl sm:text-[40px] text-center">
        This is what our customer says
      </div>
      <div className="text-sm sm:text-[18px] text-center sm:mt-5">
        An honest review from their perpsective
      </div>
      <div className="flex mt-5 md:mt-10">
        {/* Custom Navigation Buttons */}
        <Button isIconOnly ref={prevRef} variant="faded" className="my-auto">
          <IoMdArrowBack />
        </Button>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
          }}
          loop={true}
          onInit={(swiper) => {
            setTimeout(() => {
              if (swiper?.params?.navigation) {
                Object.assign(swiper.params.navigation, {
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                });
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          className="mySwiper"
        >
          {reviews.map((e: any) => (
            <SwiperSlide className="p-2 justify-center">
              <Card shadow="none" className="bg-[#D9D9D9] h-full">
                <CardBody>
                  <div className="flex gap-5 my-auto items-center mx-auto p-3">
                    <div className="relative hidden sm:flex md:w-32 md:h-24">
                      <Image
                        className="rounded-xl profile-box-shadow"
                        src={'/img/useravatar.jpg'}
                        alt={"user"}
                        fill
                        style={{ objectFit: "cover" }}
                        unoptimized
                      />
                    </div>
                    <span className="flex flex-col w-full gap-2 pl-5 sm:pr-5 sm:pl-0">
                      <p className="font-normal text-sm sm:text-[14px]">
                        "{e.review}"
                      </p>
                      {/* <span>{e.rating}</span> */}
                      <ReviewStar rating={e.rating} />
                      <p className="font-medium text-xs sm:text-[14px]">
                        {e.username}
                      </p>
                    </span>
                  </div>
                </CardBody>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        <Button isIconOnly ref={nextRef} variant="faded" className="my-auto">
          <IoMdArrowForward />
        </Button>
      </div>
    </div>
  );
}
