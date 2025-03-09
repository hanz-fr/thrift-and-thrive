'use client';

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "@heroui/react";

interface DeleteInWishlistProps {
    isOpen: boolean;
    onClose: () => void;
    item: number | null;
}

const DeleteInWishlist: React.FC<DeleteInWishlistProps> = ({ isOpen, onClose, item }) => {
    return (
        <Modal isOpen={isOpen} onOpenChange={onClose}>
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">Remove from Wishlist</ModalHeader>
                    <ModalBody>
                        <p>Are you sure you want to remove this product from your wishlist?</p>
                        {item !== null ? <p><strong>Product #{item}</strong></p> : null}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                            Cancel
                        </Button>
                        <Button className='bg-[#16423C] text-white' onPress={onClose}>
                            Remove
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    );
};

export default DeleteInWishlist;
