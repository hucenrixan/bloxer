"use client";
import { useState } from "react";

const tabs = [
  {
    label: "Sync", icon: "☁️",
    title: "Google Drive Sync",
    desc: "Every change syncs across all your Android devices instantly. Sign in with Google — everything is ready in seconds.",
    points: ["Phone, tablet, Chromebook", "Works offline, syncs on reconnect", "End-to-end encrypted"],
    color: "bg-blue-500",
  },
  {
    label: "Themes", icon: "🎨",
    title: "Material You Adaptive UI",
    desc: "The app reads your wallpaper and adapts its entire color palette to match — dark and light mode included.",
    points: ["Dynamic color on Android 12+", "Dark / light / system modes", "Custom accent overrides"],
    color: "bg-purple-500",
  },
  {
    label: "Widgets", icon: "🖼️",
    title: "Home Screen Widgets",
    desc: "Resizable, interactive widgets that live on your home screen and update in real time with your tasks and progress.",
    points: ["4 sizes from 1×1 to 4×2", "Glanceable at-a-glance info", "Tap to open direct to task"],
    color: "bg-teal-500",
  },
];

export default function AndroidFeatures3() {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Why people love it</h2>
          <p className="text-gray-500 text-sm">Tap to explore features.</p>
        </div>
        <div className="flex gap-2 mb-6">
          {tabs.map((tab, i) => (
            <button key={tab.label} onClick={() => setActive(i)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-3xl text-sm font-semibold transition-all ${active === i ? `${tab.color} text-white shadow-lg` : "bg-white text-gray-500 border border-gray-100 shadow-sm hover:border-gray-200"}`}>
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
                <span className="text-purple-500 font-bold">✓</span>{p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
