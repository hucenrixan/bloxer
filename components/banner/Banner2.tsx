"use client";
import { useState } from "react";

export default function Banner2() {
  const [show, setShow] = useState(true);
  if (!show) return (
    <div className="py-12 px-6 bg-gray-100 text-center text-sm text-gray-400">[Banner dismissed]</div>
  );
  return (
    <div className="py-20 px-6 bg-gray-50 flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
        <div className="text-4xl mb-4">🍪</div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">We use cookies</h3>
        <p className="text-gray-500 text-sm mb-6">We use cookies to improve your experience, analyze traffic, and serve personalized content. By clicking Accept, you agree to our use of cookies.</p>
        <div className="flex gap-3">
          <button onClick={() => setShow(false)} className="flex-1 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">Decline</button>
          <button onClick={() => setShow(false)} className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-semibold transition-colors">Accept All</button>
        </div>
      </div>
    </div>
  );
}
