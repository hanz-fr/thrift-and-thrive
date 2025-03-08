'use client';

import React from 'react';

// import icon from react-icons
import { FaTrash } from 'react-icons/fa';
import { FiMinus, FiPlus } from 'react-icons/fi';

export default function CartItems() {
    return (
        <div className="flex flex-col gap-4 flex-1">
            {[...Array(3)].map((_, i) => (
                <div key={i} className="flex flex-wrap items-center p-4 bg-gray-200 rounded-lg shadow-md gap-4 sm:gap-6">
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
    );
}
