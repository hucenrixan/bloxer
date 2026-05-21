const bars = [
  { label: "Performance", value: 98, color: "bg-blue-500" },
  { label: "Reliability", value: 99, color: "bg-green-500" },
  { label: "User Satisfaction", value: 97, color: "bg-purple-500" },
  { label: "App Store Rating", value: 98, color: "bg-yellow-400" },
];

export default function iOSStats2() {
  return (
    <section className="py-16 px-6 bg-white" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Best in class</h2>
          <p className="text-gray-500 text-sm">Independent benchmarks, real data.</p>
        </div>
        <div className="space-y-5">
          {bars.map(b => (
            <div key={b.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-medium text-gray-700">{b.label}</span>
                <span className="text-sm font-bold text-gray-900">{b.value}%</span>
              </div>
              <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.value}%` }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3 text-center">
          {[{ v: "50K+", l: "Downloads" }, { v: "4.9★", l: "Rating" }, { v: "#1", l: "Productivity" }].map(s => (
            <div key={s.l} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
              <p className="text-xl font-bold text-gray-900">{s.v}</p>
              <p className="text-xs text-gray-500 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
