"use client";
import { useState } from "react";

export default function iOSNavbar1() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/80 border-b border-gray-100" style={{ fontFamily: "system-ui,-apple-system,sans-serif", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
      <div className="max-w-lg mx-auto px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-lg shadow-sm">⚡</div>
          <span className="font-bold text-gray-900 text-base">AppName</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5">
          {["Features", "Pricing", "Support"].map(l => (
            <a key={l} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:block bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm shadow-blue-200 transition-colors">
            Download
          </button>
          <button onClick={() => setOpen(o => !o)} className="sm:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-gray-100 transition-colors">
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div className="sm:hidden border-t border-gray-100 bg-white/95 px-5 py-4 flex flex-col gap-3">
          {["Features", "Pricing", "Support"].map(l => (
            <a key={l} href="#" className="text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors py-1">{l}</a>
          ))}
          <button className="w-full bg-blue-500 text-white text-sm font-semibold py-3 rounded-xl mt-1">Download Free</button>
        </div>
      )}
    </header>
  );
}
