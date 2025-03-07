"use client";

import React, { useRef } from "react";

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
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Fix for navigation buttons not working on first render
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
            <Card>
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
                    <p className="font-normal text-xs">"{e.review}"</p>
                    {/* <span>{e.rating}</span> */}
                    <ReviewStar rating={e.rating} />
                    <p className="font-medium text-xs">{e.username}</p>
                  </span>
                </div>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Navigation Buttons */}
      <Button
        ref={prevRef}
        variant={"ghost"}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
      >
        ⬅
      </Button>
      <Button
        ref={nextRef}
        variant="ghost"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
      >
        ➡
      </Button>
    </>
  );
}
