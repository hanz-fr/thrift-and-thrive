import React, { useState } from 'react'
// Import data dummy
import categories from '@/PREVIEW_CATEGORY_DATA.json'

import { Accordion, AccordionItem } from "@heroui/react";

export default function ProductPreviewByCategory() {
    const [SelectedCategory, setSelectedCategory] = useState<string>('Clothes')

    const selectedCategoryData = categories.find(i => i.category === SelectedCategory);

    return (
        <div className='flex flex-col gap-6 py-8 px-6'>
            {/* Pilihan kategori */}
            <div className="flex overflow-x-auto w-full pl-20 pr-8 py-4 text-sm md:text-lg 
            justify-center md:justify-end gap-6 md:gap-10 
            scroll-smooth snap-x">
                <ul className="inline-flex gap-6 md:gap-10">
                    {categories?.map((res: any, i) => (
                        <li
                            key={i}
                            onClick={() => setSelectedCategory(res?.category)}
                            className={`cursor-pointer transition-all duration-300 ease-in-out 
                whitespace-nowrap snap-start 
                ${i === 0 ? 'first:ml-4' : ''}  
                ${SelectedCategory === res?.category ? 'text-black scale-105 font-bold' : 'text-gray-500 hover:text-black'}`}
                        >
                            {res?.category}
                        </li>
                    ))}
                </ul>
            </div>



            {/* Layout Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                {/* Gambar atau Preview */}
                <div className='order-1 md:order-2 lg:col-span-2 w-full min-h-[500px] md:h-[560px] border rounded-2xl bg-slate-300 transition-all duration-500 ease-in-out transform scale-100 hover:scale-[1.02]'>
                </div>

                {/* Accordion List */}
                <div className='order-2 md:order-1 lg:col-span-3 flex flex-col gap-3'>
                    <Accordion variant='light' className="flex flex-col">
                        {selectedCategoryData?.items?.length > 0 ? (
                            selectedCategoryData.items.map((res, index) => (
                                <AccordionItem
                                    className="opacity-100 animate-fadeIn"
                                    hideIndicator
                                    key={index}
                                    aria-label={`Accordion ${index + 1}`}
                                    title={
                                        <span className="text-3xl md:text-5xl font-bold transition-all duration-500 ease-in-out">
                                            {res.name}
                                        </span>
                                    }
                                >
                                    <p className='text-md'>
                                        {res.sustainability.join(", ")}
                                    </p>
                                </AccordionItem>
                            ))
                        ) : (
                            <p className="text-gray-500">Tidak ada item dalam kategori ini.</p>
                        )}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
