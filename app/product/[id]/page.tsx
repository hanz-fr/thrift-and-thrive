"use client";

import React from "react";
import ProductCarousel from "@/components/Section/Product/ProductCarousel";

import { Button, Avatar, Card } from "@heroui/react";
import { FaRegHeart } from "react-icons/fa";

export default function ProductDetailPage() {
  return (
    <div className="block sm:flex max-w-7xl mx-auto mt-10 mb-52">
      <ProductCarousel />
      <div className="my-5 sm:my-0"></div>
      <Card className="px-10 py-5">
        <div className="flex flex-col text-start my-5 gap-2">
          <div className="font-bold text-xl sm:text-3xl">Grey Hoodie</div>
          <div className="font-medium text-xl sm:text-xl">Rp. 250.000</div>
          <div className="font-regular text-md flex flex-col gap-1 mt-5">
            <p>
              <b>Size:</b> L
            </p>
            <p>
              <b>Color:</b> Grey
            </p>
            <p>
              <b>Material:</b> Cotton
            </p>
            <p>
              <b>Condition:</b> Gently Used
            </p>
          </div>
          <div className="my-5">
            Looking for a cozy and stylish hoodie? This pre-owned hoodie is in
            good condition, offering warmth and comfort for everyday wear. The
            neutral color makes it easy to pair with any outfit, and the soft
            fabric ensures a comfortable fit.
          </div>
          <div className="flex gap-1 mb-5">
            <Button color="primary" className="bg-black">Buy Now</Button>
            <Button color="primary" className="bg-black">Add to Cart</Button>
            <Button isIconOnly color="primary" className="border-black text-black" variant="bordered">
              <FaRegHeart />
            </Button>
          </div>
          <div className="flex gap-5">
            <Avatar />
            <p className="my-auto">
              by <b>User</b>
            </p>
          </div>
          <div className="text-xs mt-10">
            <p>Posted on 11/03/2025</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
