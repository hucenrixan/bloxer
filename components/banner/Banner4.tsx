"use client";
import { useState } from "react";

export default function Banner4() {
  const [show, setShow] = useState(true);
  return (
    <div className="relative min-h-48 bg-gray-100 flex items-end justify-end p-4">
      <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-sm">Page content here</p>
      {show && (
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl p-5 max-w-xs w-full">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div>
              <h4 className="font-bold text-gray-900 text-sm">We value your privacy</h4>
              <p className="text-gray-500 text-xs mt-1">We use cookies to personalize content and analyze our traffic.</p>
            </div>
            <button onClick={() => setShow(false)} className="text-gray-400 hover:text-gray-700 text-sm flex-shrink-0">✕</button>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShow(false)} className="flex-1 py-2 text-xs border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors">Decline</button>
            <button onClick={() => setShow(false)} className="flex-1 py-2 text-xs bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors">Accept</button>
          </div>
        </div>
      )}
    </div>
  );
}
