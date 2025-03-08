import React from 'react';
import { Button } from '@heroui/react';

export default function HeroSection() {
    return (
        <section className='relative w-full min-h-[90vh] flex justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden'>
            <div className="absolute top-12 left-36 w-32 h-40 bg-gray-300 rounded-lg opacity-50 hidden sm:block"></div>
            <div className="absolute top-10 right-36 w-44 h-64 bg-gray-300 rounded-lg opacity-50 hidden sm:block"></div>
            <div className="absolute top-80 left-72 w-40 h-60 bg-gray-300 rounded-lg opacity-50 hidden sm:block"></div>
            <div className="absolute top-96 right-60 w-60 h-40 bg-gray-300 rounded-lg opacity-50 hidden sm:block"></div>

            <div className='relative flex flex-col items-center text-center gap-y-6'>
                <h1 className='text-4xl sm:text-5xl md:text-5xl font-extrabold text-black leading-tight max-w-3xl'>
                    Lorem Ipsum is simply dummy text of the printing and
                </h1>
                <p className='text-sm md:text-sm text-gray-600 max-w-lg'>
                    There are many variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form.
                </p>
                <Button className='bg-black text-white' size='md' radius='full'>Shop now</Button>
            </div>
        </section>
    );
}