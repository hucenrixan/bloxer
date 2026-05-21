export default function Hero5() {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[480px]">
      {/* Left dark side */}
      <div className="flex-1 bg-zinc-900 flex items-center">
        <div className="px-10 py-20 max-w-lg">
          <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">
            Analytics & Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            Know your numbers. Grow your business.
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed mb-8">
            Meridian surfaces the metrics that matter — revenue trends, customer behavior, and growth opportunities — all in one clean dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#" className="px-6 py-3 bg-amber-400 text-zinc-900 rounded-lg font-bold hover:bg-amber-300 transition-colors text-center">
              Start analyzing
            </a>
            <a href="#" className="px-6 py-3 border border-zinc-700 text-zinc-300 rounded-lg font-medium hover:bg-zinc-800 transition-colors text-center">
              View demo
            </a>
          </div>
        </div>
      </div>
      {/* Right image side */}
      <div className="flex-1 bg-gray-200 flex items-center justify-center min-h-60 md:min-h-full">
        <span className="text-gray-400 text-sm font-medium">Dashboard preview</span>
      </div>
    </section>
  );
}
