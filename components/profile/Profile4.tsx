export default function Profile4() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 flex-shrink-0 border border-gray-200 rounded-2xl p-6 text-center">
            <div className="w-20 h-20 bg-indigo-500 rounded-2xl mx-auto mb-3 flex items-center justify-center text-white text-2xl font-bold">AM</div>
            <h2 className="font-bold text-gray-900">Alex Morgan</h2>
            <p className="text-gray-500 text-sm mt-0.5">CEO & Co-Founder</p>
            <div className="flex justify-center gap-2 mt-4">
              {["Twitter","GitHub","LinkedIn"].map(s => (
                <a key={s} href="#" className="text-xs text-gray-400 hover:text-gray-700 border border-gray-200 px-2 py-0.5 rounded transition-colors">{s}</a>
              ))}
            </div>
          </div>
          <div className="flex-1 border border-gray-200 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">About</h3>
            <p className="text-gray-600 text-sm mb-5 leading-relaxed">Building tools for developers. Prev. Stripe, Figma. Passionate about great DX and open source.</p>
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[["142","Projects"],["1.2k","Followers"],["89","Following"]].map(([v,l]) => (
                <div key={l} className="bg-gray-50 rounded-xl p-3 text-center"><p className="font-bold text-gray-900">{v}</p><p className="text-xs text-gray-400">{l}</p></div>
              ))}
            </div>
            <div className="flex gap-2">
              <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl text-sm transition-colors">Follow</button>
              <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-2 rounded-xl text-sm transition-colors">Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
