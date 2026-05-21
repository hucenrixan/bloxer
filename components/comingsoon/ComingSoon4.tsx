export default function ComingSoon4() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="w-12 h-12 bg-gray-900 rounded-2xl mb-8" />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Under Construction</h1>
        <p className="text-gray-500 mb-8">We're working hard to bring you something great. Check back soon or leave your email to get notified.</p>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
          <label className="text-sm font-medium text-gray-700 block mb-2">Get notified when we launch</label>
          <div className="flex gap-2">
            <input className="flex-1 border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="your@email.com" />
            <button className="bg-gray-900 text-white font-semibold px-4 py-2.5 rounded-lg text-sm hover:bg-gray-700 transition-colors">Notify</button>
          </div>
        </div>
        <div className="flex gap-4 text-sm text-gray-400">
          <a href="#" className="hover:text-gray-700 transition-colors">Twitter</a>
          <a href="#" className="hover:text-gray-700 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gray-700 transition-colors">Contact</a>
        </div>
      </div>
    </section>
  );
}
