"use client";
import { useState } from "react";

const faqs = [
  { q: "How do I get started?", a: "Sign up for a free account and follow the onboarding steps. You'll be up and running in under 5 minutes." },
  { q: "Is there a free plan?", a: "Yes, our free plan includes up to 3 projects, 5GB storage, and access to core features with no credit card required." },
  { q: "Can I cancel anytime?", a: "Absolutely. You can cancel your subscription at any time. Your data remains accessible until the end of the billing period." },
  { q: "How does billing work?", a: "We charge monthly or annually. Annual plans come with a 20% discount. Invoices are sent automatically to your email." },
  { q: "Do you offer team accounts?", a: "Yes. Team plans start at 5 seats and include shared workspaces, admin controls, and priority support." },
  { q: "What support options are available?", a: "We offer email support for all plans, live chat for Pro, and a dedicated account manager for Enterprise customers." },
];

export default function FAQ1() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-center mb-10">Everything you need to know. Can't find an answer? Contact us.</p>
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span className="font-medium text-gray-900">{faq.q}</span>
                <span className="text-gray-400 text-xl flex-shrink-0">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
