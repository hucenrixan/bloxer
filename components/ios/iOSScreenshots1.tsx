const screens = [
  { label: "Dashboard", bg: "from-blue-500 to-indigo-600", icon: "📊" },
  { label: "Tasks", bg: "from-purple-500 to-pink-500", icon: "✅" },
  { label: "Analytics", bg: "from-emerald-500 to-teal-600", icon: "📈" },
];

export default function iOSScreenshots1() {
  return (
    <section className="py-16 px-6 bg-gray-50 overflow-hidden" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">See it in action</h2>
          <p className="text-gray-500 text-sm">Designed for every screen.</p>
        </div>
        <div className="flex gap-4 justify-center">
          {screens.map((s, i) => (
            <div key={s.label} className={`flex-shrink-0 w-40 ${i === 1 ? "-mt-0" : "mt-4"}`}>
              <div className={`bg-gradient-to-br ${s.bg} rounded-[28px] aspect-[9/19] flex flex-col items-center justify-center shadow-xl ${i === 1 ? "shadow-blue-200 scale-105" : "shadow-gray-200"}`}>
                <span className="text-4xl mb-2">{s.icon}</span>
                <div className="w-16 h-1.5 bg-white/30 rounded-full mb-1.5" />
                <div className="w-12 h-1.5 bg-white/20 rounded-full mb-1.5" />
                <div className="w-14 h-1.5 bg-white/20 rounded-full" />
              </div>
              <p className="text-xs font-medium text-gray-500 text-center mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
