export default function Footer1() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + tagline */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <span className="text-white font-bold text-lg">Crestline</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Project management for teams who ship. Fast, focused, and free to start.
          </p>
        </div>
        {/* Col 1 */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Product</h4>
          <ul className="flex flex-col gap-3 text-sm">
            {["Features", "Pricing", "Changelog", "Roadmap"].map((l) => (
              <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        {/* Col 2 */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
          <ul className="flex flex-col gap-3 text-sm">
            {["About", "Blog", "Careers", "Press", "Contact"].map((l) => (
              <li key={l}><a href="#" className="hover:text-white transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        {/* Social */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-4">Follow us</h4>
          <div className="flex gap-3">
            {["X", "GH", "LI", "YT"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-all"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between text-xs text-gray-600 gap-2">
        <span>© 2026 Crestline Technologies, Inc. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-gray-400">Privacy</a>
          <a href="#" className="hover:text-gray-400">Terms</a>
          <a href="#" className="hover:text-gray-400">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
