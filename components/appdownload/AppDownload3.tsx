export default function AppDownload3() {
  return (
    <section className="py-0 bg-gradient-to-r from-indigo-600 to-purple-700 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <div>
          <h2 className="text-3xl font-bold text-white mb-3">Get the App</h2>
          <p className="text-indigo-200 mb-8">The fastest way to stay on top of your work. Download for free on any device.</p>
          <div className="flex gap-3 flex-wrap">
            <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-3 rounded-xl transition-colors">
              <span className="text-2xl">🍎</span>
              <div className="text-left"><p className="text-xs text-indigo-200">Download on the</p><p className="font-semibold text-sm">App Store</p></div>
            </button>
            <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-5 py-3 rounded-xl transition-colors">
              <span className="text-2xl">▶️</span>
              <div className="text-left"><p className="text-xs text-indigo-200">Get it on</p><p className="font-semibold text-sm">Google Play</p></div>
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-3 items-end">
          <div className="w-28 h-52 bg-white/10 rounded-3xl border border-white/20" />
          <div className="w-28 h-64 bg-white/10 rounded-3xl border border-white/20" />
        </div>
      </div>
    </section>
  );
}
