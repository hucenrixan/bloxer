"use client";
import { useState } from "react";

const categories = {
  General: [
    { q: "What is your product?", a: "A platform for building, deploying, and scaling web applications with minimal configuration." },
    { q: "Who is it for?", a: "Developers, startups, and enterprise teams who want to move fast without managing infrastructure." },
    { q: "How do I get started?", a: "Sign up for free, connect your repo, and deploy in under 5 minutes." },
  ],
  Billing: [
    { q: "How does billing work?", a: "We charge monthly or annually. Annual plans include a 20% discount automatically applied." },
    { q: "Do you offer refunds?", a: "Yes, we offer a 30-day money-back guarantee on all paid plans, no questions asked." },
    { q: "Can I change plans anytime?", a: "Yes, you can upgrade or downgrade at any time. Changes are prorated automatically." },
  ],
  Technical: [
    { q: "What frameworks do you support?", a: "We support Next.js, Nuxt, SvelteKit, Astro, Remix, and any Node.js or Python framework." },
    { q: "Is there an API?", a: "Yes, our REST and GraphQL APIs let you manage deployments, env variables, and logs programmatically." },
    { q: "Do you support custom domains?", a: "Yes, you can add unlimited custom domains with automatic HTTPS and DNS management." },
  ],
} as const;

type Cat = keyof typeof categories;

export default function FAQ5() {
  const [tab, setTab] = useState<Cat>("General");
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-center mb-8">Browse by category</p>
        <div className="flex gap-2 justify-center mb-10">
          {(Object.keys(categories) as Cat[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${tab === cat ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {categories[tab].map((faq, i) => (
            <div key={i} className="py-5">
              <h3 className="font-semibold text-gray-900 mb-1">{faq.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
