import React, { useState } from "react";

// Import dari HeroUI
import {
    Navbar as Navbars,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
    Badge
} from "@heroui/react";

// Import ikon dari react-icons
import { BsCart2, BsHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

export const AcmeLogo = () => {
    return (
        <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
                clipRule="evenodd"
                d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                fill="currentColor"
                fillRule="evenodd"
            />
        </svg>
    );
};

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out"
    ];

    return (
        <Navbars onMenuOpenChange={setIsMenuOpen} className="px-4">
            <NavbarContent className="hidden sm:flex gap-8">
                {[
                    { label: "Man", href: "#" },
                    { label: "Woman", href: "#" },
                    { label: "Kids", href: "#" },
                    { label: "Sale", href: "#", className: "font-semibold text-danger" }
                ].map((item, index) => (
                    <NavbarItem key={index}>
                        <Link className={`text-sm ${item.className || ""}`} color="foreground" href={item.href}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent className="flex gap-2 sm:gap-4">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden" />
                <NavbarBrand className="flex justify-center items-center">
                    <AcmeLogo />
                    <p className="font-bold text-inherit ml-1">Name or Logo</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end" className="ml-auto flex gap-8 sm:mt-2">
                <NavbarItem className="cursor-pointer hidden lg:flex">
                    <Link href="#">
                        <AiOutlineUser className="text-neutral-800" fontSize={22} />
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="cursor-pointer lg:flex">
                        <Badge color="danger" content="0">
                            <BsHeart className="text-neutral-800" fontSize={18} />
                        </Badge>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="cursor-pointer lg:flex">
                        <Badge color="danger" content="3">
                            <BsCart2 className="text-neutral-800" fontSize={20} />
                        </Badge>
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbars>
    );
}