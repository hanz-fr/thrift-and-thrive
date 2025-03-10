"use client";
import React, { use } from "react";

import blogs from "@/BLOGS_DATA.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

export default function DetailBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params); // Unwrap the promise
  const id = resolvedParams.id; // Now you can safely access the id
  const blog = blogs.find((b) => b.id === parseInt(id));

  // Jika blog tidak ditemukan
  if (!blog) {
    return <div className="text-center text-red-500 font-bold text-xl">Blog tidak ditemukan.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 mb-32">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-lg overflow-hidden"
      >
        {blog.images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[400px]">
              <Image
                src={image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Judul Blog */}
      <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>

      {/* Informasi Author & Tanggal */}
      <p className="text-gray-500 text-sm mt-2">
        Ditulis oleh <span className="font-semibold">{blog.author}</span> - {blog.release_date}
      </p>

      {/* Konten Blog */}
      <div className="mt-4 text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
}
