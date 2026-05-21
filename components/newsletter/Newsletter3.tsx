export default function Newsletter3() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-4xl mb-4">📬</div>
        <h2 className="text-3xl font-bold text-white mb-3">Don't miss a thing</h2>
        <p className="text-gray-400 mb-8">Weekly tutorials, product updates, and curated resources for modern developers.</p>
        <div className="flex flex-col gap-3 max-w-sm mx-auto">
          <input className="w-full bg-gray-800 border border-gray-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500" placeholder="you@example.com" />
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl transition-colors">Join the Newsletter</button>
        </div>
        <p className="text-gray-600 text-xs mt-4">Trusted by 12,000+ readers. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
