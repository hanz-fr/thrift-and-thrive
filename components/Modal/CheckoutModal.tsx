'use client';
import React, { useState } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Spinner } from "@heroui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import OrderSuccessfulModal from './OrderSuccessfulModal';

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
}

interface CheckoutModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    products: Product[];
    subtotal: number;
    shippingCost: number;
    estimatedTaxes: number;
    total: number;
}

export default function CheckoutModal({ isOpen, setIsOpen, products, subtotal, shippingCost, estimatedTaxes, total }: CheckoutModalProps) {
    const [IsLoading, setIsLoading] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleConfirmOrder = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccessModalOpen(true);
        }, 2000);
    };

    const handleCloseAll = () => {
        setIsOpen(false);
        setIsSuccessModalOpen(false);
    };

    return (
        <>
            <Modal size='xl' isOpen={isOpen} placement='center' onOpenChange={setIsOpen}>
                <ModalContent className="rounded-lg shadow-lg">
                    {(onClose) => (
                        <>
                            <ModalHeader className="text-gray-800 font-bold text-lg">
                                Confirm Your Order
                            </ModalHeader>
                            <ModalBody className="p-6">
                                <p className="text-gray-600 text-sm">
                                    Please review your order details before confirming.
                                </p>
                                <div className="mt-4 space-y-2">
                                    <h3 className="text-sm font-semibold text-gray-700">Products in your cart:</h3>
                                    <div className="max-h-60 overflow-y-auto border rounded-md p-2 bg-gray-100">
                                        {products.map((product) => (
                                            <div key={product.id} className="flex items-center gap-3 border-b py-3 px-2 bg-white rounded-md shadow-sm">
                                                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                                                <div className="flex flex-col flex-grow">
                                                    <span className="text-sm font-medium text-gray-700">{product.name}</span>
                                                    <span className="text-xs text-gray-500">x{product.quantity}</span>
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">Rp. {(product.price * product.quantity).toLocaleString()}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2 text-gray-800">
                                    <div className="flex justify-between">
                                        <span className="text-sm font-semibold">Subtotal</span>
                                        <span className="text-sm">Rp. {subtotal.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-sm font-semibold">Shipping Cost</span>
                                        <span className="text-sm">Rp. {shippingCost.toLocaleString()}</span>
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
                            </ModalBody>
                            <ModalFooter className="flex justify-center gap-4">
                                <Button color="danger" onPress={onClose} disabled={IsLoading}>
                                    <AiFillCloseCircle className="w-5 h-5 mr-1 inline text-white" /> Cancel
                                </Button>
                                <Button
                                    className='text-white bg-[#16423C]'

                                    onPress={handleConfirmOrder}
                                    isLoading={IsLoading}
                                >
                                    {IsLoading ? "Loading..." : "Place Order"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>

            <OrderSuccessfulModal
                isOpen={isSuccessModalOpen}
                setIsOpen={setIsSuccessModalOpen}
                onCloseAll={handleCloseAll}
            />
        </>
    );
}