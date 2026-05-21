export default function Newsletter1() {
  return (
    <section className="py-20 px-6 bg-indigo-600">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Stay in the loop</h2>
        <p className="text-indigo-200 mb-8">Get the latest updates, articles, and resources delivered straight to your inbox every week.</p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input className="flex-1 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Enter your email" />
          <button className="bg-white text-indigo-600 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-colors text-sm flex-shrink-0">Subscribe</button>
        </div>
        <p className="text-indigo-300 text-xs mt-4">No spam. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
