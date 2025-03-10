import { useState } from "react";
import { motion } from "framer-motion";
import { CardHeader, CardBody, Avatar, Button, Input, Textarea, Select, SelectItem } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

interface FormData {
    clothes: string;
    type: string;
    price: string;
    images: File[];
    category: string;
    brand: string;
    origin: string;
    product_code: string;
    post_by: string;
    short_description: string;
    long_description: string;
    material: string;
    color: string;
    sizes: string;
    fit: string;
    care_instructions: string;
}

export default function UploadFashionForm() {
    const [form, setForm] = useState<FormData>({
        clothes: "",
        type: "Clothes",
        price: "",
        images: [],
        category: "Casual Wear",
        brand: "",
        origin: "",
        product_code: "",
        post_by: "",
        short_description: "",
        long_description: "",
        material: "",
        color: "",
        sizes: "",
        fit: "",
        care_instructions: ""
    });

    // const [isModalOpen, setModalOpen] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setForm({ ...form, images: [...form.images, ...Array.from(e.target.files)] });
        }
    };

    const handleSubmit = () => {
        // setModalOpen(true);
    };

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#16423C] w-full p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                    <CardHeader className="flex flex-col gap-4">
                        <label htmlFor="avatar-upload" className="cursor-pointer">
                            {form.images.length > 0 ? (
                                <Swiper navigation modules={[Navigation]} spaceBetween={10} slidesPerView={1} className="w-40 h-40">
                                    {form.images.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <Avatar src={URL.createObjectURL(image)} alt={`User ${index}`} className="w-40 h-40 object-cover" />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <Avatar className="w-40 h-40" src="/placeholder-avatar.png" alt="User" />
                            )}
                            <input id="avatar-upload" type="file" multiple className="hidden" onChange={handleFileChange} />
                        </label>
                        <h2 className="text-2xl font-bold">Upload Fashion Bekas</h2>
                        <Input type="file" multiple onChange={handleFileChange} />
                    </CardHeader>
                    <CardBody className="grid gap-4">
                        <Input name="clothes" placeholder="Nama Produk" onChange={handleChange} />
                        <Input name="price" placeholder="Harga" type="number" onChange={handleChange} />
                        <Input name="brand" placeholder="Brand" onChange={handleChange} />
                        <Input name="origin" placeholder="Asal Produk" onChange={handleChange} />
                        <Input name="product_code" placeholder="Kode Produk" onChange={handleChange} />
                    </CardBody>
                </div>
                <div>
                    <CardBody className="grid gap-4">
                        <Textarea name="short_description" placeholder="Deskripsi Singkat" onChange={handleChange} />
                        <Textarea name="long_description" placeholder="Deskripsi Lengkap" onChange={handleChange} />
                        <Select name="category" onChange={handleChange}>
                            <SelectItem key="Casual Wear">Casual Wear</SelectItem>
                            <SelectItem key="Formal Wear">Formal Wear</SelectItem>
                            <SelectItem key="Sportswear">Sportswear</SelectItem>
                        </Select>
                        <Input name="material" placeholder="Material" onChange={handleChange} />
                        <Input name="color" placeholder="Warna" onChange={handleChange} />
                        <Input name="sizes" placeholder="Ukuran (S, M, L, XL)" onChange={handleChange} />
                        <Input name="fit" placeholder="Fit" onChange={handleChange} />
                        <Textarea name="care_instructions" placeholder="Instruksi Perawatan" onChange={handleChange} />

                        <Button className="w-full" onPress={handleSubmit}>Upload Produk</Button>
                    </CardBody>
                </div>

            </motion.div>
            {/* <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} className="z-90">
                <Card className="p-6 text-center">
                    <h2 className="text-2xl font-bold">Upload Berhasil!</h2>
                    <p>Produk Anda telah berhasil diunggah.</p>
                    <Button onPress={() => setModalOpen(false)}>Tutup</Button>
                </Card>
            </Modal> */}
        </>
    );
}
