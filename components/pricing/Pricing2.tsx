"use client";
import { useState } from "react";

export default function Pricing2() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      monthly: "$12",
      yearly: "$10",
      desc: "For freelancers and solo creators.",
      features: ["5 projects", "10 GB storage", "Basic reporting", "Community support"],
      cta: "Get started free",
    },
    {
      name: "Growth",
      monthly: "$39",
      yearly: "$31",
      desc: "For teams shipping product fast.",
      features: ["Unlimited projects", "100 GB storage", "Advanced reporting", "Priority support", "Team seats (up to 10)"],
      cta: "Start 14-day trial",
      popular: true,
    },
    {
      name: "Scale",
      monthly: "$99",
      yearly: "$79",
      desc: "For scaling companies with serious needs.",
      features: ["Everything in Growth", "Unlimited storage", "Dedicated support", "Custom integrations", "SLA + audit logs"],
      cta: "Talk to sales",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose your plan</h2>
          <p className="text-gray-500 text-lg mb-8">Switch anytime. Cancel anytime.</p>
          {/* Toggle */}
          <div className="inline-flex items-center gap-4 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${!yearly ? "bg-white shadow text-gray-900" : "text-gray-500"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${yearly ? "bg-white shadow text-gray-900" : "text-gray-500"}`}
            >
              Yearly
              <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col border ${p.popular ? "border-violet-300 shadow-lg shadow-violet-100" : "border-gray-200"}`}
            >
              {p.popular && (
                <span className="text-xs font-bold text-violet-600 bg-violet-100 px-3 py-1 rounded-full self-start mb-3">
                  Most Popular
                </span>
              )}
              <div className="text-sm font-semibold text-gray-500 mb-1">{p.name}</div>
              <div className="text-4xl font-black text-gray-900 mb-1">
                {yearly ? p.yearly : p.monthly}
                <span className="text-base font-normal text-gray-400">/mo</span>
              </div>
              {yearly && <div className="text-xs text-emerald-600 font-medium mb-2">Billed annually</div>}
              <p className="text-sm text-gray-500 mb-6">{p.desc}</p>
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`text-center py-3 rounded-xl font-semibold text-sm ${p.popular ? "bg-violet-600 text-white hover:bg-violet-700" : "border border-gray-300 text-gray-700 hover:bg-gray-50"}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
