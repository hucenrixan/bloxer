export default function iOSCTA1() {
  return (
    <section className="py-16 px-6 bg-white" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-8 text-center shadow-2xl shadow-blue-200">
          <div className="w-16 h-16 mx-auto mb-5 bg-white/20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm">⚡</div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-3">Ready to start?</h2>
          <p className="text-blue-100 mb-8 leading-relaxed">Join over 50,000 users who've already made the switch. Free to download.</p>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-white text-blue-600 font-semibold text-base py-4 rounded-2xl shadow-lg transition-opacity hover:opacity-90">
              Download on the App Store
            </button>
            <button className="w-full bg-white/15 text-white font-semibold text-base py-4 rounded-2xl backdrop-blur-sm transition-opacity hover:opacity-90">
              View on Product Hunt →
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              <span className="text-yellow-300 text-sm">★★★★★</span>
              <span className="text-blue-100 text-xs">4.9</span>
            </div>
            <span className="text-blue-300 text-xs">·</span>
            <span className="text-blue-100 text-xs">Free · In-App Purchases</span>
            <span className="text-blue-300 text-xs">·</span>
            <span className="text-blue-100 text-xs">iOS 16+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
