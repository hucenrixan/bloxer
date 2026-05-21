export default function Hero2() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
            Project management, reimagined
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Ship faster with a team that moves as one
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Crestline gives your team a single source of truth — tasks, docs, timelines, and chats all connected and in sync.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-colors text-center">
              Get started free
            </a>
            <a href="#" className="px-6 py-3 text-gray-600 font-medium hover:text-gray-900 flex items-center gap-2 justify-center">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">▶</span>
              Watch demo
            </a>
          </div>
          <div className="flex items-center gap-6 mt-8 text-sm text-gray-400">
            <span>✓ Free forever plan</span>
            <span>✓ Unlimited projects</span>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-sm md:max-w-md h-72 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-inner">
            <span className="text-gray-400 text-sm font-medium">Product screenshot</span>
          </div>
        </div>
      </div>
    </section>
  );
}
