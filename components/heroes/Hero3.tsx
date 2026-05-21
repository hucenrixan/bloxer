export default function Hero3() {
  return (
    <section className="relative w-full bg-[#0f172a] overflow-hidden min-h-[500px] flex items-center">
      {/* Blob 1 */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-violet-600 rounded-full opacity-20 blur-3xl animate-pulse" />
      {/* Blob 2 */}
      <div className="absolute -bottom-24 right-0 w-80 h-80 bg-sky-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      {/* Blob 3 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
        <span className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 bg-sky-400/10 border border-sky-400/20 px-3 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          Infrastructure built for scale
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Deploy with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-sky-400">
            confidence
          </span>{" "}
          at any scale
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Forge handles your infrastructure so your engineers can focus on what matters. Automatic scaling, zero-downtime deploys, and built-in observability.
        </p>
        <a href="#" className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-bold hover:opacity-90 transition-opacity shadow-xl shadow-violet-900/30">
          Start deploying today
        </a>
      </div>
    </section>
  );
}
