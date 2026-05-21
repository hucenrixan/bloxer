export default function Footer4() {
  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <span>© 2026 Luminary, Inc. All rights reserved.</span>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Security", "Accessibility"].map((l) => (
            <a key={l} href="#" className="hover:text-gray-800 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
