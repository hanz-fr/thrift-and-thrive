"use client";

import { Card, CardBody, Button, Input } from "@heroui/react";

const orders = [
    {
        id: 1,
        seller: "EcoWear Thrift",
        status: "Selesai",
        price: "Rp 120.000",
        productName: "Kemeja Linen Daur Ulang",
        productImage: "/img/clothes2.jpg",
        trackingNumber: "1234567890ABCDEF", // Tambahkan kode resi pengiriman
    },
    {
        id: 2,
        seller: "GreenStyle ID",
        status: "Dikirim",
        price: "Rp 85.000",
        productName: "Kaos Katun Organik",
        productImage: "/img/Clothes.jpg",
        trackingNumber: "ABCDEF1234567890", // Tambahkan kode resi pengiriman
    },
    {
        id: 3,
        seller: "Recycle Fashion",
        status: "Diproses",
        price: "Rp 150.000",
        productName: "Jaket Denim Second-Hand",
        productImage: "/img/denimjacket.jpg",
        trackingNumber: "0987654321ABCDEF", // Tambahkan kode resi pengiriman
    },
];

export default function OrderList() {
    const handleCopyTrackingNumber = (trackingNumber : any) => {
        navigator.clipboard.writeText(trackingNumber)
            .then(() => alert("Kode resi berhasil disalin!"))
            .catch(() => alert("Gagal menyalin kode resi."));
    };

    return (
        <div className="w-full mx-auto px-4 py-6 space-y-4">
            {orders.map((order) => (
                <Card key={order.id} className="text-[#16423C] flex flex-col md:flex-row items-center gap-4 p-4 shadow-md border border-gray-200 rounded-lg">
                    <div className="w-full md:w-1/4">
                        <img src={order.productImage} alt={order.productName} className="w-full h-32 md:h-36 object-contain rounded-md" />
                    </div>
                    <CardBody className="w-full md:w-3/4 flex flex-col justify-between">
                        <div>
                            <h3 className="text-lg font-semibold">{order.productName}</h3>
                            <p className="text-sm text-gray-600">Penjual: {order.seller}</p>
                            <p className="text-sm font-medium text-gray-800">{order.price}</p>
                            <p className={`mt-2 text-sm font-medium ${order.status === "Selesai" ? "text-green-600" :
                                    order.status === "Dikirim" ? "text-blue-600" :
                                        "text-yellow-600"
                                }`}>
                                {order.status}
                            </p>
                            {/* Tampilkan kode resi pengiriman jika status "Dikirim" */}
                            {order.status === "Dikirim" && (
                                <div className="mt-4">
                                    <p className="text-sm font-bold text-gray-800">Kode Resi Pengiriman:</p>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="text"
                                            value={order.trackingNumber}
                                            readOnly
                                            className="w-full p-2 border rounded-md bg-gray-100"
                                        />
                                        <Button
                                            color="primary"
                                            variant="solid"
                                            onClick={() => handleCopyTrackingNumber(order.trackingNumber)}
                                        >
                                            Salin
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
}