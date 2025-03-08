'use client';

import React, { useState } from 'react';

// import from other components
import CheckoutItems from './Checkout/CheckoutItems';
import CheckoutForm from './Checkout/CheckoutForm';

export default function CheckoutPage() {
    const [shippingMethod, setShippingMethod] = useState('free');
    const [paymentMethod, setPaymentMethod] = useState('Credit Card');

    const handleShippingChange = (method: string) => {
        setShippingMethod(method);
    };

    const handlePaymentChange = (method: string) => {
        setPaymentMethod(method);
    };

    return (
        <div>
            <h2 className="px-6 sm:px-12 md:px-16 lg:px-6 xl:px-28 flex flex-col mt-6 text-lg sm:text-xl md:text-2xl font-semibold">
                Checkout
            </h2>

            <div className="px-6 sm:px-12 md:px-16 lg:px-6 xl:px-28 flex flex-col lg:flex-row gap-10 my-8">
                <CheckoutForm
                    shippingMethod={shippingMethod}
                    handleShippingChange={handleShippingChange}
                    paymentMethod={paymentMethod}
                    handlePaymentChange={handlePaymentChange}
                />
                <CheckoutItems
                    shippingMethod={shippingMethod}
                    paymentMethod={paymentMethod}
                />
            </div>
        </div>
    );
}
