export default function Product2() {
  return (
    <section className="py-20 px-6 bg-gray-900 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold text-indigo-400 bg-indigo-900/60 border border-indigo-800 px-3 py-1 rounded-full">Product Preview</span>
            <h2 className="text-3xl font-bold text-white mt-4 mb-3">Designed for Speed</h2>
            <p className="text-gray-400 leading-relaxed mb-6">A clean, focused interface that gets out of your way and lets you do your best work.</p>
            <ul className="flex flex-col gap-3">
              {["Lightning-fast performance","Works offline","Keyboard-first navigation"].map(f => (
                <li key={f} className="flex items-center gap-3 text-gray-300 text-sm"><span className="text-emerald-400">✓</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 border border-gray-700 rounded-3xl p-4 shadow-2xl">
            <div className="bg-gray-900 rounded-2xl p-3 flex flex-col gap-3 min-h-56">
              <div className="flex gap-2 items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <div className="h-2 bg-gray-700 rounded w-24" />
              </div>
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-gray-800 rounded-xl p-3 flex gap-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-indigo-900 flex-shrink-0" />
                  <div className="flex-1 flex flex-col gap-1.5">
                    <div className="h-2 bg-gray-600 rounded w-3/4" />
                    <div className="h-2 bg-gray-700 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
