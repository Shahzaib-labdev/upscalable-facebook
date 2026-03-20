"use client";

import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X} from "lucide-react";
import { useState } from "react";
import FancyButton from "@/src/components/anim-button/FancyButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#" },
  { name: "Services", href: "#" },
  { name: "Reviews", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    // 1. The Wrapper: Stretches full width, handles the "Sticky" and "Blur"
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      
      {/* 2. The Content: Constrained to 7xl, centered with mx-auto, and divided into 3 columns */}
      <div className="max-w-9xl mx-auto h-16 grid grid-cols-3 items-center px-6">
        
        {/* Left: Logo */}
        <div className="flex justify-start">
          <Link href="/" className="flex items-center">
            <img
              src="https://www.upscalable.co/assets/images/logo.png"
              alt="Logo"
              className="h-9 w-auto"
            />
          </Link>
        </div>

        {/* Center: Navigation (Dead Center) */}
        <nav className="hidden lg:flex justify-center items-center gap-10 font-jetbrains text-sm tracking-wide text-black">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand-blue transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex justify-end items-center gap-3">
          <div className="hidden lg:flex items-center gap-3">
             <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition">
              <Phone size={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition">
              <MessageCircle size={14} />
            </button>
            <FancyButton textOriginal="#f5f7fa">Work with us</FancyButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-gray-50"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white border-b border-gray-200 p-6 shadow-xl lg:hidden">
           {/* ... mobile nav code ... */}
        </div>
      )}
    </header>
  );
}
