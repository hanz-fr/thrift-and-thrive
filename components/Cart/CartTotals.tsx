'use client'

import React from "react";

interface CartItem {
    id: number;
    image: string;
    type: string;
    clothes: string;
    price: number;
}

interface CartTotalsProps {
    cart: CartItem[];
}

export default function CartTotals({ cart }: CartTotalsProps) {

    const totalPrice = cart.reduce((acc: number, product: CartItem) => acc + product.price, 0);

    const totalItems = cart.length;

    return (
        <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md self-start">
            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>

            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Subtotal</span>
                    <span className="text-sm">Rp. {totalPrice.toLocaleString()}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Total items</span>
                    <span className="text-sm">{totalItems}</span>
                </div>

                <div className="flex justify-between mt-2">
                    <span className="text-sm font-semibold">Total</span>
                    <span className="text-sm font-bold">Rp. {totalPrice.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
}
