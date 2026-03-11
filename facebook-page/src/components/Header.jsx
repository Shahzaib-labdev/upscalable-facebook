"use client";

import Link from "next/link";
import { Phone, MessageCircle, Menu, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import FancyButton from "@/src/components/anim-button/FancyButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "" },
  { name: "Services", href: "" },
  { name: "Reviews", href: "" },
  { name: "Pricing", href: "" },
  { name: "Contact", href: "" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-4 left-0 z-50 bg-transparent">
      <div className="max-w-[85rem] mx-auto px-4 bg-white/80 backdrop-blur-sm shadow-sm rounded-full">
        {/* Main Header Container */}
        <div className="flex items-center justify-between bg-transparent px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://www.upscalable.co/assets/images/logo.png" // replace with your logo path
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-jetbrains text-sm tracking-wide text-gray-600">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-black transition"
              >
                {link.name.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 transition">
              <Phone size={14} />
            </button>

            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:scale-105 transition">
              <MessageCircle size={14} />
            </button>
            <FancyButton
              bgOriginal="#f2c94c"
              textOriginal="#000"
              bgHover="#f5f7fa"
              textHover="#2b2b2b"
            >
              Work with us
            </FancyButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg lg:hidden">
            <nav className="flex flex-col gap-4 font-jetbrains text-sm text-gray-700">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-black transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-6 flex items-center gap-3">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
                <Phone size={14} />
              </button>

              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
                <MessageCircle size={14} />
              </button>

              <FancyButton>Work with us</FancyButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
