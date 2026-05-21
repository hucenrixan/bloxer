export default function Hero4() {
  return (
    <section className="w-full bg-stone-50 min-h-[480px] flex items-center">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <p className="text-xs font-mono text-rose-400 uppercase tracking-[0.25em] mb-8">
          Design tools for modern teams
        </p>
        <h1 className="text-7xl md:text-8xl font-black text-stone-900 leading-none tracking-tight mb-6">
          Create<br />
          <span className="text-rose-300">without</span><br />
          limits.
        </h1>
        <div className="mt-10 flex flex-col gap-4 max-w-sm">
          <p className="text-stone-500 text-base leading-relaxed font-light">
            Canvas is a design platform built for speed. Prototype, collaborate, and ship beautiful interfaces in record time.
          </p>
          <a href="#" className="w-fit mt-4 text-sm font-semibold text-stone-900 border-b-2 border-rose-300 pb-0.5 hover:border-rose-500 transition-colors">
            Explore Canvas →
          </a>
        </div>
      </div>
    </section>
  );
}
