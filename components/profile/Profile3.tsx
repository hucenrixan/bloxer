export default function Profile3() {
  return (
    <section className="py-20 px-6 bg-gray-900">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-24 h-24 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">AM</div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">Alex Morgan</h2>
            <p className="text-indigo-400 font-medium mt-0.5">CEO & Co-Founder at Acme Inc.</p>
            <p className="text-gray-400 text-sm mt-2">San Francisco, CA · Joined 2021</p>
            <div className="flex gap-3 mt-4">
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2 rounded-xl text-sm transition-colors">Follow</button>
              <button className="border border-gray-700 text-gray-300 hover:border-gray-500 font-semibold px-5 py-2 rounded-xl text-sm transition-colors">Message</button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6">
          <h3 className="text-white font-semibold mb-3">About</h3>
          <p className="text-gray-400 text-sm leading-relaxed">Building tools that help developers ship faster. Previously at Stripe and Figma. Passionate about developer experience, open source, and great coffee.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-800 text-center">
          {[["142","Projects"],["1.2k","Followers"],["89","Following"]].map(([v,l]) => (
            <div key={l}><p className="font-bold text-white text-lg">{v}</p><p className="text-xs text-gray-500 mt-0.5">{l}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
