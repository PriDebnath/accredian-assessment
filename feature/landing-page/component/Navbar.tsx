"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { NAVIGATION_ITEMS } from "@/constants";
import { Menu } from "lucide-react";

export default function Navbar() {
    const [active, setActive] = useState("home");

    const handleNavClick = (id: string) => {
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
        <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
            {/* ================= DESKTOP ================= */}
            <nav className="hidden lg:flex h-20 items-center justify-between px-8 xl:px-12">
                
                {/* Logo */}
                <button
                    onClick={() => handleNavClick("home")}
                    className="shrink-0"
                >
                    <span className="text-xl font-bold tracking-tight">
                        Accredian
                    </span>
                </button>

                {/* Navigation */}
                <div className="flex items-center gap-1">
                    {NAVIGATION_ITEMS.map((item) => {
                        const isActive = active === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className="relative px-4 py-2 text-sm font-medium"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill-desktop"
                                        className="absolute inset-0 rounded-lg bg-neutral-100"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                        }}
                                    />
                                )}

                                <span
                                    className={`relative z-10 ${
                                        isActive
                                            ? "text-neutral-950"
                                            : "text-neutral-600"
                                    }`}
                                >
                                    {item.id}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* CTA */}
                <button
                    onClick={() => handleNavClick("contact")}
                    className="rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                    Enquire Now
                </button>
            </nav>

            {/* ================= TABLET ================= */}
            <nav className="hidden md:flex lg:hidden h-16 items-center justify-between px-5">
                
                {/* Logo */}
                <button
                    onClick={() => handleNavClick("home")}
                    className="shrink-0"
                >
                    <span className="text-lg font-bold">
                        Accredian
                    </span>
                </button>

                {/* Compact Navigation */}
                <div className="flex items-center gap-0.5">
                    {NAVIGATION_ITEMS.map((item) => {
                        const isActive = active === item.id;

                        return (
                            <button
                                key={item.id}
                                onClick={() => handleNavClick(item.id)}
                                className="relative px-2.5 py-2"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="active-pill-tablet"
                                        className="absolute inset-0 rounded-lg bg-neutral-100"
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25,
                                        }}
                                    />
                                )}

                                <span
                                    className={`relative z-10 text-xs font-medium ${
                                        isActive
                                            ? "text-neutral-950"
                                            : "text-neutral-600"
                                    }`}
                                >
                                    {/* {item.label ?? */}
                                    { item.id}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Compact CTA */}
                <button
                    onClick={() => handleNavClick("contact")}
                    className="rounded-lg bg-neutral-950 px-3.5 py-2 text-xs font-medium text-white"
                >
                    Enquire
                </button>
            </nav>

            {/* ================= MOBILE PLACEHOLDER ================= */}
            <nav className="flex md:hidden h-16 items-center justify-between px-4">
                <span className="text-lg font-bold">
                    Accredian
                </span>

                <button className="rounded-lg p-2">
                    <Menu className="h-5 w-5" />
                </button>
            </nav>
        </header>
    );
}