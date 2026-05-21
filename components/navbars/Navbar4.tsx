"use client";
import { useState } from "react";

export default function Navbar4() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Services", "Portfolio", "Contact"];

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-white tracking-widest uppercase">
          Solstice
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-white/80 hover:text-white transition-colors font-medium tracking-wide">
              {l}
            </a>
          ))}
          <a href="#" className="text-sm text-white/80 hover:text-white transition-colors font-medium tracking-wide border-l border-white/30 pl-8">
            Login
          </a>
        </div>
        <button
          className="md:hidden text-white"
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
        <div className="md:hidden bg-black/80 backdrop-blur-sm px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-white/80 hover:text-white">{l}</a>
          ))}
          <a href="#" className="text-sm text-white/80 hover:text-white">Login</a>
        </div>
      )}
    </nav>
  );
}
