export default function AppDownload1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Now on Mobile</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-4 mb-3">Take it everywhere with you</h2>
            <p className="text-gray-600 leading-relaxed mb-8">Everything you love about the web app, now in your pocket. Available for iOS and Android.</p>
            <div className="flex gap-3 flex-wrap">
              <button className="flex items-center gap-3 bg-gray-900 hover:bg-gray-700 text-white px-5 py-3 rounded-xl transition-colors">
                <span className="text-2xl">🍎</span>
                <div className="text-left"><p className="text-xs text-gray-400 leading-none">Download on the</p><p className="font-semibold text-sm">App Store</p></div>
              </button>
              <button className="flex items-center gap-3 bg-gray-900 hover:bg-gray-700 text-white px-5 py-3 rounded-xl transition-colors">
                <span className="text-2xl">▶️</span>
                <div className="text-left"><p className="text-xs text-gray-400 leading-none">Get it on</p><p className="font-semibold text-sm">Google Play</p></div>
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <div className="w-32 h-64 bg-indigo-100 rounded-3xl shadow-lg" />
            <div className="w-32 h-64 bg-purple-100 rounded-3xl shadow-lg mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
