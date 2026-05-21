export default function Profile1() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-lg mx-auto bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-600" />
        <div className="px-6 pb-6">
          <div className="w-20 h-20 rounded-2xl bg-indigo-400 border-4 border-white -mt-10 mb-4 flex items-center justify-center text-white text-2xl font-bold">AM</div>
          <h2 className="text-xl font-bold text-gray-900">Alex Morgan</h2>
          <p className="text-indigo-600 font-medium text-sm mt-0.5">CEO & Co-Founder</p>
          <p className="text-gray-500 text-sm mt-3 leading-relaxed">Building tools that help developers ship faster. Previously at Stripe and Figma.</p>
          <div className="flex gap-2 mt-5">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl text-sm transition-colors">Follow</button>
            <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-2 rounded-xl text-sm transition-colors">Message</button>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-5 pt-5 border-t border-gray-100 text-center">
            {[["142","Projects"],["1.2k","Followers"],["89","Following"]].map(([v,l]) => (
              <div key={l}><p className="font-bold text-gray-900">{v}</p><p className="text-xs text-gray-400">{l}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
