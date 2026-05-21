const stats = [
  { value: "50K+", label: "Active Users", icon: "👥" },
  { value: "4.9★", label: "App Store Rating", icon: "⭐" },
  { value: "99.9%", label: "Uptime", icon: "🔒" },
  { value: "<1s", label: "Sync Speed", icon: "⚡" },
];

export default function iOSStats1() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">Trusted by thousands</h2>
          <p className="text-gray-500 text-sm">Numbers that speak for themselves.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center">
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="text-3xl font-bold text-gray-900 tracking-tight mb-1">{s.value}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-blue-50 rounded-2xl p-4 flex items-center gap-3 border border-blue-100">
          <span className="text-2xl">🏆</span>
          <div>
            <p className="font-semibold text-blue-900 text-sm">App of the Day</p>
            <p className="text-xs text-blue-500">Featured by Apple · March 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
