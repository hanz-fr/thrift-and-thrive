"use client";

import { useState } from "react";

// import component
import { Card, CardHeader, CardBody, Button, Avatar } from "@heroui/react";

// import data
import products from '@/PRODUCTS_DATA.json'


const categories = [
  "Clothes",
  "Denim Jacket",
  "Sweather",
  "Jeans",
  "Turtle Neck",
];

const RekomendasiProducts = [
  { id: 1, name: "Vintage Denim Jacket", price: "Rp 250.000", image: "/img/clothes2.jpg" },
  { id: 2, name: "Cotton Oversized T-Shirt", price: "Rp 150.000", image: "/img/clothes4.jpg" },
  { id: 3, name: "Retro Sneakers", price: "Rp 300.000", image: "/img/clothes3.jpg" },
  { id: 6, name: "Graphic Print Hoodie", price: "Rp 220.000", image: "/img/clothes5.jpg" }
];

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
                  className={`w-full text-left py-2 ${selectedCategory === category
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

        <hr className="border-2 border-gray-500 mt-6 my-6" />

        <div className="flex flex-col gap-4 p-4 rounded-md">
          {RekomendasiProducts.map((x) => (
            <a key={x.id} href={`/product/${x.id}`} className="unset">
              <Card key={x.id}>
                <CardBody className="flex flex-row shadow-sm items-center gap-4 p-2">
                  <img src={x.image} alt={x.name} className="w-16 h-16 rounded-lg" />
                  <div className="flex flex-col">
                    <h4 className="font-semibold">{x.name}</h4>
                    <p>{x.price}</p>
                  </div>
                </CardBody>
              </Card>
            </a>
          ))}
        </div>
      </aside>

      {/* Product List */}
      <main className="w-full md:w-3/4">
        <h2 className="text-2xl font-bold mb-4">All Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <a key={index} href={`/product/${product.id}`}>
              <Card key={index} className="shadow-md">
                <CardHeader>
                  <img className="w-full h-40 rounded-md object-contain" src={`/img/${product.image}`} alt="" />
                </CardHeader>
                <CardBody>
                  <h4 className="font-semibold">{product.clothes}</h4>
                  <p className="text-gray-600">{product.price}</p>
                </CardBody>
              </Card>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
