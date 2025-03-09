import React from 'react'

export default function BlogHeroSection() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>
            <div className='order-2 md:order-1 flex flex-col p-10 gap-4'>
                <h1 className='text-black text-4xl font-bold'>Fashion <span className='text-gray-600'>Berkelanjutan</span>,<br /> <span className='text-gray-600'>Masa Depan </span>Lebih Hijau</h1>
                <p className='w-4/5 text-gray-500 text-justify font-semibold'>Temukan inovasi pakaian ramah lingkungan yang menginspirasi perubahan positif untuk bumi</p>
                <button className='text-lg font-semibold w-fit py-2 px-5 text-black border border-black rounded-full'>
                    Mari Jelajahi
                </button>
            </div>
            <div className='order-1 md:order-2 flex justify-center items-center'>
                <img className='max-w-[50%]' src="/images/blog/hero_img.jpg" alt="" />
            </div>
        </div>
    )
}
