export default function Video5() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Watch Our Story</h2>
          <p className="text-gray-500">Two minutes. That's all it takes.</p>
        </div>
        <div className="relative">
          <div className="bg-gray-100 rounded-3xl aspect-video flex items-center justify-center overflow-hidden border border-gray-200">
            <button className="w-18 h-18 group flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center transition-colors shadow-lg shadow-indigo-200">
                <span className="text-white text-2xl ml-1">▶</span>
              </div>
              <span className="text-gray-500 text-xs font-medium">Play Video</span>
            </button>
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-6 bg-white border border-gray-200 rounded-2xl px-6 py-3 shadow-sm">
            {["2:00 min","No signup","HD quality"].map(t => (
              <span key={t} className="text-xs text-gray-500 flex items-center gap-1"><span className="text-emerald-500">✓</span>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
