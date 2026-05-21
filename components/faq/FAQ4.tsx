"use client";
import { useState } from "react";

const faqs = [
  { q: "How do I get started?", a: "Sign up for a free account and follow the onboarding steps. You'll be running in under 5 minutes." },
  { q: "Is there a free plan?", a: "Yes, our free plan includes up to 3 projects, 5GB storage, and access to core features." },
  { q: "Can I cancel anytime?", a: "Absolutely. You can cancel your subscription at any time with no penalties." },
  { q: "How does billing work?", a: "We charge monthly or annually. Annual plans come with a 20% discount." },
  { q: "Do you offer team accounts?", a: "Yes. Team plans start at 5 seats with shared workspaces and admin controls." },
  { q: "What support is available?", a: "Email support for all plans, live chat for Pro, and dedicated manager for Enterprise." },
];

export default function FAQ4() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-400 text-center mb-10">Can't find what you're looking for? Reach out to our team.</p>
        <div className="divide-y divide-gray-700 border-t border-b border-gray-700">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span className={`font-medium transition-colors ${open === i ? "text-indigo-400" : "text-white"}`}>{faq.q}</span>
                <span className={`text-xl flex-shrink-0 transition-colors ${open === i ? "text-indigo-400" : "text-gray-500"}`}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p className="pb-5 text-gray-400 text-sm leading-relaxed border-l-2 border-indigo-500 pl-4">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
