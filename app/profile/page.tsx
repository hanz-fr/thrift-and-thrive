"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardBody, Avatar } from "@heroui/react";
import CarouselProductSection from "@/components/Section/Homepage/CarouselProductSection/carouselProductSection";

export default function CompanyProfile() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-80 bg-cover bg-center rounded-lg overflow-hidden mb-12"
        style={{ backgroundImage: "url('/img/company-banner.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            className="text-white text-4xl md:text-6xl font-bold text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Sustainable Fashion for a Better Future
          </motion.h1>
        </div>
      </motion.div>

      {/* About Us */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We are committed to promoting sustainable fashion by offering high-quality second-hand clothing. Our mission is to reduce textile waste and encourage responsible consumerism.
        </p>
      </motion.div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <motion.div
          className="p-6 bg-gray-100 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To create a sustainable future by promoting the reuse of fashion items and educating people about eco-friendly shopping habits.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-gray-100 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-bold mb-3">Our Vision</h3>
          <p className="text-gray-600">
            A world where fashion and sustainability go hand in hand, reducing waste while ensuring style and quality for everyone.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We offer hand-picked, high-quality second-hand clothing that helps you stay stylish while protecting the environment.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4">Join the Movement</h2>
        <p className="text-gray-600 mb-6">Be part of the change. Explore our sustainable fashion collection today.</p>
        <CarouselProductSection withSpace={false}/>
      </motion.div>
    </div>
  );
}
