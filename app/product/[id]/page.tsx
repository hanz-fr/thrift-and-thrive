"use client";

import React from "react";
import { useParams } from "next/navigation";

// import carousel from other components
import ProductCarousel from "@/components/Section/Product/ProductCarousel";

// import icons from react-icons
import { Button, addToast } from "@heroui/react";
import { FaRegHeart } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

// import tabs from other components
import DetailProductTabs from "@/components/Tabs/DetailProductTabs";

// import product detail data from json file
import product_detail from "@/PRODUCTS_DATA.json";

export default function ProductDetailPage() {

  // handle add to wishlist
  const handleWishlistClick = () => {
    addToast({
      title: "Added to Wishlist",
      description: "This product has been added to your wishlist!",
      timeout: 3000,
      shouldShowTimeoutProgress: true,
      color: "success",
    });
  };

  // handle add to cart
  const handleAddToCartClick = () => {
    addToast({
      title: "Added to Cart",
      description: "This product has been added to your cart!",
      timeout: 3000,
      shouldShowTimeoutProgress: true,
      color: "success",
    });
  };

  // get id by params
  const params = useParams<{ id: string }>();
  const product = product_detail.find((p) => p.id === parseInt(params.id));

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-20 p-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex flex-col items-center">

        <ProductCarousel images={product?.images || []} />

        <div className="flex gap-2 mt-5">
          {product?.images?.slice(0, 4).map((img, index) => (
            <div key={index} className="w-20 h-20 rounded-md">
              <img src={img} alt={`Thumbnail ${index}`} className="" />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <h1 className="text-2xl font-bold">{product?.clothes}</h1>
        <p className="text-xl font-semibold">Rp{product?.price}</p>
        <p className="text-gray-500">{product?.long_description}</p>

        <div>
          <h2 className="font-semibold">Product Specifications</h2>
          <ul className="list-disc pl-5 text-gray-600">
            {Object.entries(product?.specifications || {}).map(([key, value]) => (
              <li key={key}>
                <b>{key}:</b> {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" color="primary" className="bg-[#16423C]">
            BUY NOW
          </Button>
          <Button size="sm" color="primary" className="bg-[#16423C]" onPress={handleAddToCartClick}>
            ADD TO CART
          </Button>
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
          <p>
            <b>Category:</b> {product?.category}
          </p>
          <p>
            <b>Brand:</b> {product?.brand}
          </p>
          <p>
            <b>Origin:</b> {product?.origin}
          </p>
          <p>
            <b>Product Code:</b> {product?.product_code}
          </p>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <IoPersonCircleSharp size={32} />
          <p className="text-lg font-semibold">Post by {product?.post_by}</p>
        </div>
      </div>

      <DetailProductTabs
        descriptionContent={product?.description_content || ""} reviewers={product?.reviewers || ""} reviews={product?.reviews || ""}
      />
    </div>
  );
}
