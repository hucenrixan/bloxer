export default function AndroidCTA1() {
  return (
    <section className="py-16 px-6 bg-white" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-center shadow-2xl shadow-purple-200">
          <div className="w-16 h-16 mx-auto mb-5 bg-white/20 rounded-[20px] flex items-center justify-center text-3xl backdrop-blur-sm">✦</div>
          <h2 className="text-3xl font-bold text-white tracking-tight mb-3">Ready to get started?</h2>
          <p className="text-purple-100 mb-8 leading-relaxed">Join over 30,000 users on Android. Free to install, no credit card needed.</p>
          <div className="flex flex-col gap-3">
            <button className="w-full bg-white text-purple-700 font-semibold text-base py-4 rounded-2xl shadow-lg transition-opacity hover:opacity-90">
              Get it on Google Play
            </button>
            <button className="w-full bg-white/15 text-white font-semibold text-base py-4 rounded-2xl backdrop-blur-sm transition-opacity hover:opacity-90">
              View on Product Hunt →
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              <span className="text-yellow-300 text-sm">★★★★★</span>
              <span className="text-purple-100 text-xs">4.8</span>
            </div>
            <span className="text-purple-300 text-xs">·</span>
            <span className="text-purple-100 text-xs">Free · In-App Purchases</span>
            <span className="text-purple-300 text-xs">·</span>
            <span className="text-purple-100 text-xs">Android 10+</span>
          </div>
        </div>
      </div>
    </section>
  );
}
