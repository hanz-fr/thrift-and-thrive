'use client';

import React, { useState } from 'react';

// Import components from HeroUI
import { Pagination } from '@heroui/react';

// Import icons from react-icons
import { BsHeartFill } from "react-icons/bs";

// Import modal component
import DeleteInWishlist from '../Modal/DeleteInWishlist';

// Import products data
import products from '@/PRODUCTS_DATA.json';

export default function WishlistItems() {
    const [wishlist, setWishlist] = useState(products);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    const handleDeleteClick = (product: any) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedProduct !== null) {
            setWishlist(wishlist.filter(product => product.id !== selectedProduct.id));
        }
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col p-8 my-12">
            <div>
                <h1 className="text-xl md:text-2xl font-semibold">My Wishlist</h1>
            </div>

            <div className="px-12 sm:px-16 md:px-24 lg:px-6 xl:px-28 py-8 flex flex-col gap-10">
                <div>
                    <h5 className="text-sm">Total Wishlist: {wishlist.length}</h5>
                    <hr className="h-px my-2 bg-gray-500 border-0" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishlist.length > 0 ? (
                        wishlist.map((product) => (
                            <div key={product.id} className="flex flex-col border rounded-2xl overflow-hidden">
                                <div className="h-64 bg-gray-300 flex items-center justify-center">
                                    <img
                                        src={`/img/${product.image}`}
                                        alt={product.clothes}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-3 flex justify-between items-center bg-gray-100">
                                    <div>
                                        <h3 className="text-sm font-semibold">{product.clothes}</h3>
                                        <p className="text-xs text-gray-500">Rp. {product.price.toLocaleString()}</p>
                                    </div>
                                    <button onClick={() => handleDeleteClick(product)}>
                                        <BsHeartFill color='red' />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">Your wishlist is empty.</p>
                    )}
                </div>
            </div>

            <div className="flex justify-center">
                <Pagination total={wishlist.length} page={8} />
            </div>

            {isModalOpen && (
                <DeleteInWishlist
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleConfirmDelete}
                    product={selectedProduct}
                />
            )}
        </div>
    );
}
