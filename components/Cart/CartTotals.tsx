import React from 'react'

export default function CartTotals() {
    return (
        <div className="w-full p-6 bg-gray-100 rounded-lg shadow-md self-start">
            <h2 className="text-lg font-semibold mb-4">Cart Totals</h2>

            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Subtotal</span>
                    <span className="text-sm">Rp. 1.000.000</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-sm font-semibold">Total items</span>
                    <span className="text-sm">3</span>
                </div>

                <div className="flex justify-between mt-2">
                    <span className="text-sm font-semibold">Total</span>
                    <span className="text-sm font-bold">Rp. 1.000.000</span>
                </div>
            </div>
        </div>
    );
}
