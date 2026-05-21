"use client";
import { useState } from "react";

export default function iOSPricing1() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Free", color: "bg-white", btn: "bg-gray-100 text-gray-700",
      price: "$0", period: "forever",
      features: ["5 projects", "1 GB storage", "Basic sync", "Email support"],
    },
    {
      name: "Pro", color: "bg-blue-500", btn: "bg-white text-blue-500", highlight: true,
      price: annual ? "$2.99" : "$4.99",
      period: annual ? "per month, billed yearly" : "per month",
      features: ["Unlimited projects", "50 GB storage", "iCloud sync", "Priority support", "Advanced analytics", "Custom themes"],
    },
  ];

  return (
    <section className="py-16 px-6 bg-white" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Simple pricing</h2>
          <p className="text-gray-500">Start free, upgrade anytime.</p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-1 flex mb-8">
          <button onClick={() => setAnnual(false)} className={`flex-1 py-2 text-sm font-semibold rounded-xl transition-all ${!annual ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}>Monthly</button>
          <button onClick={() => setAnnual(true)} className={`flex-1 py-2 text-sm font-medium rounded-xl transition-all ${annual ? "bg-white text-gray-900 shadow-sm" : "text-gray-500"}`}>
            Annual <span className="text-green-500 text-xs font-semibold">-40%</span>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {plans.map(plan => (
            <div key={plan.name} className={`${plan.color} rounded-3xl p-6 ${plan.highlight ? "shadow-2xl shadow-blue-200" : "border border-gray-100 shadow-sm"}`}>
              {plan.highlight && <span className="text-xs font-bold text-blue-100 uppercase tracking-widest">Most Popular</span>}
              <div className="flex items-end gap-1 mt-1 mb-1">
                <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                <span className={`text-sm pb-1.5 ${plan.highlight ? "text-blue-200" : "text-gray-400"}`}>{plan.period}</span>
              </div>
              {plan.highlight && annual && <p className="text-blue-200 text-xs mb-4">Billed as ${(2.99 * 12).toFixed(2)}/year · Save $24</p>}
              <ul className={`space-y-2.5 mb-6 ${plan.highlight && annual ? "" : "mt-5"}`}>
                {plan.features.map(f => (
                  <li key={f} className={`flex items-center gap-2.5 text-sm ${plan.highlight ? "text-white" : "text-gray-700"}`}>
                    <span className={`text-base ${plan.highlight ? "text-blue-200" : "text-green-500"}`}>✓</span>{f}
                  </li>
                ))}
              </ul>
              <button className={`w-full ${plan.btn} font-semibold py-3.5 rounded-2xl text-sm transition-opacity hover:opacity-90`}>
                {plan.highlight ? "Start Pro Free" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-5">Cancel anytime · Billed via App Store</p>
      </div>
    </section>
  );
}
