export default function AndroidHero1() {
  return (
    <section className="py-16 px-6 bg-white" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="w-20 h-20 mx-auto mb-6 rounded-[28px] bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg">
          <span className="text-4xl">✦</span>
        </div>
        <div className="inline-flex items-center gap-1.5 bg-purple-50 border border-purple-100 rounded-full px-3 py-1 mb-5 mx-auto block text-center w-fit">
          <span className="text-yellow-500 text-sm">★★★★★</span>
          <span className="text-xs text-purple-600 font-medium">4.8 · Google Play</span>
        </div>
        <h1 className="text-[40px] font-bold text-gray-900 leading-tight mb-3 tracking-[-0.5px] text-center">
          The app that does it all
        </h1>
        <p className="text-lg text-gray-500 mb-8 leading-relaxed text-center">
          Material You design, built for Android. Download free and get started in seconds.
        </p>
        <div className="flex flex-col gap-3">
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold text-base py-4 rounded-[14px] shadow-md shadow-purple-200 transition-colors">
            Get it on Google Play
          </button>
          <button className="w-full text-purple-600 font-semibold text-base py-4 rounded-[14px] bg-purple-50 hover:bg-purple-100 transition-colors border border-purple-100">
            See Features
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-5 text-center">Requires Android 10+ · Free with in-app purchases</p>
      </div>
    </section>
  );
}
