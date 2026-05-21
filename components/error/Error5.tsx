export default function Error5() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-lg w-full text-center">
        <div className="relative mb-8">
          <p className="text-[120px] font-black text-gray-200 leading-none select-none">404</p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl px-5 py-2">
              <span className="text-gray-900 font-bold text-sm">Page not found</span>
            </div>
          </div>
        </div>
        <p className="text-gray-500 mb-8">The link you followed may be broken, or the page may have been removed.</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors text-sm">← Go back</a>
          <a href="#" className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm">Home</a>
          <a href="#" className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-sm">Support</a>
        </div>
      </div>
    </section>
  );
}
