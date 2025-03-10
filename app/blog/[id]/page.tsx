"use client";

import React from 'react';
import blogs from "@/BLOGS_DATA.json";
import Image from "next/image";

export default function DetailBlogPage({ params }: { params: { id: string } }) {
  // Unwrap the params object using React.use()
  const unwrappedParams = React.use(params);
  const blog = blogs.find((b) => b.id === parseInt(unwrappedParams.id));

  // Jika blog tidak ditemukan
  if (!blog) {
    return <div className="text-center text-red-500 font-bold text-xl">Blog tidak ditemukan.</div>;
  }

  return (
    <div className="text-[#16423C] max-w-4xl mx-auto p-6">
      {/* Judul Blog */}
      <h1 className="text-3xl font-bold mt-4">{blog.title}</h1>

      {/* Informasi Author & Tanggal */}
      <p className="text-gray-500 text-sm mt-2">
        Ditulis oleh <span className="font-semibold">{blog.author}</span> - {blog.release_date}
      </p>

      {/* Konten Blog */}
      <div className="mt-4 text-gray-800 leading-relaxed">
        {blog.sections.map((section, index) => (
          <div key={index} className="mb-8">
            {/* Gambar */}
            <div className="w-full h-[300px] relative mb-4">
              <Image
                src={section.image}
                alt={Gambar ${index + 1}}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Paragraf */}
            <div dangerouslySetInnerHTML={{ __html: section.content }} className="text-justify" />
          </div>
        ))}
      </div>
    </div>
  );
}