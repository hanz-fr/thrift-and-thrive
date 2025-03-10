"use client";

import { Card, CardHeader, CardBody, Avatar, Button, Badge } from "@heroui/react";

const orders = [
    {
        id: 1,
        seller: "EcoWear Thrift",
        status: "Selesai",
        price: "Rp 120.000",
        productName: "Kemeja Linen Daur Ulang",
        productImage: "/images/linen-shirt.jpg",
    },
    {
        id: 2,
        seller: "GreenStyle ID",
        status: "Dikirim",
        price: "Rp 85.000",
        productName: "Kaos Katun Organik",
        productImage: "/images/organic-cotton.jpg",
    },
    {
        id: 3,
        seller: "Recycle Fashion",
        status: "Diproses",
        price: "Rp 150.000",
        productName: "Jaket Denim Second-Hand",
        productImage: "/images/denim-jacket.jpg",
    },
];

export default function OrderList() {
    return (
        <div className="w-full mx-auto px-4 py-6 space-y-4">
            {orders.map((order) => (
                <Card key={order.id} className="grid grid-cols-6 md:flex-row items-center gap-4 p-4 shadow-md border border-gray-200 rounded-lg">
                    <div className="col-span-2">
                        <img src={order.productImage} alt={order.productName} className=" w-24 h-24 object-cover rounded-md" />
                    </div>
                    <CardBody className="col-span-4 flex flex-col">
                        <div>
                            <h3 className="text-lg font-semibold">{order.productName}</h3>
                            <p className="text-sm text-gray-600">Penjual: {order.seller}</p>
                            <p className="text-sm font-medium text-gray-800">{order.price}</p>
                            <p color={order.status === "Selesai" ? "green" : order.status === "Dikirim" ? "blue" : "yellow"} className="mt-2">
                                {order.status}
                            </p>
                        </div>
                        <div className="flex w-full justify-end">
                            <Button color="primary" variant="solid" disabled={order.status !== "Selesai"}>
                                Selesaikan Pesanan
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}
