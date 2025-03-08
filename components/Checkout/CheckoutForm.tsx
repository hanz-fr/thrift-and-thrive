'use client';

import React from 'react';
import { Button, Input } from "@heroui/react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaUniversity } from 'react-icons/fa';

interface CheckoutFormProps {
    shippingMethod: string;
    handleShippingChange: (method: string) => void;
    paymentMethod: string;
    handlePaymentChange: (method: string) => void;
}

export default function CheckoutForm({ shippingMethod, handleShippingChange, paymentMethod, handlePaymentChange }: CheckoutFormProps) {
    return (
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="First Name*" placeholder="Enter first name" required />
                <Input label="Last Name*" placeholder="Enter last name" required />
                <Input label="Email*" type="email" placeholder="Enter email" required />
                <Input label="Phone number*" type="tel" placeholder="+62 8123456789" required />
                <Input label="City*" placeholder="Enter city" required />
                <Input label="State*" placeholder="Enter state" required />
                <Input label="Zip Code*" placeholder="Enter zip code" required />
                <Input label="Note*" placeholder="Enter a note..." required />
            </form>

            <h2 className="text-lg font-semibold mt-6 mb-2">Shipping Method</h2>
            <div className="flex gap-4">
                <div
                    className={`border p-4 rounded-lg flex-1 cursor-pointer ${shippingMethod === 'free' ? 'border-black' : 'border-gray-300'}`}
                    onClick={() => handleShippingChange('free')}
                >
                    <p className="text-sm font-semibold">Free Shipping</p>
                    <p className="text-xs text-gray-500">7-20 Days</p>
                    <p className="text-sm font-bold">Rp. 0</p>
                </div>
                <div
                    className={`border p-4 rounded-lg flex-1 cursor-pointer ${shippingMethod === 'express' ? 'border-black' : 'border-gray-300'}`}
                    onClick={() => handleShippingChange('express')}
                >
                    <p className="text-sm font-semibold">Express Shipping</p>
                    <p className="text-xs text-gray-500">1-3 Days</p>
                    <p className="text-sm font-bold">Rp. 16.000</p>
                </div>
            </div>

            <h2 className="text-lg font-semibold mt-6 mb-2">Payment Method</h2>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <div
                    className={`border p-4 md:p-5 h-16 flex items-center justify-center rounded-lg cursor-pointer gap-2 transition ${paymentMethod === 'Credit Card' ? 'border-black' : 'border-gray-300 hover:border-black'
                        }`}
                    onClick={() => handlePaymentChange('Credit Card')}
                >
                    <FaCcVisa className="text-blue-600 text-2xl hidden md:block" />
                    <FaCcMastercard className="text-red-600 text-2xl hidden md:block" />
                    <p className="text-sm font-semibold">Credit Card</p>
                </div>
                <div
                    className={`border p-4 md:p-5 h-16 flex items-center justify-center rounded-lg cursor-pointer gap-2 transition ${paymentMethod === 'PayPal' ? 'border-black' : 'border-gray-300 hover:border-black'
                        }`}
                    onClick={() => handlePaymentChange('PayPal')}
                >
                    <FaCcPaypal className="text-blue-500 text-2xl hidden md:block" />
                    <p className="text-sm font-semibold">PayPal</p>
                </div>
                <div
                    className={`border p-4 md:p-5 h-16 flex items-center justify-center rounded-lg cursor-pointer gap-2 transition ${paymentMethod === 'Bank Transfer' ? 'border-black' : 'border-gray-300 hover:border-black'
                        }`}
                    onClick={() => handlePaymentChange('Bank Transfer')}
                >
                    <FaUniversity className="text-green-600 text-2xl hidden md:block" />
                    <p className="text-sm font-semibold">Bank Transfer</p>
                </div>
            </div>
        </div>
    );
}
