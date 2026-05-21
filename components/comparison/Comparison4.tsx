const features = ["Unlimited projects","Real-time collaboration","Custom domains","Priority support","API access","SSO / SAML"];

export default function Comparison4() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Compare Plans</h2>
        <p className="text-gray-400 text-center mb-10">Everything you need, clearly laid out.</p>
        <div className="border border-gray-700 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-4 border-b border-gray-700 bg-gray-800">
            <div className="p-4" />
            {["Starter","Pro","Enterprise"].map((p, i) => (
              <div key={p} className={`p-4 text-center text-sm font-bold ${i === 1 ? "text-indigo-400" : "text-gray-300"}`}>{p}</div>
            ))}
          </div>
          {features.map((f, fi) => (
            <div key={f} className="grid grid-cols-4 border-b border-gray-800 last:border-0">
              <div className="p-4 text-sm text-gray-400">{f}</div>
              {[fi >= 2, true, true].map((has, pi) => (
                <div key={pi} className={`p-4 text-center ${pi === 1 ? "bg-indigo-950/30" : ""}`}>
                  {has ? <span className="text-emerald-400 font-bold">✓</span> : <span className="text-gray-700">—</span>}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
