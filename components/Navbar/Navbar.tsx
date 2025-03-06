"use client";

import React, { useState } from "react";
import {
    Navbar as Navbars,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Input,
} from "@heroui/react";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

export const Logo = () => {
    return (
        <p className="text-lg font-bold">Logo or Name Website</p>
    );
};

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b">
            {/* upper navbar */}
            <Navbars className="px-6 lg:px-12">
                {/* main category */}
                <NavbarContent className="hidden md:flex gap-6" justify="start">
                    <NavbarItem>
                        <button className="px-3 py-1 bg-gray-200 rounded-lg font-semibold">Man</button>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-gray-700 hover:underline">Woman</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-gray-700 hover:underline">Kids</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#" className="text-red-500 font-semibold hover:underline">Sale</Link>
                    </NavbarItem>
                </NavbarContent>

                {/* desihn tengah */}
                <NavbarBrand className="flex-1 text-center">
                    <Logo />
                </NavbarBrand>

                {/* Icon */}
                <NavbarContent justify="end" className="hidden md:flex gap-4">
                    <NavbarItem>
                        <Link href="#">
                            <User className="w-5 h-5" />
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#">
                            <Heart className="w-5 h-5" />
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="#">
                            <ShoppingCart className="w-5 h-5" />
                        </Link>
                    </NavbarItem>
                </NavbarContent>

                {/* toggle menu mobile */}
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </Navbars>

            {/* lower navbar and sub caterogry */}
            <nav className="hidden md:flex justify-center space-x-6 py-2">
                <Link href="#" className="text-gray-600 hover:text-black">New Arrivals</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Clothing Brands</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Shoes</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Bags</Link>
                <Link href="#" className="text-gray-600 hover:text-black">Accessories</Link>
            </nav>

            {/* search bar */}
            <div className="flex justify-center mt-3 px-6">
                <div className="relative w-full max-w-lg">
                    <Input
                        type="text"
                        placeholder="Search items or find with picture"
                        className="w-full border px-4 py-2 rounded-full"
                    />
                    <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-500" />
                    <button className="absolute right-3 top-2.5">
                        <img src="/camera-icon.png" alt="Camera" className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* menu mobila*/}
            <NavbarMenu className="md:hidden">
                <NavbarMenuItem>
                    <Link href="#" className="block py-2">Man</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="#" className="block py-2">Woman</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="#" className="block py-2">Kids</Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="#" className="block py-2 text-red-500">Sale</Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </header>
    );
}
