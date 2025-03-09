"use client";

import React, { useState } from "react";

// import icon from react-icons
import { BsTrash } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";

// import modal from other components
import DeleteInCartModal from "../Modal/DeleteInCartModal";

interface CartItem {
    id: number;
    image: string;
    type: string;
    clothes: string;
    price: number;
}

interface CartItemsProps {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export default function CartItems({ cart, setCart }: CartItemsProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<CartItem | null>(null);

    const handleDeleteClick = (product: CartItem) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleConfirmDelete = () => {
        if (selectedProduct !== null) {
            setCart(cart.filter((product) => product.id !== selectedProduct.id));
        }
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="flex flex-col gap-4 flex-1">
                {cart.length > 0 ? (
                    cart.map((product) => (
                        <div
                            key={product.id}
                            className="flex flex-wrap items-center p-4 bg-gray-200 rounded-lg shadow-md gap-4 sm:gap-6"
                        >
                            <div className="w-20 h-20 bg-gray-400 rounded overflow-hidden">
                                <img
                                    src={`/img/${product.image}`}
                                    alt={product.clothes}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="flex-1 flex flex-col gap-2 min-w-[150px]">
                                <h3 className="text-sm font-semibold">{product.clothes}</h3>
                                <p className="text-xs text-gray-500">Stock</p>
                                <p className="text-sm font-semibold">
                                    Rp. {product.price.toLocaleString()}
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => handleDeleteClick(product)}
                                    className="text-gray-600 hover:text-red-600"
                                >
                                    <BsTrash size={14} />
                                </button>
                                <div className="flex items-center gap-2 border p-1 rounded-lg">
                                    <button className="p-1 hover:bg-gray-300 rounded-md">
                                        <FiMinus size={14} />
                                    </button>
                                    <span className="text-sm w-6 text-center">1</span>
                                    <button className="p-1 hover:bg-gray-300 rounded-md">
                                        <FiPlus size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Your cart is empty.</p>
                )}
            </div>

            {isModalOpen && (
                <DeleteInCartModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleConfirmDelete}
                    product={selectedProduct}
                />
            )}
        </>
    );
}
