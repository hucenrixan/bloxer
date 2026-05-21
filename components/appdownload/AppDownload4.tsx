export default function AppDownload4() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-gray-200 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex gap-3 flex-shrink-0">
            <div className="w-24 h-48 bg-indigo-100 rounded-2xl shadow" />
            <div className="w-24 h-48 bg-purple-100 rounded-2xl shadow mt-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">Free Download</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-3 mb-2">Available on iOS & Android</h2>
            <p className="text-gray-500 text-sm mb-5">Rated 4.9 stars with over 500K downloads. Trusted by teams at Fortune 500 companies.</p>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm hover:bg-gray-700 transition-colors"><span>🍎</span> App Store</button>
              <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm hover:bg-gray-700 transition-colors"><span>▶️</span> Google Play</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
