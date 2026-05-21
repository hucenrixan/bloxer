const perks = ["Weekly curated resources", "No spam, ever", "Unsubscribe anytime"];

export default function Newsletter5() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Join 12,000+ subscribers</h2>
          <p className="text-indigo-200 mb-6">The best content for builders, delivered weekly.</p>
          <div className="flex gap-3 max-w-md mx-auto mb-6">
            <input className="flex-1 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none" placeholder="Enter your email" />
            <button className="bg-white text-indigo-600 font-bold px-5 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm flex-shrink-0">Subscribe</button>
          </div>
          <div className="flex items-center justify-center gap-5">
            {perks.map(p => (
              <span key={p} className="text-indigo-200 text-xs flex items-center gap-1"><span className="text-green-400">✓</span> {p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
