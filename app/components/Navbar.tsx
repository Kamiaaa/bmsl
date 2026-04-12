// app/components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Phone, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // Check if window is defined (client-side only)
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        // Set initial value
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleDesktopMenu = () => {
        setIsDesktopMenuOpen(!isDesktopMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const closeDesktopMenu = () => {
        setIsDesktopMenuOpen(false);
    };

    const handleMenuClick = () => {
        if (isDesktop) {
            toggleDesktopMenu();
        } else {
            toggleMobileMenu();
        }
    };

    return (
        <>
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Left section: Hamburger + Logo */}
                        <div className="flex items-center gap-4">
                            {/* Hamburger menu button - changes icon based on menu state */}
                            <button
                                onClick={handleMenuClick}
                                className="p-2 rounded-md text-gray-700 hover:text-[#315543] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#315543] transition-all duration-300 ease-in-out"
                                aria-label="Menu"
                            >
                                {/* Show X when desktop menu is open, otherwise show Menu */}
                                {isDesktop && isDesktopMenuOpen ? (
                                    <X className="h-6 w-6 transition-transform duration-300 rotate-0" />
                                ) : (
                                    <Menu className="h-6 w-6 transition-transform duration-300" />
                                )}
                            </button>

                            {/* Logo */}
                            <Link href="/" className="flex items-center group">

                                <div className="relative w-32 h-32">
                                    <Image
                                        src="/img/logo_bmsl.jpg"
                                        alt="BMSL"
                                        fill
                                        style={{ objectFit: "contain" }}
                                        loading="eager"
                                    />
                                </div>

                            </Link>
                        </div>

                        {/* Right section: Phone, Button, Search (desktop) */}
                        <div className="hidden md:flex items-center gap-4">
                            {/* Phone Number - Moving border effect */}
                            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                                <div className="flex items-center gap-2 text-gray-700 px-3 py-1.5 rounded-lg transition-all duration-300 group-hover:text-[#315543] relative z-10">
                                    <Phone className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
                                    <span className="text-lg font-medium">
                                        +8802223385183
                                    </span>
                                </div>
                                {/* Animated moving border */}
                                <div className="absolute inset-0 rounded-lg border-2 border-[#315543] opacity-0 group-hover:opacity-100">
                                    <div className="absolute top-0 left-0 w-full h-full">
                                        <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#315543] group-hover:w-full transition-all duration-500 ease-out"></div>
                                        <div className="absolute top-0 right-0 w-0.5 h-0 bg-[#315543] group-hover:h-full transition-all duration-500 delay-100 ease-out"></div>
                                        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#315543] group-hover:w-full transition-all duration-500 delay-200 ease-out"></div>
                                        <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#315543] group-hover:h-full transition-all duration-500 delay-300 ease-out"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Open an Account Button - Sliding gradient effect */}
                            <button className="relative overflow-hidden bg-[#315543] text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                                <span className="relative z-10">Open an Account</span>
                                <span className="absolute inset-0 bg-[#6A957A] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                            </button>

                            {/* Search Icon - Moving border effect */}
                            <div className="relative group cursor-pointer overflow-hidden rounded-full">
                                <button className="p-2 text-gray-700 rounded-lg transition-all duration-300 group-hover:text-[#315543] relative z-10" aria-label="Search">
                                    <Search className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                                </button>
                                {/* Animated moving border */}
                                <div className="absolute inset-0 rounded-lg border-2 border-[#315543] opacity-0 group-hover:opacity-100">
                                    <div className="absolute top-0 left-0 w-full h-full">
                                        <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#315543] group-hover:w-full transition-all duration-500 ease-out"></div>
                                        <div className="absolute top-0 right-0 w-0.5 h-0 bg-[#315543] group-hover:h-full transition-all duration-500 delay-100 ease-out"></div>
                                        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#315543] group-hover:w-full transition-all duration-500 delay-200 ease-out"></div>
                                        <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#315543] group-hover:h-full transition-all duration-500 delay-300 ease-out"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile: Show Search and Phone icons with moving border effects */}
                        <div className="flex items-center gap-3 md:hidden">
                            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                                <button className="p-2 text-gray-700 rounded-lg transition-all duration-300 group-hover:text-[#315543] relative z-10" aria-label="Search">
                                    <Search className="h-5 w-5 transition-all duration-300 group-hover:scale-110" />
                                </button>
                                <div className="absolute inset-0 rounded-lg border-2 border-blue-600 opacity-0 group-hover:opacity-100">
                                    <div className="absolute top-0 left-0 w-full h-full">
                                        <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                                        <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-500 delay-100 ease-out"></div>
                                        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500 delay-200 ease-out"></div>
                                        <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-500 delay-300 ease-out"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                                <button className="p-2 text-gray-700 rounded-lg transition-all duration-300 group-hover:text-[#315543] relative z-10" aria-label="Phone">
                                    <Phone className="h-5 w-5 transition-all duration-300 group-hover:rotate-12" />
                                </button>
                                <div className="absolute inset-0 rounded-lg border-2 border-blue-600 opacity-0 group-hover:opacity-100">
                                    <div className="absolute top-0 left-0 w-full h-full">
                                        <div className="absolute top-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500 ease-out"></div>
                                        <div className="absolute top-0 right-0 w-0.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-500 delay-100 ease-out"></div>
                                        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-500 delay-200 ease-out"></div>
                                        <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-500 delay-300 ease-out"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Desktop Hamburger Menu - Slide out from left */}
            <div className="hidden md:block">
                <div
                    className={`fixed inset-0 z-40 transition-all duration-300 ${isDesktopMenuOpen ? 'visible' : 'invisible'
                        }`}
                >
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-black transition-opacity duration-300 ${isDesktopMenuOpen ? 'opacity-50' : 'opacity-0'
                            }`}
                        onClick={closeDesktopMenu}
                    />

                    {/* Menu Panel */}
                    <div
                        className={`absolute top-0 left-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${isDesktopMenuOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >
                        <div className="flex justify-between items-center p-6 border-b">
                            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
                            <button
                                onClick={closeDesktopMenu}
                                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-all duration-300 hover:rotate-90"
                                aria-label="Close menu"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="p-6">
                            <nav className="space-y-2">
                                <Link
                                    href="/"
                                    onClick={closeDesktopMenu}
                                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">Home</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/about"
                                    onClick={closeDesktopMenu}
                                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">About Us</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/"
                                    onClick={closeDesktopMenu}
                                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">Leadership</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/"
                                    onClick={closeDesktopMenu}
                                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">BMSL Easy Platforms</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/"
                                    onClick={closeDesktopMenu}
                                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">Products and Services</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/"
                                    onClick={closeDesktopMenu}
                                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">Research Center</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/"
                                    onClick={closeDesktopMenu}
                                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">Investment Calculator</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    href="/"
                                    onClick={closeDesktopMenu}
                                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">Career</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                </Link>

                                <Link
                                    href="/contact"
                                    onClick={closeDesktopMenu}
                                    className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg transition-all group"
                                >
                                    <span className="font-medium">Contact</span>
                                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                                </Link>
                            </nav>

                            <div className="mt-8 pt-6 border-t">
                                <div className="bg-green-100 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:scale-105">
                                    <p className="text-sm text-gray-600 mb-2">Need assistance?</p>
                                    <div className="flex items-center gap-2 text-[#315543] group cursor-pointer">
                                        <Phone className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
                                        <span className="text-sm font-semibold transition-all duration-300 group-hover:text-blue-700">+8802223385183</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Hamburger Menu Overlay */}
            <div className="md:hidden">
                <div
                    className={`fixed inset-0 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible'
                        }`}
                >
                    {/* Backdrop */}
                    <div
                        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
                            }`}
                        onClick={closeMobileMenu}
                    />

                    {/* Slide-out menu panel */}
                    <div
                        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                            }`}
                    >
                        <div className="flex justify-between items-center p-4 border-b">
                            <span className="text-lg font-bold text-gray-800">Menu</span>
                            <button
                                onClick={closeMobileMenu}
                                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-all duration-300 hover:rotate-90"
                                aria-label="Close menu"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="p-4 space-y-6">
                            {/* Mobile Navigation Links */}
                            <div className="space-y-2">
                                <Link
                                    href="/"
                                    className="block py-3 px-3 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                                    onClick={closeMobileMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/"
                                    className="block py-3 px-3 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                                    onClick={closeMobileMenu}
                                >
                                    About Us
                                </Link>
                                <Link
                                    href="/"
                                    className="block py-3 px-3 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                                    onClick={closeMobileMenu}
                                >
                                    Leadership
                                </Link>
                                <Link
                                    href="/"
                                    className="block py-3 px-3 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                                    onClick={closeMobileMenu}
                                >
                                    BMSL Easy Platforms
                                </Link>
                                <Link
                                    href="/"
                                    className="block py-3 px-3 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                                    onClick={closeMobileMenu}
                                >
                                    Products and Services
                                </Link>
                                <Link
                                    href="/"
                                    className="block py-3 px-3 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                                    onClick={closeMobileMenu}
                                >
                                    Research Center
                                </Link>
                                <Link
                                    href="/"
                                    className="block py-3 px-3 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                                    onClick={closeMobileMenu}
                                >
                                    Investment Calculator
                                </Link>
                                <Link
                                    href="/"
                                    className="block py-3 px-3 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                                    onClick={closeMobileMenu}
                                >
                                    Career
                                </Link>
                                <Link
                                    href="/contact"
                                    className="block py-3 px-3 text-gray-700 hover:text-[#315543] hover:bg-green-100 rounded-lg font-medium transition-all duration-300 hover:translate-x-2"
                                    onClick={closeMobileMenu}
                                >
                                    Contact
                                </Link>
                            </div>

                            <div className="pt-4 border-t">
                                <div className="relative group cursor-pointer overflow-hidden rounded-lg mb-4">
                                    <div className="flex items-center gap-2 text-gray-700 p-3 rounded-lg transition-all duration-300 group-hover:text-[#315543] relative z-10">
                                        <Phone className="h-4 w-4 transition-all duration-300 group-hover:rotate-12" />
                                        <span className="text-sm font-medium">+8802223385183</span>
                                    </div>
                                    <div className="absolute inset-0 rounded-lg border-2 border-[#315543] opacity-0 group-hover:opacity-100">
                                        <div className="absolute top-0 left-0 w-full h-full">
                                            <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#315543] group-hover:w-full transition-all duration-500 ease-out"></div>
                                            <div className="absolute top-0 right-0 w-0.5 h-0 bg-[#315543] group-hover:h-full transition-all duration-500 delay-100 ease-out"></div>
                                            <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-[#315543] group-hover:w-full transition-all duration-500 delay-200 ease-out"></div>
                                            <div className="absolute bottom-0 left-0 w-0.5 h-0 bg-[#315543] group-hover:h-full transition-all duration-500 delay-300 ease-out"></div>
                                        </div>
                                    </div>
                                </div>
                                <button className="relative w-full overflow-hidden bg-[#315543] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                                    <span className="relative z-10">Open an Account</span>
                                    <span className="absolute inset-0 bg-linear-to-r from-[#315543] to-[#6A957A] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}