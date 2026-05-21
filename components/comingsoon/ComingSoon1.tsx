export default function ComingSoon1() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="w-14 h-14 bg-indigo-600 rounded-2xl mx-auto mb-8" />
        <h1 className="text-4xl font-black text-gray-900 mb-3">Something Big Is Coming</h1>
        <p className="text-gray-500 mb-8">We're working on something amazing. Leave your email and be the first to know.</p>
        <div className="flex gap-3 max-w-sm mx-auto">
          <input className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="your@email.com" />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm">Notify Me</button>
        </div>
        <p className="text-gray-400 text-xs mt-4">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
