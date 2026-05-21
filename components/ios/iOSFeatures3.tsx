"use client";
import { useState } from "react";

const tabs = [
  {
    label: "Sync", icon: "☁️",
    title: "Instant iCloud Sync",
    desc: "Every change you make syncs across all your Apple devices in under a second. No manual saves, no conflicts — it just works.",
    points: ["iPhone, iPad, Mac", "Works offline, syncs on reconnect", "End-to-end encrypted"],
    color: "bg-blue-500",
  },
  {
    label: "Focus", icon: "🎯",
    title: "Built for Deep Work",
    desc: "Intelligent Focus Mode blocks distractions and surfaces only what matters right now. Your best work starts here.",
    points: ["Respects iOS Focus modes", "Smart notification filtering", "Lock Screen widget"],
    color: "bg-purple-500",
  },
  {
    label: "Widgets", icon: "🖼️",
    title: "Beautiful Widgets",
    desc: "Home Screen and Lock Screen widgets that update live and look stunning with every wallpaper.",
    points: ["Small, medium, large sizes", "Interactive widgets (iOS 17+)", "Live Activities support"],
    color: "bg-pink-500",
  },
];

export default function iOSFeatures3() {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Why people love it</h2>
          <p className="text-gray-500 text-sm">Tap to explore features.</p>
        </div>
        <div className="flex gap-2 mb-6">
          {tabs.map((tab, i) => (
            <button key={tab.label} onClick={() => setActive(i)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-2xl text-sm font-semibold transition-all ${active === i ? `${tab.color} text-white shadow-lg` : "bg-white text-gray-500 border border-gray-100 shadow-sm hover:border-gray-200"}`}>
              <span className="text-lg">{tab.icon}</span>
              <span className="text-xs">{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{t.title}</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-5">{t.desc}</p>
          <ul className="space-y-2.5">
            {t.points.map(p => (
              <li key={p} className="flex items-center gap-2.5 text-sm text-gray-700">
                <span className="text-blue-500 font-bold">✓</span>{p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
