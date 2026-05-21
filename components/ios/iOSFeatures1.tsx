const features = [
  { icon: "⚡", color: "bg-yellow-400", title: "Lightning Fast", desc: "Instant sync across all your devices, no lag." },
  { icon: "🔒", color: "bg-green-500", title: "Private & Secure", desc: "End-to-end encrypted. Your data stays yours." },
  { icon: "🎨", color: "bg-pink-500", title: "Beautiful UI", desc: "Crafted to feel at home on iOS and iPadOS." },
  { icon: "☁️", color: "bg-blue-500", title: "iCloud Sync", desc: "Seamless sync with your Apple ID across devices." },
  { icon: "🔔", color: "bg-purple-500", title: "Smart Alerts", desc: "Intelligent notifications that respect your focus." },
  { icon: "♾️", color: "bg-indigo-500", title: "Offline First", desc: "Full functionality even without internet." },
];

export default function iOSFeatures1() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-full">Features</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-2 tracking-tight">Everything you need</h2>
          <p className="text-gray-500">Built for iPhone from the ground up.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map(f => (
            <div key={f.title} className="bg-white rounded-2xl p-5 flex gap-4 items-start shadow-sm border border-gray-100">
              <div className={`w-11 h-11 ${f.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm`}>{f.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base mb-0.5">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
