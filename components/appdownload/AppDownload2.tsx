export default function AppDownload2() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-indigo-600 rounded-3xl mx-auto mb-6 flex items-center justify-center text-white text-2xl">📱</div>
        <h2 className="text-3xl font-bold text-white mb-3">Your work, everywhere</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Fully-featured mobile app for iOS and Android. Stay productive on the go.</p>
        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <button className="flex items-center gap-3 border border-gray-600 hover:border-white text-white px-6 py-3.5 rounded-2xl transition-colors">
            <span className="text-2xl">🍎</span>
            <div className="text-left"><p className="text-xs text-gray-400">Download on the</p><p className="font-bold">App Store</p></div>
          </button>
          <button className="flex items-center gap-3 border border-gray-600 hover:border-white text-white px-6 py-3.5 rounded-2xl transition-colors">
            <span className="text-2xl">▶️</span>
            <div className="text-left"><p className="text-xs text-gray-400">Get it on</p><p className="font-bold">Google Play</p></div>
          </button>
        </div>
        <div className="flex justify-center gap-6">
          {["4.9★ App Store", "4.8★ Google Play", "500K+ Downloads"].map(s => (
            <span key={s} className="text-gray-400 text-sm">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
