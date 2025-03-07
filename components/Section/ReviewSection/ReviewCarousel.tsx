"use client";

import React, { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Card, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./styles.module.css";
import reviews from "@/REVIEWS_DATA.json";

// import required modules
import { Navigation } from "swiper/modules";
import ReviewStar from "./ReviewStar";

export default function ReviewCarousel() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div className="font-medium sm:text-[40px] text-center">
        This is what our customer says
      </div>
      <div className="text-sm sm:text-[18px] text-center">
        An honest review from their perpsective
      </div>
      <div className="flex">
        {/* Custom Navigation Buttons */}
        <Button isIconOnly ref={prevRef} variant="faded" className="my-auto">
          <IoMdArrowBack />
        </Button>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          slidesPerView={2}
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
            <SwiperSlide className="p-2">
              <Card shadow="none" className="bg-[#D9D9D9]">
                <CardBody>
                  <div className="flex gap-5">
                    <div className="w-fit h-fit">
                      <Image
                        className="rounded-xl profile-box-shadow"
                        src={e.image}
                        alt={"user"}
                        width={100}
                        height={100}
                        unoptimized
                      />
                    </div>
                    <span className="flex flex-col w-64 gap-1">
                      <p className="font-normal text-sm sm:text-[14px]">"{e.review}"</p>
                      {/* <span>{e.rating}</span> */}
                      <ReviewStar rating={e.rating} />
                      <p className="font-medium text-xs sm:text-[14px]">{e.username}</p>
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
    </>
  );
}
