export default function Pricing3() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      tagline: "Get started at no cost",
      features: [
        "Up to 2 team members",
        "3 active projects",
        "1 GB storage",
        "Community support",
        "Basic integrations",
      ],
      cta: "Start for free",
      style: "border border-gray-200",
      ctaStyle: "border border-gray-300 text-gray-800 hover:bg-gray-50",
    },
    {
      name: "Pro",
      price: "$24",
      tagline: "For teams serious about growth",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "100 GB storage",
        "Priority support",
        "All integrations",
        "Custom domain",
        "Advanced analytics",
      ],
      cta: "Start free trial",
      style: "bg-gray-900 border border-gray-900",
      ctaStyle: "bg-white text-gray-900 hover:bg-gray-100 font-bold",
      dark: true,
    },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Two plans. No complexity.</h2>
          <p className="text-gray-500">Start free, upgrade when you're ready. No credit card required.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-3xl p-10 flex flex-col ${p.style}`}>
              <div className={`text-sm font-semibold uppercase tracking-widest mb-2 ${p.dark ? "text-gray-400" : "text-gray-500"}`}>{p.name}</div>
              <div className={`text-6xl font-black mb-1 ${p.dark ? "text-white" : "text-gray-900"}`}>
                {p.price}
                {p.price !== "$0" && <span className={`text-xl font-normal ${p.dark ? "text-gray-400" : "text-gray-400"}`}>/mo</span>}
              </div>
              <p className={`text-sm mb-8 ${p.dark ? "text-gray-400" : "text-gray-500"}`}>{p.tagline}</p>
              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`text-sm flex items-center gap-2.5 ${p.dark ? "text-gray-300" : "text-gray-600"}`}>
                    <svg className={`w-4 h-4 flex-shrink-0 ${p.dark ? "text-emerald-400" : "text-emerald-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={`text-center py-3.5 rounded-2xl text-sm transition-colors ${p.ctaStyle}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
