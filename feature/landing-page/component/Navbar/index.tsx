"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { NAVIGATION_ITEMS, PAGE_ITEMS } from "@/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/images/logo.webp"
import MobileMenu from "./mobile-menu";

export default function Navbar() {
    const [active, setActive] = useState<keyof typeof PAGE_ITEMS>("home");
    const handleNavClick = (id: keyof typeof PAGE_ITEMS) => {
        setActive(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b shadow-lg border-neutral-200 bg-white/95 backdrop-blur ">
            <nav className="hidden lg:flex h-20 items-center justify-between px-12 py-4">
                <button
                    onClick={() => handleNavClick("home")}
                    className="shrink-0 w-30"
                >
                    <Image src={Logo} alt="Logo" className="w-full h-full" />
                </button>
                <div className="flex items-center gap-1">
                    {NAVIGATION_ITEMS.map((item) => {
                        const isActive = active === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className="relative px-2 py-2 text-sm font-medium"
                            >
                                <span
                                    className={`capitalize relative text-base z-10 
                                        ${isActive ? "text-primary font-semibold" : "text-black"}
                                        ${isActive ? " border-transparent border-b-primary border-2" : "border-transparent"}
                                        `}
                                >
                                    {item.id}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </nav>
            <nav className="flex lg:hidden  items-center justify-between px-6 py-6">
                <button
                    onClick={() => handleNavClick("home")}
                    className="shrink-0 w-30"
                >
                    <Image src={Logo} alt="Logo" className="w-full h-full" />
                </button>
                <MobileMenu active={active} handleNavClick={handleNavClick} />
            </nav>
        </header>
    );
}