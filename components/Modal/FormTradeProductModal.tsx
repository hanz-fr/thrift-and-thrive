"use client";

import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Textarea,
    Select,
    SelectItem
} from "@heroui/react";

interface TradeProductModalProps {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
    product?: {
        image: string;
        clothes: string;
        price: number;
    };
}

export default function FormTradeProductModal({ isOpen, onOpenChange, product }: TradeProductModalProps) {
    return (
        <Modal size="lg" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Offer a Trade</ModalHeader>
                        <ModalBody>
                            <p className="text-gray-700">
                                Choose an item from your collection to offer as a trade for:
                            </p>
                            {product && (
                                <div className="flex items-center gap-4 mt-4">
                                    <img src={`/img/${product.image}`} alt={product.clothes} className="w-16 h-16 object-cover rounded-md" />
                                    <div>
                                        <p className="font-semibold">{product.clothes}</p>
                                        <p className="text-sm text-gray-500">Rp. {product.price}</p>
                                    </div>
                                </div>
                            )}

                            <div className="mt-4">
                                <Select placeholder="Select your item to trade" className="w-full">
                                    <SelectItem>T-Shirt - Black</SelectItem>
                                    <SelectItem>Hoodie - Navy Blue</SelectItem>
                                    <SelectItem>Jeans - Slim Fit</SelectItem>
                                    <SelectItem>Sneakers - White</SelectItem>
                                    <SelectItem>Cap - Red</SelectItem>
                                </Select>
                            </div>

                            <div className="mt-4">
                                <Textarea
                                    placeholder="Add any special requests or notes for this trade..."
                                    className="w-full"
                                />
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button className='bg-[#16423C] text-white' onPress={onClose}>
                                Confirm Trade
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
