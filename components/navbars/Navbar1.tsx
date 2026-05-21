"use client";
import { useState } from "react";

export default function Navbar1() {
  const [open, setOpen] = useState(false);
  const links = ["Product", "Features", "Pricing", "Blog", "About"];

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-1 md:flex md:justify-center md:flex-none">
          <span className="text-xl font-bold tracking-tight text-gray-900">Luminary</span>
        </div>
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {l}
            </a>
          ))}
        </div>
        <div className="flex-1 hidden md:flex justify-end" />
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
