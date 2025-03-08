'use client';

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
} from "@heroui/react";

interface CheckoutModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function CheckoutModal({ isOpen, setIsOpen }: CheckoutModalProps) {

    return (
        <Modal isOpen={isOpen} onOpenChange={() => setIsOpen(false)}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Order Information</ModalHeader>
                        <ModalBody>
                            <p>
                                Pesanan Anda telah diproses! Terima kasih telah berbelanja dengan kami.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
