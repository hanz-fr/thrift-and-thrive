'use client';

import React, { useState } from 'react';
import { Pagination } from '@heroui/react';
import { BsHeartFill } from "react-icons/bs";
import DeleteInWishlist from '../Modal/DeleteInWishlist';

export default function WishlistItems() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    const handleDeleteClick = (item: number) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col p-8 my-12">
            <div>
                <h1 className="text-xl md:text-2xl font-semibold">My Wishlist</h1>
            </div>

            <div className="px-12 sm:px-16 md:px-24 lg:px-6 xl:px-28 py-8 flex flex-col gap-10">
                <div>
                    <h5 className="text-sm">Total Wishlist: 0</h5>
                    <hr className="h-px my-2 bg-gray-500 border-0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className="flex flex-col border rounded-2xl overflow-hidden">
                            <div className="h-64 bg-gray-300"></div>
                            <div className="p-3 flex justify-between items-center bg-gray-100">
                                <div>
                                    <h3 className="text-sm font-semibold">Product Name</h3>
                                    <p className="text-xs text-gray-500">Rp.</p>
                                </div>
                                <button onClick={() => handleDeleteClick(i)}>
                                    <BsHeartFill color='red' />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='self-center'>
                    <Pagination size='sm' color='primary' showControls initialPage={1} total={10} />
                </div>
            </div>

            <DeleteInWishlist
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                item={selectedItem}
            />
        </div>
    );
}
