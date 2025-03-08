'use client';

import React from 'react';
import { Button, Input } from "@heroui/react";

interface CheckoutItemsProps {
    shippingMethod: string;
}

export default function CheckoutItems({ shippingMethod }: CheckoutItemsProps) {
    const subtotal = 2000000;
    const shippingCost = shippingMethod === 'express' ? 16000 : 0;
    const estimatedTaxes = 12000;
    const total = subtotal + shippingCost + estimatedTaxes;

    return (
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>
                    <div>
                        <p className="text-sm font-semibold">Men Top Black Puffed Jacket</p>
                        <p className="text-xs text-gray-500">Clothes</p>
                        <p className="text-sm font-bold">Rp. 1.000.000</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>
                    <div>
                        <p className="text-sm font-semibold">Women Jacket</p>
                        <p className="text-xs text-gray-500">Clothes</p>
                        <p className="text-sm font-bold">Rp. 1.000.000</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
                <Input placeholder="Discount code" className="flex-1" />
                <Button className="py-2 px-4 bg-[#16423C] text-white">Apply</Button>
            </div>

            <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Subtotal</span>
                    <span className="text-sm">Rp. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Shipping</span>
                    <span className="text-sm">Rp. {shippingCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Estimated Taxes</span>
                    <span className="text-sm">Rp. {estimatedTaxes.toLocaleString()}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Total</span>
                    <span className="text-lg font-bold">Rp. {total.toLocaleString()}</span>
                </div>
            </div>

            <Button className="mt-6 w-full py-3 font-semibold text-white bg-[#16423C]">
                Continue to Payment
            </Button>
        </div>
    );
}
