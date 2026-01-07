"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 flex justify-center transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto transition-all duration-500 flex items-center justify-between 
          ${
            isScrolled
              ? "mt-6 h-16 w-[90%] max-w-5xl rounded-full glass shadow-xl px-4 sm:px-6 lg:px-8"
              : "h-24 w-full max-w-5xl bg-transparent border-transparent"
          }
        `}
      >
        <div className="shrink-0">
          <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            VR<span className="text-muted-foreground">.</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex items-baseline space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-muted-foreground hover:underline underline-offset-8 decoration-2 decoration-muted-foreground transition-all duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-muted-foreground focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-24 left-0 right-0 p-4 pointer-events-auto md:hidden">
          <div className="glass rounded-2xl p-4 flex flex-col space-y-2 shadow-xl border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
