"use client";

import React, { useState } from "react";

// import from other components
import CartItems from "@/components/Cart/CartItems";
import CartTotals from "@/components/Cart/CartItems";

// import button from heroui
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const handleCheckoutRoute = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/checkout");
    }, 2000);
  };

  return (
    <div className="px-6 sm:px-12 md:px-16 lg:px-6 xl:px-28 flex flex-col p-6 my-8">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold">My Cart</h1>
      <div className="py-6">
        <h5 className="text-sm">Total Product in Cart: 3</h5>
        <hr className="h-px my-2 bg-gray-500 border-0" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <CartItems />
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <CartTotals />
          <Button
            className="mt-2 w-full py-3 font-semibold text-white bg-[#16423C] shadow-md"
            radius="sm"
            isLoading={isLoading}
            onPress={handleCheckoutRoute}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Checkout"}
          </Button>
        </div>
      </div>
    </div>
  );
}
