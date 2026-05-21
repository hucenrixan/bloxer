export default function Newsletter4() {
  return (
    <section className="py-16 px-6 bg-gray-50 border-y border-gray-200">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Subscribe to our newsletter</h2>
          <p className="text-gray-500 text-sm mt-1">Weekly updates on design, engineering, and product.</p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <input className="border border-gray-300 rounded-lg px-4 py-2.5 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="your@email.com" />
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
