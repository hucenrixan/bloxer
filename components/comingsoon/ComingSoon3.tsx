export default function ComingSoon3() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-indigo-200 font-semibold mb-4 text-sm uppercase tracking-widest">Coming Soon</p>
        <h1 className="text-5xl font-black text-white mb-4">We're Building Something Awesome</h1>
        <p className="text-indigo-200 mb-10">Sign up to get notified the moment we launch and receive an exclusive early-bird discount.</p>
        <div className="flex gap-3 max-w-sm mx-auto mb-6">
          <input className="flex-1 bg-white/10 border border-white/20 text-white placeholder-indigo-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white" placeholder="your@email.com" />
          <button className="bg-white text-indigo-600 font-bold px-5 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm flex-shrink-0">Notify Me</button>
        </div>
        <div className="flex justify-center gap-6 text-indigo-200 text-sm">
          {["1,240 on waitlist","Launching Q3 2026","Early-bird 30% off"].map(t => (
            <span key={t} className="flex items-center gap-1"><span className="text-green-300">✓</span>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
