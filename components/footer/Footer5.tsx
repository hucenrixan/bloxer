export default function Footer5() {
  const columns = [
    {
      title: "Product",
      links: ["Features", "Integrations", "Pricing", "Changelog", "Roadmap"],
    },
    {
      title: "Resources",
      links: ["Documentation", "API Reference", "Status", "Blog", "Community"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Partners", "Contact"],
    },
  ];

  return (
    <footer className="w-full bg-gray-950 text-gray-400">
      {/* Top: brand + social */}
      <div className="max-w-7xl mx-auto px-6 pt-14 pb-10 flex flex-col md:flex-row items-start justify-between gap-8 border-b border-gray-800">
        <div className="max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-sm font-black">N</span>
            </div>
            <span className="text-white font-bold text-xl">NovaDash</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            The all-in-one platform for teams who value speed, clarity, and collaboration.
          </p>
        </div>
        <div className="flex gap-3">
          {[
            { label: "X", href: "#" },
            { label: "GH", href: "#" },
            { label: "LI", href: "#" },
            { label: "YT", href: "#" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-all"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      {/* Middle: link columns */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-3 gap-8 border-b border-gray-800">
        {columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
            <ul className="flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {/* Bottom: copyright + legal */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <span>© 2026 NovaDash Technologies, Inc. All rights reserved.</span>
        <div className="flex gap-5">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Legal</a>
        </div>
      </div>
    </footer>
  );
}
