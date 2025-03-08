"use client";

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

import React from "react";

export default function Footer() {
  return (
    <footer className="flex-col mx-5">
      <div className="flex justify-center sm:justify-start gap-6 sm:gap-44 text-xs sm:text-[16px]">
        <div className="flex flex-col gap-y-5">
          <p className="font-medium text-[22px]">Product</p>
          <p>Clothings</p>
          <p>Shoes</p>
          <p>Bags</p>
          <p>Accessories</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="font-medium text-[22px]">Company</p>
          <p>About Us</p>
          <p>Customer story</p>
          <p>Contact Us</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="font-medium text-[22px]">Help</p>
          <p>FAQs</p>
          <p>Returns/Refunds</p>
          <p>Cancellation Policy</p>
          <p>Track Order</p>
        </div>
      </div>
      <div className="flex justify-between mt-20 md:mt-44 mb-24">
        <div className="text-2xl md:text-8xl font-black">Logo Name</div>
        <div className="w-1/2">
          At Thrift and Thrive, we believe fashion should be kind to the planet
          and your wallet. Our curated collection of pre-loved clothing and
          accessories gives high-quality pieces a second life, reducing waste
          and embracing sustainability. By choosing thrift, you're not just
          upgrading your wardrobe—you’re helping the Earth thrive.
        </div>
      </div>
      <hr className="my-3"/>
      <div className="mb-14 flex justify-between">
        <p>All rights reserved Thrift & Thrive</p>
        <div className="flex gap-5">
            <FaFacebook size={20}/>
            <FaTwitter size={20}/>
            <FaInstagram size={20}/>
        </div>
      </div>
    </footer>
  );
}
