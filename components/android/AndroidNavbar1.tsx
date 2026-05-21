"use client";
import { useState } from "react";

export default function AndroidNavbar1() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/90 border-b border-gray-100" style={{ fontFamily: "'Google Sans','Roboto',sans-serif", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
      <div className="max-w-lg mx-auto px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-lg shadow-sm">✦</div>
          <span className="font-bold text-gray-900 text-base">AppName</span>
        </div>
        <nav className="hidden sm:flex items-center gap-5">
          {["Features", "Pricing", "Support"].map(l => (
            <a key={l} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors font-medium">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden sm:block bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-2xl shadow-sm shadow-purple-200 transition-colors">
            Install
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
            <a key={l} href="#" className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors py-1">{l}</a>
          ))}
          <button className="w-full bg-purple-600 text-white text-sm font-semibold py-3 rounded-2xl mt-1">Get it on Google Play</button>
        </div>
      )}
    </header>
  );
}
