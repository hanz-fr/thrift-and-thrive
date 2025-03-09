"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, Avatar } from "@heroui/react";

const testimonials = [
  {
    id: 1,
    name: "Rina Putri",
    review:
      "I am very happy to find high-quality second-hand clothes here. It really helps the environment!",
    image: "/img/customer1.jpg",
  },
  {
    id: 2,
    name: "Dewi Lestari",
    review:
      "The clothes I bought are very nice and comfortable to wear. Thank you for providing quality products!",
    image: "/img/customer2.jpg",
  },
  {
    id: 3,
    name: "Ari Wibowo",
    review:
      "The sustainable fashion concept here is amazing! I have become more environmentally conscious.",
    image: "/img/customer3.jpg",
  },
];

export default function CustomerStory() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Banner */}
      <motion.div
        className="relative w-full h-64 bg-cover bg-center rounded-lg overflow-hidden mb-12"
        style={{ backgroundImage: "url('/img/banner.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-white text-3xl md:text-5xl font-bold text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            "Our Customers' Real Stories"
          </motion.h1>
        </div>
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-2xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What Do They Say?
      </motion.h2>

      {/* Testimonial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="shadow-lg p-6 rounded-lg flex flex-col justify-center h-full">
              <CardHeader className="flex items-center gap-4">
                <Avatar src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              </CardHeader>
              <CardBody>
                <p className="text-gray-600 italic">"{testimonial.review}"</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
