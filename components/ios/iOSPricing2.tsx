export default function iOSPricing2() {
  return (
    <section className="py-16 px-6 bg-white" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">One plan, everything included</h2>
          <p className="text-gray-500 text-sm">No tiers. No confusion.</p>
        </div>
        <div className="bg-gray-950 rounded-3xl p-7 text-center mb-4">
          <p className="text-gray-400 text-sm mb-3">Annual Plan · Save 40%</p>
          <div className="flex items-end justify-center gap-1 mb-1">
            <span className="text-5xl font-bold text-white">$2.99</span>
            <span className="text-gray-400 text-sm pb-2">/mo</span>
          </div>
          <p className="text-gray-500 text-xs mb-6">Billed as $35.99/year · Cancel anytime</p>
          <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold py-4 rounded-2xl text-sm transition-colors">
            Start 7-Day Free Trial
          </button>
          <p className="text-gray-600 text-xs mt-3">No charge until trial ends</p>
        </div>
        <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Everything included</p>
          <ul className="space-y-2">
            {["Unlimited projects & tasks","iCloud sync across all devices","Priority support","Advanced widgets","Custom themes","Shortcuts integration"].map(f => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                <span className="text-blue-500 text-base">✓</span>{f}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center text-xs text-gray-400 mt-5">Billed via App Store · Secure payment</p>
      </div>
    </section>
  );
}
