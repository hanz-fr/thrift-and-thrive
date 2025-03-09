'use client'

import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// import components from heroui
import { Button, Input, Link } from '@heroui/react';

// import icons from react-icons
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export default function RegisterPage() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <div className='flex flex-col md:flex-row min-h-screen justify-center items-center p-6 bg-gray-100 shadow-lg'>
            <div className='w-full md:w-1/2 flex items-center justify-center p-6'>
                <main className="w-full h-full max-w-md">
                    <h6 className='text-sm font-semibold'>Welcome to Thrift and Thrive!</h6>
                    <h1 className="mb-6 text-2xl font-semibold text-gray-800">
                        Create a New Account
                    </h1>
                    <form>
                        <div className="mb-4">
                            <Input
                                label="First Name*"
                                placeholder="Enter your first name"
                                type="text"
                                className="w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                label="Full Name*"
                                placeholder="Enter your full name"
                                type="text"
                                className="w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                label="Username*"
                                placeholder="Enter your username"
                                type="text"
                                className="w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                label="Phone Number*"
                                placeholder="Enter your phone number"
                                type="number"
                                className="w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                label="Email*"
                                placeholder="Enter your email"
                                type="email"
                                className="w-full"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <Input
                                required
                                endContent={
                                    <button
                                        aria-label="toggle password visibility"
                                        className="focus:outline-none"
                                        type="button"
                                        onClick={toggleVisibility}
                                    >
                                        {isVisible ? (
                                            <FaEyeSlash className="text-xl text-gray-500" />
                                        ) : (
                                            <FaEye className="text-xl text-gray-500" />
                                        )}

                                    </button>
                                }
                                label="Password*"
                                placeholder="Enter your password"
                                type={isVisible ? "text" : "password"}
                                className="w-full"
                            />
                        </div>
                        <div>
                            <h6 className='text-sm mb-8'>Already have an account?
                                <Link className='text-sm ml-1 text-[#6A9C89]' href="#" underline="always">
                                    Login
                                </Link>
                            </h6>

                        </div>
                        <Button type='submit' className='w-full h-12 px-4 py-2 text-md text-white bg-[#16423C]'>
                            Register
                        </Button>
                    </form>
                </main>
            </div>

            <div className='w-full md:w-1/2 hidden md:flex items-center justify-center'>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                    className="w-full max-w-lg"
                >
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://img.freepik.com/free-photo/friends-shopping-second-hand-market_23-2149353748.jpg" alt="Carousel 1" className='h-[500px] w-full object-cover rounded-xl' />
                            <div className="absolute bottom-10 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 rounded-b-lg">
                                <h6 className='text-lg'>Find Your Unique Style</h6>
                                <p className='text-[12px]'>A collection of quality thrift fashion at affordable prices.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://img.freepik.com/free-photo/friends-shopping-second-hand-market_23-2149353732.jpg" alt="Carousel 2" className='h-[500px] w-full object-cover rounded-xl' />
                            <div className="absolute bottom-10 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 rounded-b-lg">
                                <h6 className='text-lg'>Thrifty & Stylish</h6>
                                <p className='text-[12px]'>Shop for high-quality second-hand clothing at the best prices.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative'>
                            <img src="https://img.freepik.com/free-photo/friends-shopping-second-hand-market_23-2149353752.jpg?t=st=1741522224~exp=1741525824~hmac=a0708a36490f5f8c2c0aaa5ce34e85abe296e6f49421ad841e93cc69770e88a8&w=1800" alt="Carousel 3" className='h-[500px] w-full object-cover rounded-xl' />
                            <div className="absolute bottom-10 left-0 w-full bg-black bg-opacity-50 text-white text-center p-2 rounded-b-lg">
                                <h6 className='text-lg'>Support Sustainable Fashion</h6>
                                <p className='text-[12px]'>Be stylish without harming the environment with the best thrift options.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
