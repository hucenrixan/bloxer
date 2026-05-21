export default function iOSCTA2() {
  return (
    <section className="py-16 px-6 bg-gray-50" style={{ fontFamily: "system-ui,-apple-system,sans-serif" }}>
      <div className="max-w-sm mx-auto">
        <div className="flex items-center gap-4 bg-white rounded-2xl p-4 border border-gray-100 shadow-sm mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md">⚡</div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-gray-900 text-sm">Download for free</p>
            <p className="text-xs text-gray-400 mt-0.5">iPhone · iOS 16+ · 12 MB</p>
          </div>
          <button className="bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-xl flex-shrink-0">GET</button>
        </div>
        <div className="text-center py-4">
          <p className="text-xs text-gray-400">or scan to download</p>
          <div className="w-24 h-24 bg-gray-900 rounded-2xl mx-auto mt-3 flex items-center justify-center">
            <div className="grid grid-cols-5 gap-0.5">
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} className={`w-3.5 h-3.5 rounded-sm ${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,12,18].includes(i) ? "bg-white" : "bg-gray-900"}`} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-3 mt-2">
          <div className="flex-1 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-gray-900">4.9</p>
            <div className="text-yellow-400 text-xs my-0.5">★★★★★</div>
            <p className="text-[10px] text-gray-400">50K ratings</p>
          </div>
          <div className="flex-1 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-gray-900">Free</p>
            <p className="text-[10px] text-gray-400 mt-1">In-App Purchases</p>
            <p className="text-[10px] text-gray-400">from $4.99/mo</p>
          </div>
          <div className="flex-1 bg-white rounded-2xl p-3 border border-gray-100 shadow-sm text-center">
            <p className="text-xl font-bold text-gray-900">4+</p>
            <p className="text-[10px] text-gray-400 mt-1">Age Rating</p>
            <p className="text-[10px] text-gray-400">All Ages</p>
          </div>
        </div>
      </div>
    </section>
  );
}
