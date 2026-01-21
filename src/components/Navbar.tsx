"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/careers" },
    { name: "Contact", href: "/contact" }
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "glass-nav py-4" : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                    SHIRAW
                </Link>
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-bold font-mono text-[var(--color-secondary)] hover:text-white transition-colors uppercase tracking-[0.2em]"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/quote"
                        className="px-6 py-2 border border-[#F59E0B] text-[#F59E0B] text-xs font-bold font-mono uppercase tracking-widest hover:bg-[#F59E0B] hover:text-black transition-all duration-300 transform hover:scale-105"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50"
                    aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        {mobileMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <line x1="3" y1="18" x2="21" y2="18" />
                            </>
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden absolute top-full left-0 w-full bg-[#111827]/95 backdrop-blur-xl border-t border-white/10"
                >
                    <div className="flex flex-col py-6 px-6">
                        {navLinks.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Link
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-4 text-lg font-bold font-mono text-white hover:text-[var(--color-accent)] transition-colors uppercase tracking-widest border-b border-white/5"
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-6"
                        >
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block w-full py-4 text-center border border-[#F59E0B] text-[#F59E0B] text-sm font-bold font-mono uppercase tracking-widest hover:bg-[#F59E0B] hover:text-black transition-all"
                            >
                                Get a Quote
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
