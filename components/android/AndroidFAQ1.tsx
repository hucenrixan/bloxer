"use client";
import { useState } from "react";

const faqs = [
  { q: "Is it free to install?", a: "Yes — the app is free to install on Google Play. Pro features are available via in-app subscription from $3.99/month." },
  { q: "Does it sync across my Android devices?", a: "Yes. We use Google Drive to keep your data synced across all your Android phones and tablets automatically." },
  { q: "Can I cancel my subscription?", a: "Anytime. Go to Google Play → Subscriptions to manage or cancel. Your data remains accessible until the billing period ends." },
  { q: "What Android version do I need?", a: "Android 10 or later. We fully support Android 14 and 15, including all widget and dynamic color features." },
  { q: "Is my data private?", a: "Your data is end-to-end encrypted and stored in your personal Google Drive. We never access or sell your data." },
];

export default function AndroidFAQ1() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 px-6 bg-white" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Questions? We have answers.</h2>
          <p className="text-gray-500 text-sm">Still unsure? Chat with us inside the app.</p>
        </div>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-3xl border border-gray-100 overflow-hidden">
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
