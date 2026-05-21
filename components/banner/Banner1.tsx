"use client";
import { useState } from "react";

export default function Banner1() {
  const [show, setShow] = useState(true);
  if (!show) return (
    <div className="py-4 px-6 bg-gray-100 text-center text-sm text-gray-400">[Banner dismissed — reload to see again]</div>
  );
  return (
    <div className="bg-indigo-600 text-white">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">🎉 New: Introducing our Pro plan — get 3 months free when you upgrade today.</span>
          <a href="#" className="text-sm underline font-semibold hover:no-underline">Learn more</a>
        </div>
        <button onClick={() => setShow(false)} className="text-indigo-200 hover:text-white text-lg leading-none flex-shrink-0">✕</button>
      </div>
    </div>
  );
}
