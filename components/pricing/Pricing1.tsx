export default function Pricing1() {
  const plans = [
    {
      name: "Basic",
      price: "$9",
      desc: "Perfect for individuals and small side projects.",
      features: ["Up to 3 projects", "5 GB storage", "Basic analytics", "Email support", "API access"],
      cta: "Get started",
      highlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      desc: "Everything a growing team needs to ship fast.",
      features: ["Unlimited projects", "50 GB storage", "Advanced analytics", "Priority support", "Custom integrations", "Team collaboration", "SSO login"],
      cta: "Start free trial",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      desc: "For large organizations with advanced requirements.",
      features: ["Unlimited everything", "500 GB storage", "Dedicated CSM", "SLA guarantee", "Custom contracts", "SCIM provisioning", "Audit logs"],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-gray-500 text-lg">Start free. Scale as you grow. No hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col ${
                p.highlighted
                  ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-200 scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {p.highlighted && (
                <span className="text-xs font-bold uppercase tracking-widest bg-white/20 text-white px-3 py-1 rounded-full self-start mb-4">
                  Most Popular
                </span>
              )}
              <div className={`text-sm font-semibold mb-1 ${p.highlighted ? "text-indigo-200" : "text-gray-500"}`}>{p.name}</div>
              <div className={`text-5xl font-black mb-1 ${p.highlighted ? "text-white" : "text-gray-900"}`}>
                {p.price}<span className={`text-lg font-normal ${p.highlighted ? "text-indigo-200" : "text-gray-400"}`}>/mo</span>
              </div>
              <p className={`text-sm mb-6 ${p.highlighted ? "text-indigo-200" : "text-gray-500"}`}>{p.desc}</p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2 ${p.highlighted ? "text-indigo-100" : "text-gray-600"}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 ${p.highlighted ? "text-white" : "text-emerald-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`text-center py-3 rounded-xl font-semibold text-sm transition-colors ${
                  p.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-gray-900 text-white hover:bg-gray-700"
                }`}
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
