const features = [
  { icon: "⚡", color: "bg-amber-400", title: "Blazing Fast", desc: "Instant sync powered by Material You's adaptive engine." },
  { icon: "🔒", color: "bg-emerald-500", title: "End-to-End Encrypted", desc: "Your data is yours. Always private, always secure." },
  { icon: "🎨", color: "bg-pink-500", title: "Material You", desc: "Adapts to your wallpaper color for a personal look." },
  { icon: "☁️", color: "bg-blue-500", title: "Google Drive Sync", desc: "Seamless backup and sync with your Google account." },
  { icon: "🔔", color: "bg-purple-500", title: "Smart Alerts", desc: "Adaptive notifications that fit your usage patterns." },
  { icon: "📶", color: "bg-teal-500", title: "Offline Support", desc: "Full access even without a network connection." },
];

export default function AndroidFeatures1() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-600 bg-purple-50 px-3 py-1 rounded-full">Features</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-2 tracking-tight">Everything you need</h2>
          <p className="text-gray-500">Built natively for Android.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map(f => (
            <div key={f.title} className="bg-white rounded-3xl p-5 flex gap-4 items-start shadow-sm border border-gray-100">
              <div className={`w-11 h-11 ${f.color} rounded-2xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm`}>{f.icon}</div>
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
