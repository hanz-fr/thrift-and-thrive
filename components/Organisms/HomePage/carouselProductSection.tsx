'use client';

import React, { useState } from 'react';

// import icon 
import { BsArrowUpRight } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";

export default function CarouselProductSection() {
    const [openActionIndex, setOpenActionIndex] = useState<number | null>(null);

    // Fungsi untuk toggle button action berdasarkan indeks
    const toggleAction = (index: number) => {
        setOpenActionIndex(openActionIndex === index ? null : index);
    };

    return (
        <div className='flex flex-col gap-4 px-6 py-8'>
            <div className='flex items-center justify-between '>
                <h1 className='text-xl md:text-2xl font-semibold'>Product Terbaru</h1>
                <button className='flex gap-3 items-center text-sm md:text-base font-semibold text-black border border-black rounded-full py-1 md:py-2 px-4'>
                    Shop Now
                    <BsArrowUpRight />
                </button>
            </div>
            <div className='flex items-center justify-between'>
                <p className='text-xs md:text-base'>The standard chunk of Lorem Ipsum used</p>
                <div className='flex text-xl gap-2'>
                    <FaAngleLeft className='text-gray-500 hover:text-black' />
                    <FaAngleRight className='text-gray-500 hover:text-black' />
                </div>
            </div>
            <div className='flex overflow-x-auto no-scrollbar flex-nowrap gap-8 py-4'>
                {[...Array(16)].map((_, i) => (
                    <div key={i} className='flex flex-col min-w-60 gap-4'>
                        <div className='border h-72 rounded-2xl bg-slate-300'></div>
                        <div className='flex justify-between'>
                            <button className='flex gap-3 items-center text-xs text-black border border-black rounded-full py-0 px-2'>
                                Clothes
                            </button>

                            <div className='relative flex flex-col items-center'>
                                {/* Animated Buttons */}
                                <div
                                    className={`absolute flex flex-col bottom-full left-0 bg-slate-400 rounded-tl-lg overflow-hidden transition-all duration-300 ease-out transform ${openActionIndex === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
                                        }`}
                                >
                                    <button className='px-2 py-2 text-black hover:bg-gray-300'>
                                        <FaRandom />
                                    </button>
                                    <button className='px-2 py-2 text-black hover:bg-gray-300'>
                                        <FaRegHeart />
                                    </button>
                                    <button className='px-2 py-2 text-black hover:bg-gray-300'>
                                        <IoEyeOutline />
                                    </button>
                                </div>

                                {/* Main Button */}
                                <button
                                    onClick={() => toggleAction(i)}
                                    className={`relative px-2 py-2 text-white bg-black rounded-bl-xl transition-all duration-300 ${openActionIndex === i ? '' : 'rounded-tl-xl'
                                        }`}
                                >
                                    <PiShoppingCartLight className='font-bold' />
                                </button>
                            </div>

                        </div>
                        <div className='flex flex-col '>
                            <h3 className='text-black text-lg font-semibold'>Denim Jacket</h3>
                            <p className='text-slate-500'>Rp 1.000.000</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
