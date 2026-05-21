const features = ["Unlimited projects","Team collaboration","Custom domains","Priority support","Analytics dashboard","API access","SSO / SAML","SLA guarantee"];
const plans = ["Starter","Pro","Enterprise"];
const matrix = [
  [true, true, true],[false, true, true],[false, true, true],
  [false, true, true],[false, false, true],[false, true, true],
  [false, false, true],[false, false, true],
];

export default function Comparison1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Compare Plans</h2>
        <p className="text-gray-500 text-center mb-10">Pick the plan that's right for your team.</p>
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
            <div className="p-4" />
            {plans.map((p, i) => (
              <div key={p} className={`p-4 text-center font-bold text-sm ${i === 1 ? "bg-indigo-600 text-white" : "text-gray-900"}`}>{p}</div>
            ))}
          </div>
          {features.map((f, fi) => (
            <div key={f} className={`grid grid-cols-4 border-b border-gray-100 last:border-0 ${fi % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
              <div className="p-4 text-sm text-gray-700">{f}</div>
              {matrix[fi].map((has, pi) => (
                <div key={pi} className={`p-4 text-center ${pi === 1 ? "bg-indigo-50" : ""}`}>
                  {has ? <span className="text-emerald-500 font-bold">✓</span> : <span className="text-gray-300">—</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
