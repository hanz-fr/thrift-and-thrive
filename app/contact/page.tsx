"use client";

import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.h1
        className="text-4xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Contact Us
      </motion.h1>

      <p className="text-center text-gray-600 mt-2">
        Have questions? Feel free to reach out to us.
      </p>

      {/* Contact Form & Info */}
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.form
          className="bg-white p-6 shadow-md rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition"
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Media & Location Card */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Location Card */}
          <Card className="shadow-md">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Our Location</h3>
            </CardHeader>
            <CardBody>
              <p className="text-gray-600">📍 123 Fashion Street, Sustainable City, Earth</p>
              <p className="text-gray-600">📞 Phone: +123 456 789</p>
            </CardBody>
          </Card>

          {/* Social Media Card */}
          <Card className="shadow-md">
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
            </CardHeader>
            <CardBody>
              <div className="flex flex-col space-y-2">
                <Button variant="ghost">📘 Facebook</Button>
                <Button variant="ghost">📷 Instagram</Button>
                <Button variant="ghost">🐦 Twitter</Button>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
