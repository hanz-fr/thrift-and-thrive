"use client";

import React from "react";

// Import component
import { Pagination } from "@heroui/react";
import { motion } from "framer-motion";

// Import data
import blogs from "@/BLOGS_DATA.json";
import Link from "next/link";

export default function BlogListSection() {
    return (
        <>
            <div className="text-[#16423C] flex flex-col gap-8 py-8 px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.slice(0, 9).map((blog, index) => {
                        // Ambil gambar pertama dari sections sebagai thumbnail
                        const thumbnailImage = blog.sections[0].image;

                        return (
                            <Link href={`/blog/${blog.id}`} key={index}>
                                <motion.div
                                    key={blog.id}
                                    className="flex flex-col shadow-md rounded-xl overflow-hidden bg-white cursor-pointer"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {/* Thumbnail gambar pertama */}
                                    <div
                                        className="w-full h-52 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${thumbnailImage})` }}
                                    ></div>
                                    <div className="p-4">
                                        <h4 className="text-lg font-semibold truncate">{blog.title}</h4>
                                        <p className="text-sm text-gray-600 line-clamp-3">
                                            {/* Ambil konten pertama dan hapus tag HTML */}
                                            {blog.sections[0].content.replace(/<\/?[^>]+(>|$)/g, "").slice(0, 100)}...
                                        </p>
                                    </div>
                                    <div className="px-4 pb-4 flex justify-between text-xs text-gray-500">
                                        <p>{blog.author}</p>
                                        <p>{blog.release_date}</p>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-between bg-white shadow-md p-4 rounded-xl">
                <p>Total blogs: {blogs.length}</p>
                <Pagination
                    classNames={{ cursor: "bg-slate-500" }}
                    showControls
                    initialPage={1}
                    total={Math.ceil(blogs.length / 9)}
                />
            </div>
        </>
    );
}