// OrderSuccessfulModal.tsx
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@heroui/react';
import { AiFillCheckCircle } from 'react-icons/ai';

interface OrderSuccessfulModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    onCloseAll: () => void;
}

export default function OrderSuccessfulModal({ isOpen, setIsOpen, onCloseAll }: OrderSuccessfulModalProps) {
    return (
        <Modal size='md' isOpen={isOpen} placement='center' onOpenChange={() => setIsOpen(false)}>
            <ModalContent className="rounded-lg shadow-lg">
                {(onClose) => (
                    <>
                        <ModalHeader className="text-center text-gray-800 font-bold text-lg">
                            Order Successful!
                        </ModalHeader>
                        <ModalBody className="p-6 flex flex-col items-center text-green-600">
                            <AiFillCheckCircle className="w-16 h-16 mb-3" />
                            <p className="text-lg font-medium text-gray-700 text-center">
                                Thank you! Your order has been placed successfully.
                            </p>
                        </ModalBody>
                        <ModalFooter className="flex justify-center">
                            <Button color="success" className="text-white" onPress={onCloseAll}>
                                OK
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}