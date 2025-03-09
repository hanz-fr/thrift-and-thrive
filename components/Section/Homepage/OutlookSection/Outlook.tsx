import React, { useState } from "react";

import Image from "next/image";

import { Button } from "@heroui/react";

// import icon
import { FaRandom, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { useRouter } from "next/navigation";

export default function OutlookSection() {
  const router = useRouter();
  const [openActionIndex, setOpenActionIndex] = useState<number | null>(null);

  // Fungsi untuk toggle button action berdasarkan indeks
  const toggleAction = (index: number) => {
    setOpenActionIndex(openActionIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 px-6 gap-6 mt-20 sm:mt-40">
      <div className="lg:col-span-2 flex flex-col gap-12">
        <h1 className="text-black text-justify text-[40px] font-bold">
          Sustainable Style Picks - Curated Just for You.
        </h1>

        <div className="flex flex-col gap-2">
          <h3 className="text-black text-justify text-xl">
            Not sure how to style your thrifted finds? We've got you covered!
            Our Outfit Recommendations showcase handpicked looks that blend
            vintage charm with modern trends. Whether you're into casual chic,
            retro vibes, or effortless minimalism, we curate stylish combos
            using second-hand gems—helping you look amazing while making a
            positive impact on the planet.
          </h3>
          <br/>
        </div>
      </div>

      <div className="flex lg:col-start-4 lg:col-end-7 gap-6">
        <div className="flex flex-col items-center md:items-end w-[100%] lg:w-[60%] gap-8 ">
          {/*  */}
          <div key={1} className="flex flex-col w-72 gap-4">
            <div className="relative border h-[350px] rounded-2xl bg-slate-300">
              <Image
                className="overflow-hidden rounded-2xl"
                src={`/img/outfit1.jpg`}
                alt={`outfit1img`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="flex justify-between">
              <button className="flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2">
                Outfit
              </button>

              <div className="relative flex flex-col items-center">
                {/* Animated Buttons */}
                <div
                  className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${
                    openActionIndex === 1
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
                <Button
                  onPress={() => {router.push('/product')}}
                  variant="light"
                  className={`relative px-2 py-2 rounded-bl-xl transition-all duration-300 ${
                    openActionIndex === 1 ? "" : "rounded-tl-xl"
                  }`}
                >
                  Explore
                </Button>
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-black text-lg font-semibold">Stylish</h3>
            </div>
          </div>

          {/*  */}
          <div key={2} className="flex flex-col w-60 gap-4">
            <div className="relative h-72 rounded-2xl bg-slate-300">
              <Image
                className="overflow-hidden rounded-2xl"
                src={`/img/outfit3.jpg`}
                alt={`outfit1img`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="flex justify-between">
              <button className="flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2">
                Outfit
              </button>

              <div className="relative flex flex-col items-center">
                {/* Animated Buttons */}
                <div
                  className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${
                    openActionIndex === 2
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
                <Button
                  onPress={() => {router.push('/product')}}
                  variant="light"
                  className={`relative px-2 py-2 rounded-bl-xl transition-all duration-300 ${
                    openActionIndex === 1 ? "" : "rounded-tl-xl"
                  }`}
                >
                  Explore
                </Button>
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-black text-lg font-semibold">Casual</h3>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-col w-[40%] gap-8">
          {/*  */}
          <div key={3} className="flex flex-col w-60 gap-4">
            <div className="relative border h-72 rounded-2xl bg-slate-300">
              <Image
                className="overflow-hidden rounded-2xl"
                src={`/img/outfit2.jpg`}
                alt={`outfit1img`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="flex justify-between">
              <button className="flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2">
                Outfit
              </button>

              <div className="relative flex flex-col items-center">
                {/* Animated Buttons */}
                <div
                  className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${
                    openActionIndex === 3
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
                <Button
                  onPress={() => {router.push('/product')}}
                  variant="light"
                  className={`relative px-2 py-2 rounded-bl-xl transition-all duration-300 ${
                    openActionIndex === 1 ? "" : "rounded-tl-xl"
                  }`}
                >
                  Explore
                </Button>
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-black text-lg font-semibold">2000's style</h3>
            </div>
          </div>

          {/*  */}
          <div key={4} className="flex flex-col w-60 gap-4">
            <div className="relative border h-72 rounded-2xl bg-slate-300">
              <Image
                className="overflow-hidden rounded-2xl"
                src={`/img/outfit4.jpg`}
                alt={`outfit1img`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="flex justify-between">
              <button className="flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2">
                Outfit
              </button>

              <div className="relative flex flex-col items-center">
                {/* Animated Buttons */}
                <div
                  className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${
                    openActionIndex === 4
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
                <Button
                  onPress={() => {router.push('/product')}}
                  variant="light"
                  className={`relative px-2 py-2 rounded-bl-xl transition-all duration-300 ${
                    openActionIndex === 1 ? "" : "rounded-tl-xl"
                  }`}
                >
                  Explore
                </Button>
              </div>
            </div>
            <div className="flex flex-col ">
              <h3 className="text-black text-lg font-semibold">Minimalism</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
