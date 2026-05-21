"use client";
import { useState } from "react";

const faqs = [
  { q: "Is it free to download?", a: "Yes — the app is free to download. Pro features are available with an in-app subscription starting at $4.99/month." },
  { q: "Does it sync across my devices?", a: "Absolutely. We use iCloud to keep everything in sync across all your Apple devices automatically." },
  { q: "Can I cancel my subscription?", a: "Yes, anytime. Go to Settings → Apple ID → Subscriptions to manage or cancel your plan. No questions asked." },
  { q: "What iOS version do I need?", a: "iOS 16 or later. We fully support iOS 17 and iOS 18, including all Lock Screen widget features." },
  { q: "Is my data private?", a: "Your data is end-to-end encrypted and stored in your personal iCloud account. We never see or sell your data." },
];

export default function iOSFAQ1() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 px-6 bg-white" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Questions? We have answers.</h2>
          <p className="text-gray-500 text-sm">Still unsure? Reach us in-app anytime.</p>
        </div>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                <span className="font-semibold text-gray-900 text-sm">{f.q}</span>
                <span className={`text-gray-400 text-lg transition-transform duration-200 flex-shrink-0 ml-3 ${open === i ? "rotate-45" : ""}`}>+</span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-3">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
