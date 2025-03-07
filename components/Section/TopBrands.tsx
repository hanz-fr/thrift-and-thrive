import React from 'react';

// import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function TopBrands() {
    return (
        <div className="h-96 bg-gray-200 flex flex-col justify-center items-center p-6">
            <h2 className="text-3xl font-bold text-center mb-12">Brands</h2>

            <div className="w-full max-w-7xl">
                <Swiper
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        320: { slidesPerView: 2 },
                        400: { slidesPerView: 2, spaceBetween: 10 },
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 25 },
                        1024: { slidesPerView: 6, spaceBetween: 30 },
                        1280: { slidesPerView: 7, spaceBetween: 30 },
                    }}
                    spaceBetween={30}
                    loop={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    autoplay={{ delay: 1200 }}
                    speed={2000}
                    freeMode={{
                        enabled: false,
                        momentum: false,
                        momentumRatio: 0.5,
                    }}
                    className="mySwiper flex justify-center"
                >
                    {[...Array(9)].map((_, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-[120px] w-[120px] bg-white mx-auto rounded-full"></div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
