import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const navLinks = (
        <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-2 lg:space-y-0">
            <Link href="/" className="hover:text-blue-500 transition">#home</Link>
            <Link href="/HomePage/Projects" className="hover:text-blue-500 transition">#projects</Link>
            <Link href="/skills" className="hover:text-blue-500 transition">#skills</Link>
            <Link href="/aboutme" className="hover:text-blue-500 transition">#about-me</Link>
            <Link href="/contacts" className="hover:text-blue-500 transition">#contacts</Link>
        </div>
    );

    return (
        <div className="flex justify-between items-center py-4 px-6 max-w-6xl mx-auto font-fira mt-5">
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <Image src="/logo.png" alt="logo" width={40} height={40} />
                <h1 className="text-lg font-bold">Hasnain</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex">{navLinks}</div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
                <button
                    onClick={toggleDrawer}
                    className="text-2xl focus:outline-none transition hover:text-blue-500"
                    aria-label="Toggle Menu"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Drawer */}
            {isDrawerOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 lg:hidden">
                    <div className="absolute top-0 left-0 w-64 bg-white h-full shadow-md p-4">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-3">
                                <Image src="/logo.png" alt="logo" width={40} height={40} />
                                <h1 className="text-lg font-bold">Hasnain</h1>
                            </div>
                            <button
                                onClick={toggleDrawer}
                                className="text-xl focus:outline-none hover:text-red-500 transition"
                                aria-label="Close Menu"
                            >
                                &times;
                            </button>
                        </div>
                        {navLinks}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
