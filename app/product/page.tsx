"use client";

import { Card, CardHeader, CardBody, Button, Avatar } from "@heroui/react";
import { useState } from "react";

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];

const products = new Array(12).fill({
  name: "Product Name",
  price: "Rp 100.000",
});

export default function AllProducts() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex gap-8">
      {/* filter */}
      <aside className="w-1/4 hidden md:block">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="flex flex-col gap-4">
            {categories.map((category, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className={`w-full text-left py-2 ${
                    selectedCategory === category
                      ? "bg-gray-200"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col p-4 drop-shadow-md rounded-lg">
            <>

            </>
        </div>
      </aside>

      {/* Product List */}
      <main className="w-full md:w-3/4">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="shadow-md">
              <CardHeader>
                <div className="w-full h-40 bg-gray-300 rounded-md"></div>
              </CardHeader>
              <CardBody>
                <h4 className="font-semibold">{product.name}</h4>
                <p className="text-gray-600">{product.price}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
