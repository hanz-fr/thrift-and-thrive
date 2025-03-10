'use client';

import React from 'react';

// import components from heroui
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "@heroui/react";

interface FormTradeProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    product: any | null;
}

const FormTradeProductModal: React.FC<FormTradeProductModalProps> = ({ isOpen, onClose, onConfirm, product }) => {
    return (
        <Modal size='lg' isOpen={isOpen} onOpenChange={onClose}>
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">Trade Product</ModalHeader>
                    <ModalBody>
                        <p>Are you sure you want to trade this product?</p>
                        {product && (
                            <div className="flex items-center gap-4 mt-4">
                                <img src={`/img/${product.image}`} alt={product.clothes} className="w-16 h-16 object-cover rounded-md" />
                                <div>
                                    <p className="font-semibold">{product.clothes}</p>
                                    <p className="text-sm text-gray-500">Rp. {product.price.toLocaleString()}</p>
                                </div>
                            </div>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Cancel
                        </Button>
                        <Button className='bg-[#16423C] text-white' onPress={onConfirm}>
                            Confirm Trade
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    );
};

export default FormTradeProductModal;
