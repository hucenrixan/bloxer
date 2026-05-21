export default function CTA4() {
  return (
    <section className="w-full relative py-28 overflow-hidden">
      {/* Simulated image bg with pattern overlay */}
      <div
        className="absolute inset-0 bg-gray-800"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.02) 10px, rgba(255,255,255,0.02) 20px)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-4">
          Enterprise ready
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Scale without limits.<br />Deploy with confidence.
        </h2>
        <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Forge is trusted by Fortune 500 companies to run mission-critical infrastructure. Your workloads deserve the same reliability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="px-8 py-3.5 bg-amber-400 text-gray-900 font-bold rounded-xl hover:bg-amber-300 transition-colors shadow-xl">
            Talk to an expert
          </a>
          <a href="#" className="px-8 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
            View case studies
          </a>
        </div>
      </div>
    </section>
  );
}
