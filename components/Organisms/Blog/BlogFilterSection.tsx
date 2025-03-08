"use client"

import React, { useState } from 'react'

//import component 
import { Input } from "@heroui/react";
import { motion } from "framer-motion";

// import icon
import { RiFilterLine } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";


export default function BlogFilterSection() {
    const [OpenFilter, setOpenFilter] = useState(false)

    return (
        <div className='flex flex-col px-6'>
            <div className='flex flex-col md:flex-row items-center justify-between py-2 gap-4'>
                <h2 className='text-3xl font-bold' >Blogs</h2>
                <div className='flex items-center gap-2'>
                    <Input size='sm' variant='underlined' placeholder='Masukan Keyword' />
                    <button className='py-2 px-3 bg-black text-white rounded-lg'>
                        <FaSearch />
                    </button>
                    <button onClick={() => setOpenFilter(!OpenFilter)} className='py-2 px-3 bg-black text-white rounded-lg'>
                        <RiFilterLine />
                    </button>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, height: 0 }} // Mulai dari 0 tinggi dan opacity
                animate={{ opacity: OpenFilter ? 1 : 0, height: OpenFilter ? "auto" : 0 }} // Tinggi auto jika aktif
                exit={{ opacity: 0, height: 0 }} // Saat ditutup, tinggi kembali 0
                transition={{ duration: 0.3, ease: "easeOut" }} // Animasi smooth
                className="overflow-hidden mt-4 bg-white rounded-lg"
            >
                <h3 className='text-lg font-semibold'>Kategori</h3>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2">
                    <div className='flex gap-4 flex-wrap'>
                        <a className='py-1 px-4 border border-black rounded-full hover:text-white hover:bg-black'>Kreasi Fashion</a>
                        <a className='py-1 px-4 border border-black rounded-full hover:text-white hover:bg-black'>Teknologi & Inovasi</a>
                        <a className='py-1 px-4 border border-black rounded-full hover:text-white hover:bg-black'>Gaya Hidup Berkelanjutan</a>
                        <a className='py-1 px-4 border border-black rounded-full hover:text-white hover:bg-black'>Bahan Ramah Lingkungan</a>
                        <a className='py-1 px-4 border border-black rounded-full hover:text-white hover:bg-black'>Brand Berkelanjutan</a>
                        <a className='py-1 px-4 border border-black rounded-full hover:text-white hover:bg-black'>Gerakan Hijau</a>
                        <a className='py-1 px-4 border border-black rounded-full hover:text-white hover:bg-black'>Fashion Circular Economy</a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
