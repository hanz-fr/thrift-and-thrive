"use client";

import React from "react";
import ProductCarousel from "@/components/Section/Product/ProductCarousel";
import { Button, addToast } from "@heroui/react";
import { FaRegHeart } from "react-icons/fa";

export default function ProductDetailPage() {
  const handleWishlistClick = () => {
    addToast({
      title: "Added to Wishlist",
      description: "This product has been added to your wishlist!",
      timeout: 3000,
      shouldShowTimeoutProgress: true,
    });
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-20 p-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex flex-col items-center">
        <ProductCarousel />
        <div className="flex gap-2 mt-5">
          <div className="w-20 h-20 border rounded-md"></div>
          <div className="w-20 h-20 border rounded-md"></div>
          <div className="w-20 h-20 border rounded-md"></div>
          <div className="w-20 h-20 border rounded-md flex items-center justify-center">
            ▶
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="text-2xl font-bold">Denim Jacket</h1>
        <p className="text-lg font-semibold">Rp4,500,000</p>
        <p className="text-gray-500">
          A high-quality denim jacket made from thick and comfortable fabric, perfect for casual and semi-formal styles.
        </p>

        <div>
          <h2 className="font-semibold">Product Specifications</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Material: 100% Premium Denim</li>
            <li>Color: Dark Blue</li>
            <li>Sizes: S, M, L, XL</li>
            <li>Unisex design, suitable for men & women</li>
            <li>Care Instructions: Hand wash only, do not bleach</li>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <Button color="primary" className="bg-[#16423C]">BUY NOW</Button>
          <Button color="primary" className="bg-[#16423C]">ADD TO CART</Button>
          <Button
            isIconOnly
            color="primary"
            className="border-gray-400 text-gray-600"
            variant="bordered"
            onPress={handleWishlistClick}
          >
            <FaRegHeart />
          </Button>
        </div>

        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <p><b>Category:</b> Clothes</p>
          <p><b>Origin:</b> Indonesia</p>
          <p><b>Product Code:</b> DJ-009</p>
        </div>
      </div>

      <div className="col-span-2 flex gap-1 mt-10 border-t">
        <button className="flex-1 py-3 text-center bg-green-500 text-white">DESCRIPTION</button>
        <button className="flex-1 py-3 text-center border">REVIEWS (12)</button>
      </div>
    </div>
  );
}
