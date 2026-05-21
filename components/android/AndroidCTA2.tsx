export default function AndroidCTA2() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="flex items-center gap-4 bg-white rounded-3xl p-4 border border-gray-100 shadow-sm mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md">✦</div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-sm">Download for free</p>
            <p className="text-xs text-gray-400 mt-0.5">Android 10+ · 14 MB</p>
          </div>
          <button className="bg-purple-600 text-white text-sm font-bold px-4 py-2 rounded-2xl flex-shrink-0">Install</button>
        </div>
        <div className="flex gap-3 mt-2">
          {[{ v: "4.8", l: "Play Store", s: "★★★★★" }, { v: "Free", l: "In-App $3.99/mo", s: "" }, { v: "3+", l: "Age Rating", s: "" }].map(s => (
            <div key={s.l} className="flex-1 bg-white rounded-3xl p-3 border border-gray-100 shadow-sm text-center">
              <p className="text-xl font-bold text-gray-900">{s.v}</p>
              {s.s && <div className="text-yellow-400 text-[10px] my-0.5">{s.s}</div>}
              <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-purple-50 border border-purple-100 rounded-3xl p-4 flex items-center gap-3">
          <span className="text-2xl">🏆</span>
          <div>
            <p className="font-semibold text-purple-900 text-sm">Editor's Choice</p>
            <p className="text-xs text-purple-500">Featured by Google Play · April 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}
