export default function Pricing5() {
  const plans = [
    {
      name: "Hobby",
      price: "$0",
      desc: "For side projects and exploration.",
      features: ["3 projects", "5 GB bandwidth", "Community support", "Basic analytics"],
      cta: "Deploy free",
      glow: false,
    },
    {
      name: "Pro",
      price: "$49",
      desc: "Optimized for production workloads.",
      features: ["Unlimited projects", "500 GB bandwidth", "Priority support", "Advanced analytics", "Custom domains", "Team seats"],
      cta: "Start Pro",
      glow: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      desc: "For large teams and regulated industries.",
      features: ["Everything in Pro", "5 TB bandwidth", "Dedicated account manager", "SLA + uptime guarantee", "Audit logs", "SCIM + SSO"],
      cta: "Contact us",
      glow: false,
    },
  ];

  return (
    <section className="w-full bg-[#080b14] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pricing for every stage
          </h2>
          <p className="text-gray-500 text-lg">From side project to enterprise. No surprises.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col border ${
                p.glow
                  ? "border-cyan-500/50 shadow-[0_0_40px_-10px_rgba(6,182,212,0.4)]"
                  : "border-gray-800"
              } bg-gray-900`}
            >
              {p.glow && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full">
                  Best Value
                </span>
              )}
              <div className="text-sm font-semibold text-gray-400 mb-1">{p.name}</div>
              <div className="text-4xl font-black text-white mb-1">
                {p.price}
                {p.price !== "$0" && <span className="text-base font-normal text-gray-500">/mo</span>}
              </div>
              <p className="text-sm text-gray-500 mb-7">{p.desc}</p>
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-gray-400 flex items-center gap-2">
                    <svg className="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  p.glow
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-90"
                    : "border border-gray-700 text-gray-300 hover:bg-gray-800"
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
