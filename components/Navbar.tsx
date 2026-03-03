"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="font-bold text-lg tracking-wide">
          ASWIN E
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-gray-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black border-t border-neutral-800 transition-all duration-300 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4 text-base text-gray-300">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-white">
            About
          </a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="hover:text-white">
            Skills
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-white">
            Projects
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}