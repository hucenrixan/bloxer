export default function iOSHero1() {
  return (
    <section className="bg-white py-16 px-6 text-center" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-blue-200">
          <span className="text-5xl">⚡</span>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-3 py-1 mb-5">
          <span className="text-yellow-400 text-sm">★★★★★</span>
          <span className="text-xs text-gray-500 font-medium">4.9 · 50K+ Reviews</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3">
          The app that does it all
        </h1>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
          Beautifully designed, blazing fast. Download free and get started in seconds.
        </p>
        <div className="flex flex-col gap-3">
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold text-lg py-4 rounded-2xl shadow-lg shadow-blue-200 transition-colors">
            Download Free
          </button>
          <button className="w-full text-blue-500 font-semibold text-lg py-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-colors">
            See Features →
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-5">Available on iOS 16+ · Free with in-app purchases</p>
      </div>
    </section>
  );
}
