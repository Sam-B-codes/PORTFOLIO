"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          <Link href="/">MyPortfolio</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/projects" className="hover:text-blue-400 transition">Project</Link>
          <Link href="/skills" className="hover:text-blue-400 transition">Skills</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col items-center space-y-4 py-4">
          <Link href="/" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/projects" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/skills" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link href="/contact" className="hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
