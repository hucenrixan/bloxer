export default function CTA2() {
  return (
    <section className="w-full bg-white py-20 border-t border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center rounded-2xl border border-gray-200 p-10 md:p-14">
          {/* Left */}
          <div className="flex-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-600">Get early access</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4 leading-tight">
              Be the first to know what's next
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We ship fast and share everything. Subscribe for product updates, deep-dives, and exclusive early access to new features before the public launch.
            </p>
          </div>
          {/* Right */}
          <div className="flex-1 w-full">
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-600 text-white text-sm font-semibold rounded-lg hover:bg-teal-700 transition-colors whitespace-nowrap"
              >
                Subscribe →
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3">No spam. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
