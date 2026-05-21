"use client";
import { useState } from "react";

export default function Navbar3() {
  const [open, setOpen] = useState(false);
  const links = ["Platform", "Developers", "Enterprise", "Changelog", "Pricing"];

  return (
    <nav className="w-full bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-8">
        <a href="#" className="text-lg font-semibold text-gray-900 whitespace-nowrap tracking-tight">
          Arc<span className="text-emerald-500">flow</span>
        </a>
        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-gray-500 hover:text-gray-800 transition-colors">
              {l}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <a href="#" className="text-sm border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:border-gray-400 hover:bg-gray-100 transition-all font-medium whitespace-nowrap">
            Get Started →
          </a>
        </div>
        <button
          className="md:hidden text-gray-500 hover:text-gray-800"
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
        <div className="md:hidden bg-gray-50 border-t border-gray-200 px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-gray-600">{l}</a>
          ))}
          <a href="#" className="text-sm border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-center font-medium mt-2">
            Get Started →
          </a>
        </div>
      )}
    </nav>
  );
}
