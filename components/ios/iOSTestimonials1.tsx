const reviews = [
  { name: "Sarah M.", handle: "@sarahm", stars: 5, text: "This app completely changed how I organize my day. The iCloud sync is flawless.", date: "May 2026", avatar: "SM", color: "bg-pink-400" },
  { name: "James K.", handle: "@jk_dev", stars: 5, text: "Best iOS app I've bought this year. Clean UI, zero bugs, and actually fast.", date: "Apr 2026", avatar: "JK", color: "bg-blue-400" },
  { name: "Layla H.", handle: "@laylah", stars: 5, text: "The widget integration with the Lock Screen is so thoughtfully designed. Love it.", date: "Apr 2026", avatar: "LH", color: "bg-purple-400" },
];

export default function iOSTestimonials1() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-8">
          <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">4.9 on the App Store</h2>
          <p className="text-gray-500 text-sm">From 50,000+ verified reviews</p>
        </div>
        <div className="flex flex-col gap-4">
          {reviews.map(r => (
            <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 ${r.color} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}>{r.avatar}</div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.handle}</p>
                </div>
                <div className="text-right">
                  <div className="text-yellow-400 text-xs">{"★".repeat(r.stars)}</div>
                  <p className="text-xs text-gray-400 mt-0.5">{r.date}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
        <div className="mt-6 bg-white rounded-2xl p-4 flex items-center justify-between border border-gray-100 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-md">⚡</div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Download on the App Store</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="text-yellow-400 text-xs">★★★★★</span>
                <span className="text-xs text-gray-400">50K ratings</span>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-xl">GET</button>
        </div>
      </div>
    </section>
  );
}
