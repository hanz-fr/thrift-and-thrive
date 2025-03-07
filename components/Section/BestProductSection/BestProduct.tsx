"use client";

import React, { useRef } from "react";

// import component from heroui
import { Button } from "@heroui/react";

// import icons from react-icons
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

// import Swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation } from "swiper/modules";

export default function BestProduct() {
    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="flex flex-col gap-6 items-center px-6 my-28">
            <div className="text-left self-start">
                <h2 className="text-2xl font-bold">Best Products</h2>
                <p className="text-sm text-gray-500">The standard chunk of Lorem Ipsum used</p>
            </div>

            <div className="relative w-full max-w-2xl flex justify-center items-center">
                <button
                    ref={prevRef}
                    className="hidden sm:flex  absolute left-[-40px] sm:left-[-50px] md:left-[-80px] lg:left-[-110px] z-10 bg-black text-white p-3 rounded-full shadow-lg"
                >
                    <IoMdArrowBack size={20} />
                </button>

                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    modules={[EffectCoverflow, Navigation]}
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
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        320: { slidesPerView: 2 },
                        480: { slidesPerView: 3 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="mySwiper"
                >
                    {Array.from({ length: 9 }).map((_, index) => (
                        <SwiperSlide key={index} className="justify-center">
                            <img
                                src={`https://i.pinimg.com/736x/cc/72/cd/cc72cd3a65438411ad550f0de850f5fc.jpg`}
                                alt={`Slide ${index + 1}`}
                                className="w-[180px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-[250px] sm:h-[280px] md:h-[320px] object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button
                    ref={nextRef}
                    className="hidden sm:flex  absolute right-[-40px] sm:right-[-50px] md:right-[-80px] lg:right-[-110px] z-10 bg-black text-white p-3 rounded-full shadow-lg"
                >
                    <IoMdArrowForward size={20} />
                </button>
            </div>
        </div>
    );
}
