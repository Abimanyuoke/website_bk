"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/logoNavbar.svg";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let hasMounted = false;

        const handleScroll = () => {
            if (!hasMounted) return;
            setIsScrolled(window.scrollY > 200);
        };

        hasMounted = true;
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <div className="py-10 px-6 z-[9999]">
            <div className="max-w-7xl mx-auto">
                <header className={`fixed top-0 left-0 w-full transition-all duration-300 text-black ${isScrolled ? "backdrop-blur-md bg-white/50 my-4 mx-5 md:mx-20 lg:mx-36 max-w-[90%] md:max-w-[80%] rounded-xl shadow-md z-[9999] p-2" : "backdrop-blur-sm bg-white/30 h-[80px]"}`}>
                    <div className="flex items-center justify-between px-6 w-full relative">
                        <div className="w-24 md:w-24 h-auto transition-all duration-500">
                            <Image src={logo} alt="Logo BKMoklet" className="lg:w-full lg:h-auto" />
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl lg:hidden focus:outline-none">
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>

                        {/* Navigation */}
                        <nav className={`absolute lg:relative top-full lg:translate-y-0 translate-y-2 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-md md:shadow-none transition-all duration-300 ${menuOpen ? "block" : "hidden"} lg:flex lg:items-center lg:space-x-10 text-gray-700 font-medium p-4 lg:p-0`}>
                            <ul className="flex flex-col lg:flex-row lg:space-x-3 space-y-4 lg:space-y-0">
                                {[
                                    { href: "/#", label: "Home" },
                                    { href: "/#about", label: "About Us" },
                                    { href: "/#services", label: "Services" },
                                    { href: "/#therapists", label: "Therapist Profile" },
                                    { href: "/#testimonials", label: "Testimonials" },
                                    { href: "/#blog", label: "Blog" },
                                    { href: "/#contact", label: "Contact" },
                                    { href: "/#login", label: "Login" }
                                ].map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="hover:text-red-500 transition-colors duration-300 block py-2 px-4">
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    );
}
