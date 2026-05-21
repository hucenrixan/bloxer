export default function Video1() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">See It in Action</h2>
        <p className="text-gray-500 mb-10">Watch how teams use our platform to ship faster.</p>
        <div className="relative bg-gray-900 rounded-3xl overflow-hidden aspect-video flex items-center justify-center shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40" />
          <button className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <span className="text-indigo-600 text-2xl ml-1">▶</span>
          </button>
          <span className="absolute bottom-4 left-4 text-white/60 text-xs">Product Demo · 3:42</span>
        </div>
      </div>
    </section>
  );
}
