import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules 
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function BestProduct() {
    return (
        <div className='min-h-[90vh] flex flex-col gap-6 px-6 mt-12'>
            <div>
                <h2 className='text-2xl font-bold '>Best Products</h2>
                <p className='text-sm text-gray-500'>The standard chunk of Lorem Ipsum used</p>
            </div>

            <div className="w-full max-w-7xl ">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 0,
                        modifier: 1,
                    }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper flex justify-center"
                >
                    {Array.from({ length: 9 }).map((_, index) => (
                        <SwiperSlide key={index} className="">
                            <img
                                src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
                                alt={`Slide ${index + 1}`}
                                className="w-[230px] h-[300px] object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
