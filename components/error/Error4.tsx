export default function Error4() {
  return (
    <section className="min-h-screen bg-indigo-600 flex items-center justify-center px-6 py-20">
      <div className="text-center max-w-lg">
        <p className="text-9xl font-black text-indigo-500 mb-2 leading-none">500</p>
        <h1 className="text-2xl font-bold text-white mb-3">Something went wrong</h1>
        <p className="text-indigo-200 mb-8">Our servers are having a moment. We're working on it and will be back shortly.</p>
        <div className="flex gap-3 justify-center">
          <a href="#" className="px-5 py-2.5 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition-colors text-sm">Refresh page</a>
          <a href="#" className="px-5 py-2.5 border border-white/40 text-white hover:bg-white/10 rounded-xl transition-colors text-sm">Status page</a>
        </div>
      </div>
    </section>
  );
}
