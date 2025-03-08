import React from "react";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative max-w-7xl mx-auto overflow-x-hidden min-h-[80vh] flex justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
      <div
        data-aos="fade-up"
        className="absolute top-12 left-36 w-32 h-40 bg-gray-300 rounded-lg opacity-50 hidden sm:block"
      >
        <Image
          className="overflow-hidden rounded-2xl blur-[2px]"
          src={"/img/clothes2.jpg"}
          alt={`clothes2img`}
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div
        data-aos="fade-up"
        className="absolute top-10 right-36 w-44 h-64 bg-gray-300 rounded-lg opacity-50 hidden sm:block"
      >
        <Image
          className="overflow-hidden rounded-2xl blur-[2px]"
          src={"/img/clothes3.jpg"}
          alt={`clothes3img`}
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div
        data-aos="fade-up"
        className="absolute top-80 left-72 w-40 h-60 bg-gray-300 rounded-lg opacity-50 hidden sm:block"
      >
        <Image
          className="overflow-hidden rounded-2xl blur-[2px]"
          src={"/img/clothes4.jpg"}
          alt={`clothes4img`}
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>
      <div
        data-aos="fade-up"
        className="absolute top-96 right-60 w-60 h-40 bg-gray-300 rounded-lg opacity-50 hidden sm:block"
      >
        <Image
          className="overflow-hidden rounded-2xl blur-[2px]"
          src={"/img/clothes5.jpg"}
          alt={`clothes5img`}
          fill
          style={{ objectFit: "cover" }}
        ></Image>
      </div>

      <div className="relative flex flex-col items-center text-center gap-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-black leading-tight max-w-3xl">
          Sustainable Style, Reimagined. Fashion that’s good for the Earth and
          your wallet.
        </h1>
        <p className="text-sm md:text-sm text-gray-600 max-w-lg">
          Explore our curated collection of pre-loved clothing and accessories,
          giving high-quality pieces a second chance. Every purchase helps
          reduce waste and supports a sustainable future for fashion.
        </p>
        <Button className="bg-black text-white" size="md" radius="full">
          Shop now
        </Button>
      </div>
    </section>
  );
}
