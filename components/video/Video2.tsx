export default function Video2() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-semibold text-indigo-400 bg-indigo-900/50 px-3 py-1 rounded-full">Product Tour</span>
          <h2 className="text-3xl font-bold text-white mt-4 mb-3">Watch how it works</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">See how thousands of teams use our platform to collaborate, ship, and scale — all without leaving one tab.</p>
          <button className="flex items-center gap-3 text-white font-semibold hover:text-indigo-400 transition-colors">
            <span className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center"><span className="ml-0.5">▶</span></span>
            Watch 3-min demo
          </button>
        </div>
        <div className="relative bg-gray-800 rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-gray-700">
          <button className="w-14 h-14 bg-indigo-600 hover:bg-indigo-500 rounded-full flex items-center justify-center transition-colors">
            <span className="text-white text-xl ml-1">▶</span>
          </button>
        </div>
      </div>
    </section>
  );
}
