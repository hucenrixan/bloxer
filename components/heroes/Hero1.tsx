export default function Hero1() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 py-28 text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full mb-6">
          Now in public beta
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          The smarter way to manage your team's workflow
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Streamline collaboration, automate repetitive tasks, and gain real-time visibility into every project — all from one powerful platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="px-7 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
            Start for free
          </a>
          <a href="#" className="px-7 py-3.5 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
            See how it works →
          </a>
        </div>
        <p className="text-xs text-gray-400 mt-5">No credit card required · Free 14-day trial</p>
      </div>
    </section>
  );
}
