"use client";

import React, { useState, useRef } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";

// Import Swiper React components, Styles, and Modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import styles from "./styles.module.css";

// Import icon
import { BsArrowUpRight } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";

import products from "@/PRODUCTS_DATA.json";

export default function CarouselProductSection() {
  const [openActionIndex, setOpenActionIndex] = useState<number | null>(null);

  // Fungsi untuk toggle button action berdasarkan indeks
  const toggleAction = (index: number) => {
    setOpenActionIndex(openActionIndex === index ? null : index);
  };

  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden flex flex-col gap-4 px-6 py-8 mt-24 sm:mt-40">
      <div className="flex items-center justify-between ">
        <h1 className="text-xl md:text-2xl font-semibold">Latest Product</h1>
        <button className="flex gap-3 items-center text-sm md:text-base font-semibold text-black border border-black rounded-full py-1 md:py-2 px-4">
          Shop Now
          <BsArrowUpRight />
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-xs md:text-base">
          Newly posted product, thrift'em fast!
        </p>
        <div className="flex text-xl gap-2">
          <Button isIconOnly ref={prevRef} variant="light" className="my-auto">
            <FaAngleLeft className="text-2xl text-gray-500 hover:text-black" />
          </Button>
          <Button isIconOnly ref={nextRef} variant="light" className="my-auto">
            <FaAngleRight className="text-2xl text-gray-500 hover:text-black" />
          </Button>
        </div>
      </div>
      <div className="flex overflow-x-auto no-scrollbar flex-nowrap gap-8 py-4">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            640: { slidesPerView: 5 },
          }}
          loop={true}
          spaceBetween={20}
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
        >
          {products.map((e: any) => (
            <SwiperSlide>
              <div key={e.id} className="flex flex-col min-w-60 gap-4">
                <div className="relative border h-72 rounded-2xl bg-slate-300">
                  <Image
                    className="overflow-hidden rounded-2xl"
                    src={`/img/${e.image}`}
                    alt={`${e.clothes}img`}
                    fill
                    style={{objectFit: "cover"}}
                  ></Image>
                </div>
                <div className="flex justify-between">
                  <button className="flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2">
                    {e.type}
                  </button>

                  <div className="relative flex flex-col items-center">
                    {/* Animated Buttons */}
                    <div
                      className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${
                        openActionIndex === e.id
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2 scale-95 pointer-events-none"
                      }`}
                    >
                      <button className="px-2 py-2 text-black hover:bg-gray-300">
                        <FaRandom />
                      </button>
                      <button className="px-2 py-2 text-black hover:bg-gray-300">
                        <FaRegHeart />
                      </button>
                      <button className="px-2 py-2 text-black hover:bg-gray-300">
                        <IoEyeOutline />
                      </button>
                    </div>

                    {/* Main Button */}
                    <button
                      onClick={() => toggleAction(e.id)}
                      className={`relative px-2 py-2 text-white bg-black rounded-bl-xl transition-all duration-300 ${
                        openActionIndex === e.id ? "" : "rounded-tl-xl"
                      }`}
                    >
                      <PiShoppingCartLight className="font-bold" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-black text-lg font-semibold">
                    {e.clothes}
                  </h3>
                  <p className="text-slate-500">Rp.{e.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
