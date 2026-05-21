const features = [
  { icon: "⚡", title: "Instant", desc: "Sub-second sync" },
  { icon: "🔒", title: "Private", desc: "E2E encrypted" },
  { icon: "🎨", title: "Material You", desc: "Adaptive colors" },
  { icon: "☁️", title: "Drive Sync", desc: "Auto backup" },
  { icon: "🔔", title: "Alerts", desc: "Smart reminders" },
  { icon: "📶", title: "Offline", desc: "Works anywhere" },
];

export default function AndroidFeatures2() {
  return (
    <section className="py-16 px-6 bg-gray-950" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-2">Built for Android</h2>
          <p className="text-gray-500">Every pixel purposeful.</p>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {features.map(f => (
            <div key={f.title} className="bg-white/5 border border-white/10 rounded-3xl p-4 text-center hover:bg-white/10 transition-colors">
              <div className="text-3xl mb-2">{f.icon}</div>
              <p className="text-white font-semibold text-sm mb-0.5">{f.title}</p>
              <p className="text-gray-500 text-xs">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
