'use client';

import React, { useState } from 'react';
import { Button, Input } from "@heroui/react";
import CheckoutModal from '../Modal/CheckoutModal';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
}

interface CheckoutItemsProps {
    shippingMethod: string;
    paymentMethod: string;
}

export default function CheckoutItems({ shippingMethod, paymentMethod }: CheckoutItemsProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const products: Product[] = [
        { id: 1, name: "Men Top Black Puffed Jacket", category: "Clothes", price: 1000000, quantity: 1, image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695659049-screen-shot-2023-09-25-at-12-09-40-pm-6511b418132ae.png?crop=1xw:1xh;center,top&resize=980:*" },
        { id: 2, name: "Women Jacket", category: "Clothes", price: 1000000, quantity: 1, image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1695659049-screen-shot-2023-09-25-at-12-09-40-pm-6511b418132ae.png?crop=1xw:1xh;center,top&resize=980:*' },
    ];

    const subtotal = products.reduce((acc, product) => acc + product.price, 0);
    const shippingCost = shippingMethod === 'express' ? 16000 : 0;
    const estimatedTaxes = 12000;
    const total = subtotal + shippingCost + estimatedTaxes;

    const handleCheckout = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsModalOpen(true);
        }, 2000);
    };

    return (
        <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

            <div className="space-y-4">
                {products.map((product) => (
                    <div key={product.id} className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gray-300 rounded"></div>
                        <div>
                            <p className="text-sm font-semibold">{product.name}</p>
                            <p className="text-xs text-gray-500">{product.category}</p>
                            <p className="text-sm font-bold text-[#6A9C89]">Rp. {product.price.toLocaleString()}</p>
                        </div>
                    </div>
                ))}
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
                    <span className="text-sm font-semibold">Payment</span>
                    <span className="text-sm">{paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Estimated Taxes</span>
                    <span className="text-sm">Rp. {estimatedTaxes.toLocaleString()}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Total</span>
                    <span className="text-lg font-bold text-[#6A9C89]">Rp. {total.toLocaleString()}</span>
                </div>
            </div>

            <Button
                className="mt-6 w-full py-3 font-semibold text-white bg-[#16423C]"
                isLoading={isLoading}
                onPress={handleCheckout}
            >
                {isLoading ? "Loading..." : "Checkout and Place Order"}
            </Button>

            {isModalOpen && (
                <CheckoutModal
                    isOpen={isModalOpen}
                    setIsOpen={setIsModalOpen}
                    subtotal={subtotal}
                    shippingCost={shippingCost}
                    estimatedTaxes={estimatedTaxes}
                    total={total}
                    products={products}
                />
            )}
        </div>
    );
}
