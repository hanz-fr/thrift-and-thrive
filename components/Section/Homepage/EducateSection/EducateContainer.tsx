import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

export default function EducateContainer() {
  return (
    <div className="bg-[#0C131C] p-5 flex flex-col gap-3 overflow-hidden mb-28">
      <div className="max-w-7xl mx-auto flex-col sm:gap-8 sm:flex sm:flex-row-reverse justify-between">
        <div className="grid grid-cols-3 sm:grid-cols-2 place-items-center lg:grid-cols-3 sm:gap-x-5 gap-y-4 mb-8 h-72 sm:h-full overflow-hidden sm:overflow-visible">
          <div data-aos="fade-up" className="flex flex-col gap-5">
            <div className="relative w-[100px] h-32 sm:w-[180px] sm:h-[270px] bg-slate-200 rounded-lg ">
              <Image
                className="overflow-hidden rounded-lg"
                src={"/img/fastfashion.jpg"}
                alt={`ecofashionimg`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="relative w-[100px] h-32 sm:w-[180px] sm:h-[270px] bg-slate-200 rounded-lg">
              <Image
                className="overflow-hidden rounded-lg"
                src={"/img/slowfashion.jpg"}
                alt={`ecofashionimg`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="relative w-[100px] h-32 sm:w-[180px] sm:h-[270px] bg-slate-200 rounded-lg">
              <Image
                className="overflow-hidden rounded-lg"
                src={"/img/upcycling.jpg"}
                alt={`ecofashionimg`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="relative w-[100px] h-32 sm:w-[180px] sm:h-[270px] bg-slate-200 rounded-lg">
              <Image
                className="overflow-hidden rounded-lg"
                src={"/img/fastfashion2.jpg"}
                alt={`ecofashionimg`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="relative w-[100px] h-32 sm:w-[180px] sm:h-[270px] bg-slate-200 rounded-lg">
              <Image
                className="overflow-hidden rounded-lg"
                src={"/img/thrift.jpg"}
                alt={`ecofashionimg`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="relative w-[100px] h-32 sm:w-[180px] sm:h-[270px] bg-slate-200 rounded-lg">
              <Image
                className="overflow-hidden rounded-lg"
                src={"/img/polyester.jpg"}
                alt={`ecofashionimg`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="flex flex-col gap-5 -translate-y-20"
          >
            <div className="relative w-[100px] h-32 sm:w-[180px] sm:h-[270px] bg-slate-200 rounded-lg">
              <Image
                className="overflow-hidden rounded-lg"
                src={"/img/fastfashion3.jpg"}
                alt={`ecofashionimg`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="relative w-[100px] h-32 sm:w-[180px] sm:h-[270px] bg-slate-200 rounded-lg">
              <Image
                className="overflow-hidden rounded-lg"
                src={"/img/econyl.jpg"}
                alt={`ecofashionimg`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
            <div className="relative w-[100px] h-32 sm:w-[180px] sm:h-[270px] bg-slate-200 rounded-lg">
              <Image
                className="overflow-hidden rounded-lg"
                src={"/img/fastfashion4.jpg"}
                alt={`ecofashionimg`}
                fill
                style={{ objectFit: "cover" }}
              ></Image>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 my-auto sm:w-1/2">
          <div className="font-medium text-white text-2xl sm:text-[40px] leading-relaxed">
            It's not just about keeping up with the trends, but also saving the
            environment.
          </div>

          <div className="text-white font-normal">
            Learn more about the eco-friendly fashion from our latest article,
            blog, videos, and more. Explore the interesting topics such as
            recycle-able fashion, organic clothing, and slow fashion.
          </div>
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
