export default function Newsletter2() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-gray-200 rounded-3xl p-10">
          <div>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">Newsletter</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-2">Weekly insights for builders</h2>
            <p className="text-gray-500 text-sm leading-relaxed">Join 12,000+ developers and designers who get our weekly digest of tools, tutorials, and industry news.</p>
          </div>
          <div className="flex flex-col gap-3">
            <input className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your email address" />
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm">Subscribe — It's free</button>
            <p className="text-xs text-gray-400 text-center">12,847 subscribers · No spam · Unsubscribe anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
}
