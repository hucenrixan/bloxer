export default function Footer3() {
  return (
    <footer className="w-full bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-10 items-start">
        {/* Brand side */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-md bg-violet-600 flex items-center justify-center">
              <span className="text-white text-xs font-black">V</span>
            </div>
            <span className="text-white font-bold text-lg">Vantage</span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed mb-4">
            Infrastructure for the modern web. Fast deploys, global edge, and built-in observability.
          </p>
        </div>
        {/* Newsletter side */}
        <div className="flex-1 max-w-sm">
          <h4 className="text-white font-semibold text-sm mb-2">Stay in the loop</h4>
          <p className="text-xs text-gray-500 mb-4">Product updates, tips, and engineering deep-dives. No spam.</p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="you@company.com"
              className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-violet-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-violet-600 text-white text-sm font-semibold rounded-lg hover:bg-violet-500 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between text-xs text-gray-600 gap-2">
        <span>© 2026 Vantage Systems, Inc.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms</a>
          <a href="#" className="hover:text-gray-400">Status</a>
        </div>
      </div>
    </footer>
  );
}
