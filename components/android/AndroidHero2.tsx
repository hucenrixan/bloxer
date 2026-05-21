export default function AndroidHero2() {
  return (
    <section className="bg-gray-950 py-16 px-6 text-center" style={{ fontFamily: "'Google Sans','Roboto',sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-3 py-1.5 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-white/80 font-medium">Now on Android 15</span>
        </div>
        <h1 className="text-[40px] font-bold text-white leading-tight mb-3 tracking-[-0.5px]">
          Material. <span className="text-purple-400">Personal.</span> Perfect.
        </h1>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Built for Android, shaped by Material You. Your colors, your workflow.
        </p>
        <div className="flex flex-col gap-3">
          <button className="w-full bg-purple-600 hover:bg-purple-500 text-white font-semibold text-base py-4 rounded-[14px] transition-colors">
            Get it on Google Play
          </button>
          <button className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base py-4 rounded-[14px] transition-colors">
            Watch Demo
          </button>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8">
          {[{ v: "4.8", l: "Google Play" }, { v: "30K+", l: "Users" }, { v: "Android 10+", l: "Required" }].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-white font-bold text-xl">{s.v}</p>
              <p className="text-gray-500 text-xs">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
