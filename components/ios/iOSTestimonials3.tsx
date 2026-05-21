"use client";
import { useState } from "react";

const reviews = [
  { name: "Sarah M.", handle: "@sarahm", stars: 5, text: "This app completely changed how I organize my day. The iCloud sync is flawless and instant.", date: "May 2026", avatar: "SM", color: "bg-pink-400" },
  { name: "James K.", handle: "@jk_dev", stars: 5, text: "Best iOS app I've bought this year. Clean UI, zero bugs, and actually fast.", date: "Apr 2026", avatar: "JK", color: "bg-blue-400" },
  { name: "Layla H.", handle: "@laylah", stars: 5, text: "The widget integration with the Lock Screen is so thoughtfully designed. Love it.", date: "Apr 2026", avatar: "LH", color: "bg-purple-400" },
  { name: "Dev R.", handle: "@devr", stars: 5, text: "Switched from three different apps to just this one. The shortcuts integration alone is worth it.", date: "Mar 2026", avatar: "DR", color: "bg-orange-400" },
];

export default function iOSTestimonials3() {
  const [idx, setIdx] = useState(0);
  const r = reviews[idx];
  return (
    <section className="py-16 px-6 bg-white" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">4.9 on the App Store</h2>
          <p className="text-gray-500 text-sm">From 50,000+ verified reviews</p>
        </div>
        <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 ${r.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>{r.avatar}</div>
            <div>
              <p className="font-bold text-gray-900">{r.name}</p>
              <p className="text-xs text-gray-400">{r.handle} · {r.date}</p>
            </div>
            <div className="ml-auto text-yellow-400 text-sm">{"★".repeat(r.stars)}</div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">"{r.text}"</p>
          <div className="flex items-center justify-between">
            <button onClick={() => setIdx(i => (i - 1 + reviews.length) % reviews.length)} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shadow-sm">←</button>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-blue-500 w-5" : "bg-gray-200"}`} />
              ))}
            </div>
            <button onClick={() => setIdx(i => (i + 1) % reviews.length)} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shadow-sm">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
