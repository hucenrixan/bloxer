export default function Footer2() {
  const links = ["Product", "Features", "Pricing", "Docs", "Blog", "Contact"];

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl font-black text-gray-900 tracking-tight">
            Arc<span className="text-emerald-500">flow</span>
          </span>
        </div>
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {links.map((l) => (
            <a key={l} href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex justify-center gap-4 mb-8">
          {["Twitter", "GitHub", "LinkedIn"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-xs font-medium text-gray-400 hover:text-gray-700 transition-colors border border-gray-200 px-3 py-1.5 rounded-lg hover:border-gray-300"
            >
              {s}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-400">© 2026 Arcflow Corp. All rights reserved.</p>
      </div>
    </footer>
  );
}
