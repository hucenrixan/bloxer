export default function iOSHero2() {
  return (
    <section className="bg-gray-950 py-16 px-6 text-center" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-white/80 font-medium">Version 3.0 is here</span>
        </div>
        <h1 className="text-4xl font-bold text-white tracking-tight leading-tight mb-3">
          Focus. Ship. <span className="text-blue-400">Repeat.</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          The productivity app built for developers. Dark by default. Fast always.
        </p>
        <div className="flex flex-col gap-3">
          <button className="w-full bg-blue-500 hover:bg-blue-400 text-white font-semibold text-lg py-4 rounded-2xl transition-colors">
            Download Free
          </button>
          <button className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold text-lg py-4 rounded-2xl transition-colors">
            Watch Demo
          </button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8">
          <div className="text-center">
            <p className="text-white font-bold text-xl">4.9</p>
            <p className="text-gray-500 text-xs">App Store</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-white font-bold text-xl">50K+</p>
            <p className="text-gray-500 text-xs">Users</p>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <p className="text-white font-bold text-xl">iOS 16+</p>
            <p className="text-gray-500 text-xs">Required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
