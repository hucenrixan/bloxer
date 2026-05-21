"use client";
import { useState } from "react";

export default function Navbar5() {
  const [open, setOpen] = useState(false);
  const links = ["Products", "Solutions", "Resources", "Company"];

  return (
    <nav className="w-full bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
            <span className="text-white text-xs font-black">V</span>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">Vantage</span>
        </a>
        <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
              {l}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">Log in</a>
          <a href="#" className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-lg transition-colors font-semibold">
            Start free trial
          </a>
        </div>
        <button
          className="md:hidden text-gray-400 hover:text-white"
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
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-gray-300 hover:text-white">{l}</a>
          ))}
          <div className="pt-3 border-t border-gray-800 flex flex-col gap-3">
            <a href="#" className="text-sm text-gray-400">Log in</a>
            <a href="#" className="text-sm bg-violet-600 text-white px-4 py-2 rounded-lg text-center font-semibold">Start free trial</a>
          </div>
        </div>
      )}
    </nav>
  );
}
