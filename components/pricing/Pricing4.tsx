export default function Pricing4() {
  const tiers = ["Free", "Pro", "Enterprise"];
  const features = [
    { name: "Projects", values: ["3", "Unlimited", "Unlimited"] },
    { name: "Team members", values: ["2", "25", "Unlimited"] },
    { name: "Storage", values: ["1 GB", "100 GB", "1 TB"] },
    { name: "API access", values: [false, true, true] },
    { name: "Custom integrations", values: [false, true, true] },
    { name: "Priority support", values: [false, true, true] },
    { name: "SSO / SAML", values: [false, false, true] },
    { name: "Audit logs", values: [false, false, true] },
    { name: "Dedicated CSM", values: [false, false, true] },
    { name: "SLA guarantee", values: [false, false, true] },
  ];
  const prices = ["$0", "$29/mo", "Custom"];

  const Check = () => (
    <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
  const Cross = () => (
    <svg className="w-5 h-5 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Compare plans</h2>
          <p className="text-gray-500">See exactly what you get with each plan.</p>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left py-5 px-6 text-sm font-semibold text-gray-700 w-1/2">Feature</th>
                {tiers.map((t, i) => (
                  <th key={t} className="py-5 px-6 text-center">
                    <div className="text-sm font-bold text-gray-900">{t}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{prices[i]}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((f, idx) => (
                <tr key={f.name} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                  <td className="py-4 px-6 text-sm text-gray-700 font-medium">{f.name}</td>
                  {f.values.map((v, i) => (
                    <td key={i} className="py-4 px-6 text-center text-sm text-gray-700">
                      {typeof v === "boolean" ? (v ? <Check /> : <Cross />) : v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
