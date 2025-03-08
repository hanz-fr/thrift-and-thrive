'use client'

import React, { useState } from 'react'

// import from other components
import CartItems from './Cart/CartItems'
import CartTotals from './Cart/CartTotals'

// import button from heroui
import { Button } from "@heroui/react";

export default function CartPage() {
    const [isLoading, setIsLoading] = useState(false);

    const handleBuyNow = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            alert("Purchase successful!");
        }, 2000);
    };

    return (
        <div className='px-6 sm:px-12 md:px-16 lg:px-6 xl:px-28 flex flex-col p-6 my-8'>
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">My Cart</h1>
            <div className="py-6">
                <h5 className="text-sm">Total Product in Cart: 3</h5>
                <hr className="h-px my-2 bg-gray-500 border-0" />
            </div>

            <div className='flex flex-col lg:flex-row gap-6'>
                <CartItems />
                <div className='flex flex-col gap-4 w-full lg:w-1/3'>
                    <CartTotals />
                    <Button
                        className='mt-2 w-full py-3 font-semibold text-white bg-[#16423C] shadow-md'
                        radius='sm'
                        isLoading={isLoading}
                        onClick={handleBuyNow}
                    >
                        {isLoading ? "Processing..." : "Checkout"}
                    </Button>
                </div>
            </div>
        </div>
    )
}
