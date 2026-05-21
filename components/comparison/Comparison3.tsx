const items = [
  { label: "Setup time", us: "5 minutes", them: "2–3 days" },
  { label: "Pricing", us: "Flat rate", them: "Per-seat + overages" },
  { label: "Support", us: "24/7 live chat", them: "Email only, 3-day SLA" },
  { label: "API access", us: "Full access, all plans", them: "Enterprise only" },
  { label: "Uptime SLA", us: "99.99%", them: "99.5%" },
];

export default function Comparison3() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Head-to-Head</h2>
        <p className="text-gray-500 text-center mb-10">A side-by-side look at what makes us different.</p>
        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200 text-center text-sm font-bold">
            <div className="p-4 text-gray-500">Feature</div>
            <div className="p-4 text-indigo-600 bg-indigo-50">Us</div>
            <div className="p-4 text-gray-400">Competitors</div>
          </div>
          {items.map((item, i) => (
            <div key={item.label} className={`grid grid-cols-3 text-center border-b border-gray-100 last:border-0 ${i % 2 ? "bg-gray-50/40" : ""}`}>
              <div className="p-4 text-sm text-gray-700 text-left font-medium">{item.label}</div>
              <div className="p-4 text-sm text-emerald-700 font-semibold bg-indigo-50">{item.us}</div>
              <div className="p-4 text-sm text-gray-400">{item.them}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
