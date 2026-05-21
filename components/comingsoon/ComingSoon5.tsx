export default function ComingSoon5() {
  const blocks = ["██","████","██████","████","███"];
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-gray-900 rounded-lg" />
          <span className="font-bold text-gray-900">Acme Inc.</span>
        </div>
        <p className="text-sm font-semibold text-indigo-600 mb-3 uppercase tracking-widest">Coming Soon</p>
        <h1 className="text-6xl font-black text-gray-900 leading-tight mb-6">The New Way<br />To Build.</h1>
        <div className="flex gap-2 mb-8">
          {blocks.map((b, i) => (
            <div key={i} className="h-1 bg-indigo-600 rounded-full opacity-20" style={{ width: `${(i + 1) * 16}px` }} />
          ))}
        </div>
        <p className="text-gray-500 mb-8 max-w-sm">We're reimagining how teams work. Join the waitlist to get early access.</p>
        <div className="flex gap-3 max-w-sm">
          <input className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="your@email.com" />
          <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm">Join</button>
        </div>
      </div>
    </section>
  );
}
