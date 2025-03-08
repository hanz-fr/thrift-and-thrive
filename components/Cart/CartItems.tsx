'use client';

import React, { useState } from 'react';

// import icon from react-icons
import { FaTrash } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';

// import components from heroui
import { Button } from "@heroui/react";

export default function CartItems() {
    const [isLoading, setIsLoading] = useState(false);

    const handleBuyNow = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            alert("Purchase successful!");
        }, 2000);
    };

    return (
        <div className="px-6 sm:px-12 md:px-16 lg:px-6 xl:px-28 flex flex-col p-6 my-8">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">My Cart</h1>

            <div className="py-6">
                <h5 className="text-sm">Total Product in Cart: 0</h5>
                <hr className="h-px my-2 bg-gray-500 border-0" />
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex flex-col gap-4 flex-1">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex flex-wrap items-center p-4 bg-gray-200 rounded-lg gap-4 sm:gap-6">
                            <div className="w-20 h-20 sm:w-20 sm:h-20 bg-gray-400 rounded"></div>

                            <div className="flex-1 flex flex-col gap-2 min-w-[150px]">
                                <h3 className="text-sm font-semibold">Name of Product</h3>
                                <p className="text-xs text-gray-500">Stock</p>
                                <p className="text-sm font-semibold">Rp.1.000.000</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="text-gray-600 hover:text-red-600">
                                    <FaTrash size={14} />
                                </button>
                                <div className="flex items-center gap-2 border p-1 rounded-lg">
                                    <button className="p-1 hover:bg-gray-300 rounded-md">
                                        <FiMinus size={14} />
                                    </button>
                                    <span className='text-sm w-6 text-center'>1</span>
                                    <button className="p-1 hover:bg-gray-300 rounded-md">
                                        <FiPlus size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full lg:w-1/3 p-6 bg-gray-100 rounded-lg self-start">
                    <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>

                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-sm font-semibold">Subtotal</span>
                            <span className="text-sm">Rp. 1.000.000</span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-sm font-semibold">Shipping</span>
                            <span className="text-sm">Free Shipping</span>
                        </div>

                        <div className="flex justify-between mt-2">
                            <span className="text-sm font-semibold">Total</span>
                            <span className="text-sm font-bold">Rp. 1.000.000</span>
                        </div>
                    </div>

                    <Button
                        className='mt-6 w-full py-3 font-semibold text-white bg-[#16423C]'
                        radius='sm'
                        isLoading={isLoading}
                        onClick={handleBuyNow}
                    >
                        {isLoading ? "Processing..." : "Checkout"}
                    </Button>
                </div>
            </div>
        </div>
    );
}
