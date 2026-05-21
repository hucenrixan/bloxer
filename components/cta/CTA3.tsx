export default function CTA3() {
  return (
    <section className="w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 py-24 relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <span className="text-xs font-mono text-purple-200 uppercase tracking-widest mb-6 block">
          Limited time offer
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
          Start building something
          <br />
          <span className="text-purple-200">extraordinary</span> today
        </h2>
        <p className="text-purple-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Get 3 months free on any annual plan when you sign up this month. Over 400 teams joined us in April alone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="px-7 py-3.5 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-colors shadow-xl">
            Claim your discount
          </a>
          <a href="#" className="px-7 py-3.5 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
            Schedule a demo
          </a>
        </div>
      </div>
    </section>
  );
}
