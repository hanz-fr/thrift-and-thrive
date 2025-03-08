"use client";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

import React from "react";
import { ThriftNThriveLogo } from "../Navbar/Navbar";

export default function Footer() {
  return (
    <footer className="max-w-7xl sm:mx-auto overflow-x-hidden flex-col mx-3">
      <div className="flex justify-center sm:justify-start gap-6 sm:gap-44 text-xs sm:text-[16px]">
        <div className="flex flex-col gap-y-5">
          <p className="font-medium text-[22px]">Product</p>
          <a href="/product">Clothings</a>
          <a href="/product">Shoes</a>
          <a href="/product">Bags</a>
          <a href="/product">Accessories</a>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="font-medium text-[22px]">Company</p>
          <a href="/about-us">About Us</a>
          <a href="/customer-stories">Customer story</a>
          <a href="/contact">Contact Us</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="font-medium text-[22px]">Help</p>
          <a href="/faq">FAQs</a>
          <a>Returns/Refunds</a>
          <a>Cancellation aolicy</a>
          <a>Track Order</a>
        </div>
      </div>
      <div className="flex justify-between mt-20 md:mt-44 mb-24">
        <div className="text-2xl md:text-8xl font-black">
          <ThriftNThriveLogo width="200" height="200" />
        </div>
        <div className="w-1/2">
          At Thrift and Thrive, we believe fashion should be kind to the planet
          and your wallet. Our curated collection of pre-loved clothing and
          accessories gives high-quality pieces a second life, reducing waste
          and embracing sustainability. By choosing thrift, you're not just
          upgrading your wardrobe—you’re helping the Earth thrive.
        </div>
      </div>
      <hr className="my-3" />
      <div className="mb-14 flex justify-between">
        <p>All rights reserved Thrift & Thrive</p>
        <div className="flex gap-5">
          <FaFacebook size={20} />
          <FaTwitter size={20} />
          <FaInstagram size={20} />
        </div>
      </div>
    </footer>
  );
}
