"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="w-full pt-3">
            <div className="mx-auto">
                <div className="flex items-center justify-between">
                    {/* Left: Logo */}
                    <span>
                        <Image src="/logo2.png" alt="Logo" width={120} height={120} />
                    </span>
                    {/* Center: Navigation Links (visible on larger screens) */}
                    <div className="hidden md:flex md:space-x-4">
                        <Link href="#" className="text-gray-700 hover:bg-[#f2f2f2] rounded-xl text-sm py-2 px-4">Home</Link>
                        <Link href="#" className="text-gray-700 hover:bg-[#f2f2f2] rounded-xl text-sm py-2 px-4">About</Link>
                        <Link href="#" className="text-gray-700 hover:bg-[#f2f2f2] rounded-xl text-sm py-2 px-4">Services</Link>
                        <Link href="#" className="text-gray-700 hover:bg-[#f2f2f2] rounded-xl text-sm py-2 px-4">Contact</Link>
                    </div>
                    {/* Right: Hamburger Menu and Login */}
                    <div className="flex items-center space-x-4">
                        {/* Hamburger Menu Button (visible only on smaller screens) */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden flex flex-col space-y-1 p-2"
                            aria-label="Toggle menu"
                        >
                            <span className="w-6 h-0.5 bg-gray-800"></span>
                            <span className="w-6 h-0.5 bg-gray-800"></span>
                            <span className="w-6 h-0.5 bg-gray-800"></span>
                        </button>
                        {/* Login Button */}
                        <Link href="#" className="hidden md:flex px-5 py-3 flex flex-row gap-3 items-center rounded-3xl bg-[#253612] text-white hover:bg-[#364f1b] transition">
                            Log In
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </div>
            {/* Mobile Menu (visible only on smaller screens when toggled) */}
            {isMobileMenuOpen && (
                <div className="md:hidden fade-in text-base bg-white rounded-2xl px-5 pb-2 mt-2 flex flex-col space-y-5 py-5">
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">About</Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</Link>
                    <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
                    <Link href="#" className="w-full px-5 py-3 flex flex-row gap-3 items-center justify-center rounded-3xl bg-[#253612] text-white hover:bg-[#364f1b]">
                        Log In
                        <ArrowRight size={15} />
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
